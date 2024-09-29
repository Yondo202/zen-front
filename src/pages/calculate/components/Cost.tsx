import { useQuery } from "@tanstack/react-query";
import { request } from "@/lib/request";
import { TStepCompProps } from "./TransportAddress";
// import React from 'react'
import { useEffect } from "react";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui";

const Cost = ({ finalData }: TStepCompProps["finalData"]) => {
  //{ setActiveStep, finalData, activeStep }

  // const { source, destination } = collector.zipInfo;
  // const url = `
  //           https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix?origins=${source.latitude},${source.longitude}&destinations=${destination.latitude},${destination.longitude}
  //           `;
  // const result = await fetch(url, {
  //   headers: {
  //     "x-rapidapi-host": "trueway-matrix.p.rapidapi.com",
  //     "x-rapidapi-key": "76f9fa2914msh550bf80dbc93c4bp165dc0jsn0f06d7d4fc82",
  //   },
  // });

  const { data, isFetchedAfterMount } = useQuery({
    queryKey: ["matrix"],
    queryFn: () =>
      request<any>({
        headers: {
          "x-rapidapi-host": "trueway-matrix.p.rapidapi.com",
          "x-rapidapi-key": "76f9fa2914msh550bf80dbc93c4bp165dc0jsn0f06d7d4fc82",
        },
        mainUrl: `https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix?origins=${finalData?.zipInfo?.source?.latitude},${finalData?.zipInfo?.source.longitude}&destinations=${finalData?.zipInfo?.destination.latitude},${finalData?.zipInfo?.destination.longitude}`,
      }),
  });

  useEffect(() => {
    if (isFetchedAfterMount) {
      let baseRate = 0.41977; // nemelteer olon zuilees hamaarna
      // if (finalData.transportType === 'Open') baseRate = openRate
      // if (finalData.transportType === 'Enclosed') baseRate = enclosedRate
      const calculatedCost = calculateTransportCost(baseRate, data?.distances?.[0]?.[0]);

      console.log(calculatedCost, "calculatedCost-------->");


      // cost: {
      //   calculatedCost: 0,
      //   baseRate: 0.8,
      // },
    }
  }, [isFetchedAfterMount]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-card rounded-sm p-2 shadow-sm">
          <div className="font-semibold mb-1">From</div>
          <div>
            <span className="text-muted-foreground">Place:</span> <span>{finalData?.zipInfo?.source?.place_name}</span>
          </div>
          <div>
            <span className="text-muted-foreground">State:</span> <span>{finalData?.zipInfo?.source?.state_abbreviation}</span>
          </div>
        </div>

        <div className="bg-card rounded-sm p-2 shadow-sm">
          <div className="font-semibold mb-1">To</div>
          <div>
            <span className="text-muted-foreground">Place:</span> <span>{finalData?.zipInfo?.destination?.place_name}</span>
          </div>
          <div>
            <span className="text-muted-foreground">State:</span> <span>{finalData?.zipInfo?.destination?.state_abbreviation}</span>
          </div>
        </div>

        <div className="bg-card rounded-sm p-2 shadow-sm">
          <div className="font-semibold mb-1">Model</div>
          <div>
            <span className="text-muted-foreground">Year:</span> <span>{finalData?.vehicleInfo.year}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Make:</span> <span>{finalData?.vehicleInfo?.make?.make}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Model:</span> <span>{finalData?.vehicleInfo.model?.model}</span>
          </div>
        </div>
        <div className="bg-card rounded-sm p-2 shadow-sm">
          <div className="font-semibold mb-1">Pre calculated cost</div>
          <div>
            <span className="text-muted-foreground">Amount:</span> <span>$ 100</span>
          </div>
          <div>
            <span className="text-muted-foreground">Base Rate:</span> <span>0.0064</span>
          </div>
        </div>
      </div>

      <Button className="w-full gap-3 mt-6">
        Finish Booking <MoveRight width={20} strokeWidth={1.5} />
      </Button>
    </>
  );
};

export default Cost;

function calculateTransportCost(baseRate: number, distance: number) {
  // Convert distance from meters to miles
  const metersToMiles = 0.000621371;
  const distanceInMiles = distance * metersToMiles;
  console.log(distanceInMiles, "---distanceInMiles")

  // Calculate the total cost
  const totalCost = baseRate * distanceInMiles;

  return totalCost;
}
