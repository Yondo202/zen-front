import { MoveUpRight } from "lucide-react";
import InfoTag from "@/components/miscs/InfoTag";
import { cn } from "@/lib/utils";

type TImageAndInfo = {
  TagTitle?: string;
  image_url?: string;
  className?: string;
  classNameImg?: string;
  classNameInfo?: string;
  classNameTitle?: string;
  title?: string;
  desc?: string;
  button_txt?: string;
  button_link?: string;
  img_url?: string;
};

const ImageAndInfo = (props: TImageAndInfo) => {
  return (
    <div className={cn("flex h-[77dvh] max-sm:flex-col max-sm:pt-5", props.className, "max-sm:h-auto max-sm:mb-8")}>
      <div
        className={cn("main-x-p px-5 flex items-center w-full pr-44 max-sm:pr-3 max-sm:flex-rows", props.classNameInfo, 'max-sm:w-full max-sm:px-3')}
      >
        <div className="space-y-4">
          {props.TagTitle && <InfoTag title={props.TagTitle} />}

          <div className={cn("text-5xl font-semibold mb-7 leading-snug max-sm:text-xl", props.classNameTitle)}>
            {props.title}
          </div>
          <div className="text-lg font-light leading-8 mb-4 max-sm:text-sm">{props.desc}</div>

          {props.button_txt && (
            <div className="border border-muted-foreground w-44 p-5 py-3 font-medium flex items-center justify-center gap-2">
              {props.button_txt} <MoveUpRight size={17} strokeWidth={1.5} />
            </div>
          )}
        </div>
      </div>

      <div
        className={cn("bg-cover bg-no-repeat bg-center w-[42%] max-sm:w-full", props.classNameImg)}
        style={{
          backgroundImage: `url(${props.img_url})`,
        }}
      >
        {/* <img className="w-full h-full object-contain" alt="mg" src= /> */}
      </div>
    </div>
  );
};

export default ImageAndInfo;
