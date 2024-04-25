"use client"

import * as React from "react"
import Link from "next/link"
import { Icons } from '@/components/icons'

import { siteConfig } from "@/app/config/site"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"


export const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className="grid grid-cols-12  h-14 content-center bg-indigo-200">
      <Link href="/" className=" col-start-1  col-span-2  pl-3">
        <div className="flex space-x-2">
          <Icons.logo className="h-6 w-6 " />
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.nombre}
          </span>
        </div>

      </Link>
      <nav className="hidden md:inline-block col-start-3 col-span-3 space-x-10 text-sm ">
        <Link
          href="/bio"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/bio" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Bio
        </Link>
        <Link
          href="/arreglos"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Arreglos
        </Link>
        <Link
          href="/composicion"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Composiciones
        </Link>
        <Link
          href="/direccion"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/examples")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Direccion
        </Link>


      </nav>

      <div className="col-start-8">spanish</div>
      <div>english</div>
      <div>german</div>

    </div>

  )
}
