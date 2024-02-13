import { Projects } from "contentlayer/generated";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import { LinkAppearanceButton } from "../button/link-appearance-button";

export const HeroBlockWithImage = (proj: Projects) => {
  return (
    <div className="flex items-center justify-center bg-hero h-screen">
      <div className="flex flex-col gap-4 landscape:flex-row items-center max-w-8xl">
        <div className="order-last landscape:order-first w-full md:pr-32">
          <h2 className="hidden landscape:block text-2xl lg:text-5xl text-center text-left text-blue-900 leading-tight font-medium animate-title">
            {proj.title}
          </h2>
          <h3 className="mt-2 md:mt-10 text-md md:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed animate-fade-in">
            {proj.description}
          </h3>
          <div className="mt-6 flex flex-row justify-start animate-fade-in">
            <LinkAppearanceButton
              href={`/projects/${proj.slug.split("/").pop()}`}
            >
              See More
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </LinkAppearanceButton>
          </div>
        </div>

        <div className="order-first landscape:order-last w-full landscape:w-1/2 ">
          <div className="landscape:hidden drop-shadow-lg bg-blend-difference backdrop-blur-md">
            <h2 className="text-2xl  text-center text-blue-900 leading-tight font-medium">
              {proj.title}
            </h2>
          </div>
          <div className="w-1/2 landscape:w-full mx-auto">
            <Image
              src={proj.imgSrc}
              alt={proj.title}
              width={1080}
              height={1920}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
