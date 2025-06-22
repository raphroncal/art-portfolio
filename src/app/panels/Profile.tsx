import Image from "next/image";
import Link from "next/link";
import { Allison } from "next/font/google";
import avatar from "@/assets/avatar.png";
import { SocialLink } from "../components/SocialLink";
import { CopyrightIcon } from "../icons/CopyrightIcon";
import { EmailIcon } from "../icons/EmailIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { TikTokIcon } from "../icons/TikTokIcon";

const allison = Allison({
  variable: "--font-carattere",
  subsets: ["latin"],
  weight: "400",
});

export type TSocial = {
  link: string;
  Icon: React.FC;
};

export const Profile = () => {
  const socials = {
    instagram: {
      link: "https://www.instagram.com/petarht/",
      Icon: InstagramIcon,
    } as TSocial,
    tiktok: {
      link: "https://www.tiktok.com/@petarht?_t=8sUMxkU3MBz&_r=1",
      Icon: TikTokIcon,
    } as TSocial,
  };

  return (
    <div className="flex flex-col justify-between px-10 lg:px-20 pt-20 pb-10 w-[30%] h-screen bg-white text-center">
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex flex-col">
          <Image
            src={avatar}
            alt="petarht profile icon"
            width={84}
            height={84}
            className="rounded-full"
          />
          <p className={`${allison.className} text-5xl/9`}>petarht</p>
        </div>

        <p className="text-sm/4 text-pretty">
          Hi! Im Petarht, an illustrator based in the Philippines. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Fusce luctus.
        </p>

        <div className="flex justify-center items-center gap-x-2">
          <SocialLink social={socials.instagram} />
          <SocialLink social={socials.tiktok} />
          <Link href="mailto:petarht14@gmail.com">
            <EmailIcon />
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center gap-1">
        <CopyrightIcon />
        <p className="text-xs">2025 petarht</p>
      </div>
    </div>
  );
};
