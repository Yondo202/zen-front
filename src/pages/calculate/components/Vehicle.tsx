/* tslint:disable */
// @ts-nocheck
import { useQuery } from "@tanstack/react-query";
import { request } from "@/lib/request";
import { MoveRight } from "lucide-react";
import { Label, Button, Input, RadioGroup, RadioGroupItem } from "@/components/ui";
import { type TStepItem } from "@/components/checkout/CheckoutHome";
import { cn } from "@/lib/utils";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { TStepCompProps } from "./TransportAddress";
import { useEffect } from "react";

// interface GroupBase<Option> {
//   readonly options: readonly Option[];
//   readonly label?: string;
// }

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ] as const;

const Vehicle = ({ setActiveStep, finalData, activeStep }: TStepCompProps) => {
  const { control, handleSubmit, watch, setValue, reset } = useForm({
    defaultValues: { year: "", make: "", model: "", operable: "Yes" },
  });

  const { data, isLoading } = useQuery({
    enabled: !!watch("year")?.value,
    queryKey: ["search/makes", [watch("year")]],
    queryFn: () =>
      request<{ results: TAddress[] }>({
        mainUrl: `https://done.ship.cars/makes?year=${watch("year")?.value}`,
      }),
  });

  const { data: modelData, isLoading: modelLoading } = useQuery({
    enabled: !!watch("make")?.make,
    queryKey: ["search/models", [watch("make")]],
    queryFn: () =>
      request<{ results: TAddress[] }>({
        mainUrl: `https://done.ship.cars/models?year=${watch("year")?.value}&make=${watch("make")?.make}`,
      }),
  });

  useEffect(() => {
    if (finalData?.vehicleInfo?.year) {
      const final = finalData?.vehicleInfo;
      reset({...final, year: {  value: final.year, label: `${final?.year}` }, operable: finalData.operable });
    }
  }, [activeStep]);

  const onSubmit = (data) => {
    setActiveStep({ vehicleInfo: { ...data, year: data?.year?.value }, operable: data?.operable });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-md mb-0 space-y-4">
      <div className="bg-white border py-3 rounded-md space-y-4">
        <div className="border-b space-y-1.5 pb-3">
          <Label className="px-3 text-foreground">Vehicle year</Label>
          <Controller
            control={control}
            name="year"
            rules={{ required: "Please enter vehicle year" }}
            render={({ field }) => {
              return (
                <div className="px-3">
                  <Select
                    ref={field.ref}
                    //   menuPortalTarget={document.body}
                    //   styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                    value={field.value}
                    onChange={(value) => {
                      field.onChange(value);
                      setValue("make", "");
                      setValue("model", "");
                    }}
                    options={generateYears()}
                  />
                </div>
              );
            }}
          />
        </div>

        <div className="border-b space-y-1.5 pb-3 mb-3">
          <Label className="px-3 text-foreground">Vehicle make</Label>
          <Controller
            control={control}
            name="make"
            rules={{ required: "Please enter Vehicle make" }}
            render={({ field }) => {
              return (
                <div className="px-3">
                  <Select
                    isDisabled={!watch("year")?.value}
                    ref={field.ref}
                    value={field.value}
                    isLoading={isLoading}
                    onChange={(value) => {
                      field.onChange(value);
                      setValue("model", "");
                    }}
                    options={data ?? []}
                    getOptionLabel={(option) => option["make"]}
                    getOptionValue={(option) => option["make"]}
                  />
                </div>
              );
            }}
          />
        </div>

        <div className="space-y-1.5 pb-3 mb-3">
          <Label className="px-3 text-foreground">Vehicle model</Label>
          <Controller
            control={control}
            name="model"
            rules={{ required: "Please enter Vehicle make" }}
            render={({ field }) => {
              return (
                <div className="px-3">
                  <Select isDisabled={!watch("make")?.make} ref={field.ref} value={field.value} isLoading={modelLoading} onChange={field.onChange} options={modelData ?? []} getOptionLabel={(option) => option["model"]} getOptionValue={(option) => option["model"]} />
                </div>
              );
            }}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 mb-5">
        <div>Is it operable?</div>
        <RadioGroup
          value={watch("operable")}
          onValueChange={(event: string) => {
            setValue("operable", event);
          }}
          className="flex gap-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Yes" id="Yes" />
            <Label htmlFor="Yes">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="No" id="No" />
            <Label htmlFor="No">No</Label>
          </div>
        </RadioGroup>
      </div>

      <Button type="submit" className="w-full gap-3">
        Confirmation details <MoveRight width={20} strokeWidth={1.5} />
      </Button>
    </form>
  );
};

export default Vehicle;

function generateYears() {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = currentYear + 1; year >= 1899; year--) {
    years.push({ value: year, label: year.toString() });
  }

  return years;
}
