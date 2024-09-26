import { MoveUpRight } from "lucide-react";
import Services from "../components/sections/Services";
import TrastedPartner from "../components/sections/TrastedPartner";
import HowItWorks from "../components/sections/HowItWorks";
import InitialCalculate from "./calculate/InitialCalculate";
import { useQuery } from "@tanstack/react-query";
import { request } from "@/lib/request";

function Index() {
  const { data } = useQuery({
    retry: false,
    queryKey: ["home-data"],
    queryFn: () =>
      request<any>({
        url: `/config?populate[0]=our_services&populate[1]=our_services.cards&populate[2]=our_services.cards.image&populate[3]=how_it_works&populate[4]=how_it_works.cards&populate=trusted_partner&populate[5]=FeedBack&populate[6]=FeedBack.image&populate[7]=Home&populate[8]=Home.image`,
      }),
  });

  // &populate[0]=how_it_works&populate[1]=how_it_works.cards
  return (
    <>
      <div className="h-[87dvh] relative bg-gradient-to-t from-[#dfe8fd] to-[#FFF] max-sm:h-[95dvh]">
        <img
          className="scale-x-[-1] absolute -top-52 left-1/2 -translate-x-1/2 w-4/5"
          src={data?.data?.attributes?.Home?.image?.data?.attributes?.url}
        />
        <div className="absolute top-14 left-10 w-[440px] max-sm:w-full max-sm:left-0 max-sm:top-3 max-sm:px-3">
          <div className="text-5xl font-semibold mb-7 leading-snug max-sm:text-4xl">
            {data?.data?.attributes?.Home?.Title} <span className="grad-text">{data?.data?.attributes?.Home?.sub_title}</span>
          </div>
          <div className="text-lg font-light leading-10 mb-4">{data?.data?.attributes?.Home?.description}</div>
          {/* <div className="border border-muted-foreground w-44 p-5 py-3 font-medium flex items-center justify-center gap-2">
            Book A Quota <MoveUpRight size={17} strokeWidth={1.5} />
          </div> */}
        </div>

        <InitialCalculate className="max-sm:top-[45dvh] max-sm:left-0 max-sm:w-full " />
      </div>
      <Services />
      <HowItWorks />
      <TrastedPartner />
    </>
  );
}

export default Index;
