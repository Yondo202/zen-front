import HeaderWithBg from "@/components/miscs/HeaderWithBg";
import ImageAndInfo from "@/components/miscs/ImageAndInfo";
import BlackSection from "@/components/miscs/BlackSection";
import { useQuery } from "@tanstack/react-query";
import { request } from "@/lib/request";

const HowToShip = () => {
  const { data } = useQuery({ queryKey: ["how-to-ship"], queryFn: () => request<any>({ url: "/how-to-ship-a-car?populate=Header.background&populate=how_it_works.cards.image&populate=easy_steps_to_get_going.image" }) });

  return (
    <div>
      <HeaderWithBg title={data?.data?.attributes?.Header?.title} bg_image={data?.data?.attributes?.Header?.background?.data?.attributes?.url} />

      <ImageAndInfo
        classNameImg="w-3/5"
        TagTitle={data?.data?.attributes?.easy_steps_to_get_going?.TAG}
        title={data?.data?.attributes?.easy_steps_to_get_going?.title}
        desc={data?.data?.attributes?.easy_steps_to_get_going?.description}
        // button_txt=" Get In Touch "
        img_url={data?.data?.attributes?.easy_steps_to_get_going?.image?.data?.attributes?.url}
      />

      <BlackSection tag_title="How It Works" title={data?.data?.attributes?.how_it_works?.title} sub_desc={data?.data?.attributes?.how_it_works?.sub_title}>
        {data?.data?.attributes?.how_it_works?.cards?.map((item:any, index:number) => {
          const Odd = index % 2 === 0;
          return (
            <ImageAndInfo
              key={index}
              className={`h-[70dvh] ${Odd ? `flex-row-reverse` : ``}`}
              classNameImg={`w-[48%] ${Odd ? `pr-20` : `pl-20`}`}
              // classNameInfo="w-1/2"
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

export default HowToShip;
