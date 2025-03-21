"use client";

import Image from "next/image";
import Link from "next/link";
import {Allison} from "next/font/google";

const allison = Allison({
  variable: "--font-carattere",
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  // let importAll = (r) => {
  //   let images = {};
  //   r.keys().map((item: string, index: number) => { images[item.replace('../../public/art','')] = r(item); });
  //   return images;
  // }

  // const images = importAll(require.context('../../public/art', false, /\.(png|jpe?g|svg)$/));
  return (
    <div className="flex">
      <div className="flex flex-col justify-between px-10 lg:px-20 pt-20 pb-10 w-[30%] h-screen bg-white text-center">
        <div className="flex flex-col items-center gap-y-6">
          <Image
            src={"/test-images/mushroom.png"}
            alt="petarht profile icon"
            width={84}
            height={84}
            className="rounded-full"
          ></Image>
          <p className={`${allison.className} text-5xl/9`}>petarht</p>
          <p className="text-sm/4 text-pretty">
            Hi! Im Petarht, an illustrator based in the Philippines. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Fusce luctus.
          </p>
          <div className="flex justify-center items-center gap-x-2">
            <Link
              href="https://www.instagram.com/petarht/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" fill="white" />
                <path
                  d="M10.4001 2.66667H21.6001C25.8667 2.66667 29.3334 6.13334 29.3334 10.4V21.6C29.3334 23.651 28.5187 25.618 27.0684 27.0683C25.6181 28.5186 23.6511 29.3333 21.6001 29.3333H10.4001C6.13341 29.3333 2.66675 25.8667 2.66675 21.6V10.4C2.66675 8.349 3.48151 6.38199 4.93179 4.93171C6.38207 3.48143 8.34907 2.66667 10.4001 2.66667ZM10.1334 5.33334C8.86037 5.33334 7.63948 5.83905 6.7393 6.73923C5.83913 7.6394 5.33341 8.8603 5.33341 10.1333V21.8667C5.33341 24.52 7.48008 26.6667 10.1334 26.6667H21.8667C23.1398 26.6667 24.3607 26.161 25.2609 25.2608C26.161 24.3606 26.6667 23.1397 26.6667 21.8667V10.1333C26.6667 7.48 24.5201 5.33334 21.8667 5.33334H10.1334ZM23.0001 7.33334C23.4421 7.33334 23.866 7.50893 24.1786 7.82149C24.4912 8.13405 24.6667 8.55798 24.6667 9C24.6667 9.44203 24.4912 9.86596 24.1786 10.1785C23.866 10.4911 23.4421 10.6667 23.0001 10.6667C22.5581 10.6667 22.1341 10.4911 21.8216 10.1785C21.509 9.86596 21.3334 9.44203 21.3334 9C21.3334 8.55798 21.509 8.13405 21.8216 7.82149C22.1341 7.50893 22.5581 7.33334 23.0001 7.33334ZM16.0001 9.33334C17.7682 9.33334 19.4639 10.0357 20.7141 11.286C21.9644 12.5362 22.6667 14.2319 22.6667 16C22.6667 17.7681 21.9644 19.4638 20.7141 20.714C19.4639 21.9643 17.7682 22.6667 16.0001 22.6667C14.232 22.6667 12.5363 21.9643 11.286 20.714C10.0358 19.4638 9.33341 17.7681 9.33341 16C9.33341 14.2319 10.0358 12.5362 11.286 11.286C12.5363 10.0357 14.232 9.33334 16.0001 9.33334ZM16.0001 12C14.9392 12 13.9218 12.4214 13.1717 13.1716C12.4215 13.9217 12.0001 14.9391 12.0001 16C12.0001 17.0609 12.4215 18.0783 13.1717 18.8284C13.9218 19.5786 14.9392 20 16.0001 20C17.0609 20 18.0784 19.5786 18.8285 18.8284C19.5787 18.0783 20.0001 17.0609 20.0001 16C20.0001 14.9391 19.5787 13.9217 18.8285 13.1716C18.0784 12.4214 17.0609 12 16.0001 12Z"
                  fill="black"
                />
              </svg>
            </Link>
            <Link
              href="https://www.tiktok.com/@petarht?_t=8sUMxkU3MBz&_r=1"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.1333 7.76C21.2221 6.71937 20.7198 5.3832 20.72 4H16.6V20.5333C16.5688 21.4283 16.1913 22.2761 15.547 22.898C14.9028 23.5199 14.0421 23.8672 13.1466 23.8667C11.2533 23.8667 9.67997 22.32 9.67997 20.4C9.67997 18.1067 11.8933 16.3867 14.1733 17.0933V12.88C9.5733 12.2667 5.54663 15.84 5.54663 20.4C5.54663 24.84 9.22663 28 13.1333 28C17.32 28 20.72 24.6 20.72 20.4V12.0133C22.3906 13.2131 24.3965 13.8569 26.4533 13.8533V9.73333C26.4533 9.73333 23.9466 9.85333 22.1333 7.76Z"
                  fill="black"
                />
              </svg>
            </Link>
            <Link
              href="#"
              onClick={(e) => {
                window.location.href = "petarht14@gmail.com";
                e.preventDefault();
              }}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.3333 4.66667H4.66659C3.37792 4.66667 2.33325 5.71134 2.33325 7.00001V21C2.33325 22.2887 3.37792 23.3333 4.66659 23.3333H23.3333C24.6219 23.3333 25.6666 22.2887 25.6666 21V7.00001C25.6666 5.71134 24.6219 4.66667 23.3333 4.66667Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.6666 8.16667L15.2016 14.8167C14.8414 15.0423 14.425 15.162 13.9999 15.162C13.5749 15.162 13.1584 15.0423 12.7983 14.8167L2.33325 8.16667"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <svg
            width="10"
            height="10"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0.5C3.416 0.5 0.5 3.416 0.5 7C0.5 10.584 3.416 13.5 7 13.5C10.584 13.5 13.5 10.584 13.5 7C13.5 3.416 10.584 0.5 7 0.5ZM7 1.5C10.043 1.5 12.5 3.957 12.5 7C12.5 10.043 10.043 12.5 7 12.5C3.957 12.5 1.5 10.043 1.5 7C1.5 3.957 3.957 1.5 7 1.5ZM6.953 4C5.291 4 3.953 5.338 3.953 7C3.953 8.662 5.291 10 6.953 10C8.1525 10 9.178 9.281 9.656 8.2655L8.75 7.844C8.4275 8.529 7.754 9 6.953 9C5.8145 9 4.953 8.1385 4.953 7C4.953 5.8615 5.8145 5 6.953 5C7.754 5 8.428 5.4705 8.75 6.1565L9.6565 5.7345C9.1775 4.719 8.1525 4 6.9525 4H6.953Z"
              fill="black"
            />
          </svg>
          <p className="text-xs">2025 petarht</p>
        </div>
      </div>
      <div className="flex-grow bg-black text-white px-20 py-6">div</div>
    </div>
  );
}
