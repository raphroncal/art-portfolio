import { ChevronLeft } from "@/app/icons/ChevronLeft";
import { ChevronRight } from "@/app/icons/ChevronRight";
import { CloseIcon } from "@/app/icons/CloseIcon";
import Image, { StaticImageData } from "next/image";
import { useCallback, useState } from "react";

type GalleryProps = {
  artworks: StaticImageData[];
};

export const Gallery: React.FC<GalleryProps> = ({ artworks }) => {
  const [carouselOpened, setCarouselOpened] = useState(false);
  const [artworkIndex, setArtworkIndex] = useState<number>(-1);

  const closeCarousel = useCallback(() => {
    setCarouselOpened(false);
  }, []);

  return (
    <div>
      <div className="columns-3 gap-2 w-[800px]">
        {artworks.map((artwork, index) => (
          <div key={index}>
            <Image
              className="mb-2"
              src={artwork}
              alt="digital art by petarht"
              onClick={() => {
                setArtworkIndex(index);
                setCarouselOpened(true);
              }}
            />
          </div>
        ))}
      </div>

      {carouselOpened && (
        <Carousel
          artworks={artworks}
          index={artworkIndex}
          handler={closeCarousel}
        />
      )}
    </div>
  );
};

type CarouselProps = {
  artworks: StaticImageData[];
  index: number;
  handler: () => void;
};

const Carousel: React.FC<CarouselProps> = ({ artworks, index, handler }) => {
  const [artwork, setArtwork] = useState(index);

  return (
    <div className="fixed z-10 top-0 inset-x-0 flex justify-between items-center h-dvh w-dvw p-20 bg-petahrt-white/80">
      <button
        onClick={() => setArtwork(artwork - 1)}
        disabled={index === 0}
        className="h-fit w-fit"
      >
        <ChevronLeft />
      </button>

      <div className="relative w-full h-full">
        <Image
          src={artworks[artwork]}
          alt="digital art by petarht"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <button
        onClick={() => setArtwork(artwork + 1)}
        disabled={artwork === artworks.length - 1}
        className="h-fit w-fit"
      >
        <ChevronRight />
      </button>

      <button onClick={handler} className="absolute top-10 right-10">
        <CloseIcon />
      </button>
    </div>
  );
};
