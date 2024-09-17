import HeaderWithBg from "@/components/miscs/HeaderWithBg";
import ImageAndInfo from "@/components/miscs/ImageAndInfo";
import BlackSection from "@/components/miscs/BlackSection";

const items = [
  {
    title: "Free Instant Quotes",
    desc: "Enter your vehicle details, origin and destination zip codes, and preferred shipping method (open or enclosed carrier) to get instant quotes online. Secure Your Booking: Choose the quote that best suits your needs and book your transport with ease. Hassle-Free Preparation: We'll provide clear instructions to prepare your car for transport, ensuring a smooth pickup process.",
    url: "https://s3-alpha-sig.figma.com/img/0a6f/aaee/3d1cc229fde24fdbec5a66f4e653217a?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lLj6QIKPryiJovQVMzYFzbq1b-~QaMJ4gYQc4tNh9Uceg-MC~~WLUqClu0NFPNX0dUUp3w8S5XQbd38UoCRGHvZWGKWRoWuQrgoAvzN-AlXjvx8Osyb55rkqKlzpsXrf~MiJ-jKe0At~tYy4yK2oE4r0qyf7QYL0onsVR0qepBL9FBFoV541k0ZgS4u80yExDKhKZBqEk1hb8LbNkHREXmUvLYeK6pyaWFareWfuqk7HiSPyA9uQxlSnL3HB91PUKRvKsJu42JF8~gvC31PXJXXUXacuKNaowoYpLhcsavtH1hHF97dqbfkdUFcJ~l5x8-1BxYeHxVP8ig6~yU952Q__",
  },
  {
    title: "Expert Pickup & Inspection",
    desc: "A professional driver will arrive at your location on the designated pickup day. They'll thoroughly inspect your car, document any existing condition, and carefully load it onto a secure transport trailer.",
    url: "https://s3-alpha-sig.figma.com/img/000c/5011/3f4492d133f50779016d9c4190bbc6d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qhxyLXZp5HwvxzWtSI3y3WhvnolCaxqVdgugyeni~-hXHNZwsKH6eraxcHaWS-S-qJMaLURdyT~a554D0i7rzlHgmCjFeuMY9zC4EyvRwLHDZg4hL3yeDtj77TXWDPmaTopvDT73D3G6lGtNj9bKMTaQh7LqN5VQkclP4MhV37jyoRg5tmVc2LVJOH3wpkO7wusvETSuz47azh4cYYdezgDdWPtHCrupVClVU4sGehJ~WxNtwh08r4nl1-psKSKDr5yL9Un-rxS7NgNGv216MbMWns42lTSGrrupd~8-ztoZwdzzZ--8OmvZFd9POu~wQA0fHhAD7S289VTwDyjuzA__",
  },
  {
    title: "Safe and Efficient Travel",
    desc: "Your car travels alongside others on our reliable carrier vehicles, using your chosen shipping method (open or enclosed).",
    url: "https://s3-alpha-sig.figma.com/img/9e56/f8c8/7a327d333c0a89e6261227ac06d29d7c?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dLtTWcOaFhPQRFVOPltvdhvGwkXxnrp5bS08eEgkS1ORoMuDWvOV2PsNtaT7hTnfWn83Md8NG1cHil2AUpnXX3suTgOJHKa1z0G2aqjQvgTKa8yTwOOEEZp8SvQ~j0ok7YU32-uex9WSiMdUMTDIyyw3hPYGBmvvZjZgEs3ovJjsq2slatWcShSXsukyG1VG3dZA~sGoD5v0zWAVt0WLBwxTiATjPrlvby5qNVl99S9xTOnMy3nH19~YbGzxdq8x9liL59ch7gIl~yEThrlajJ7CE0ct0UlnoIHwDsWOH-WbXZHbv9hJvbpNyDhuv9HopC9lzii8uUAfYubfsfOgcg__",
  },
  {
    title: "Delivery with Confidence",
    desc: "Once your car arrives at the destination terminal, we'll contact you to schedule a convenient delivery appointment. Another inspection will be conducted for your peace of mind. Complete the Process: Upon verifying the condition and settling any remaining balance, you're all set!",
    url: "https://s3-alpha-sig.figma.com/img/e330/3915/fc1e9a18f04c2fd418718628a6bdfa92?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fkFP47a3u7GZLJcJkpGmAGuu0kI3cEtMoDzHAlYmGWIViX9Qp8U4qWvJoTy8ShOD31WoVrGGNXEG2ohUc07b6sPgIB0uFjpVBIy1IX0B781q3DsqNlmrh~jKRdZvsinlwm5fvGsm31GgEiAfB3qlXhyoyS0yFi05srlweXBS35TP4JTsG1HNFo~3aX73v8cwp6Do8QZUJmUq4TKVVOOKD~wvPRrOefcs8vDi2uB4i0xZMZId27igG84ad~hCyQfVE9iz1qn1p1quZ63QZiwDHBEy~W4q-5hQgti9jCG98RIdMfGZsiglOT0UwJBGNrNqFGMrMmwm9ulypzvd98rmrA__",
  },
];

