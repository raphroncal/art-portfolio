"use client";

import { Profile } from "./panels/Profile";
import { Art } from "./panels/Art";

export default function Home() {
  // let importAll = (r) => {
  //   let images = {};
  //   r.keys().map((item: string, index: number) => { images[item.replace('../../public/art','')] = r(item); });
  //   return images;
  // }

  // const images = importAll(require.context('../../public/art', false, /\.(png|jpe?g|svg)$/));
  return (
    <div className="flex">
      <Profile />
      <Art />
    </div>
  );
}
