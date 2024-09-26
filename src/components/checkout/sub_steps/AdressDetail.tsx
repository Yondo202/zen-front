import { Label, Button, Input, RadioGroup, RadioGroupItem } from "@/components/ui";
import { MoveRight } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { useQuery, useMutation } from "@tanstack/react-query";
import { request } from "@/lib/request";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { TResSkull } from "../StarterSection";
import { updateEnquiry } from "./TransportInfo";
// import { type THeadStepItem } from "../CheckoutHome";

// type TAddressType = "Residential" | "Business";

type TAddressDetail = {
  address: string;
  // address_type: TAddressType;
  contact_type: "me" | "someone else";
  full_name: string;
  phone_number: string;
  core_type: string;
  checkout: { id: number }[] | undefined;
};

const initialDetail: TAddressDetail = {
  address: "",
  // address_type: "Residential",
  contact_type: "me",
  full_name: "",
  phone_number: "",
  checkout: undefined,
  core_type: "",
};

// Pickup || Delivery

type TAddressDetailProps = {
  // activeStep?: THeadStepItem;
  toNext: () => void;
  addressId?: string;
  addressType: "Pickup" | "Delivery";
  orderId?: string;
};

const AdressDetail = ({ toNext, addressId, addressType, orderId }: TAddressDetailProps) => {
  const { enqid } = useParams();
  const { control, handleSubmit, reset } = useForm<TAddressDetail>({
    defaultValues: initialDetail,
  });

  const { data, isFetchedAfterMount, isLoading } = useQuery<{
    data: TResSkull<TAddressDetail>;
  }>({
    queryKey: ["checkout-transport", addressType],
    enabled: !!addressId,
    queryFn: () =>
      request({
        mainUrl: `${import.meta.env.VITE_SERVER_URL}/delivery-address-details/${addressId}`,
        method: "get",
      }),
  });

  const { data:orderData } = useQuery<{
    data: TResSkull<{ payment_url:string }>;
  }>({
    queryKey: ["orderdata", orderId],
    enabled: !!orderId,
    queryFn: () =>
      request({
        mainUrl: `${import.meta.env.VITE_SERVER_URL}/orders/${orderId}`,
      }),
  });

  useEffect(() => {
    if (isFetchedAfterMount) {
      reset(data?.data?.attributes);
    }
  }, [isFetchedAfterMount]);

  const { mutate: paymentMutate, isPending: isPendingMutate } = useMutation({
    mutationFn: () =>
      request({
        mainUrl: `${import.meta.env.VITE_SERVER_URL}/orders`,
        filterBody: { data: { enqid: enqid } },
        method: "post",
        offAlert:true
      }),
    onSuccess: (resdata: any) => {
      window.open(resdata?.payment_url, "_self");
    },
  });

  const afterSaveInfo = () => {
    if (addressType === "Delivery") {
      if (orderId) {
        // herev checkout deer une oorchloh hereg garval eniig oorchilono ner
        window.open(orderData?.data?.attributes?.payment_url, "_self");
        return;
      }
      paymentMutate();
      return;
    }
    toNext();
  };

  const { mutate: mutateEnq, isPending: pendingEnq } = updateEnquiry({ toNext: afterSaveInfo, enqid, updateKey: addressType === "Delivery" ? "delivery_address_detail" : "pickup_address_detail" });

  const { mutate, isPending } = useMutation({
    mutationFn: (body: TAddressDetail) =>
      request<{ data: TResSkull<TAddressDetail> }>({
        mainUrl: `${import.meta.env.VITE_SERVER_URL}/delivery-address-details/${!!data ? addressId : ""}`,
        filterBody: { data: body },
        method: !!data ? "put" : "post",
        offAlert:true
      }),
    onSuccess: (resdata) => {
      mutateEnq(resdata?.data);
    },
  });

  const onSubmit = (data: TAddressDetail) => {
    mutate({ ...data, core_type: addressType });
  };

  if (isLoading) {
    return <Skeleton className="w-full h-[65dvh] rounded-md" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Controller
        name="address"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => {
          return (
            <div className="space-y-1">
              <Label isError={!!fieldState.error}>{addressType} address</Label>
              <Input {...field} placeholder="Enter your Street address" />
            </div>
          );
        }}
      />

      <Controller
        name="contact_type"
        control={control}
        render={({ field }) => {
          return (
            <div className="space-y-2">
              <div className="font-medium">Who do we contact about pickup?</div>
              <RadioGroup
                value={field.value}
                onValueChange={(event) => {
                  field.onChange(event);
                }}
                // defaultValue="option-one"
                className="space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="me" id="me" />
                  <Label htmlFor="me">Contact me</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="someone else" id="someone else" />
                  <Label htmlFor="someone else">Contact someone else</Label>
                </div>
              </RadioGroup>
            </div>
          );
        }}
      />

      <Controller
        name="full_name"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState }) => {
          return (
            <div className="space-y-1">
              <Label isError={!!fieldState.error}>Pickup contact's full name</Label>
              <Input {...field} placeholder="Enter pickup contact's full name" />
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
              <Label isError={!!fieldState.error}>Phone number</Label>
              <Input {...field} placeholder="Enter pickup contact's puckup number" />
            </div>
          );
        }}
      />

      <Button isLoading={isPending || isPendingMutate || pendingEnq} size="lg" className="gap-3 w-full h-12">
        {addressType === "Pickup" ? `Delivery Info` : `Book Shipment`}
        <MoveRight strokeWidth={1.5} />
      </Button>
    </form>
  );
};

export default AdressDetail;
