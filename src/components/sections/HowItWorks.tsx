import BlackSection from "../miscs/BlackSection";
import { cn } from "@/lib/utils";

export const CountCircle = ({ bg = "", count = 0, className = "" }) => {
  return (
    <div
      className={cn(
        "border-dotted border-[3px] border-primary w-20 h-20 rounded-full flex items-center justify-center text-foreground text-2xl font-semibold",
        bg,
        className
      )}
    >
      0{count}
    </div>
  );
};

const HowItWorks = ({ data }: { data: any }) => {
  return (
    <BlackSection
      tag_title="How It Works"
      title={data?.title}
      sub_desc={data?.sub_title}
    >
      <div className="main-x-p grid grid-cols-2 gap-x-32 gap-y-4 max-sm:grid-cols-1">
        {data?.cards?.map((item:any, index:number) => {
          return (
            <div
              key={index}
              className={cn("space-y-6", index % 2 === 0 ? `` : `pt-20  max-sm:pt-2`)}
            >
              <CountCircle bg={index % 2 === 0?`bg-[#D6EADF]`:`bg-[#D7E3FC]`} count={index + 1} />
              <div className="text-3xl font-semibold max-sm:text-xl">{item.title}</div>
              <div className="leading-8">{item.description}</div>
            </div>
          );
        })}
      </div>
    </BlackSection>
  );
};

export default HowItWorks;
