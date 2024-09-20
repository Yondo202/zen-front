import { RadioGroup, RadioGroupItem, Label, Button } from "@/components/ui";
import { MoveRight } from "lucide-react";

export type TResSkull<T> = { id: number; attributes: T };

export type TResponse<TData> = { data?: TResSkull<TData>[] };

const StarterSection = ({ starterTrigger, data }: { starterTrigger: () => void; data: any }) => {

  return (
    <div className="border rounded-md p-7 space-y-5">
      <div className="border border-l-4 p-4 py-2 text-muted-foreground leading-8 border-muted-foreground">
        Your quote has been e-mailed to you. <br /> Ready to book? Hooray! <span className="text-card-foreground font-semibold">NO PAYMENT REQUIRED</span> to book your shipment.
      </div>

      <div className="flex justify-between items-center pb-5 border-b">
        <div className="flex items-center gap-5">
          <span className="text-muted-foreground text-xs">Service type:</span>
          <span className="text-xs font-semibold">Door to door</span>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-muted-foreground text-xs">Incurance:</span>
          <span className="text-xs font-semibold">Included</span>
        </div>
      </div>

      <RadioGroup
        value={data?.data?.id}
        // onValueChange={(event) => {
        //   const found = data?.data?.find((item) => item.id?.toString() === event);
        //   setValue(found);
        //   setIsError(false);
        // }}
        // className={cn("space-y-3", isError ? `border border-destructive/70` : ``)}
        className={"space-y-3 pt-2 pb-8"}
      >
        <Label className="relative flex items-center gap-6 p-4 max-sm:flex-col max-sm:items-start">
          <RadioGroupItem className="peer" value={data?.data.id} id={data?.data?.id} />
          <div className="absolute top-0 left-0 w-full h-full border border-muted-foreground/20 peer-aria-checked:border-muted-foreground" />
          <div className="pr-6">
            <div className="text-lg mb-2 font-semibold">Regular price</div>
            <div className="text-xs font-light">Once the order is assigned to a carrier, a partial payment will be charged, the balance will be due in cash on delivery.</div>
          </div>
          {/* <div className="text-xl font-semibold">$ {data?.data?.attributes?.cost.calculatedCost}</div> */}
          <div className="text-xl font-semibold">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(data?.data?.attributes?.cost?.calculatedCost ?? 0)}</div>
        </Label>
      </RadioGroup>

      <Button onClick={() => starterTrigger()} size="lg" className="gap-3 w-full h-12">
        Continue To Booking Details <MoveRight strokeWidth={1.5} />
      </Button>

      <div className="text-xs font-light text-muted-foreground">
        Don't know the exact day? That's ok! You can change at any time. You will be still able to review your order.
        <br />
        - OR -
        <br />
        Book with one of our friendly Customer Service Agents!
        <br /> <br />
        833-644-0386
      </div>
    </div>
  );
};

export default StarterSection;
