"use client"

import * as React from "react"
import Link from "next/link"
import { Icons } from '@/components/icons'
import Image from "next/image"
import { nav_links } from '../../constants/navlinks'


import { siteConfig } from "@/app/config/site"

import { Button } from "./button"

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
} from "@/components/ui/dropdown-menu"

import fotoRedondaPepe from '../../../public/fotoRedondaPepe.png'
import { Github, User } from "lucide-react"

export const Navbar = () => {
  return (
    <nav className="grid grid-cols-8 sticky top-0 bg-slate-100 drop-shadow-md pl-5 py-4 justify-center content-center">
      <Link href="/" className="col-span-4 space-x-4 ">
        <Image src={fotoRedondaPepe} alt="logo" width={50} height={50} className="inline-block" />
        <span className="hidden sm:inline-block font-bold text-xl">Agustin Pardo Motz</span>
      </Link>

      <ul className="hidden col-start-5  col-span-3 lg:inline-block content-center space-x-10 ml-11">
        {nav_links.map((link, i) => (
          <Link href={link.href} key={i} className='px-3 font-semibold tracking-wide text-neutral-950  cursor-pointer pb-1.5 transition-all hover:font-bold'>
            {link.title}
          </Link>
        ))}
      </ul>

      <DropdownMenu>
        <DropdownMenuTrigger className="lg:hidden col-start-8" asChild>
          <Button variant={"ghost"}>
            <svg width="20" height="20" viewBox="0 0 16 16"><path fill="none" d="M0 0h16v16H0z" /><path d="M1 9h14V7H1zm0 5h14v-2H1zM1 2v2h14V2z" /></svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Agustin Pardo</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {nav_links.map((link, i) => (
              <DropdownMenuItem key={i}>
                <Link href={link.href} key={i} className='regular-16 px-3 text-neutral-950  cursor-pointer pb-1.5 transition-all hover:font-bold'>
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


  )
}


