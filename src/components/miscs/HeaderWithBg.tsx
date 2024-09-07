import { Square } from "lucide-react";

const HeaderWithBg = ({ title = "", bg_image = "", sub_title = "" }) => {
  return (
    <div
      className="main-x-p py-24 px-44 bg-center bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: `url(${bg_image})`,
      }}
    >
      <div className="relative z-20">
        <div className="text-3xl font-semibold mb-4">{title}</div>

        <div className="text-xl font-semibold flex items-center gap-3">
          <span>Home</span>
          <Square size={8} fill="#000" />
          <span>{sub_title?.length > 0 ? sub_title : title}</span>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-white/70 z-10" />
    </div>
  );
};

export default HeaderWithBg;
