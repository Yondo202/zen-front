import { Label, Button, Input, RadioGroup, RadioGroupItem } from "@/components/ui";
import { MoveRight } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { useQuery, useMutation } from "@tanstack/react-query";
import { request, UseReFetch } from "@/lib/request";
import { useEffect } from "react";
import { TResSkull } from "../StarterSection";
import { Skeleton } from "@/components/ui/skeleton";
// import { type THeadStepItem } from "../CheckoutHome";
import { useParams } from "react-router-dom";

type TCRepresent = "Individual" | "Business";
// type TDeliveryAddressDetails = 'individual' | 'business'

type TTransportType = {
  company_name: string;
  user_full_name: string;
  email: string;
  phone_number: string;
  customer_represent: TCRepresent;
  // delivery_address_details: { id: number }[] | undefined;
  // pricing: { id: number }[] | undefined;
  enquiry: { id: number }[] | undefined;
};

const initial: TTransportType = {
  company_name: "",
  user_full_name: "",
  email: "",
  phone_number: "",
  customer_represent: "Individual",
  enquiry: undefined,
  // delivery_address_details: undefined,
};

const validEmail = {
  pattern: {
    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: "Check the email that you entered",
  },
};

export const updateEnquiry = ({ toNext, enqid, updateKey }: { toNext: () => void; enqid?: string; updateKey: string }) => {
  return useMutation({
    mutationFn: (body: any) =>
      request({
        mainUrl: `${import.meta.env.VITE_SERVER_URL}/enquiries/${enqid}`,
        filterBody: { data: { [updateKey]: body.id } },
        method: "put",
        offAlert:true
      }),
    onSuccess: () => {
      UseReFetch({ queryKey: "enquiry", queryId: enqid });
      toNext();
    },
  });
};

const TransportInfo = ({ toNext, transportId }: { toNext: () => void; transportId?: string }) => {
  //activeStep?: THeadStepItem;
  const { enqid } = useParams();
  const { control, handleSubmit, reset } = useForm<TTransportType>({
    defaultValues: initial,
  });

  const { data, isFetchedAfterMount, isLoading } = useQuery<{
    data: TResSkull<TTransportType>;
  }>({
    queryKey: ["checkout-transport"],
    enabled: !!transportId,
    queryFn: () =>
      request({
        mainUrl: `${import.meta.env.VITE_SERVER_URL}/checkouts/${transportId}`,
        method: "get",
      }),
  });

  useEffect(() => {
    if (isFetchedAfterMount) {
      reset(data?.data?.attributes);
    }
  }, [isFetchedAfterMount]);

  const { mutate: mutateEnq, isPending: pendingEnq } = updateEnquiry({ toNext, enqid, updateKey: "checkout" });

  const { mutate, isPending } = useMutation({
    mutationFn: (body: TTransportType) =>
      request<{ data: TResSkull<TTransportType> }>({
        mainUrl: `${import.meta.env.VITE_SERVER_URL}/checkouts/${!!data ? transportId : ""}`,
        filterBody: { data: body },
        method: !!data ? "put" : "post",
        offAlert:true
      }),
    onSuccess: (resdata) => {
      // localStorage.setItem(localeKey, JSON.stringify(resdata.data));
      mutateEnq(resdata.data);
      // toNext();
    },
  });

  const onSubmit = (data: TTransportType) => {
    mutate(data);
  };

  if (isLoading) {
    return <Skeleton className="w-full h-[65dvh] rounded-md" />;
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Controller
        name="customer_represent"
        control={control}
        render={({ field }) => {
          return (
            <div className="space-y-2">
              <div className="font-medium">You are</div>
              <RadioGroup
                value={field.value}
                onValueChange={(event) => {
                  field.onChange(event);
                }}
                defaultValue="option-one"
                className="space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Individual" id="Individual" />
                  <Label htmlFor="Individual">An individual</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Business" id="Business" />
                  <Label htmlFor="Business">Representing a business</Label>
                </div>
              </RadioGroup>
            </div>
          );
        }}
      />
      <Controller
        name="company_name"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => {
          return (
            <div className="space-y-1">
              <Label isError={!!fieldState.error} className="mb-20">
                Company name
              </Label>
              <Input {...field} placeholder="Enter your company name" />
            </div>
          );
        }}
      />

      <Controller
        name="user_full_name"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => {
          return (
            <div className="space-y-1">
              <Label isError={!!fieldState.error} className="mb-20">
                Your full name
              </Label>
              <Input {...field} placeholder="Enter your full name" />
            </div>
          );
        }}
      />

      <Controller
        name="email"
        control={control}
        rules={{ required: true, ...validEmail }}
        render={({ field, fieldState }) => {
          return (
            <div className="space-y-1">
              <Label isError={!!fieldState.error} className="mb-20">
                Email
              </Label>
              <Input {...field} placeholder="Enter your email" />

              {fieldState.error ? <div className="text-end text-destructive">{fieldState.error.message}</div> : null}
            </div>
          );
        }}
      />

      <Controller
        name="phone_number"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => {
          return (
            <div className="space-y-1 pb-4">
              <Label isError={!!fieldState.error} className="mb-20">
                Phone number
              </Label>
              <Input {...field} placeholder="Enter your phone number" />
            </div>
          );
        }}
      />

      <Button isLoading={isPending || pendingEnq} size="lg" className="gap-3 w-full h-12">
        Pickup Info
        <MoveRight strokeWidth={1.5} />
      </Button>
    </form>
  );
};

export default TransportInfo;
