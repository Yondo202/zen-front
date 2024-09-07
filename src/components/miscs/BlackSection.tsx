import { ReactNode } from "react";
import InfoTag from "@/components/miscs/InfoTag";

type TBlackSection = {
  children: ReactNode;
  title?: string;
  sub_desc?: string;
  tag_title?: string;
};

const BlackSection = (props: TBlackSection) => {
  return (
    <div className="bg-primary text-primary-foreground pb-10">
      <div className="text-center flex flex-col items-center py-14 pb-6">
        <InfoTag title={props.tag_title} />
        <div className="text-5xl font-semibold mb-6">
          {props.title}
          {props.sub_desc && (
            <div className="mt-3 text-muted-foreground">{props.sub_desc}</div>
          )}
        </div>
      </div>

      {props.children}

      <div className="text-center pt-16 pb-6 space-y-3 flex flex-col items-center justify-center">
        <span className="text-primary-foreground/70 text-xs">
          Ready to experience a stress-free car shipping journey?
        </span>
        <div className="px-20 py-3 text-base font-medium bg-[#ABC4FF] w-fit text-foreground">
          Get Your Free Quota Today{" "}
        </div>
      </div>
    </div>
  );
};

export default BlackSection;
