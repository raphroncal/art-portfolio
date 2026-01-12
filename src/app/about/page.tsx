import Image from "next/image";
import { NavigationBar } from "../ui/NavigationBar";
import avatar from "@/assets/avatar.png";
import { nothing, baskervville } from "@/assets/fonts/fonts";
import { SocialLinks } from "../ui/SocialLinks";

export default function About() {
  return (
    <div className="flex flex-col h-screen py-28 items-center gap-10">
      <NavigationBar />

      <div className="flex flex-col items-center gap-y-6">
        <div className="flex flex-col items-center gap-y-2">
          <Image
            src={avatar}
            alt="petarht profile icon"
            width={180}
            height={180}
            className="rounded-full"
          />
          <p className={`${nothing.className} text-3xl/9`}>petarht</p>
        </div>

        <p
          className={`${baskervville.className} text-sm/4 text-pretty w-[400px] text-center`}
        >
          Hi, I’m Petarht! A Filipina artist who loves to play around with all
          kinds of mediums. Still, I have my own little specialties that make my
          art uniquely me.
        </p>
      </div>

      <div className="flex gap-4">
        <SocialLinks />
      </div>
    </div>
  );
}
