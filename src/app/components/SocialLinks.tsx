import Link from "next/link";
import { LinkComponent } from "./LinkComponent";
import { EmailIcon } from "../icons/EmailIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { TikTokIcon } from "../icons/TikTokIcon";

export type TSocial = {
  link: string;
  Icon: React.FC;
};

export const SocialLinks = () => {
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
    <div className="flex justify-center items-center gap-x-2">
      <LinkComponent social={socials.instagram} />
      <LinkComponent social={socials.tiktok} />
      <Link href="mailto:petarht14@gmail.com">
        <EmailIcon />
      </Link>
    </div>
  );
};
