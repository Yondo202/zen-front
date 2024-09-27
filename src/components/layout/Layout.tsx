import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "@/lib/request";

const Layout = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = useQuery({
    retry: false,
    queryKey: ["layout"],
    queryFn: () =>
      request<any>({
        url: `/config?populate[1]=FeedBack&populate[2]=FeedBack.image`,
      }),
  });

  return (
    <>
      <Header data={data?.data?.attributes} isLoading={isLoading} />
        {children}
      <Footer data={data?.data?.attributes} />
    </>
  );
};

export default Layout;
