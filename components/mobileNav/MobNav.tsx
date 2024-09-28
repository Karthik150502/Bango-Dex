'use client'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import { Menu as Hamburger } from 'lucide-react'
import Link from 'next/link'
import { NAV_BAR_ITEMS } from '@/lib/configConstants/config'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import BangoLogo from "../../assets/bango-logo/svg/logo-no-background.svg"
import Image from 'next/image'
export default function MobNav({ scrollToHash }: { scrollToHash: (id: string) => void }) {

    const pathname = usePathname();


    return (
        <Sheet>
            <SheetTrigger asChild>
                <Hamburger strokeWidth={1} fontSize={25} className='sm:hidden cursor-pointer' />
            </SheetTrigger>
            <SheetContent className="border-none flex flex-col items-center justify-center bg-gradient-to-br from-purple-950 to-pink-600" side={"right"}>

                <div className="h-[calc(100vh-72px)] flex-col items-center justify-between overflow-y-auto">
                    <SheetClose asChild>
                        <section className='border-none flex flex-col text-white gap-y-2 p-2 pt-8'>
                            <div className='flex flex-1 flex-col gap-2'>

                                {
                                    NAV_BAR_ITEMS.map((item) => {
                                        return <SheetClose key={item.to} asChild>
                                            <Link href={"#"} onClick={() => scrollToHash(item.to)} className={cn("flex gap-x-2 p-1 items-center justify-between w-full hover:scale-105  duration-400 origin-center transition-all hover:duration-300 ")}>
                                                <p className='text-white text-xs'>{item.label}</p>
                                            </Link>
                                        </SheetClose>
                                    })
                                }
                            </div>
                        </section>
                    </SheetClose>
                </div>
                <Link href={"#home"}>
                    <Image src={BangoLogo} alt="Brang Bango" height={100} width={100} />
                </Link>
            </SheetContent>
        </Sheet>
    )
}
