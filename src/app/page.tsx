"use client";

import { Profile } from "./panels/Profile";
import { Art } from "./panels/Art";

export default function Home() {
  return (
    <div className="flex">
      <Profile />
      <Art />
    </div>
  );
}
