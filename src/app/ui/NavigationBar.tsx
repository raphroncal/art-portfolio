import Link from "next/link";

export const NavigationBar = () => {
  return (
    <div className="z-10 font-inter flex w-full px-10 py-10 gap-12 bg-gradient-to-b from-black/75 to-transparent fixed">
      <Link href="/" className="text-white">
        petarht
      </Link>
      <div className="flex gap-10">
        <Link href="/" className="text-white">
          Works
        </Link>
        <Link href="/about" className="text-white">
          About
        </Link>
        <Link href="/contact" className="text-white">
          Contact
        </Link>
      </div>
    </div>
  );
};
