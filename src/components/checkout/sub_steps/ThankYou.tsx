import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const ThankYou = () => {
  const navigate = useNavigate();

  // useEffect(()=>{
  //   localStorage.clear();
  // },[])
  // end amjiltgui bolvol yu haruulah talaar haruul

  const restart = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="bg-secondary main-x-p py-16 w-full flex items-center justify-center">
      <div className="bg-card shadow-sm w-96 p-6 flex flex-col gap-2 items-center justify-center">
        <CheckCircle size={46} strokeWidth={2} className="stroke-primary-green mb-3" />
        <h1 className="text-2xl font-medium">Payment successful</h1>
        <div className="text-muted-foreground mb-14">Your payment has been completed</div>
        <Button onClick={() => restart()} className="w-full">
          Start new order
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
