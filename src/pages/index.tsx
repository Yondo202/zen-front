import { MoveUpRight } from "lucide-react";
import Services from "../components/sections/Services";
import TrastedPartner from "../components/sections/TrastedPartner";
import HowItWorks from "../components/sections/HowItWorks";
import InitialCalculate from "./calculate/InitialCalculate";

function Index() {
  return (
    <>
      <div className="h-[87dvh] relative bg-gradient-to-t from-[#dfe8fd] to-[#FFF] max-sm:h-[95dvh]">
        <img
          className="scale-x-[-1] absolute -top-52 left-1/2 -translate-x-1/2 w-4/5"
          src="https://s3-alpha-sig.figma.com/img/72b7/0d7e/ec695adf7e4253a7d9139524051e7bf4?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fLT-b5ZJbA2tDrqB93EOgar-dkUUCIC7RESYcyp0e-qi57kR7C5q7Oi0o5PKOXTvWM3T~o0uMRr1J2dhoZPZvG9mmFGbwg2mQoLAq0ovbWekCcChXUlnSmRTPgCw1sxuaeb5trENpJoXVnQzoz3WUkW6GcwL-MQCWcs~-l8ejoPpIU35S1uIqn656aCCEEKYgXDgpBJBxwvofzuya4XCOXsdRq-SrmHehW2LMkFZJpIvRkSxPJLS80pHGYGqV1iBSJZBuyVzBZbJDF4v2b35vKJaUi-D4ysOm10cxcau8yXWad0xh~5q38bWx0iHcMTe-YlCutmBfxUil67HmJMWAQ__"
        />
        <div className="absolute top-14 left-10 w-[440px] max-sm:w-full max-sm:left-0 max-sm:top-3 max-sm:px-3">
          <div className="text-5xl font-semibold mb-7 leading-snug max-sm:text-4xl">
            Experience Zen <span className="grad-text">Logistics</span>
          </div>
          <div className="text-lg font-light leading-10 mb-4">
            Leave the logistics to us. With ZEN, your car's journey is
            worry-free. We handle every detail, ensuring a seamless shipping
            experience.
          </div>
          <div className="border border-muted-foreground w-44 p-5 py-3 font-medium flex items-center justify-center gap-2">
            Book A Quota <MoveUpRight size={17} strokeWidth={1.5} />
          </div>
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
