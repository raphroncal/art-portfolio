import Image from "next/image";
import { artworks } from "../lib/artworks";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Gallery = () => {
  const { branding, charcoal, commission, exploration } = artworks;

  return (
    <ScrollArea className="h-[100dvh]">
      <div className="flex-grow">
        <div className="columns-3 gap-2">
          {charcoal.map((art, index) => (
            <div key={index}>
              <Image className="mb-2" src={art} alt="charcoal art by petarht" />
            </div>
          ))}
          {branding.map((art, index) => (
            <div key={index}>
              <Image className="mb-2" src={art} alt="branding art by petarht" />
            </div>
          ))}
          {commission.map((art, index) => (
            <div key={index}>
              <Image className="mb-2" src={art} alt="commission art" />
            </div>
          ))}
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
      </div>
    </ScrollArea>
  );
};
