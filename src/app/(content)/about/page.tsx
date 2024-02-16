import { TypewriterComponent } from "@/components/iteraction/typewriter";
import { NextSvg } from "@/components/svg/next";
import { PhotoshopSvg } from "@/components/svg/photoshop";
import { ReactExtSvg } from "@/components/svg/react";
import { TailwindExtSvg } from "@/components/svg/tailwind";
import { TypeScriptSvg } from "@/components/svg/typescript";
import { Metadata } from "next";
import { TbSeo } from "react-icons/tb";
import Typewriter from "typewriter-effect";

export const metadata: Metadata = {
  title: "About Me",
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-16">
      <div className="text-center">
        <h1 className="font-bold text-3xl">
          A little
          <span className="text-blue-700 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
            about
            <svg
              className="absolute -bottom-0.5 w-full max-h-1.5"
              viewBox="0 0 55 5"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                stroke-width="2"
              ></path>
            </svg>
          </span>
          {" this portfolio"}
        </h1>
        <p className="max-w-md mx-auto mt-2 text-gray-500">
          A responsive website demonstrating some of my skills linked to its
          delivery and development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <TbSeo size={24} />
          </span>
          <div>
            <h3 className="font-semibold text-xl">
              Search Engine Optimization
            </h3>
            <p className="mt-1 text-gray-500">
              {" "}
              Refined portfolio content, personally developed and managed.
              Includes concise, meaningful descriptions. Utilizes consistent
              fonts and typography for clarity and professionalism.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                d="M3.00014 2.73895C3.00014 2.94698 2.76087 3.06401 2.59666 2.93628L1.00386 1.69744C0.875177 1.59735 0.875177 1.40286 1.00386 1.30277L2.59666 0.063928C2.76087 -0.0637944 3.00014 0.0532293 3.00014 0.261266V1.00012H9.00009V0.261296C9.00009 0.0532591 9.23936 -0.0637646 9.40358 0.0639578L10.9964 1.3028C11.1251 1.40289 11.1251 1.59738 10.9964 1.69747L9.40358 2.93631C9.23936 3.06404 9.00009 2.94701 9.00009 2.73898V2.00012H3.00014V2.73895ZM9.50002 4.99998H2.50002C2.22388 4.99998 2.00002 5.22384 2.00002 5.49998V12.5C2.00002 12.7761 2.22388 13 2.50002 13H9.50002C9.77616 13 10 12.7761 10 12.5V5.49998C10 5.22384 9.77616 4.99998 9.50002 4.99998ZM2.50002 3.99998C1.67159 3.99998 1.00002 4.67156 1.00002 5.49998V12.5C1.00002 13.3284 1.67159 14 2.50002 14H9.50002C10.3284 14 11 13.3284 11 12.5V5.49998C11 4.67156 10.3284 3.99998 9.50002 3.99998H2.50002ZM14.7389 6.00001H14V12H14.7389C14.9469 12 15.064 12.2393 14.9362 12.4035L13.6974 13.9963C13.5973 14.125 13.4028 14.125 13.3027 13.9963L12.0639 12.4035C11.9362 12.2393 12.0532 12 12.2612 12H13V6.00001H12.2612C12.0532 6.00001 11.9361 5.76074 12.0639 5.59653L13.3027 4.00373C13.4028 3.87505 13.5973 3.87505 13.6974 4.00374L14.9362 5.59653C15.0639 5.76074 14.9469 6.00001 14.7389 6.00001Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Fully Responsive</h3>
            <p className="mt-1 text-gray-500">
              {" "}
              The entire site was developed with a fully responsive mind in
              mind, so that users can access it from wherever they feel most
              comfortable.{" "}
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                d="M7.28856 0.796908C7.42258 0.734364 7.57742 0.734364 7.71144 0.796908L13.7114 3.59691C13.8875 3.67906 14 3.85574 14 4.05V10.95C14 11.1443 13.8875 11.3209 13.7114 11.4031L7.71144 14.2031C7.57742 14.2656 7.42258 14.2656 7.28856 14.2031L1.28856 11.4031C1.11252 11.3209 1 11.1443 1 10.95V4.05C1 3.85574 1.11252 3.67906 1.28856 3.59691L7.28856 0.796908ZM2 4.80578L7 6.93078V12.9649L2 10.6316V4.80578ZM8 12.9649L13 10.6316V4.80578L8 6.93078V12.9649ZM7.5 6.05672L12.2719 4.02866L7.5 1.80176L2.72809 4.02866L7.5 6.05672Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Lighthouse & PSI</h3>
            <p className="mt-1 text-gray-500">
              {" "}
              Our pages were tested with the Lighthouse tool, and also at
              https://pagespeed.web.dev/ to ensure good Performance,
              Accessibility, SEO, and best practices
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                d="M4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88072 3.11929 7 4.5 7C5.88072 7 7 5.88072 7 4.5C7 3.11929 5.88072 2 4.5 2ZM3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5ZM10.5 2C9.11929 2 8 3.11929 8 4.5C8 5.88072 9.11929 7 10.5 7C11.8807 7 13 5.88072 13 4.5C13 3.11929 11.8807 2 10.5 2ZM9 4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5C12 5.32843 11.3284 6 10.5 6C9.67157 6 9 5.32843 9 4.5ZM2 10.5C2 9.11929 3.11929 8 4.5 8C5.88072 8 7 9.11929 7 10.5C7 11.8807 5.88072 13 4.5 13C3.11929 13 2 11.8807 2 10.5ZM4.5 9C3.67157 9 3 9.67157 3 10.5C3 11.3284 3.67157 12 4.5 12C5.32843 12 6 11.3284 6 10.5C6 9.67157 5.32843 9 4.5 9ZM10.5 8C9.11929 8 8 9.11929 8 10.5C8 11.8807 9.11929 13 10.5 13C11.8807 13 13 11.8807 13 10.5C13 9.11929 11.8807 8 10.5 8ZM9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5C12 11.3284 11.3284 12 10.5 12C9.67157 12 9 11.3284 9 10.5Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Cross Browser</h3>
            <p className="mt-1 text-gray-500">
              {" "}
              Server-Side Rendering (SSR) prioritizing delivery of static
              content, bringing lightness and compatibility with browsers.{" "}
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Clean Code</h3>
            <p className="mt-1 text-gray-500">
              {" "}
              We follow good clean code practices along with S.O.L.I.D
              principles.{" "}
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-xl">Contact</h3>
            <p className="mt-1 text-gray-500">
              {" "}
              Our contact page has a form with integration the GCP Gmail API
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 mt-28">
        <div className="flex flex-col justify-center">
          <div className="text-center">
            <h2 className="font-semibold text-3xl">Tools used</h2>

            <p className="max-w-md mx-auto mt-2 text-gray-500">
              Below I list the tools used in the development of this website
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">
            <div className="size-20 dark:fill-gray-700">
              <NextSvg />
            </div>

            <div className=" ">
              <ReactExtSvg />
            </div>

            <div className="">
              <TailwindExtSvg />
            </div>

            <div className="size-12">
              <TypeScriptSvg />
            </div>

            <div className="size-12">
              <PhotoshopSvg />
            </div>
          </div>
        </div>
        <div className="text-xl text-center tracking-wide h-12 notranslate">
          <TypewriterComponent />
        </div>
      </div>
    </div>
  );
}
