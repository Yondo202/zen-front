import { cn } from "@/lib/utils";
import { TStepItem } from "@/components/checkout/CheckoutHome";

type StepperProps = {
  items: TStepItem[];
  // activeStep?: TStepItem;
  className?: string;
  isInitial?: boolean;
  setActiveStep?: (value: TStepItem) => void;
};
// animate-zero-to-height
const Stepper = ({
  items,
  className,
  isInitial,
  setActiveStep,
}: // activeStep,
StepperProps) => {
  return (
    <div className={cn("bg-card animate-zero-to-height overflow-hidden flex items-center", isInitial ? `` : `px-40`, className)}>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className={cn("h-0 border-b border-dashed border-muted-foreground w-full absolute left-0 top-1/3 z-[10]", isInitial ? `z-0` : ``)} />
          {items?.map((item, index) => {
            return (
              <div key={index} className={cn("flex flex-col space-y-2 max-w-48 last:relative last:z-20", isInitial ? `last:bg-inherit last:z-0` : `last:bg-card`)}>
                <button
                  className={cn(
                    "h-10 w-10 border border-dashed border-muted-foreground rounded-full font-semibold bg-card relative z-20 disabled:cursor-not-allowed",
                    isInitial ? `z-0` : ``,
                    item.status === "finish" ? `bg-primary-green text-primary-foreground` : item.status === "process" ? `bg-secondary text-text shadow-sm border-primary-green text-primary-green border-solid border-2` : `text-muted-foreground`
                  )}
                  disabled={item.status === "wait"}
                  onClick={() => setActiveStep?.(item)}
                >
                  <span className={cn("text-xs", item.status === "process" ? `text-primary-green font-semibold` : ``, item.status === "wait" ? `text-muted-foreground opacity-65` : ``)}>0{index + 1}</span>
                </button>
                <span className={cn("text-xs", item.status === "process" ? `text-primary-green` : ``, item.status === "wait" ? `text-foreground` : ``)}>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
