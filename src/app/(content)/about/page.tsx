import { RecommendedProjects } from "@/components/cards/cardProject";
import { AdsenseComponent } from "@/components/google/AdsenseComponent";
import { TimelineComponent } from "@/components/timeline/TimelineComponent";
import Image from "next/image";

export default function Sobre() {
  return (
    <section className="max-w-xs sm:max-w-sm md:max-w-full mx-auto">
      <div className="border-b mb-10">
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
      <TimelineComponent />
      <div className="w-full">
        <AdsenseComponent />
      </div>
      <RecommendedProjects />
    </section>
  );
}
