import HeaderWithBg from "@/components/miscs/HeaderWithBg";
import { CountCircle } from "../components/sections/HowItWorks";
import ImageAndInfo from "@/components/miscs/ImageAndInfo";

const items = [
  {
    title: "Free Instant Quotes",
    bg: "bg-[#D6EADF]",
    desc: `Enter vehicle details, zip codes, and shipping method for instant quotes.
        Choose a quote and book easily.
        Follow our instructions for smooth
        pickup.`,
  },
  {
    bg: "bg-[#D7E3FC]",
    title: "Expert Pickup & Inspection",
    desc: `A professional driver will inspect your car, document its condition, and securely load it onto a transport trailer on pickup day.`,
  },
  {
    bg: "bg-[#D7E3FC]",
    title: "Safe and Efficient Travel",
    desc: `Your car travels alongside others on our reliable carrier vehicles, using your chosen shipping method (open or enclosed).`,
  },
  {
    bg: "bg-[#D6EADF]",
    title: "Delivery with Confidence",
    desc: `We'll contact you to schedule delivery when your car arrives. Inspect it, verify its condition, and settle any balance to complete.`,
  },
];

const About = () => {
  return (
    <div>
      <HeaderWithBg title="About" bg_image={"https://s3-alpha-sig.figma.com/img/eb86/af0d/84a7829bafe07c0d8262fe62912df81c?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aDJqplnBiLsgI6Zs2pbnDlDr4IXng7IjWkFH~L9Sh76dnjzFBlFaGfQYHV8kRXj7x3F6a5-XILmlCmWnW1DH1hqLuaKcp2DkUpL8bxdAH~~2nVz~5XBVbPt8Q3q~kRom6o7~E2vymos4zL0axncjY-GuLN7AkYT7mgme1x15l1253djCQJ3kPS31ir~6CacXkGmFQ2ym87rG~kYfdApbccZ~cLNec25IaBI~-eLdAnPu6njospNsdbHxsD-LnDovm3aZT1wvVDsIGQx-UxA2GgqaUurdqbP3IV7c2MpmXsgtXk1MMeUd~SOP1E~10uTR6mQqQTaM6u35JRhEtJE0uQ__"} />

      <div className="main-x-p grid grid-cols-4 bg-primary text-primary-foreground py-20">
        {items?.map((item, index) => {
          return (
            <div
              key={index}
              className="space-y-4 border-r px-4 last:border-none pb-5"
            >
              <CountCircle
                bg={item.bg}
                count={index + 1}
                className="w-12 h-12 text-base"
              />
              <div className="text-2xl font-medium">{item.title}</div>
              <div className="leading-8">{item.desc}</div>
            </div>
          );
        })}
      </div>

      <ImageAndInfo
        className="bg-primary text-primary-foreground flex-row-reverse"
        classNameImg="w-1/2"
        classNameInfo="w-1/2"
        TagTitle="About Us"
        title="Reimagining Auto Transport for a Better Experience"
        desc={`Zen Logistics is your trusted auto transport broker in Los Angeles, providing seamless vehicle shipping solutions. Our expertise ensures a stress-free experience for all your transport needs.`}
        // button_txt=" Get In Touch "
        img_url="https://s3-alpha-sig.figma.com/img/09c9/6d6f/3fe3e657f6dfe7a1ffb3cfaaea3fb026?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NRNSEzssBZVm5qJrua711eRo1Fpb458xQ6YMSCYZ21e1zHg1v1s4h28A3U6ziPuyosHmz2eBaXd7FZAi5MUb4vU7wbeDeegA~452XFMzbQp~Dh3OadO4q8bRSvgixCT23-6RjWUJ0ZCBeKZ5cvy0~BmUFuBKxAhpadfvDms0aBxkfUS-fncZqyJs4Z~QHRar-osCJZ47Ne3tZpzfI72PKrZhYHBbGqWcgCwm4FPakw5eF2oppgzGs0KTMr7G8HLiBMC5xjqsXL0yIzIhIMcBEWCOCRGaGV1hGAhIYTvLe~XuzNhkITi6GJVq5vnL9ZT493uwxcqf0DY34hlhREIpQg__"
      />

      <ImageAndInfo
        className="bg-primary text-primary-foreground"
        classNameImg="w-1/2"
        classNameInfo="w-1/2"
        TagTitle="Drive your adventure"
        title="Affordable Car Transport for Your Journey"
        desc={`Experience reliable and affordable car transport with Zee Logistics. Our professional services ensure your vehicle reaches its destination safely & on time. Enjoy peace of mind knowing your car is in good hands, with transparent pricing & no hidden fees.`}
        button_txt="Get In Touch"
        img_url="https://s3-alpha-sig.figma.com/img/a4d0/3a39/ce40b5df153fec04f9e2e6fccb7de07c?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B4Skh~0fYVefiJHhE~VE3OBUwJS9tbhvkR60GOruvquzNqdukvMijPEu5c0dr0KvZh7eJhEZi~ZR37CVCGk5b59rPrxqC-0VWpUTebhRLqG-fE-nqW9-QOVD4YNj3cw5PykUfihzZaL9zWRDOTME2AFA~VV3HG2e~CWTUeAtX2h2nWGrFQtzd2TfpA36S4bjEWYMF~oQT9h7qSmFN0NWojqGA-Xvkeab7~nLfgZXAdJAEJtFhDQpgB1c2mm157Th813M2Cx5VMC0j6NY147hYumTKJivH9SehY~jGrmJvEp5qrynihzCmlt2c6QmArwPSBytdPA0mbFw3XrphnZhAg__"
      />
    </div>
  );
};

export default About;
