"use client";

import { LinksNavigation } from "@/utils/links-navigation";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { ModeToggle } from "../iteraction/mode-toggle";

export const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/" className="order-2 md:order-1">
        <Avatar img="/Logo.png" alt="My Logo" />
        <span className="self-center whitespace-nowrap text-sm md:text-xl font-semibold dark:text-white ">
          My Portfolio
        </span>
      </Navbar.Brand>
      <div className="grid md:grid-cols-2 gap-4 items-center order-1 md:order-3">
        <div className="order-none hidden md:flex md:order-first">
          <ModeToggle />
        </div>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="/Logo.png" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">My Portfolio</span>
            <span className="block truncate text-sm font-medium">
              @andresinho20049
            </span>
          </Dropdown.Header>

          <Dropdown.Item className="md:hidden flex justify-center">
            <ModeToggle />
          </Dropdown.Item>
          <Dropdown.Divider className="md:hidden flex" />

          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Dropdown.Item className="gap-2">
              <BsLinkedin />
              {" Linkedin"}
            </Dropdown.Item>
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Dropdown.Item className="gap-2">
              <BsGithub />
              {" GitHub"}
            </Dropdown.Item>
          </Link>
          <Dropdown.Divider />

          <Link href={"/contact"}>
            <Dropdown.Item className="gap-2">
              <IoIosContact />
              {" Contact"}
            </Dropdown.Item>
          </Link>
        </Dropdown>
      </div>
      <Navbar.Toggle className="order-3" />
      <Navbar.Collapse className="order-3 md:order-2">
        {LinksNavigation.map((item) => (
          <Navbar.Link
            key={item.href}
            href={item.href}
            active={item.href === pathname}
          >
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
