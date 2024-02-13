"use client";

import { usePathname } from "next/navigation";
import { LinkTabs } from "../button/link-tab";

interface ITabsPortfolio {
  name: string;
  href: string;
}

export const CardResume = () => {
  const pathname = usePathname();

  const listTab: ITabsPortfolio[] = [
    {
      name: "Resume",
      href: "",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Timeline",
      href: "/timeline",
    },
    {
      name: "Jobs",
      href: "/jobs",
    },
  ];

  return (
    <div className="shadow rounded-lg pb-6 md:sticky top-0 bg-gray-50 dark:bg-gray-800">
      <div className="flex flex-col items-center p-6 ">
        <img
          src="/team/andresinho.jpg"
          className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
        ></img>
        <h1 className="text-xl font-bold">André Carlos</h1>
        <p className="text-gray-700 dark:text-gray-600">Software Developer</p>
      </div>
      {/* <hr className="my-6 border-t border-gray-300"> */}
      <div className="flex flex-col">
        {listTab.map((tab) => (
          <LinkTabs
            key={tab.href}
            href={`/portfolio${tab.href}`}
            isActive={`/portfolio${tab.href}` === pathname}
          >
            {tab.name}
          </LinkTabs>
        ))}
      </div>
    </div>
  );
};
