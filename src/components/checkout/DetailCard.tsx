// const items = [{ name: "Door to door" }, { name: "Door to door" }, { name: "Door to door" }, { name: "Door to door" }, { name: "Door to door" }, { name: "Door to door" }];
import { format } from "date-fns";
const DetailCard = ({ data }: { data?: any }) => {
  const infoData = data?.data?.attributes;

  console.log(data?.data?.attributes?.cost?.mile, "-------->data?.data?.attributes?.cost?.mile")

  // console.log(data, "-------->data");
  return (
    <div className="bg-card py-7 p-8 rounded-md shadow-lg shadow-blue-200">
      <h1 className="font-medium text-lg border-b pb-5">Details:</h1>
      <div className="item-style">
        <div className="text-muted-foreground">Door to door</div>
        <div>{parseFloat(data?.data?.attributes?.cost?.mile??0)?.toFixed(2)} mi</div>
      </div>

      <div className="item-style">
        <div className="text-muted-foreground">First avail. date</div>
        <div>{format(infoData?.dateInfo?.date, "dd/MM/yyyy")}</div>
      </div>

      <div className="item-style">
        <div className="text-muted-foreground">Vehicle</div>
        <div>{infoData?.vehicleInfo?.year}, {infoData?.vehicleInfo?.model?.make} {infoData?.vehicleInfo?.model?.model}</div>
      </div>

      <div className="item-style">
        <div className="text-muted-foreground">Ship from</div>
        <div>
          {infoData?.zipInfo?.source?.state}, {infoData?.zipInfo?.source?.state_abbreviation} {infoData?.zipInfo?.source?.zipcode}
        </div>
      </div>

      <div className="item-style">
        <div className="text-muted-foreground">Ship to</div>
        <div>
          {infoData?.zipInfo?.destination?.state}, {infoData?.zipInfo?.destination?.state_abbreviation} {infoData?.zipInfo?.destination?.zipcode}
        </div>
      </div>

      {/* <div className="item-style">
        <div className="text-muted-foreground">Vehicle condition</div>
        <div>{infoData?.transportType}</div>
      </div> */}

      <div className="item-style">
        <div className="text-muted-foreground">Transport type</div>
        <div>{infoData?.transportType}</div>
      </div>

      <div className="item-style">
        <div className="text-muted-foreground">Insurance</div>
        <div>Included</div>
      </div>

      <div className="item-style">
        <div className="text-muted-foreground">Transit time</div>
        <div>3-5 days</div>
      </div>

      <div className="item-style py-5 bg-secondary mb-2">
        <div className="text-muted-foreground">Due now</div>
        <div className="flex items-center gap-3">
          <span className="text-4xl font-semibold">$0</span> <span className="text-xs font-light">Don't worry - you won't pay until your pickup is scheduled</span>
        </div>
      </div>
      <div className="item-style py-5 bg-secondary">
        <div className="text-muted-foreground">Price option</div>
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold">
            {/* $ {JSON.parse(localStorage.getItem("starter") ?? "{}")?.attributes?.cost ?? 0} */}
            {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(data?.data?.attributes?.cost?.calculatedCost ?? 0)}
          </span>{" "}
          <span className="text-xs font-light">Regular price</span>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
