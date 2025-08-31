import { InstagramIcon } from "../icons/InstagramIcon";
import { TikTokIcon } from "../icons/TikTokIcon";

export type TSocial = {
  link: string;
  Icon: React.FC;
};

export const socials = {
  instagram: {
    link: "https://www.instagram.com/petarht/",
    Icon: InstagramIcon,
  } as TSocial,
  tiktok: {
    link: "https://www.tiktok.com/@petarht?_t=8sUMxkU3MBz&_r=1",
    Icon: TikTokIcon,
  } as TSocial,
};
