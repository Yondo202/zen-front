import { ArrowUpRight, Quote, Star } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const items = ["How It Works", "About Zen Logistics", "Services", "Cost calculator"]; //"Terms and Conditions", "Privacy policy"

const Footer = ({ data }: { data: any }) => {
  return (
    <>
      <div className="bg-primary main-x-p py-14 grid grid-cols-[42%_1fr] gap-5 text-primary-foreground h-[82dvh] max-sm:grid-cols-1 max-sm:h-auto">
        {/* <img className="w-full" alt="img" src= /> */}
        <div
          className="bg-no-repeat bg-cover bg-top mr-36"
          style={{
            backgroundImage: `url("${data?.FeedBack?.image?.data?.attributes?.url}")`,
          }}
        />

        <div className="p-3">
          <div className="flex gap-4 items-center">
            <div className="bg-[#FFAA01] w-16 h-16 rounded-sm flex items-center justify-center">
              {" "}
              <Quote strokeWidth={1} fill="#000" color="#000" />
            </div>

            <div>
              <div className="mb-3">{data?.FeedBack?.customer_name}</div>
              <div className="text-primary-foreground/70">Satisfied Client</div>
            </div>
          </div>
          <div className="py-3 pb-5 flex gap-3">
            <Star fill="#FFAA01" color="#FFAA01" size={18} />
            <Star fill="#FFAA01" color="#FFAA01" size={18} />
            <Star fill="#FFAA01" color="#FFAA01" size={18} />
            <Star fill="#FFAA01" color="#FFAA01" size={18} />
            <Star fill="#FFAA01" color="#FFAA01" size={18} />
          </div>
          <div className="text-xl font-medium mb-3">{data?.FeedBack?.title}</div>
          <div className="text-primary-foreground/65 leading-8 pr-10">{data?.FeedBack?.description}</div>
        </div>
      </div>

      <div className="bg-[#EDF2FA] py-16 flex flex-col items-center justify-center gap-10 max-sm:py-8 max-sm:gap-6">
        <div className="text-4xl font-semibold max-sm:text-xl">What are you waiting for?</div>
        <div className="text-6xl font-semibold underline flex items-center gap-4 max-sm:text-2xl">
          <span className="grad-text">Book A Quota</span> <ArrowUpRight size={60} className="h-8 w-8" />
        </div>
      </div>

      <div className="bg-[#03030D] bg-[url('/footer.png')] bg-right-top bg-cover text-sm text-primary-foreground">
        <div className="main-x-p py-9 grid grid-cols-4 gap-3 max-sm:grid-cols-1">
          <div className="text-3xl font-semibold">Zen Logistics</div>
          <div className="space-y-2">
            <div className="font-medium mb-4">Quick Links</div>
            {items?.map((item, index) => {
              return (
                <div className="text-primary-foreground/70 cursor-pointer hover:text-primary-foreground" key={index}>
                  {item}
                </div>
              );
            })}
          </div>

          <div className="space-y-2">
            <div className="font-medium mb-4">Contact</div>
            <div className="text-primary-foreground/70 cursor-pointer hover:text-primary-foreground">
              <span className="text-primary-foreground">Email: </span>
              {data?.email}
            </div>
            <div className="text-primary-foreground/70 cursor-pointer hover:text-primary-foreground">
              {" "}
              <span className="text-primary-foreground">Number: </span> {data?.phone_number}
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-medium mb-4">Social</div>
            <div className="flex gap-4">
              <a href={data?.facebook_link} target="_blank" className="bg-slate-100/20 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer">
                <Facebook fill="#FFF" strokeWidth={0} />
              </a>
              <a href={data?.insta_link} target="_blank" className="bg-slate-100/20 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                <Instagram />
              </a>
              <a href={data?.linkden_link} target="_blank" className="bg-slate-100/20 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
                <Linkedin fill="#FFF" strokeWidth={0} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-5 border-t border-px border-muted-foreground/40">{data?.copyright}</div>
      </div>
    </>
  );
};

export default Footer;
