import HeaderWithBg from "@/components/miscs/HeaderWithBg";
import BlackSection from "@/components/miscs/BlackSection";
import ImageAndInfo from "@/components/miscs/ImageAndInfo";
import { History, HandCoins, Truck, PackageCheck } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { request } from "@/lib/request";

const ServicesHome = () => {
  const { data } = useQuery({ queryKey: ["services"], queryFn: () => request<any>({ url: "/service?populate=Header.background&populate=card_info" }) });

  const { data:homeData } = useQuery({
    retry: false,
    queryKey: ["home-service-data"],
    queryFn: () =>
      request<any>({
        url: `/config?populate=our_services.cards.image`,
      }),
  });

  const ourService = homeData?.data?.attributes?.our_services

  return (
    <div>
      <HeaderWithBg title={data?.data?.attributes?.Header?.title} bg_image={data?.data?.attributes?.Header?.background?.data?.attributes?.url} />
      <div className="main-x-p my-20">
        {/* <div className="text-5xl font-semibold py-10 max-sm:text-xl">
          Factors Affecting Car Shipping Costs
        </div> */}
        <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
          {data?.data?.attributes?.card_info?.map((item:any, index:number) => {
            return (
              <div key={index} className="p-4 border border-muted-foreground/30 rounded-md space-y-3">
                {item.icon}
                {index === 0 &&<PackageCheck size={44} strokeWidth={1} />}
                {index === 1 &&<History size={44} strokeWidth={1} />}
                {index === 2 &&<HandCoins size={44} strokeWidth={1} />}
                {index === 3 &&<Truck size={44} strokeWidth={1} />}
                <div className="text-2xl pt-2 font-semibold max-sm:text-base">{item.title}</div>
                <div className="text-foreground/60 leading-8">{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>

      <BlackSection
        tag_title={ourService?.TAG}
        title={ourService?.title}
        sub_desc={ourService?.sub_title}
      >
        {ourService?.cards?.map((item:any, index:number) => {
          const Odd = index % 2 === 0;
          return (
            <ImageAndInfo
              key={index}
              className={`h-[70dvh] ${Odd ? `flex-row-reverse` : ``}`}
              classNameImg={`w-[53%] p-0`}
              classNameInfo="w-[47%]"
              title={item.title}
              desc={item.description}
              // button_txt=" Get In Touch "
              img_url={item?.image?.data?.attributes?.url}
            />
          );
        })}
      </BlackSection>
    </div>
  );
};

export default ServicesHome;
