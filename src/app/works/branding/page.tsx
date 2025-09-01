import Image from "next/image";
import { artworks } from "@/app/lib/artworks";

export default function Branding() {
  const { branding } = artworks;

  return (
    <div className="columns-3 gap-2">
      {branding.map((art, index) => (
        <div key={index}>
          <Image className="mb-2" src={art} alt="branding art by petarht" />
        </div>
      ))}
    </div>
  );
}
