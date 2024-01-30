"use client";

import { LinksNavigation } from "@/utils/links-navigation";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../iteraction/mode-toggle";
import Link from "next/link";
import Image from "next/image";

export const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="/" className="order-2 md:order-1">
        <Avatar img="/Logo.png" alt="My Logo" />
        <span className="self-center whitespace-nowrap text-sm md:text-xl font-semibold dark:text-white ">
          Andrésinho20049
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
            <Avatar alt="User settings" img="/team/andresinho.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">André Carlos</span>
          </Dropdown.Header>

          <Dropdown.Item className="md:hidden flex justify-center">
            <ModeToggle />
          </Dropdown.Item>
          <Dropdown.Divider />

          <Link
            href="https://www.linkedin.com/in/andresinho20049/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Dropdown.Item>Linkedin</Dropdown.Item>
          </Link>
          <Link
            href="https://github.com/andresinho20049"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Dropdown.Item>GitHub</Dropdown.Item>
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
