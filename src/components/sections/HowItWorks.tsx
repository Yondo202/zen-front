import BlackSection from "../miscs/BlackSection";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Free Instant Quotes",
    bg: "bg-[#D6EADF]",
    desc: `Enter your vehicle details, origin and destination zip codes, and preferred shipping method (open or enclosed carrier) to get instant quotes online. Secure Your
  Booking: Choose the quote that best suits your needs and book your transport with ease. Hassle-Free Preparation: We'll provide clear instructions to prepare your car for transport, ensuring a smooth pickup process.`,
  },
  {
    bg: "bg-[#D7E3FC]",
    title: "Expert Pickup & Inspection",
    desc: `A professional driver will arrive at your location on the designated pickup day. They'll thoroughly inspect your car, document any existing condition, and carefully load it onto a secure transport trailer.`,
  },
  {
    bg: "bg-[#D7E3FC]",
    title: "Safe and Efficient Travel",
    desc: `Your car travels alongside others on our reliable carrier vehicles, using your chosen shipping method (open or enclosed).`,
  },
  {
    bg: "bg-[#D6EADF]",
    title: "Delivery with Confidence",
    desc: `Once your car arrives at the destination terminal, we'll contact you to schedule a convenient delivery appointment. Another inspection will be conducted for your peace of mind. Complete the Process:
    Upon verifying the condition and settling any remaining balance, you're all set!`,
  },
];

export const CountCircle = ({ bg = "", count = 0, className = "" }) => {
  return (
    <div
      className={cn(
        "border-dotted border-[3px] border-primary w-20 h-20 rounded-full flex items-center justify-center text-foreground text-2xl font-semibold",
        bg,
        className
      )}
    >
      0{count}
    </div>
  );
};

const HowItWorks = () => {
  return (
    <BlackSection
      tag_title="How It Works"
      title="Ship Your Car Across Country with Ease!"
      sub_desc="Here's How it Works"
    >
      <div className="main-x-p grid grid-cols-2 gap-x-32 gap-y-4">
        {items?.map((item, index) => {
          return (
            <div
              key={index}
              className={cn("space-y-6", index % 2 === 0 ? `` : `pt-20`)}
            >
              <CountCircle bg={item.bg} count={index + 1} />
              <div className="text-3xl font-semibold">{item.title}</div>
              <div className="leading-8">{item.desc}</div>
            </div>
          );
        })}
      </div>
    </BlackSection>
  );
};

export default HowItWorks;
