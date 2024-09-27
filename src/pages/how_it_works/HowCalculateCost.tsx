import HeaderWithBg from "@/components/miscs/HeaderWithBg";
import ImageAndInfo from "@/components/miscs/ImageAndInfo";
import { useQuery } from "@tanstack/react-query";
import { request } from "@/lib/request";

const HowCalculateCost = () => {
  const { data } = useQuery({ queryKey: ["car-shipping"], queryFn: () => request<any>({ url: "/car-shipping-cost?populate=Header.background&populate=cost_actually.image&populate=more_info.cards.image" }) });
  return (
    <div>
      <HeaderWithBg title={data?.data?.attributes?.Header?.title} bg_image={data?.data?.attributes?.Header?.background?.data?.attributes?.url} />

      <ImageAndInfo
        className="h-auto"
        classNameImg="w-1/2"
        classNameInfo="w-1/2 py-10"
        TagTitle={data?.data?.attributes?.cost_actually?.TAG}
        title={data?.data?.attributes?.cost_actually?.title}
        desc={data?.data?.attributes?.cost_actually?.description}
        // button_txt=" Get In Touch "
        img_url={data?.data?.attributes?.cost_actually?.image?.data?.attributes?.url}
      />

      <div>
        <div className="text-5xl font-semibold py-10 pt-20 text-center max-sm:text-xl">Factors Affecting Car Shipping Costs</div>
      </div>

      {data?.data?.attributes?.more_info?.cards?.map((item:any, index:number) => {
        const Odd = index % 2 === 0;
        return (
          <ImageAndInfo
            key={index}
            className={`h-[40dvh] ${Odd ? `flex-row-reverse` : ``}`}
            classNameInfo={`w-1/2 pr-0 px-20 ${Odd ? `bg-[#F1F8F5]` : `bg-[#EDF2FA]`}`}
            classNameImg="w-1/2"
            classNameTitle="text-2xl mb-3"
            title={item.title}
            desc={item.description}
            // button_txt=" Get In Touch "
            img_url={item?.image?.data?.attributes?.url}
          />
        );
      })}

      {/* <BlackSection
        tag_title="How It Works"
        title="Ship Your Car Across Country with Ease!"
        sub_desc="Here's How it Works"
      >
        {items?.map((item, index) => {
          const Odd = index % 2 === 0;
          return (
            <ImageAndInfo
              key={index}
              className={`h-[70dvh] ${Odd ? `flex-row-reverse` : ``}`}
              classNameImg={`w-[48%] ${Odd ? `pr-20` : `pl-20`}`}
              // classNameInfo="w-1/2"
              title={item.title}
              desc={item.desc}
              // button_txt=" Get In Touch "
              img_url={item.url}
            />
          );
        })}
      </BlackSection> */}
    </div>
  );
};

export default HowCalculateCost;
