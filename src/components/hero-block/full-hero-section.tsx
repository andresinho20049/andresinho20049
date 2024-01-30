import Image from "next/image";
import { AndresinhoSvg } from "../svg/andresinho20049";
import Link from "next/link";

export interface IFullHeroSectionProps {
  title: string;
  msg: string;
  urlLink: string;
}

export const FullHeroSection = ({
  title,
  msg,
  urlLink,
}: IFullHeroSectionProps) => {
  return (
    <div className="flex flex-wrap h-screen border-t-4 dark:border-0">
      <div className="flex flex-col justify-between w-full h-full lg:w-8/12">
        <nav className="flex px-4 justify-between items-center">
          <div className="landscape:size-12 landscape:lg:size-28 size-28">
            <AndresinhoSvg />
          </div>
        </nav>
        <section className="px-4 flex items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Would you like to <span className="text-blue-700">know me</span>{" "}
              better?
            </h1>
            <div className="w-20 h-2 bg-blue-700 my-4"></div>
            <p className="text-md lg:text-xl mb-5 lg:mb-16">{msg}</p>
            <div>
              <Link
                href={urlLink}
                className="outline outline-pink-500 hover:outline-pink-300 dark:text-white dark:hover:text-gray-400 hover:text-gray-400 text-gray-900 text-2xl font-medium px-4 py-2 rounded shadow"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="hidden lg:flex h-full w-4/12 px-2 items-end">
        <Image
          width={894}
          height={1280}
          src="/avatar/me-and-family.png"
          alt="Leafs"
          className="object-contain"
        />
      </div>
    </div>
  );
};
