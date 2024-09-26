import { ArrowUpRight, Quote, Star } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const items = ["How It Works", "About Zen Logistics", "Services", "Cost calculator", "Terms and Conditions", "Privacy policy"];

const Footer = () => {
  return (
    <>
      <div className="bg-primary main-x-p py-14 grid grid-cols-[42%_1fr] gap-5 text-primary-foreground h-[82dvh] max-sm:grid-cols-1 max-sm:h-auto">
        {/* <img className="w-full" alt="img" src= /> */}
        <div
          className="bg-no-repeat bg-cover bg-top mr-36"
          style={{
            backgroundImage: `url("https://s3-alpha-sig.figma.com/img/5df7/2ac6/9a60635e2f90e535cc3f89506a58cfcd?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XVDuYVA54pIf2vW~5Vy6AjbmCbIdE127qohx2cX7VdRAL5c7lpUWD3W4HW6bKCevdGMX7xtc5~sSNjNfu7Noeb4HqomKlDFKAsFqKYawzPG7ZI3Dw3yNrCjXRru-IsRMFvV6rtGxBHHNlwo7n2UbAvNkRnjBiyApnawTNMAR93tCu6OBj-SJI4xrXGKzoFowmWmjR1SjN8p57FUmM~9aooMEwShBwFCpTF6HPWvR8Wg2HtN-JC2Rs7muNZL1MjHpbP6ZWZiR2QNy4fzDp85i0sXA9W9qNmOIALZwOT42Qp8K32YbD2-qoPr2lTwnLi9TFQTpK~ox4nA7-DDvtApovw__")`,
          }}
        />

        <div className="p-3">
          <div className="flex gap-4 items-center">
            <div className="bg-[#FFAA01] w-16 h-16 rounded-sm flex items-center justify-center">
              {" "}
              <Quote strokeWidth={1} fill="#000" color="#000" />
            </div>

            <div>
              <div className="mb-3">Robart Clive</div>
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
          <div className="text-xl font-medium mb-3">‟Highly Effective Transport Service”</div>
          <div className="text-primary-foreground/65 leading-8 pr-10">
            I recently used ZEN for transporting my car across the country, and I couldn't be happier with the service! From start to finish, the entire process was seamless and stress-free. The team was incredibly professional and handled every detail with care. I appreciated the regular updates
            and the ability to track my car's journey in real-time. My vehicle arrived on time and in perfect condition. I highly recommend ZEN to anyone looking for a reliable and efficient car transport service. They've truly set the standard for excellence in this industry!
          </div>
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
              ZenDemi@gmail.com
            </div>
            <div className="text-primary-foreground/70 cursor-pointer hover:text-primary-foreground">
              {" "}
              <span className="text-primary-foreground">Number: </span> +833-644-0386
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-medium mb-4">Social</div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com" target="_blank" className="bg-slate-100/20 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer"><Facebook fill="#FFF" strokeWidth={0} /></a>
              <a  href="https://www.instagram.com" target="_blank" className="bg-slate-100/20 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"><Instagram  /></a>
              <a  href="https://www.linkedin.com/company" target="_blank" className="bg-slate-100/20 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"><Linkedin  fill="#FFF" strokeWidth={0} /></a>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-5 border-t border-px border-muted-foreground/40">
          Copyright © 2024 <span className="text-[#ABC4FF]">Zen Logistics</span>. All rights reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
