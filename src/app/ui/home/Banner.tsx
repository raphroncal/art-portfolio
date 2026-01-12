import Image from "next/image";
import banner from "@/assets/home/banner.png";

export const Banner = () => {
  return (
    <div className="h-64 w-full relative">
      <Image
        src={banner}
        alt="banner art"
        fill
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};
