import { Projects } from "contentlayer/generated";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export const HeroBlockWithImage = (proj: Projects) => {
  return (
    <div className="flex px-6 md:px-20  items-center justify-center bg-hero md:h-screen">
      <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div className="order-last lg:order-first w-full lg:pr-32">
          <h2 className="hidden lg:block text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium animate-title">
            {proj.title}
          </h2>
          <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed animate-fade-in">
            {proj.description}
          </h3>
          <div className="mt-10 flex flex-row justify-start animate-fade-in">
            <Button
              outline
              gradientDuoTone="purpleToPink"
              href={`/projects/${proj.slug.split("/").pop()}`}
              className="transition duration-150 ease-out hover:ease-in"
            >
              See More
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="order-first lg:order-last w-full md:w-1/2 ">
          <div className="lg:hidden sticky top-0 drop-shadow-lg bg-blend-difference backdrop-blur-md">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
              {proj.title}
            </h2>
          </div>
          <div>
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
