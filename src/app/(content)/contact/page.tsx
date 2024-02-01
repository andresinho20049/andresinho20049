'use client'

import { ButtonComponent } from "@/components/button/button-component";
import { LinkAppearanceButton } from "@/components/button/link-appearance-button";
import { FiverrSvg } from "@/components/svg/fiverr";
import { WorkanaSvg, WorkanaSvg2 } from "@/components/svg/workana";
import { FloatingLabel, Textarea } from "flowbite-react";
import { TbBrandUpwork } from "react-icons/tb";

export default function Contact() {


    const handleClick = () => {
        console.log("Btn clicked");
    }

  return (
    <div className="w-full h-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold text-blue-700">
              Contact Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Feel free to contact us, we will get back to you as soon as
              possible.
            </p>
            <hr className="my-6" />
            <div className="leading-7 text-gray-600 space-y-4">
              <p>
                If you wish to establish contact with a freelance professional,
                kindly find below a link to my profile on some reputable
                platforms.
              </p>
              <div className="flex gap-2 flex-wrap">
                <div className="flex-1">
                  <LinkAppearanceButton
                    href="https://www.upwork.com/freelancers/~01f1d9d0a1141e7c42"
                    isBlank
                  >
                    <TbBrandUpwork className="bg-green-700 rounded-full h-8 w-8" />
                    UpWork
                  </LinkAppearanceButton>
                </div>
                <div className="flex-1">
                  <LinkAppearanceButton
                    href="https://www.workana.com/freelancer/c718379dcd94c24d33a82a849af53bf1"
                    isBlank
                  >
                    <WorkanaSvg2 /> Workana
                  </LinkAppearanceButton>
                </div>
                <div className="flex-1">
                  <LinkAppearanceButton
                    href="https://br.fiverr.com/s/mb7AxR"
                    isBlank
                  >
                    <FiverrSvg />
                  </LinkAppearanceButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          action={""}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <FloatingLabel label="Name" variant="standard" type="text" />
              </div>
              <div>
                <FloatingLabel label="Subject" variant="standard" type="text" />
              </div>
              <div className="sm:col-span-2">
                <FloatingLabel label="E-mail" variant="standard" type="email" />
              </div>
              <div className="sm:col-span-2">
                <p className="block text-sm text-gray-500 dark:text-gray-400">
                  Message
                </p>
                <div className="mt-2.5">
                  <Textarea
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="message"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <ButtonComponent onClick={handleClick}>
                Send Message
              </ButtonComponent>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
