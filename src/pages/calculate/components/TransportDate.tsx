import { MoveRight } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { TStepCompProps } from "./TransportAddress";
import { useEffect } from "react";
import { Label, Button, Input, DatePicker } from "@/components/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { request } from "@/lib/request";

type TForm = {
  email: string;
  phoneNumber: string;
  date: string;
};
// success_url: 'http://localhost:5173/services-checkout/11?success=true',
// cancel_url: 'http://localhost:5173/services-checkout/11?canceled=true',

const TransportDate = ({ setActiveStep, finalData, activeStep }: TStepCompProps) => {
  const navigate = useNavigate();
  const { data: baseRateData, isFetchedAfterMount } = useQuery({ queryKey: ["base-rate"], queryFn: () => request<any>({ url: "/base-rate?populate=vehicle_types" }) });
  const { control, handleSubmit, reset } = useForm<TForm>({
    defaultValues: { email: "", phoneNumber: "", date: "" },
  });

  const { mutate: finalMutate, isPending: finalPending } = useMutation({
    mutationFn: (body: any) =>
      request<any>({
        body: body,
        method: "post",
        mainUrl: `${import.meta.env.VITE_SERVER_URL}/enquiries`,
      }),
    onSuccess: (resdata) => {
      navigate(`/services-checkout/${resdata?.id}`);
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      request<any>({
        headers: {
          "x-rapidapi-host": "trueway-matrix.p.rapidapi.com",
          "x-rapidapi-key": "76f9fa2914msh550bf80dbc93c4bp165dc0jsn0f06d7d4fc82",
        },
        mainUrl: `https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix?origins=${finalData?.zipInfo?.source?.latitude},${finalData?.zipInfo?.source.longitude}&destinations=${finalData?.zipInfo?.destination.latitude},${finalData?.zipInfo?.destination.longitude}`,
      }),
    onSuccess: (resdata) => {
      let baseRate = 0.5;
      // if (finalData.transportType === 'Open') baseRate = openRate
      const found = baseRateData?.data?.attributes?.vehicle_types?.find((item: any) => item?.name === finalData?.vehicleInfo?.model?.type);

      if (found) {
        baseRate = found.base_rate;
      }

      const { totalCost, mile } = calculateTransportCost(baseRate, resdata?.distances?.[0]?.[0]);

      let finalCost:number = totalCost;

      if (finalData.transportType === "Enclosed") {
        finalCost = finalCost + baseRateData?.data?.attributes?.enclosed;
      }

      finalMutate({
        ...finalData,
        cost: {
          mile: mile,
          calculatedCost: finalCost?.toFixed(2),
          baseRate: baseRate,
        },
      });
    },
  });

  useEffect(() => {
    reset(finalData.dateInfo);
  }, [activeStep]);

  const onSubmit = (data: TForm) => {
    setActiveStep({ dateInfo: data });
    mutate();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-md mb-0 space-y-4">
      <div className="bg-white border py-3 rounded-md space-y-3">
        <div className="border-b space-y-1.5 pb-4">
          <Label className="px-3 text-foreground">Send a copy of the quote to</Label>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Please enter email",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                message: "Please enter a valid email address!",
              },
            }}
            render={({ field, fieldState }) => {
              return (
                <div className="px-3 relative">
                  <Input className="h-10" {...field} placeholder="Your email" />
                  {fieldState.error && <span className="text-destructive absolute top-full">{fieldState.error.message}</span>}
                </div>
              );
            }}
          />
        </div>

        <div className="border-b space-y-1.5 pb-4">
          <Label className="px-3 text-foreground">First available date</Label>
          <Controller
            control={control}
            name="date"
            rules={{ required: "Please enter date" }}
            render={({ field, fieldState }) => {
              return (
                <div className="px-3 relative">
                  {fieldState.error && <span className="text-destructive absolute top-full">{fieldState.error.message}</span>}
                  <DatePicker
                    date={field.value}
                    setDate={(value) => {
                      field.onChange(value);
                    }}
                  />
                </div>
              );
            }}
          />
        </div>

        <div className="space-y-1.5 pb-1">
          <Label className="px-3 text-foreground">Phone</Label>
          <Controller
            control={control}
            name="phoneNumber"
            // rules={{ required: "Please enter email" }}
            render={({ field }) => {
              return (
                <div className="px-3">
                  <Input className="h-10" {...field} placeholder="Your phone" />
                </div>
              );
            }}
          />
        </div>
      </div>

      <Button disabled={!isFetchedAfterMount} isLoading={isPending || finalPending} type="submit" className="w-full gap-3">
        Calculate cost <MoveRight width={20} strokeWidth={1.5} />
      </Button>
    </form>
  );
};

export default TransportDate;

function calculateTransportCost(baseRate: number, distance: number) {
  // Convert distance from meters to miles
  const metersToMiles = 0.000621371;
  const distanceInMiles = distance * metersToMiles;
  // Calculate the total cost
  const totalCost = baseRate * distanceInMiles;

  return { totalCost: totalCost, mile: distanceInMiles };
}
