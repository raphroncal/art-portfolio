"use client";

import { artworks } from "./lib/artworks";
import { NavigationBar } from "./ui/NavigationBar";
import { Banner } from "./ui/home/Banner";
import { useCallback, useState } from "react";
import { Tab } from "./ui/home/Tab";
import { nothing } from "@/assets/fonts/fonts";
import { Gallery } from "./ui/home/Gallery";

export type TTabs = "digital" | "traditional" | "branding" | "animation";

export default function Home() {
  const [currentTab, setCurrentTab] = useState<TTabs>("digital");
  const tabs: TTabs[] = ["digital", "traditional", "branding", "animation"];

  const setTabHandler = useCallback((str: TTabs) => {
    setCurrentTab(str);
  }, []);

  return (
    <div className="flex flex-col pb-60 items-center gap-10">
      <NavigationBar />
      <Banner />

      <div className="gap-10 flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <p className={`${nothing.className} text-2xl`}>My Works</p>
          <div className="flex gap-4">
            {tabs.map((tab: TTabs) => (
              <Tab
                tabName={tab}
                currentTab={currentTab}
                handler={setTabHandler}
                key={tab}
              />
            ))}
          </div>
        </div>

        {currentTab !== "animation" ? (
          <Gallery artworks={artworks[currentTab]} />
        ) : (
          <div>This section is a work in progress. Stay tuned!</div>
        )}
      </div>
    </div>
  );
}
