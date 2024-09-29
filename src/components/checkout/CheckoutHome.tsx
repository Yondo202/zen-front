import DetailCard from "./DetailCard";
import StarterSection from "./StarterSection";
import SubStepSection from "./sub_steps";
import Stepper from "../ui/Stepper";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { request } from "@/lib/request";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import ThankYou from "./sub_steps/ThankYou";
import { Button } from "../ui/button";

export type TStepItem = {
  // title: "Transport" | "Pickup" | "Delivery" | "Book shipment" | "Thank you";
  title: string;
  status: "wait" | "process" | "finish"; // | 'error'
  localKey: string;
  isFocus?: boolean;
  active?: boolean;
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
  const navigate = useNavigate();
  const [search] = useSearchParams({}); //setSearch
  const searchAsObject = Object.fromEntries(new URLSearchParams(search));
  const { enqid } = useParams();

  const [mainStep, setMainStep] = useState<TInitial>("starter");
  const [subSteps, setSubSteps] = useState(StepAssets);

  const { data, isLoading, isError, isFetchedAfterMount } = useQuery({
    retry: false,
    queryKey: ["enquiry", enqid],
    queryFn: () =>
      request<any>({
        mainUrl: `${import.meta.env.VITE_SERVER_URL}/enquiries/${enqid}/?populate=checkout&populate=delivery_address_detail&populate=pickup_address_detail&populate=order&populate[0]=vehicleInfo.model&populate[1]=zipInfo.source&populate[2]=zipInfo.destination&populate[3]=dateInfo&populate[4]=cost`, // &populate[0]=zipInfo.destination
      }),
  });

  const starterTrigger = (type: TInitial) => {
    setMainStep(type);
  };

  useEffect(() => {
    if (data?.data?.attributes?.checkout?.data?.id) {
      setMainStep("sub_steps");
    }

    if (searchAsObject?.success || data?.data?.attributes?.order?.data?.attributes?.payment_status === "paid") {
      const newItems = StepAssets.map((item: THeadStepItem) => {
        if (item.localKey === "thank-you") {
          return { ...item, status: "process" as THeadStepItem["status"] };
        }

        return { ...item, status: "finish" as THeadStepItem["status"] };
      });

      setSubSteps(newItems);
      return;
    }

    setSubSteps(StepAssets);
  }, [isFetchedAfterMount]);

  if (isError) {
    return (
      <div className="flex flex-col gap-6 py-20 items-center">
        <h1 className="text-center py-10 text-destructive">Something went wrong, Go back and Try again, Please</h1>
        <Button onClick={() => navigate("/")} className="w-32">
          Home
        </Button>
      </div>
    );
  }

  // console.log(data, "-----> enq Data ---------->");
  // console.log(data?.data?.attributes?.order?.data?.attributes?.payment_status === "paid")

  if (subSteps.find((item) => item.status === "process")?.localKey === "thank-you") {
    // return <ThankYou orderId={data?.data?.attributes?.order?.data?.attributes?.payment_status === "paid" ? undefined : data?.data?.attributes?.order?.data?.id} />;
    return <ThankYou enqData={{ ...data?.data?.attributes, id: data?.data?.id }} orderId={data?.data?.attributes?.order?.data?.id} />;
  }

  return (
    <div className={cn("bg-secondary pb-16 pt-0 w-full text-sm grid grid-rows-[5.3rem_1fr] transition-all duration-150", mainStep === "sub_steps" ? ` gap-6 grid-rows-[5.3rem_1fr]` : `gap-0 grid-rows-[2.3rem_1fr]`)}>
      {mainStep === "sub_steps" ? <Stepper items={subSteps} /> : <div />}
      <div className="main-x-p px-40 h-max grid grid-cols-2 gap-10 pb-1 max-sm:grid-cols-1 max-sm:px-3">
        {isLoading ? (
          <>
            <Skeleton className="w-full h-[80dvh] rounded-md" />
            <Skeleton className="w-full h-[80dvh] rounded-md" />
          </>
        ) : (
          <>
            {mainStep === "sub_steps" ? (
              <div className="pr-32 max-sm:pr-0">
                <SubStepSection enqdata={data} items={subSteps} setSubSteps={setSubSteps} starterTrigger={() => starterTrigger("starter")} />
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
