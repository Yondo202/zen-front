import { ChevronDown, ArrowRight } from "lucide-react";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { useState } from "react";
import { Trigger } from "@radix-ui/react-popover";
import { Skeleton } from "../ui/skeleton";

const Header = ({ data, isLoading }: { data: any; isLoading: boolean }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between gap-2 main-x-p py-6 shadow-sm bg-white relative z-30">
      <div className="text-6xl font-semibold cursor-pointer flex items-center max-sm:text-base" onClick={() => navigate("/")}>
        Zen Logistics
      </div>
      <div className="flex items-center gap-10 max-sm:gap-3 max-sm:pr-3">
        <div className="text-base font-medium cursor-pointer hover:text-muted-foreground  max-sm:text-xs">
          <Popover open={open} onOpenChange={(e) => setOpen(e)}>
            <Trigger asChild>
              <div className="flex items-center gap-1.5">
                {" "}
                How It Works <ChevronDown size={18} />
              </div>
            </Trigger>
            <PopoverContent align="end" sideOffset={10} className="space-y-3 p-5">
              <div onClick={() => (navigate("/howtoship"), setOpen(false))} className="font-medium cursor-pointer hover:text-muted-foreground flex items-center gap-3">
                <ArrowRight size={16} /> How to Ship a car
              </div>
              <div onClick={() => (navigate("/howtocalculate"), setOpen(false))} className="font-medium cursor-pointer hover:text-muted-foreground flex items-center gap-3">
                <ArrowRight size={16} />
                Car shipping cost
              </div>
            </PopoverContent>
          </Popover>
          {/* <ChevronDown size={18} /> */}
        </div>

        <div className="text-base font-medium cursor-pointer hover:text-muted-foreground  max-sm:text-xs" onClick={() => navigate("/about")}>
          About
        </div>
        <div onClick={() => navigate("/services")} className="text-base font-medium flex items-center gap-1.5 cursor-pointer hover:text-muted-foreground  max-sm:text-xs">
          Services
          {/* <ChevronDown size={18} /> */}
        </div>

        <div className="text-base pl-12 font-medium cursor-pointer flex items-center gap-3 max-sm:hidden">
          <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#101E8A] border-2 border-[#CCDBFD]">
            <Phone size={13} color="#FFF" />
          </div>{" "}
          {isLoading ? <Skeleton className="w-28 h-8" /> : <a href={`tel:+1${data?.phone_number}`}>{data?.phone_number}</a>}
        </div>
      </div>
    </div>
  );
};

export default Header;
