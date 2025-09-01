import Image from "next/image";
import { artworks } from "@/app/lib/artworks";

export default function Charcoal() {
  const { charcoal } = artworks;

  return (
    <div className="columns-3 gap-2">
      {charcoal.map((art, index) => (
        <div key={index}>
          <Image className="mb-2" src={art} alt="charcoal art by petarht" />
        </div>
      ))}
    </div>
  );
}
