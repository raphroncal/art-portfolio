import Link from "next/link";
import { BackArrowIcon } from "../icons/BackArrowIcon";

export default function WorksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col p-10 gap-5">
      <div className="flex gap-3 items-center">
        <BackArrowIcon />
        <Link href="/">
          <p className="text-xl">Back</p>
        </Link>
      </div>
      <div className="px-64">{children}</div>
    </section>
  );
}
