import { Input, Label, Button } from "@/components/ui";
import { MoveRight } from "lucide-react";

const BookShipment = () => {
  return (
    <div>
      <div className="flex gap-4 mb-4">
        <div className="text-xs font-semibold border border-muted-foreground py-4 w-36 text-center cursor-pointer bg-black text-primary-foreground">
          Credit card
        </div>
        <div className="text-xs font-semibold border border-muted-foreground py-4 w-36 text-center cursor-pointer">
          Pay Pal
        </div>
      </div>

      <div className="border border-l-4 p-4 py-2 text-muted-foreground border-muted-foreground">
        <div className="text-foreground font-semibold text-xl mb-4">$O Deu Now</div>
        Your credit card will not be charged until the order is assianed to a
        carrier
      </div>
      <div className="text-muted-foreground py-2.5 text-xs">
        & This is a secure 256-bit SSL Encrypted site. You're safe!
      </div>

      <div className="bg-card shadow-sm rounded-sm space-y-4 p-4">
        <div className="space-y-1">
          <Label>Card Number</Label>
          <Input placeholder="(__)__________________" />
        </div>
        <div className="space-y-1">
          <Label>Full name on card</Label>
          <Input placeholder="e.g. John Smith" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label>Expiration date</Label>
            <Input placeholder="MM/YY" />
          </div>
          <div className="space-y-1">
            <Label>Security code</Label>
            <Input placeholder="e.g. John Smith" />
          </div>
        </div>
      </div>

      <Button size="lg" className="gap-3 w-full h-12 mt-6">
        Book Shipment
        <MoveRight strokeWidth={1.5} />
      </Button>
    </div>
  );
};

export default BookShipment;
