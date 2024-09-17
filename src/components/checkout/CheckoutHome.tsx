import DetailCard from "./DetailCard";
import StarterSection from "./StarterSection";
import SubStepSection from "./sub_steps";
import Stepper from "../ui/Stepper";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { request } from "@/lib/request";
import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

export type TStepItem = {
  // title: "Transport" | "Pickup" | "Delivery" | "Book shipment" | "Thank you";
  title: string;
  status: "wait" | "process" | "finish"; // | 'error'
  localKey: string;
  isFocus?: boolean;
};

export type THeadStepItem = {
  title: "Transport" | "Pickup" | "Delivery" | "Book shipment" | "Thank you";
} & TStepItem;

export const StepAssets: THeadStepItem[] = [
  { title: "Transport", status: "process", localKey: "checkout-transport" },
  { title: "Pickup", status: "wait", localKey: "pickup" },
  { title: "Delivery", status: "wait", localKey: "delivery" },
  { title: "Book shipment", status: "wait", localKey: "book-shipment" },
  { title: "Thank you", status: "wait", localKey: "thank-you" },
];

type TInitial = "starter" | "sub_steps";

const CheckoutHome = () => {
  const { enqid } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["enquiry", enqid],
    queryFn: () =>
      request<any>({
        mainUrl: `${import.meta.env.VITE_SERVER_URL}/enquiries/${enqid}/?[populate]=*`,
      }),
  });

  const [mainStep, setMainStep] = useState<TInitial>("starter");
  const [subSteps, setSubSteps] = useState(StepAssets);

  const starterTrigger = (type: TInitial) => {
    setMainStep(type);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("starter") ?? "{}")?.id) {
      setMainStep("sub_steps");
    }
    const localeItems = JSON.parse(localStorage.getItem("step-assets") ?? "[]");
    if (localeItems.length > 0) {
      setSubSteps(localeItems);
      return;
    }
  }, []);
  // className="bg-secondary px-24 pb-12 pt-2 text-sm"
  return (
    <div className={cn("bg-secondary pb-16 pt-0 w-full text-sm grid grid-rows-[5.3rem_1fr] transition-all duration-150", mainStep === "sub_steps" ? ` gap-6 grid-rows-[5.3rem_1fr]` : `gap-0 grid-rows-[2.3rem_1fr]`)}>
      {mainStep === "sub_steps" ? <Stepper items={subSteps} />  : <div />}
      <div className="main-x-p px-40 h-max grid grid-cols-2 gap-10 pb-1">
        {isLoading ? (
          <>
            <Skeleton className="w-full h-[80dvh] rounded-md" />
            <Skeleton className="w-full h-[80dvh] rounded-md" />
          </>
        ) : (
          <>
            {mainStep === "sub_steps" ? (
              <div className="pr-32">
                <SubStepSection items={subSteps} setSubSteps={setSubSteps} starterTrigger={() => starterTrigger("starter")} />
              </div>
            ) : (
              <StarterSection data={data} starterTrigger={() => starterTrigger("sub_steps")} />
            )}
            <DetailCard data={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutHome;
