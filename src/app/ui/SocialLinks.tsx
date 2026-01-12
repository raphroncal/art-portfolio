"use client";

import Link from "next/link";
import { LinkComponent } from "./LinkComponent";
import { EmailIcon } from "../icons/EmailIcon";
import { socials } from "../lib/socials";
import { toast } from "sonner";

export const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <LinkComponent social={socials.instagram} />
      <LinkComponent social={socials.tiktok} />
      <button
        onClick={() => {
          navigator.clipboard.writeText("petarht14@gmail.com");
          toast.info("Email copied.");
        }}
      >
        <EmailIcon />
      </button>
    </div>
  );
};
