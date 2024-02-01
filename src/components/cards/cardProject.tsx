import { Projects, allProjects } from "contentlayer/generated";
import { Card, CustomFlowbiteTheme } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { LinkAppearanceButton } from "../button/link-appearance-button";

const customTheme: CustomFlowbiteTheme["card"] = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full max-w-xl flex-col justify-center gap-4 p-6",
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

export const CardProject = (proj: Projects) => {
  return (
    <Card imgSrc={proj.imgSrc} horizontal theme={customTheme}>
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

        <LinkAppearanceButton
          href={`/projects/${proj.slug.split("/").pop()}`}
        >
          See More
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </LinkAppearanceButton>
      </div>
    </Card>
  );
};

export interface IRecommendedProjectsProps {
  qtde?: number;
  exclusion?: string;
}

export const RecommendedProjects = ({
  qtde = 2,
  exclusion,
}: IRecommendedProjectsProps) => {
  const listProjects = !!exclusion
    ? allProjects.filter((proj) => proj.title !== exclusion)
    : allProjects;

  const getRandom = (list: Projects[]) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  const getRecommendedProjects = () => {
    let listRcommendedProjects: Projects[] = [];
    for (let index = 0; index < qtde; index++) {
      let proj: Projects = {} as Projects;
      let includedsProj: string[] = [];

      do {
        proj = getRandom(listProjects);
      } while (includedsProj.includes(proj.title));

      listRcommendedProjects.push(proj);
      includedsProj.push(proj.title);
    }

    return listRcommendedProjects;
  };

  return (
    <div className="my-4 drop-shadow-lg bg-blend-difference backdrop-blur-md">
      <h3 className="font-mono text-lg md:text-4xl font-semibold tracking-wider	line-clamp-2 text-center">
        Recommended projects
      </h3>
      <div className=" lg:container lg:mx-auto grid md:grid-cols-2 gap-2 py-4  justify-items-center h-92">
        {getRecommendedProjects().map((proj, idx) => (
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
      </div>
    </div>
  );
};
