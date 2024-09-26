// import React from 'react'

import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import { RadioGroup, RadioGroupItem, Label, Button, Input } from "@/components/ui";
import { useQuery } from "@tanstack/react-query";
import { request } from "@/lib/request";
import { useState, useEffect } from "react";
import { type TStepItem } from "@/components/checkout/CheckoutHome";
import { Check } from "lucide-react";

type TAddress = {
  Primary_city: string;
  State: string;
  US_Zip_Code: number;
  Longitude: number;
  Latitude: number;
};

type Ttype = "Open" | "Enclosed";

export type TStepCompProps = { finalData: any; setActiveStep: (values?: any) => void; activeStep: TStepItem };

const TransportAddress = ({ finalData, setActiveStep, activeStep }: TStepCompProps) => {
  const [errors, setErros] = useState({
    fromRequire: false,
    toRequire: false,
    fromToSameValue: false,
    sameFromTo: false,
  });

  const [transportValue, setTransportValue] = useState<{
    from?: TAddress;
    to?: TAddress;
  }>({ from: undefined, to: undefined })

  const [transType, setTransType] = useState<Ttype>("Open");

  useEffect(() => {
    if (finalData?.zipInfo?.source?.state) {
      const final = finalData?.zipInfo;
      setTransportValue({
        from: {
          //source
          // Primary_city: finalData?.source.place_name,
          State: final?.source?.state_abbreviation,
          Primary_city: final.source.state, // primary city
          US_Zip_Code: final.source.zipcode,
          Longitude: final.source.longitude,
          Latitude: final.source.latitude,
        },
        to: {
          //source
          // Primary_city: final?.destination.place_name,
          State: final?.destination.state_abbreviation,
          Primary_city: final.destination.state, // primary city
          US_Zip_Code: final.destination.zipcode,
          Longitude: final.destination.longitude,
          Latitude: final.destination.latitude,
        },
      });
    }
    setTransType(finalData?.transportType);
  }, [activeStep, finalData?.zipInfo?.source?.state]);

  useEffect(() => {
    if (transportValue.from) {
      setErros((prev) => ({ ...prev, fromRequire: false, sameFromTo: false }));
    }
    if (transportValue.to) {
      setErros((prev) => ({ ...prev, toRequire: false, sameFromTo: false }));
    }
  }, [transportValue]);

  const onSubmit = () => {
    if (!transportValue.from) {
      setErros((prev) => ({ ...prev, fromRequire: true }));
      return;
    }
    if (!transportValue.to) {
      setErros((prev) => ({ ...prev, toRequire: true }));
      return;
    }
    if (transportValue.to?.US_Zip_Code === transportValue.from?.US_Zip_Code) {
      setErros((prev) => ({ ...prev, sameFromTo: true }));
      return;
    }

    setActiveStep({
      zipInfo: {
        source: {
          place_name: transportValue.from.Primary_city,
          state_abbreviation: transportValue.from.State,
          state: transportValue.from.Primary_city, // primary city
          zipcode: transportValue.from.US_Zip_Code?.toString(),
          longitude: transportValue.from.Longitude?.toString(),
          latitude: transportValue.from.Latitude?.toString(),
        },
        destination: {
          place_name: transportValue.to.Primary_city,
          state_abbreviation: transportValue.to.State,
          state: transportValue.to.Primary_city, // primary city
          zipcode: transportValue.to.US_Zip_Code?.toString(),
          longitude: transportValue.to.Longitude?.toString(),
          latitude: transportValue.to.Latitude?.toString(),
        },
      },
      transportType: transType,
    });
  };

  return (
    <>
      <div className="bg-white border py-3 rounded-md mb-4 space-y-4">
        <FromToAddressInput transportValue={transportValue.from} transportType="from" setTransportValue={setTransportValue} require={errors.fromRequire} />
        <FromToAddressInput transportValue={transportValue.to} transportType="to" setTransportValue={setTransportValue} require={errors.toRequire} />

        {errors.sameFromTo && <span className="text-destructive">The zip codes must differ from each other</span>}
      </div>

      <div className="flex items-center gap-3 mb-5">
        <div>Transport type</div>
        <RadioGroup
          value={transType}
          onValueChange={(event: Ttype) => {
            setTransType(event);
          }}
          // defaultValue="option-one"
          className="flex gap-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Open" id="Open" />
            <Label htmlFor="Open">Open</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Enclosed" id="Enclosed" />
            <Label htmlFor="Enclosed">Enclosed</Label>
          </div>
        </RadioGroup>
      </div>

      <Button onClick={() => onSubmit()} className="w-full gap-3">
        Vehicle Detail <MoveRight width={20} strokeWidth={1.5} />
      </Button>
    </>
  );
};

