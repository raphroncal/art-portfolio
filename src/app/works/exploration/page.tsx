import Image from "next/image";
import { artworks } from "@/app/lib/artworks";

export default function Exploration() {
  const { exploration } = artworks;

  return (
    <div className="columns-3 gap-2">
      {exploration.map((art, index) => (
        <div key={index}>
          <Image
            className="mb-2"
            src={art}
            alt="self-exploration art by petarht"
          />
        </div>
      ))}
    </div>
  );
}
