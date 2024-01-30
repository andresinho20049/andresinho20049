import { FaDev } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { BsDatabase } from "react-icons/bs";



export const ShowcaseChooseUs = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-transparent to-30%">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10 "
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why choose me
          </span>
          <h2 className="block w-full text-white font-bold text-3xl sm:text-4xl">
            Build a solution for your customer
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            I am a versatile professional. While I have my preferred
            technologies, I am not limited by them. I have experience working
            with diverse teams and tools on various projects and solutions.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md border border-blue-800 p-8 text-center shadow">
            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
              <FaDev />
            </div>
            <h3 className="mt-6 font-semibold text-gray-800 dark:text-gray-600">
              Back-end
            </h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              I have extensive experience in backend development, particularly
              with Java. I have worked on developing various solutions and
              integrating external services.
            </p>
          </div>

          <div className="rounded-md border border-blue-800 p-8 text-center shadow">
            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
              <MdOutlineDeveloperMode />
            </div>
            <h3 className="mt-6 font-semibold text-gray-800 dark:text-gray-600">
              Front-end
            </h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              I have experience working on vanilla projects with HTML, CSS, JS,
              and Node.js, as well as their popular frameworks including
              Angular, React, and Next.js.
            </p>
          </div>

          <div className="rounded-md border border-blue-800 p-8 text-center shadow">
            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
              <BsDatabase />
            </div>
            <h3 className="mt-6 font-semibold text-gray-800 dark:text-gray-600">
              Database
            </h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              I have expertise in SQL, working with different databases, and
              developing procedures for dashboard calculations. I have also
              worked on report extraction projects with high data volume.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full"
          //   style="background-image: linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%); border-color: rgba(92, 79, 240, 0.2);"
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          //   style="background-image: linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%); border-color: rgba(92, 79, 240, 0.2);"
        ></div>
      </section>
    </div>
  );
};