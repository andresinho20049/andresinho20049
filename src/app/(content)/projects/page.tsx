import { allProjects } from "contentlayer/generated";
import { Button, Card, CustomFlowbiteTheme } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const customTheme: CustomFlowbiteTheme["card"] = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-fill md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};

export default async function OutifitPage() {
  return (
    <section className="flex flex-col justify-start items-center ">
      <Image
        alt="Timeline Art"
        src="/background/ProjectsCover.png"
        width={1024}
        height={720}
      />
      <article className="grid md:grid-cols-2 gap-4 ">
        {allProjects
          .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
          .map((proj, idx) => (
            <Card key={idx} imgSrc={proj.imgSrc} horizontal theme={customTheme}>
              <div className="flex flex-col gap-2 h-full">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {proj.title}
                </h5>
                <div className="h-full my-auto">
                  <p className="font-normal text-gray-700 dark:text-gray-400 clear-right text-justify text-pretty whitespace-pre-line">
                    {proj.description}
                  </p>
                </div>
                <p className="font-light text-sm text-gray-500 dark:text-gray-300 opacity-25">
                  <strong>Publicated: </strong>
                  {proj.date.substring(0, 10)}
                </p>

                <Button
                  outline
                  gradientDuoTone="purpleToPink"
                  href={`projects/${proj.slug.split("/").pop()}`}
                  className="transition duration-150 ease-out hover:ease-in"
                >
                  See More
                  <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>
          ))}
      </article>
    </section>
  );
}
