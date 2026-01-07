import Image from "next/image";
import { NavigationBar } from "../ui/NavigationBar";
import avatar from "@/assets/avatar.png";
import { nothing, baskervville } from "@/assets/fonts/fonts";

export default function About() {
  return (
    <div>
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
          className={`${baskervville.className} text-sm/4 text-pretty w-[460px] text-center`}
        >
          Hi, I’m Petarht! A Filipina artist who loves to play around with all
          kinds of mediums. Still, I have my own little specialties that make my
          art uniquely me. Now, come and take a stroll through my works!
        </p>
      </div>
    </div>
  );
}
