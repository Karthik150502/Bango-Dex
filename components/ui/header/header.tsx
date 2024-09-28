'use client'
import Link from 'next/link'
import React from 'react'
import MobNav from '@/components/mobileNav/MobNav'
import { NAV_BAR_ITEMS } from '@/lib/configConstants/config'
import "./styles.css"
import BangoLogo from "../../../assets/bango-logo/svg/logo-no-background.svg"
import Image from 'next/image'


export default function Navbar( ) {

    const scrollToHash = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "end", });
    }





    return (
        <header className="px-4 lg:px-6 h-14 fixed w-full flex items-center justify-between border-b glass border-gray-800">
            <Link className="flex items-center justify-center" href={``} onClick={() => scrollToHash("home")}>
                <Image src={BangoLogo} alt="Brand - Bango" height={100} width={100} />
            </Link>
            <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
                {
                    NAV_BAR_ITEMS.map((item) => {
                        return <Link key={item.to} className="text-sm font-medium hover:text-purple-400 transition-colors" href={``}
                            onClick={() => scrollToHash(item.to)}
                        >
                            {item.label}
                        </Link>
                    })
                }
            </nav>



            <MobNav scrollToHash={scrollToHash} />


        </header>
    )
}
