import Image, { StaticImageData } from "next/image";

type GalleryProps = {
  artworks: StaticImageData[];
};

export const Gallery: React.FC<GalleryProps> = ({ artworks }) => {
  return (
    <div className="columns-3 gap-2 w-[800px]">
      {artworks.map((artwork, index) => (
        <div key={index}>
          <Image className="mb-2" src={artwork} alt="digital art by petarht" />
        </div>
      ))}
    </div>
  );
};
