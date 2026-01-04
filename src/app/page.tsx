"use client";

import Image from "next/image";
import avatar from "@/assets/avatar.png";
import banner from "@/assets/home/banner.png";
import { artworks } from "./lib/artworks";
import { ArtCategory } from "./ui/home/ArtCategory";
import { allison, baskervville } from "@/assets/fonts/fonts";
import { NavigationBar } from "./ui/NavigationBar";

export default function Home() {
  const { branding, charcoal, commission, exploration } = artworks;
  const categories = [
    {
      link: "/works/branding",
      thumbnail: branding[3],
      label: "Branding",
      altText: "Illustrations made for branding.",
    },
    {
      link: "/works/charcoal",
      thumbnail: charcoal[0],
      label: "Charcoal",
      altText: "Charcoal illustrations.",
    },
    {
      link: "/works/commissions",
      thumbnail: commission[4],
      label: "Commissions",
      altText: "Commissioned art.",
    },
    {
      link: "/works/exploration",
      thumbnail: exploration[0],
      label: "Self-exploration",
      altText: "Self exploratory works.",
    },
  ];

  return (
    <div className="flex flex-col pb-60 items-center gap-10">
      <NavigationBar />

      <div className="h-80 w-full relative">
        <Image src={banner} alt="banner art" layout="fill" objectFit="cover" />
      </div>

      <div className="flex flex-col items-center gap-y-6">
        <div className="flex flex-col items-center gap-y-2">
          <Image
            src={avatar}
            alt="petarht profile icon"
            width={180}
            height={180}
            className="rounded-full"
          />
          <p className={`${allison.className} text-5xl/9`}>petarht</p>
        </div>

        <p
          className={`${baskervville.className} text-sm/4 text-pretty w-[460px] text-center`}
        >
          Hi, I’m Petarht! A Filipina artist who loves to play around with all
          kinds of mediums. Still, I have my own little specialties that make my
          art uniquely me. Now, come and take a stroll through my works!
        </p>
      </div>

      <div className="flex gap-5">
        {categories.map((category, index) => {
          const { link, thumbnail, label, altText } = category;

          return (
            <ArtCategory
              link={link}
              thumbnail={thumbnail}
              label={label}
              altText={altText}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
