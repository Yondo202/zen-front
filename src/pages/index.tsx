import Services from "../components/sections/Services";
import TrastedPartner from "../components/sections/TrastedPartner";
import HowItWorks from "../components/sections/HowItWorks";
import InitialCalculate from "./calculate/InitialCalculate";
import { useQuery } from "@tanstack/react-query";
import { request } from "@/lib/request";
import { Skeleton } from "@/components/ui/skeleton";

function Index() {
  const { data, isLoading } = useQuery({
    retry: false,
    queryKey: ["home-data"],
    queryFn: () =>
      request<any>({
        url: `/config?populate=our_services.cards.image&populate=how_it_works.cards&populate=trusted_partner.image&populate=Home.image`,
      }),
  });

  // &populate[0]=how_it_works&populate[1]=how_it_works.cards
  return (
    <>
      <div className="h-[87dvh] relative bg-gradient-to-t from-[#dfe8fd] to-[#FFF] max-sm:h-[95dvh]">
        <img className="absolute -top-52 left-1/2 -translate-x-1/2 w-4/5" src={data?.data?.attributes?.Home?.image?.data?.attributes?.url} /> {/* scale-x-[-1]*/}
        <div className="absolute top-14 left-10 w-[440px] max-sm:w-full max-sm:left-0 max-sm:top-3 max-sm:px-3">
          {isLoading ? (
            <>
              <Skeleton className="h-16 mb-5 w-5/6" />
              <Skeleton className="h-16 mb-5 w-4/6" />
              <Skeleton className="h-36" />
            </>
          ) : (
            <>
              <div className="text-5xl font-semibold mb-7 leading-snug max-sm:text-4xl">
                {" "}
                {data?.data?.attributes?.Home?.Title} <span className="grad-text">{data?.data?.attributes?.Home?.sub_title}</span>
              </div>
              <div className="text-lg font-light leading-10 mb-4">{data?.data?.attributes?.Home?.description}</div>
            </>
          )}
          {/* <div className="border border-muted-foreground w-44 p-5 py-3 font-medium flex items-center justify-center gap-2">
            Book A Quota <MoveUpRight size={17} strokeWidth={1.5} />
          </div> */}
        </div>
        <InitialCalculate className="max-sm:top-[45dvh] max-sm:left-0 max-sm:w-full " />
      </div>
      <Services data={data?.data?.attributes?.our_services} />
      <HowItWorks data={data?.data?.attributes?.how_it_works} />
      <TrastedPartner data={data?.data?.attributes?.trusted_partner} />
    </>
  );
}

export default Index;
