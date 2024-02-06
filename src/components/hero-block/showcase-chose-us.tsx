import { BsDatabase } from "react-icons/bs";
import { FaDev } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { LinkAppearanceButton } from "../button/link-appearance-button";
import { CiMail } from "react-icons/ci";
import { Avatar } from "flowbite-react";



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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex
            assumenda quasi harum, minima, esse culpa ea eos recusandae pariatur
            itaque dolorum error commodi illo, temporibus aperiam soluta animi
            possimus?
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md border border-blue-800 p-8 text-center shadow">
            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
              <FaDev />
            </div>
            <h3 className="mt-6 font-semibold text-gray-800 dark:text-gray-600">
              Skill 1
            </h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex
              assumenda quasi harum, minima, esse culpa ea eos recusandae
              pariatur itaque dolorum error commodi illo, temporibus aperiam
              soluta animi possimus?
            </p>
          </div>

          <div className="rounded-md border border-blue-800 p-8 text-center shadow">
            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
              <MdOutlineDeveloperMode />
            </div>
            <h3 className="mt-6 font-semibold text-gray-800 dark:text-gray-600">
              Skill 2
            </h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex
              assumenda quasi harum, minima, esse culpa ea eos recusandae
              pariatur itaque dolorum error commodi illo, temporibus aperiam
              soluta animi possimus?
            </p>
          </div>

          <div className="rounded-md border border-blue-800 p-8 text-center shadow">
            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border ">
              <BsDatabase />
            </div>
            <h3 className="mt-6 font-semibold text-gray-800 dark:text-gray-600">
              Skill 3
            </h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis commodi, dicta at dolorem molestiae corrupti, dolorum tempore ratione architecto facere voluptates provident aperiam quo autem ipsa aut excepturi vero.
            </p>
          </div>

          <div className="sm:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2 md:border-r">
              <Avatar img="/Logo.png" alt="My Logo" />
              <span className="self-center whitespace-nowrap text-sm md:text-xl font-semibold dark:text-white mr-4">
                Andrésinho20049
              </span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 dark:text-gray-600">
                Please feel free to contact us anytime,{" "}
              </h3>
              <p className="font-normal leading-relaxed tracking-wide text-gray-400">
                as we are more than happy to assist you in any way we can.
              </p>
            </div>

            <LinkAppearanceButton href="/contact">
              <CiMail className="h-8" />
              <span className="font-light leading-relaxed tracking-wider">
                Contact Us
              </span>
            </LinkAppearanceButton>
          </div>
        </div>
      </section>
    </div>
  );
};
