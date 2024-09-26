import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui";
import { useMutation } from "@tanstack/react-query";
import { request } from "@/lib/request";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ThankYou = ({ orderId }:{ orderId?:string }) => {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      request({
        mainUrl: `${import.meta.env.VITE_SERVER_URL}/orders/${orderId}`,
        filterBody: { data: { payment_status:'paid' } },
        method: "put",
        offAlert:true
      }),
  })

  useEffect(()=>{
    if(orderId){
      mutate()
    }
  },[orderId])

  const restart = () => {
    navigate("/");
  };

  return (
    <div className="bg-secondary main-x-p py-20 w-full flex items-center justify-center">
      <div className="bg-card shadow-sm w-96 p-6 py-10 flex flex-col gap-2 items-center justify-center">
        <CheckCircle size={46} strokeWidth={2} className="stroke-muted-foreground mb-3" />
        <h1 className="text-2xl font-medium">Payment successful</h1>
        <div className="text-muted-foreground mb-2">Your payment has been completed</div>
        <div className="text-blue-500 mb-12">Please, Check your Email</div>

        <Button isLoading={isPending} onClick={() => restart()} className="w-full">
          Go Home Page
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
