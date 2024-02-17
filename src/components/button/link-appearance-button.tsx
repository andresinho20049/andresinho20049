import Link from "next/link";
import { ReactNode } from "react";

interface ILinkAppearanceButtonProps {
  children: ReactNode;
  href: string;
  isBlank?: boolean;
}

export const LinkAppearanceButton = ({
  children,
  href,
  isBlank,
}: ILinkAppearanceButtonProps) => {
  return (
    <Link
      className="flex items-center justify-center gap-1 text-white hover:text-gray-400 bg-blue-700 hover:bg-blue-500 transition-colors duration-200 ease-in dark:bg-transparent text-md font-medium px-4 py-1 border-2 border-blue-200 border-y-blue-500 hover:border-y-blue-200 transition-colors rounded-md"
      href={href}
      target={isBlank ? "_blank" : ""}
      rel={isBlank ? "noopener noreferrer" : ""}
    >
      {children}
    </Link>
  );
};
