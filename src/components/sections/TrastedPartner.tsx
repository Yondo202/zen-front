import ImageAndInfo from "@/components/miscs/ImageAndInfo";

const TrastedPartner = ({ data }: { data: any }) => {
  return (
    <ImageAndInfo
      TagTitle={data?.TAG}
      title={data?.title}
      desc={data?.description}
      // button_txt=" Get In Touch "
      img_url={data?.image?.data?.attributes?.url}
    />
  );
};

export default TrastedPartner;
