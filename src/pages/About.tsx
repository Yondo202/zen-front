import HeaderWithBg from "@/components/miscs/HeaderWithBg";
import { CountCircle } from "../components/sections/HowItWorks";
import ImageAndInfo from "@/components/miscs/ImageAndInfo";
import { useQuery } from "@tanstack/react-query";
import { request } from "@/lib/request";

const About = () => {
  const { data } = useQuery({ queryKey: ["about"], queryFn: () => request<any>({ url: "/about?populate=Header.background&populate=card_info&populate=more_info.image" }) });
  return (
    <div>
      <HeaderWithBg title={data?.data?.attributes?.Header?.title} bg_image={data?.data?.attributes?.Header?.background?.data?.attributes?.url} />

      <div className="main-x-p grid grid-cols-4 bg-primary text-primary-foreground py-20 max-sm:grid-cols-1">
        {data?.data?.attributes?.card_info?.map((item: any, index: number) => {
          return (
            <div key={index} className="space-y-4 border-r px-4 last:border-none pb-5 max-sm:border-none max-sm:px-0">
              <CountCircle bg={index % 2 === 0 ? `bg-[#D6EADF]` : `bg-[#D7E3FC]`} count={index + 1} className="w-12 h-12 text-base max-sm:w-10 max-sm:h-10 max-sm:text-sm" />
              <div className="text-2xl font-medium max-sm:text-xl">{item.title}</div>
              <div className="leading-8 max-sm:text-xs">{item.description}</div>
            </div>
          );
        })}
      </div>

      {data?.data?.attributes?.more_info?.map((item: any, index: number) => {
        return (
          <ImageAndInfo
            className={`bg-primary text-primary-foreground ${index % 2 === 0 ? `` : `flex-row-reverse`} `}
            classNameImg="w-1/2"
            classNameInfo="w-1/2"
            TagTitle={item?.TAG}
            title={item?.title}
            desc={item?.description}
            // button_txt=" Get In Touch "
            img_url={item?.image?.data?.attributes?.url}
          />
        );
      })}
    </div>
  );
};

export default About;
