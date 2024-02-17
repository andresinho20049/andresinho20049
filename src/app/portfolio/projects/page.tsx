import { HeroBlockWithImage } from "@/components/hero-block/hero-with-image";
import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects",
  description: "As a developer, I demonstrate some of the projects developed"
};

export default async function Projects() {
  return (
    <section className="snap-start">
      <Image
        alt="Timeline Art"
        src="/background/ProjectsCover.png"
        width={1024}
        height={720}
        className="mx-auto"
      />
      <article className="grid gap-4 ">
        {allProjects
          .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
          .map((proj, idx) => (
            <div key={idx} className="snap-center snap-always">
              <HeroBlockWithImage
                _id={proj._id}
                _raw={proj._raw}
                title={proj.title}
                description={proj.description}
                date={proj.date}
                body={proj.body}
                imgSrc={proj.imgSrc}
                slug={proj.slug}
                slugAsParams={proj.slugAsParams}
                type={proj.type}
              />
            </div>
          ))}
      </article>
    </section>
  );
}
