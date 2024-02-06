import { FooterIcon } from "flowbite-react";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

export const SocialMediaComponent = () => {
  return (
    <div className="flex space-x-6 sm:mt-0 sm:justify-left">
      <FooterIcon
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        icon={BsInstagram}
        ariaLabel="Instagram"
      />
      <FooterIcon
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        icon={BsGithub}
        ariaLabel="Github"
      />
      <FooterIcon
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        icon={BsLinkedin}
        ariaLabel="Linkedin"
      />
    </div>
  );
};
