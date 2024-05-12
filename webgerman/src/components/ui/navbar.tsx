"use client";

import * as React from "react";
import Link from "next/link";
import { Icons } from "@/constants/icons";
import Image from "next/image";
import { nav_links } from "../../constants/navlinks";
import { useEffect, useState } from "react";
import { Button } from "./button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import fotoRedondaPepe from "../../../public/fotoRedondaPepe.png";
import { Github, User } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [selectedEnlace, setSelectedEnlace] = useState("");

  const handleLinkClick = (enlace: React.SetStateAction<string>) => {
    setSelectedEnlace(enlace);
  };

  return (
    <nav
      className={`grid grid-cols-8 bg-slate-200 border-y-2 border-slate-400 drop-shadow-md pl-5 py-4 justify-center content-center ${
        isScrolled
          ? "transition-opacity duration-500 ease-in opacity-50"
          : "transition-opacity duration-500 ease-out opacity-100"
      } `}
    >
      <Link href="/" className="col-span-4 space-x-4 ">
        <Image
          src={fotoRedondaPepe}
          alt="logo"
          width={50}
          height={50}
          className="inline-block"
        />
        <span
          onClick={() => handleLinkClick("Inicio")}
          className={`hidden sm:inline-block font-semibold text-2xl font-montserrat ${
            selectedEnlace === "Inicio" ? "" : ""
          }`}
        >
          Agustin Pardo Motz
        </span>{" "}
      </Link>

      <ul className="hidden col-start-5  col-span-3  lg:flex content-center space-x-10 ml-11 items-center justify-center pt-2">
        {nav_links.map((link, i) => (
          <Link
            href={link.href}
            key={i}
            className=" px-3 font-semibold font-montserrat tracking-wide text-neutral-950  cursor-pointer pb-1.5 transition-all hover:font-bold select-none"
          >
            <div
              onClick={() => handleLinkClick(link.title)}
              className={`px-3 font-semibold tracking-wide text-neutral-950 pb-1.5 transition-all hover:font-bold ${
                selectedEnlace === link.title ? "underline underline-offset-4" : ""
              }`}
            >
              {link.title}
            </div>
          </Link>
        ))}
      </ul>

      <DropdownMenu>
        <DropdownMenuTrigger className="lg:hidden col-start-8" asChild>
          <Button variant={"ghost"}>
            <svg width="20" height="20" viewBox="0 0 16 16">
              <path fill="none" d="M0 0h16v16H0z" />
              <path d="M1 9h14V7H1zm0 5h14v-2H1zM1 2v2h14V2z" />
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Agustin Pardo</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {nav_links.map((link, i) => (
              <DropdownMenuItem key={i}>
                <Link
                  href={link.href}
                  key={i}
                  className="regular-16 px-3 text-neutral-950  cursor-pointer pb-1.5 transition-all hover:font-bold"
                >
                  {link.title.toUpperCase()}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};
