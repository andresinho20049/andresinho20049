import { RecommendedProjects } from "@/components/cards/cardProject";
import { AdsenseComponent } from "@/components/google/AdsenseComponent";
import { TimelineComponent } from "@/components/timeline/TimelineComponent";
import { Metadata } from "next";
import Image from "next/image";

export const metadata:Metadata = {
  title: "About Me"
}

export default function About() {
  return (
    <section className="max-w-xs sm:max-w-sm md:max-w-full mx-auto">
      <div className="mb-10">
        <Image
          className="dark:hidden block"
          alt="Timeline Art"
          src="/background/timelineC.png"
          width={1920}
          height={1080}
        />
        <Image
          className="dark:block hidden"
          alt="Timeline Art"
          src="/background/timelineC_darkM.png"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="container">
          <TimelineComponent />
        </div>

        <AdsenseComponent />
      </div>
      <RecommendedProjects />
    </section>
  );
}
