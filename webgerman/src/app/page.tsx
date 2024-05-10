import Image from "next/image";
import { Button } from "@/components/ui/button"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div>


        <div className="space-x-20">
          LANDING PAGE
        </div>

      </div>
    </main>
  );
}
