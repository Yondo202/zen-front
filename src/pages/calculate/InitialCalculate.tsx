// import React from 'react'

import { cn } from "@/lib/utils";
import Stepper from "@/components/ui/Stepper";
import { type TStepItem } from "@/components/checkout/CheckoutHome";
import TransportAddress from "./components/TransportAddress";
import { ArrowLeft } from "lucide-react";
import Vehicle from "./components/Vehicle";
import TransportDate from "./components/TransportDate";
// import Cost from "./components/Cost";
import { useMemo, useState } from "react";

export const StepAssets: TStepItem[] = [
  { title: "Destination", status: "process", localKey: "Destination" },
  { title: "Vehicle", status: "wait", localKey: "Vehicle" },
  { title: "Date", status: "wait", localKey: "Date" },
  // { title: "Cost", status: "wait", localKey: "Cost" },
];

type TInitialCalculate = {
  className?: string;
};

const InitialCalculate = ({ className }: TInitialCalculate) => {
  const [subSteps, setSubSteps] = useState<TStepItem[]>(StepAssets);
  const [finalData, setFinalData] = useState({
    zipInfo: {
      source: {},
      destination: {},
    },
    transportType: "Open",
    vehicleInfo: {
      year: "",
      make: {
        make: "",
      },
      model: {},
    },
    operable: "Yes",
    dateInfo: {
      phoneNumber: "",
      email: "",
      date: "",
    },
    cost: {
      calculatedCost: 0,
      baseRate: 0.8,
    },
  })

  const nextAction = (localType: string, setValues?: any, prevLocalType?: string) => {
    setSubSteps((prev) => {
      return prev.map((item) => {
        if (item.localKey === localType) {
          return { ...item, status: "process" };
        }
        if (item.localKey === prevLocalType) {
          return { ...item, status: "finish" };
        }

        return item;
      });
    });

    setFinalData((prev) => ({ ...prev, ...(setValues ?? {}) }));
  };

  const prevAction = (localKey: string) => {
    const foundInd = StepAssets.findIndex((item) => item.localKey === localKey);
    setSubSteps((prev) => {
      return prev.map((item, index) => {
        if (index === foundInd - 1) {
          return { ...item, status: "process" };
        }
        return item;
      });
    });
  };

  const activeStep = useMemo(() => {
    return subSteps.find((item) => item.status === "process") ?? subSteps[0];
  }, [subSteps]);

  // console.log(finalData, "final")

  return (
    <div className={cn("w-96 absolute top-6 right-12 border border-border rounded-md p-3 bg-[#f5f7fa] shadow-sm text-xs", className)}>
      {activeStep.localKey !== "Destination" && <ArrowLeft size={20} onClick={() => prevAction(activeStep?.localKey)} className="mb-2 cursor-pointer hover:opacity-80" />}

      {activeStep.localKey === "Destination" && <TransportAddress activeStep={activeStep} finalData={finalData} setActiveStep={(values) => nextAction("Vehicle", values, "Destination")} />}
      {activeStep.localKey === "Vehicle" && <Vehicle activeStep={activeStep} finalData={finalData} setActiveStep={(values) => nextAction("Date", values, "Vehicle")} />}
      {activeStep.localKey === "Date" && <TransportDate activeStep={activeStep} finalData={finalData} setActiveStep={(values) => nextAction("Date", values, "Date")} />}
      {/* {activeStep.localKey === "Cost" && <Cost finalData={finalData}  />} */}

      <Stepper
        items={subSteps}
        // setActiveStep={(value: TStepItem) => {
        //   setSubSteps((prev) =>
        //     prev.map((item: TStepItem) => {
        //       return item.localKey === value.localKey ? { ...item, isFocus: true } : { ...item, isFocus:false };
        //     })
        //   );
        // }}
        className="pt-6 bg-inherit"
        isInitial
      />
    </div>
  );
};

export default InitialCalculate;
