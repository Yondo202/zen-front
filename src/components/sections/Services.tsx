import { ArrowUpRight } from "lucide-react";
import InfoTag from "@/components/miscs/InfoTag";

const Services = ({ data }: { data: any }) => {
  return (
    <>
      <div className="text-center flex flex-col items-center py-14">
        <InfoTag title={data?.TAG} />
        <div className="text-5xl font-semibold mb-6 max-sm:text-2xl">{data?.title}</div>
        <div className="w-[55%] font-lg leading-8 max-sm:w-full">{data?.description}</div>
      </div>

      <div className="grid grid-cols-3 max-sm:grid-cols-1">
        {data?.cards?.map((item:any, index:number) => {
          return (
            <div style={{ backgroundImage: `url(${item?.image?.data?.attributes?.url})` }} className={`h-[570px] text-center flex flex-col justify-between bg-cover bg-center bg-no-repeat p-8 text-[#FFF] relative`} key={index}>
              <span className="text-3xl font-semibold underline flex items-center justify-center gap-2 w-full z-20 max-sm:text-xl">
                {item?.title} <ArrowUpRight size={30} />
              </span>
              <span className="font-semibold z-20">{item?.description}</span>
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Services;
