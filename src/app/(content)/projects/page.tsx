import { CardProject } from "@/components/cards/cardProject";
import { allProjects } from "contentlayer/generated";
import Image from "next/image";

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
            <CardProject
              key={idx}
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
          ))}
      </article>
    </section>
  );
}
