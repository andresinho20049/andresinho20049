import { SocialMediaComponent } from "@/components/footer/SocialMedia";
import { myResume } from "@/utils/resumeValue";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GrDocumentPdf } from "react-icons/gr";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default async function portfolio() {
  const {
    name,
    objective,
    summary,
    language,
    academic,
    experience,
    skills,
    badges,
  } = myResume;

  return (
    <section className="snap-start w-full py-6">
      <div className="rounded-lg shadow-md overflow-hidden max-w-screen-lg mx-auto dark:shadow-gray-700 p-4">
        <div className="w-full flex justify-end">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://drive.usercontent.google.com/uc?id=1Mgv1u0vVhgr8khxf-O6pjcl2CcLL8063&export=download"
            }
            aria-label="Download PDF"
            title="Download PDF"
            className="bg-transparent h-8 w-8 rounded-md flex justify-center items-center hover:border border-blue-700"
          >
            <GrDocumentPdf size={22} />
          </Link>
        </div>
        <div className="prose dark:prose-invert mx-auto select-none">
          {/* <h2 className="text-xl font-semibold my-1 text-center">{name}</h2> */}
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">{name}</h2>
              <p className="text-sm dark:text-gray-400 text-gray-600">
                {objective}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <SocialMediaComponent />
              <p className="mb-1 select-all">@andresinho20049</p>
              <p className="text-sm dark:text-gray-400 text-gray-600 my-0">
                All Social Media
              </p>
            </div>
          </div>
          <div className="flex flex-nowrap gap-1 no-visible-scroll overflow-x-auto">
            <Image
              alt={"HTML5"}
              width={36}
              height={36}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              title="HTML5"
            />
            <Image
              alt={"CSS3"}
              width={36}
              height={36}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              title="CSS3"
            />
            <Image
              alt={"JAVASCRIPT"}
              width={36}
              height={36}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              title="JAVASCRIPT"
            />
            <Image
              alt={"TYPESCRIPT"}
              width={36}
              height={36}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              title="TYPESCRIPT"
            />
            <Image
              alt={"GIT"}
              width={36}
              height={36}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              title="GIT"
            />
            <Image
              alt={"JAVA"}
              width={36}
              height={36}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              title="JAVA"
            />
            <Image
              alt={"SPRING-BOOT"}
              width={36}
              height={36}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
              title="SPRING-BOOT"
            />
            <Image
              alt={"ANDROID"}
              width={36}
              height={36}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
              title="ANDROID"
            />
            <Image
              alt={"POSTGRES"}
              width={36}
              height={36}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              title="POSTGRES"
            />
            <Image
              alt={"ANGULAR"}
              width={36}
              height={36}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
              title="ANGULAR"
            />
            <Image
              alt={"REACT"}
              width={36}
              height={36}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              title="REACT"
            />
            <Image
              alt={"NEXTJS"}
              width={36}
              height={36}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              title="NEXTJS"
            />
            <Image
              alt={"PYTHON"}
              width={36}
              height={36}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              title="PYTHON"
            />
            <Image
              alt={"DOCKER"}
              width={36}
              height={36}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              title="DOCKER"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-widest mb-2">
              Summary
            </h3>
            <p className="text-sm leading-relaxed text-justify">{summary}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold tracking-widest mb-2">
              Language
            </h3>
            <ul className="list-disc list-inside text-sm">
              {language.map((lang) => (
                <li key={lang.name}>
                  {lang.name}: {lang.proficiency}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold tracking-widest mb-2">
              Academic background
            </h3>
            <ul className="list-disc list-inside text-sm">
              {academic.map((ac) => (
                <li key={ac.degree}>
                  {!!ac.link ? (
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:decoration-blue-700 hover:opacity-50"
                      href={ac.link}
                    >
                      {ac.degree}: {ac.organization} - {ac.conclusion}
                    </Link>
                  ) : (
                    <span>
                      {ac.degree}: {ac.organization} - {ac.conclusion}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold tracking-widest mb-2">
              Experience
            </h3>
            {experience.map((exp) => (
              <div key={exp.company}>
                <h4 className="text-md font-light">{exp.company}</h4>
                <p className="text-sm dark:text-gray-400 text-gray-600">
                  {exp.position} | {exp.period}
                </p>
                <ul className="list-disc list-inside text-sm">
                  {exp.keyResponsability.map((res, idx) => (
                    <li key={`${exp.company}-${idx}`}>{res}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold tracking-widest mb-2">
              Skills
            </h3>
            <ul className="list-disc list-inside text-sm">
              {skills.map((skill) => (
                <li key={skill.category}>
                  {skill.category}
                  <ul className="list-decimal list-inside text-sm">
                    {skill.skills.map((s) => (
                      <li key={s}>
                        <span className="notranslate">{s}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold tracking-widest mb-2">
              Badges
            </h3>
            <ul className="list-disc list-inside text-sm">
              {badges.map((badge) => (
                <li key={badge.name}>
                  {!!badge.link ? (
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:decoration-blue-700 hover:opacity-50"
                      href={badge.link}
                    >
                      {badge.name}
                    </Link>
                  ) : (
                    <span>{badge.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
