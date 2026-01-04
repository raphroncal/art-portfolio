import Link from "next/link";
import { BackArrowIcon } from "../icons/BackArrowIcon";

export default function WorksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col p-10 gap-5">
      <Link href="/">
        <div className="flex gap-3 items-center">
          <BackArrowIcon />

          <p className="text-xl">Back</p>
        </div>
      </Link>
      <div className="px-64">{children}</div>
    </section>
  );
}
