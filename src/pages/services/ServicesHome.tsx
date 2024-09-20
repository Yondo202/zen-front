import HeaderWithBg from "@/components/miscs/HeaderWithBg";
import BlackSection from "@/components/miscs/BlackSection";
import ImageAndInfo from "@/components/miscs/ImageAndInfo";
import { streamlinedShipping } from "../../components/sections/Services";
import { History, HandCoins, Truck, PackageCheck } from "lucide-react";

const cardsItem = [
  {
    title: "Make the move easier",
    icon:<PackageCheck size={44} strokeWidth={1} />,
    desc: `Moving is already a hassle. So, save yourself some trouble and let Montway handle the car shipping portion for you. We offer open or enclosed door-to-door auto transport with insurance for your car so you'll have peace of mind.`,
  },
  {
    title: "No extra miles on your vehicle",
    icon:<History size={44} strokeWidth={1} />,
    desc: `Taking good care of your car means avoiding unnecessary mileage on the odometer. This includes skipping the drive to relocate. Zen Logistics can help move your car nationwide without adding miles on it (unnecessary mileage).`,
  },
  {
    title: "Save money on gas",
    icon:<HandCoins size={44} strokeWidth={1} />,
    desc: `On top of more miles, you'll have to pay for more gas. Just another reason why the benefits of car shipping will almost always outweigh the potential shortcuts of driving the car yourself.`,
  },
  {
    title: "Get your car shipped from home-to-home",
    icon:<Truck size={44} strokeWidth={1} />,
    desc: `There are all sorts of things in life that aren't convenient. Fortunately for you, car shipping can be pretty darn convenient. Book today and get your car shipped from home-to-home.`,
  },
];

const ServicesHome = () => {
  return (
    <div>
      <HeaderWithBg
        title="Ship Your Car Stress-Free. Get Instant Quotes & Nationwide Delivery"
        sub_title="Service"
        bg_image={
          "https://s3-alpha-sig.figma.com/img/e2ad/c735/64ca5298039cb4c4bf060a69c8c60c7b?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LY-YnKb3Rq1v9XOm94ZhS0AcE-YjjGblAyOKTrwFr918BwWwestmZWT8cum4kkrpDisWPNWS6vPK5A8f9tHvMDsMpJI2PP09-6PwPqXSqZ1I3jvoQSpd~vIKMuSQ4R6hryNqsNScconYQ2f3AMuhZOQfDvGNhqMSGPxL7jdMadvT7587sFLFIPEqJx7Fo9t~4Pij09RO44ldFV39wlOhmWLUqGJ79lTkvCZc8OjU6q~LyEzJCFNkjrInArhwDuSvnI6N4ZvSN5x2dR9Y~2tHrBSYh~U9QdNgNplWGl1QoV8JutlaWbWVIipiBMWVFGxsMkDHDYPP~DcgPOjpdFding__"
        }
      />
      <div className="main-x-p my-20">
        <div className="text-5xl font-semibold py-10 max-sm:text-xl">
          Factors Affecting Car Shipping Costs
        </div>
        <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
          {cardsItem?.map((item, index) => {
            return (
              <div key={index} className="p-4 border border-muted-foreground/30 rounded-md space-y-3">
                {item.icon}
                <div className="text-2xl pt-2 font-semibold max-sm:text-base">{item.title}</div>
                <div className="text-foreground/60 leading-8">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      <BlackSection
        tag_title="How It Works"
        title="Ship Your Car Across Country with Ease!"
        sub_desc="Here's How it Works"
      >
        {streamlinedShipping?.map((item, index) => {
          const Odd = index % 2 === 0;
          return (
            <ImageAndInfo
              key={index}
              className={`h-[70dvh] ${Odd ? `flex-row-reverse` : ``}`}
              classNameImg={`w-[53%] p-0`}
              classNameInfo="w-[47%]"
              title={item.title}
              desc={item.desc}
              // button_txt=" Get In Touch "
              img_url={item.url}
            />
          );
        })}
      </BlackSection>
    </div>
  );
};

export default ServicesHome;
