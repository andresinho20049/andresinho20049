import Image from "next/image";
import { LinkAppearanceButton } from "../button/link-appearance-button";
import { AndresinhoSvg } from "../svg/andresinho20049";
import { ReactNode } from "react";

export interface IFullHeroSectionProps {
  title: string | ReactNode;
  msg: string;
  urlLink: string;
  imgSrc: string;
}

export const FullHeroSection = ({
  title,
  msg,
  urlLink,
  imgSrc
}: IFullHeroSectionProps) => {
  return (
    <div className="flex flex-wrap h-screen">
      <div className="flex flex-col justify-between w-full h-full lg:w-8/12">
        <nav className="flex px-4 justify-between items-center">
          <div className="landscape:size-12 landscape:lg:size-28 size-28">
            <AndresinhoSvg />
          </div>
        </nav>
        <section className="px-4 flex items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold">
              {title}
            </h1>
            <div className="w-36 h-2 bg-blue-700 my-4"></div>
            <p className="text-md lg:text-xl mb-5 lg:mb-16">{msg}</p>
            <div className="w-36">
              <LinkAppearanceButton href={urlLink}>
                Learn More
              </LinkAppearanceButton>
            </div>
          </div>
        </section>
      </div>
      <div className="hidden lg:flex h-full w-4/12 px-2 items-end">
        <Image
          width={894}
          height={1280}
          src={imgSrc}
          alt="Ilustrate Image"
          className="object-contain"
        />
      </div>
    </div>
  );
};
