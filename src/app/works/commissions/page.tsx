import Image from "next/image";
import { artworks } from "@/app/lib/artworks";

export default function Commissions() {
  const { commission } = artworks;

  return (
    <div className="columns-3 gap-2">
      {commission.map((art, index) => (
        <div key={index}>
          <Image className="mb-2" src={art} alt="commission art" />
        </div>
      ))}
    </div>
  );
}
