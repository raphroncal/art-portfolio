"use client";

import { Profile } from "./panels/Profile";
import { Gallery } from "./panels/Gallery";

export default function Home() {
  return (
    <div className="flex">
      <Profile />
      <Gallery />
    </div>
  );
}
