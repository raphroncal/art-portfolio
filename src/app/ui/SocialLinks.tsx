import Link from "next/link";
import { LinkComponent } from "./LinkComponent";
import { EmailIcon } from "../icons/EmailIcon";
import { socials } from "../lib/socials";

export const SocialLinks = () => {
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