export default TransportAddress;

type TAdressProps = {
  transportValue?: TAddress;
  transportType: "from" | "to";
  require: boolean;
  setTransportValue: React.Dispatch<
    React.SetStateAction<{
      from?: TAddress | undefined;
      to?: TAddress | undefined;
    }>
  >;
};

const FromToAddressInput = ({ transportValue, transportType, setTransportValue, require }: TAdressProps) => {
  const [searchFrom, setSearchFrom] = useState({ isActive: false, value: "" });

  const { data, isLoading } = useQuery({
    enabled: searchFrom?.value.length > 0,
    queryKey: ["search/states", searchFrom],
    queryFn: () =>
      request<{ results: TAddress[] }>({
        mainUrl: "https://parseapi.back4app.com",
        url: `/classes/US_Zip_Code${!!Number(searchFrom?.value) ? `?where={"US_Zip_Code":${searchFrom?.value}}` : ``}`,
        method: "get",
        queryParams: {
          // where: { Primary_city: { $text: { $search: { $term: searchFrom?.value } } } },
          where: !!Number(searchFrom?.value)
            ? {}
            : {
                Primary_city: {
                  $text: { $search: { $term: searchFrom?.value } },
                },
              },
        },
        headers: {
          "Content-Type": "application/json",
          "x-parse-application-id": "vylXwIkmr5KtrLcZD1P0Brik93uOV7uKTDU1zgqK",
          "x-parse-rest-api-key": "AqFfdzszksRudHIQ14HAgBtUUFCIp55YJPvFIuTT",
        },
      }),
  });

  return (
    <div className={cn("space-y-1.5", transportType === "from" ? `border-b` : ``)}>
      <Label htmlFor="from" className="px-3 text-foreground">
        Transport Car {transportType === "from" ? `FROM` : `TO`}
      </Label>
      <div className="relative">
        <Input
          id="from"
          className={cn("h-11 border-none shadow-none rounded-none px-3 focus-visible:ring-blue-400 text-base", require ? `border-destructive border-dashed` : ``)}
          placeholder={transportValue ? `${transportValue?.Primary_city}, ${transportValue?.State} ${transportValue.US_Zip_Code}` : `Zip or City`}
          // onFocus={() =>
          //   setSearchFrom((prev) => ({ isActive: true, value: prev.value }))
          // }
          // onBlur={() => {
          //   if (transportValue) {
          //     setSearchFrom(() => ({
          //       isActive: false,
          //       value: "",
          //     }));
          //   }
          // }}
          value={!searchFrom.isActive && transportValue ? `${transportValue?.Primary_city}, ${transportValue?.State} ${transportValue.US_Zip_Code}` : searchFrom?.value}
          onChange={(e) => setSearchFrom({ isActive: true, value: e.target.value })}
        />
        {transportValue?.US_Zip_Code && (
          <div className="flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2">
            <Check className="h-3.5 w-3.5 text-primary-green" strokeWidth={3.5} />
          </div>
        )}

        <div className="absolute top-full left-0 w-full bg-card shadow-md h-auto max-h-60 overflow-y-auto z-30">
          {isLoading ? (
            <div className="px-4 py-2 text-base ">Loading...</div>
          ) : (
            data?.results?.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="px-4 py-2 text-base hover:bg-blue-400/10 cursor-pointer flex gap-2"
                  onClick={() => {
                    setTransportValue((prev) => ({
                      ...prev,
                      [transportType]: item,
                    }));
                    setSearchFrom({ isActive: false, value: "" });
                  }}
                >
                  <span>{item.Primary_city},</span>
                  <span>{item.State},</span>
                  <span>{item.US_Zip_Code}</span>
                </div>
              );
            })
          )}
        </div>
      </div>
      {require && <div className="text-destructive px-4 text-xs">Please enter a valid Zip or City</div>}
    </div>
  );
};

// function setActiveStep(_: { zipInfo: { source: TAddress; destination: TAddress; }; transportType: Ttype; }) {
//   throw new Error("Function not implemented.");
// }