const HowToShip = () => {
  return (
    <div>
      <HeaderWithBg
        title="How To Ship A Car"
        bg_image={
          "https://s3-alpha-sig.figma.com/img/e2ad/c735/64ca5298039cb4c4bf060a69c8c60c7b?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LY-YnKb3Rq1v9XOm94ZhS0AcE-YjjGblAyOKTrwFr918BwWwestmZWT8cum4kkrpDisWPNWS6vPK5A8f9tHvMDsMpJI2PP09-6PwPqXSqZ1I3jvoQSpd~vIKMuSQ4R6hryNqsNScconYQ2f3AMuhZOQfDvGNhqMSGPxL7jdMadvT7587sFLFIPEqJx7Fo9t~4Pij09RO44ldFV39wlOhmWLUqGJ79lTkvCZc8OjU6q~LyEzJCFNkjrInArhwDuSvnI6N4ZvSN5x2dR9Y~2tHrBSYh~U9QdNgNplWGl1QoV8JutlaWbWVIipiBMWVFGxsMkDHDYPP~DcgPOjpdFding__"
        }
      />

      <ImageAndInfo
        classNameImg="w-3/5"
        TagTitle="Easy Steps To Get Going"
        title="How does auto transport work?"
        desc={`This easy guide will show you in 4 simple steps.
        Your car is your pride and joy, and we understand that. While other companies may hesitate, we're excited to answer all your questions, such as 'How does car transport work?' Whether you're embarking on a new adventure or buying (or selling) a car online, you deserve top-notch car transport at an affordable price.
        With a 5-star rating, Zen Logistics delivers exactly that.`}
        // button_txt=" Get In Touch "
        img_url="https://s3-alpha-sig.figma.com/img/8e0d/e1cd/e91c72402aa970d9c23fd195243b398a?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qAhyln4llXrH50OOvVYWts4mZzijHE2ZwUAuX23KIOApJRZlFB04sSomW0NEU0GFSwLLtasiE7ExmThk-AInMF7vImzxPYRLBCn2Yurgljg8ZFVM9Zly7F4HNiIvopf1ZWRpQrmGMY1C5GF1TngIqmnQOE9VzkLis8e9Msy~QYiU5GED0HFB9AbCsRNe4GyMbZBbWYVzvwunEEqcnD3OEegSxEHOhzCJsSw1ZcNq8-7qNeuqkUF8hXgDR4n3D9En9Fm78dqS~gia96GkYa0ypzaf0wA4E96iysjibi6fO9y2iLZDgM4z6hqy4xfrBpFExO-R-rHl6VhIapMtYwOBig__"
      />

      <BlackSection
        tag_title="How It Works"
        title="Ship Your Car Across Country with Ease!"
        sub_desc="Here's How it Works"
      >
        {items?.map((item, index) => {
          const Odd = index % 2 === 0;
          return (
            <ImageAndInfo
              key={index}
              className={`h-[70dvh] ${Odd ? `flex-row-reverse` : ``}`}
              classNameImg={`w-[48%] ${Odd ? `pr-20` : `pl-20`}`}
              // classNameInfo="w-1/2"
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

export default HowToShip;
