import { CalendarIcon } from "@radix-ui/react-icons";
import { format, isDate, parseISO, formatISO } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type TDatePickerProps = {
  date: string;
  setDate: (value?:Date) => void;
};

export function DatePicker({ date, setDate }: TDatePickerProps) {
  // const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full h-10 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {/* {date ? format(parseISO(date), 'eeee do MMM, yyyy') : <span>Pick a date</span>} */}
          {date ? format(date, 'dd/MM/yyyy') : <span>Pick a date</span>}
          {/* {date ? formatISO(date, { representation: 'date' }) : <span>Pick a date</span>} */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={isDate(date) ? date : new Date()}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
