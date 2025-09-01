import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { baskervville } from "@/assets/fonts/fonts";

type ArtCategoryProps = {
  link: string;
  thumbnail: StaticImageData;
  label: string;
  altText: string;
};
export const ArtCategory: React.FC<ArtCategoryProps> = ({
  link,
  thumbnail,
  label,
  altText,
}) => {
  return (
    <Link
      href={link}
      className="group relative flex justify-center items-center"
    >
      <Image
        src={thumbnail}
        alt={altText}
        className="w-[240px] h-[320px] object-cover"
      />

      <div className="w-[240px] h-[320px] absolute bg-white opacity-0 group-hover:opacity-70 transition-all delay-0 ease-in" />

      <div className="absolute opacity-0 group-hover:opacity-100 transition-all delay-0 ease-in">
        <p className={`${baskervville.className} text-3xl`}>{label}</p>
      </div>
    </Link>
  );
};
