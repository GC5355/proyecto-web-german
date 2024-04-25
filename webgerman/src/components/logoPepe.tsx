import React from "react";
import Image from "next/image";
import Link from "next/link";

import fotoRedondaPepe from '../fotos/fotoRedondaPepe.png'

export const logoPepe = () => {
    return (
        <Link href="/" className="flex items-center space-x-2">
            <Image
                src={fotoRedondaPepe}
                width={24}
                height={24}
                alt="Logo Agustín Pardo"
            />
            {/* <span className="inline-block font-bold">{siteConfig.name}</span> */}
        </Link>
    )
}
