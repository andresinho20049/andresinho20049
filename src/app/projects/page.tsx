import { FooterComponent } from "@/components/footer/footer";
import { HeaderNav } from "@/components/header/header_nav";
import { HeroBlockWithImage } from "@/components/hero-block/hero-with-image";
import { ShowcaseChooseUs } from "@/components/hero-block/showcase-chose-us";
import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function Projects() {
  return (
    <section className="flex flex-col justify-start items-center h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth">
      <nav className="snap-start w-full">
        <HeaderNav />
      </nav>
      <Image
        alt="Timeline Art"
        src="/background/ProjectsCover.png"
        width={1024}
        height={720}
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
      <div className="snap-start w-full">
        <ShowcaseChooseUs />
        <FooterComponent />
      </div>
    </section>
  );
}
