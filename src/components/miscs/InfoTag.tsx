import { cn } from "@/lib/utils";

const InfoTag = ({ title = "", className = "" }) => {
  return (
    <div
      className={cn(
        "border text-xs border-muted-foreground px-6 py-2 font-medium flex items-center justify-center gap-2 mb-6 w-fit",
        className
      )}
    >
      {title}
    </div>
  );
};

export default InfoTag;
