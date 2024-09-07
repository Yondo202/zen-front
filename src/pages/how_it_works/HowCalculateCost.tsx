import HeaderWithBg from "@/components/miscs/HeaderWithBg";
import ImageAndInfo from "@/components/miscs/ImageAndInfo";

const shippingFactors = [
  {
    title: "Distance",
    url: "https://s3-alpha-sig.figma.com/img/744d/1000/98a95536da8e42d17965f3afec566296?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bm8so8ASe9lQvMMAhS2-ZeTbdxTDcmGrxeavrR3J5iXix1Vpr0xi6x4vFaiFPUfXoHe8FeYC7MvXXIriECL4xYR3daJcktQwhg0Sh3JOcakTdhpQZ7HhXBWLxZu-B0eWB4ygqLNJqgQ7pKmiRsaCU0d0~mvzPUTT0ekU~LbpC8Unk4dkwivkkp~KviN-KmtpFPikCqLzy2jd2AgQZZvAnhq5NDpCXb7xSsWH02lq~F7mUKda2OCKeqrFb923a4IW~SYQ5m~QuRlFYnKZeeSoEW5HYSyqCiAehJxIKtdwXo49eV0VCz9LMAwx8XEMUg6aR-P50N9gMzsGJZNQT7MU1g__",
    desc: "This is the biggest factor influencing car shipping costs. Longer distances mean higher costs due to more fuel, driver hours, and wear-and-tear. However, the cost per mile typically decreases for longer distances.",
  },
  {
    title: "Vehicle Size and Weight",
    url: "https://s3-alpha-sig.figma.com/img/87be/f7ca/e2dd2f4c6eb1c37a96dd847194e41e04?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IQfaKcpRJJBl9gRRIJw89Z89odDbEtL9s9Z~nnq7P0QwFj128eDcbNKqPLDQ4HO6RxRke-XA~squthw89dOLHl6~6sofrLvFI0ziW2Ix6f-chxpslkKaJuIMAc3CFYYJpSx3u0-sSEs1drxZ6sr~T2-OPgYrJO4hNd3sHxD9FkbUcLpqBWZf~a5GGURJNF3PolU6G2BeVuCzcT3PMqy4TNaHgmdXKb3kPxfE1VI7pAdDjAMUdBeFWO7wI0fmI-xAkwgObE55q1Tgyq7VY9NxdBGKo3PdA0FtxTNJ2U3Uyo2kw0tk1rfMv0f8UKEYpyqOHHwVPqDC3AUmDv~WKoDbaQ__",
    desc: "Larger and heavier vehicles require more space and fuel leading to higher costs compared to smaller cars.",
  },
  {
    title: "Type of Transport",
    url: "https://s3-alpha-sig.figma.com/img/2608/5144/b39341c5d751598a907ceb88de6a99c6?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JmXiB-pBXCoX---SA1vh-WZ46qS5uKhzyB08V9ohCC5UTG9aN6kt0EY7R1mw77NDR5RVhgF~3QT1K6R0Jj1Zax2oQLGpo8axKhJYodCSbdOXO2MK0BLCLnNIpI55tM-Q4rgqEZApul3z01I-2qdtURNdLfqRPfJZlCV-evqLkqETF5hKQcjEXOvtkVi~L6BUQQNBzF0ELr24lsBa~4gCUALnxEs3-i6Y7v4bxL9ZdHgjPRJs8~0MsE32sV0Fa5A7b2bLByvV8IVb8TDRwBHp39yx8OIx4kb~dQ4oc4xZrny6t2kh5PmAQ~PJYlaC-N5Ux0uXHGH-hUX1OIOAUS2nQA__",
    desc: "Open Carrier: More affordable, exposed to elements. Enclosed Carrier: More protection, higher cost.",
  },
  {
    title: "Time of Year",
    url: "https://s3-alpha-sig.figma.com/img/b1e1/ad65/13cbe2e070405ed4ee9a31672a09d178?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kdPkniaC1oHBmOTHmzFCe0i5~Y2ca08WbYAtsRaR2Ve2~OUMvcTYLb0QHcpDce7tWYuTauMCKbMdokRZOfWgl4zoz4KW~-FuO20~~fjIvHK2KEhXHS9Vp8s7xaROvtqDpyZ~KrwAMbc7SEDxozBRWQgz2vqIO3HDX~xOPbANiKuO9hMekC1P6iWWkszZgTsjGS6Jo0eKpy5hIKqm4njnqWhGu0UHwgKmELNvshbpZ8civt-p7-fvWUlxVvpOAxQ3UG5cKkS5bl0krXvPTS4kw-gzG-YhJ8F5PjpBTMB3-0VnYFG3F27jx12Q7-MxeK82q5z9s-R8BMuqSim050gK4Q__",
    desc: "Demand affects pricing, with peak seasons like summer and snowbird season seeing higher prices. Fall is the most affordable.",
  },
  {
    title: "Speed of Delivery",
    url: "https://s3-alpha-sig.figma.com/img/400b/9771/c74b0bd598541bbb7014ab649c3af1d9?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kf75qYpK6Pfz32d5a8QEJQtgqFLMyZUDzXklOBX~Wb6m8jO8gHgFBpKiS-WxzE-WMPRmcV1vsb96NMsXwxe3~Wby6zTO1zKAg4Afp0V0rVpteBmuko-7yxRkfx~5gKcJd8viUM1jp8PtE3zjzMgb2EdgSQupdjni4N-o8h0tBVcFqrsh96s2uXIi~tz~GCEyjIL9UPQG1r-4kz6A2QbFidPvC4Vq8pQd37NbuNmxdx1WdhQk0lFlLAzOlV7ZYTitQrltMfmLjnUQZ-8G-6zjfMF2kJkRkGnoPYUnvpLvbFyGTOVaQcKxElbD3oq5P3FSsLqEo7Hgq3dgU57ihpOOSg__",
    desc: "Expedited options cost more than standard speeds.",
  },
  {
    title: "Fuel Prices",
    url: "https://s3-alpha-sig.figma.com/img/db9f/473a/bea3b4eef053887a1f8544bc9d5452bf?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V1GMW5hyocG-mw4hYi0YTghcBokotkz4h7Zmb7xYZz~78g86erwalVFo76zU6k-0yI8yO6-Gydn1s9ftv~x7xrQOIacYhEw7SFdhUdXlJxzA3v-1Jb3NZ6cR~ViIckBow1BENWOfyL8XB3Vl6q9C-eNq6-DVxXRId~9g2X3uffbZsz4du8gLUWAEOt9tAZ2Kv5UPzjVMPpi54uJBtpjPPAAA7z3u9AqZdrK62uR6vWPp1hw5lXTAkuatmBFxYb5Xm6482pKL5h0PxRfUIXZq1gjW8dqDFiY2hg0c6ZbPHuZ5Gnp9bMr73US89Tu0Ba2NXNcSpXwN8kSdY5v~PKx-cA__",
    desc: "Fluctuations in fuel prices impact shipping costs.",
  },
  {
    title: "Insurance",
    url: "https://s3-alpha-sig.figma.com/img/731b/de1f/b6ed30f775526b5168df55a7ed43e4d7?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R65-mPSVUwEtiSxINu52zzPRUrrZathdzbK2FOED6uqhohcv7vs2ouyOTgGEnBB~ZSxm2Zq7gbpCmJKmXHVVar-zTcJkoJCE4W5JMImXkd3yO4RSS1T7IS9qPd7Q1z74EojlgzKoaTLwwO2Jxhar6VcN4EUSfIC7oBlsAxvyfDtgMxrT7rTukCwC8z9VS-fj1ATdPb0vsAwIcxb5Nwe7TRpusSdLapwuQYIcgM9gRVskLVwOv3VhbbaDWEOvdruXo1R9XCyoySqa6lAHn1XQt~CJiF2h7Wki3BOzCYvMlQ5fdarnNFJQzjQRsSQ3iOKHlW6m6e-vNp9ob0vKjR4jLw__",
    desc: "Optional insurance adds to the total cost but provides peace of mind in case of damage.",
  },
  {
    title: "Door-to-Door vs Terminal Pickup/Drop Off",
    url: "https://s3-alpha-sig.figma.com/img/bd4e/0c67/a4e3e621988019ada12ed302f7952944?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FPFtnph8aMDfr74CO2iM2qtZykCIk3gCNyfalYt23wV7RPKr0BxZXiupQ0s-96TvgPbBJ3TCB1RkAemnXp4ti8Qix61vZuAt0hN5tZAC1ny2-tPpwfeBlaErNbD0eTUOmQ47Lq-ZGtlQ795LzwBoBpgDDtHEW93P07fyg8hJloeGRn8zbhFSo2YJ-6An72AHzYzE~xx3vP~oEZY9v9NVCiCNkgvmynzI9bzlc8tvAgLUvWduUVTUzAVcmmhTZdbC~1GtTxbSBY7DZfuUwWbVy0Rlr~VkedafPhPfrg1L8aJ6mJCdWQLLz21PhILZ-mG6bLXXNbpPbABo3eZVeyMN1w__",
    desc: "Terminal pickup/drop off is cheaper than door-to-door service.",
  },
];

