// import { queryClient } from "@/main";
import axios from "axios";
// import Notification from '@/utils/hooks/Notification';
import { queryClient } from '@/main'
import { toast } from "sonner";

// type TCustomHeader ={
//   "x-parse-application-id"?:AxiosHeaderValue;
//   "x-parse-rest-api-key"?:AxiosHeaderValue;
// } & AxiosRequestHeaders

export type TRequest<T> = {
  method?: "get" | "post" | "put" | "delete";
  url?: string;
  mainUrl?: string;
  body?: T;
  filterBody?: unknown;
  queryParams?: unknown;
  headers?: any;
  offAlert?:boolean
};

// type ResponseType<T> = {
//    data?: T;
// };

export const getJwt = () => {
  return document.cookie
    ?.split("; ")
    ?.find((row) => row.startsWith("access_token="))
    ?.split("=")[1];
};

export const request = async <T>({
  mainUrl,
  url = "",
  method = "get",
  body = undefined,
  queryParams,
  filterBody,
  headers,
  offAlert
}: TRequest<T>) => {
  const header = headers ? { headers: { ...(headers ?? {}) } } : {};
  const reqAsset = { params: queryParams, ...header }; // headers: { 'Access-Control-Allow-Origin' : '*', },
  const fullUrl = `${mainUrl ?? import.meta.env.VITE_MAIN_URL}${url}`;

  try {
    // const response = await axios<ResponseType<T>>({ url: fullUrl, method: method, data: body ?? filterBody ?? {}, ...reqAsset }); // tur ashiglaj baigaa data naas shaltgalaad tur darsan
    const response = await axios<T>({
      url: fullUrl,
      method: method,
      data: body ?? filterBody ?? {},
      ...reqAsset,
    });

    if (method !== "get") {
      if(!offAlert){
        toast.success("Request success");
      }
    }
    // return response.data.data;
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    toast.error(err?.response?.data?.error?.message ?? "something went wrong");
    throw err;
  }
};

type TRefetch = {
   queryKey: string
   queryId?: string
}

export const UseReFetch = ({ queryKey, queryId }: TRefetch) => {
   queryClient.refetchQueries({ queryKey: [queryKey, queryId ?? undefined] })
   // messageAlert('Хүсэлт амжилттай')
}
