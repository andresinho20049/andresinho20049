import Image from "next/image";
import Link from "next/link";
import { SocialMediaComponent } from "./SocialMedia";

export const FooterComponent = () => {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2020 + (currentYear > 2020 ? `-${currentYear}` : "");

  const copyrightName = "Andresinho20049";
  
  return (
    <div className={`bg-transparent w-full px-4 py-6`}>
      {/* <!--Copyright section--> */}
      <hr className="border-gray-200 sm:mx-auto" />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        <Image
          src="/Logo_extended.png"
          width={260}
          height={260}
          alt="Picture of the author"
        />
        <div className="flex flex-col justify-between items-center gap-4">
          <h3>Follow us</h3>
          <SocialMediaComponent />
          <hr />
          <Link
            href="https://github.com/andresinho20049"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-sm text-gray-500 text-center md:text-right">
              &copy; {copyrightDate} {copyrightName}
              {copyrightName.length && !copyrightName.endsWith(".") ? "." : ""}
              {"  "}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