const HowCalculateCost = () => {
  return (
    <div>
      <HeaderWithBg
        title="Car Shipping Cost Calculator"
        sub_title="Car Shipping Cost"
        bg_image={
          "https://s3-alpha-sig.figma.com/img/6787/cc7c/ba9b62a8dc754a917920cb9f6ebabf21?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OCYn4kCB5rzTJVkPE4dB7TdrBm3mvz47ZdGTf7Ar1-GftYGkMKGtqqZz8FxJiCb2Akq-Dkq8rRxnRow~jgc3W2VblsrJTrWytCc7x56vZITqg-vsbb-4lJ~AaHdp1~7j2xVqpZ1tjHGTeB86M1rSl9jg6lzaXqq64VwkM-6nTiEY9crzX-mtWkWxsSILS3eok2ldXV-kqkgsd6TwGSWrh4Pu35hhYMRLVImeVbseIAmN9XDWGvWoMYjeMpM9881Nfg6Axxtjm3izJrR7SeqyOg8Jn6Ig~l8VG54emDgnEBrPfVAP3rTAqXlwoFLbG4XPGxxqodrhHudnNvENRfya8A__"
        }
      />

      <ImageAndInfo
        className="h-auto"
        classNameImg="w-1/2"
        classNameInfo="w-1/2 py-10"
        TagTitle="Let's Know How It's Cost Actually"
        title="What are the Costs Involved in Shipping Your Car?"
        desc={`Car shipping costs in 2024 for open transport are approximately $1.85 per mile for short distances (1-500 miles), translating to around $555 for a 300-mile trip. For medium distances (500-1500
            miles), the cost averages $0.91 per mile, or about $910 for 1000 miles. Long distances (1500+ miles) cost approximately $0.59 per mile, or $1,180 for a 2000-mile journey. Note that rates can vary, and enclosed transport is typically more expensive.
            Several factors influence the cost of shipping your vehicle, including the type of vehicle, the chosen transport method, and other variables.
            
            
            `}
        // button_txt=" Get In Touch "
        img_url="https://s3-alpha-sig.figma.com/img/7bcd/c429/744d56a8d71ad30c2351485ce5a01eb0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PxYXyHedf9ok3U2jbvJOmKBgjNQxRScTi1lNMwUm3P3fM0gKng8VEKMWIKiL4VBACSHz2I768wwS6mqJ0ZJbnqfIa1ojVyjrDB97bMZ04EDMpWVM1XS6VExuiqY6rF1wl7E6puMbyIlZDFPQPpv0Ce4M-XgB7F8nC1Fq3QwcQ8rIUonrXq~hIi6JGEI002pDfe2sT8Y6SF~J6b5BC1Ddt0WnBh8fck~AgxwfNUtA3-l~h54G5Cu2NoAsaAz3FMNIlNIZ0I55I7ZEFBhdHntm0JVvw6JIPi3fxG9-WwVo4sagEO1UsB1CrbnyeM5M2cSNEK~Od44rb7k1Oz5X6Nih7Q__"
      />

      <div>
        <div className="text-5xl font-semibold py-10 pt-20 text-center">
          Factors Affecting Car Shipping Costs
        </div>
      </div>

      {shippingFactors?.map((item, index) => {
        const Odd = index % 2 === 0;
        return (
          <ImageAndInfo
            key={index}
            className={`h-[40dvh] ${Odd ? `flex-row-reverse` : ``}`}
            classNameInfo={`w-1/2 pr-0 px-20 ${Odd?`bg-[#F1F8F5]`:`bg-[#EDF2FA]`}`}
            classNameImg="w-1/2"
            classNameTitle="text-2xl mb-3"
            title={item.title}
            desc={item.desc}
            // button_txt=" Get In Touch "
            img_url={item.url}
          />
        );
      })}

      {/* <BlackSection
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
      </BlackSection> */}
    </div>
  );
};

export default HowCalculateCost;
