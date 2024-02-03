import Image from "next/image";
import Link from "next/link";

export const SeeMyWorks = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
      <div className="hidden lg:block w-1/2 h-auto">
        <Image
          width={1200}
          height={1800}
          className="h-full w-full object-cover"
          src="/cards/responsive_presentation.png"
          alt="Winding mountain road"
        />
      </div>
      <div className="w-full bg-white lg:z-10 lg:shadow-lg lg:absolute lg:top-0 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-2xl font-medium uppercase text-gray-800 lg:text-4xl">
            See my <strong className="text-blue-700">Works</strong>
          </h2>
          <p className="mt-4 text-gray-500">
            I have worked extensively in multinational IT consultancies, where
            I have been involved in several projects that utilize Scrum
            methodologies. I am familiar with terms related to releases,
            scalability, CRQ, and deploy. I have also had the pleasure of having
            my projects validated by experienced QA teams, and achieving the
            satisfaction of seeing them running seamlessly in production.
          </p>
          <div className="mt-8">
            <Link
              href="/projects"
              className="inline-block w-full text-center text-lg font-medium text-blue-700 border-blue-700 border-solid border-2 py-4 hover:scale-[1.2] px-10 hover:text-blue-400 hover:border-blue-400 rounded hover:shadow-md md:w-48"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
