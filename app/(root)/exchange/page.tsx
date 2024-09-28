import React from 'react'
import BangoLogo from "../../../assets/bango-logo/svg/logo-no-background.svg"
import Image from 'next/image'
import HomeButton from '@/components/RootHomeButton/HomeButton'
export default function page() {
    return (
        <div className='flex flex-col items-start justify-start w-full'>
            <header className='w-full fixed top-0 flex flex-row max-sm:flex-col-reverse  max-sm:items-center items-start justify-between gap-x-2 pt-4 transition-all'>
                <HomeButton />

                <div className="flex flex-col items-center justify-center gap-y-2">
                    <Image src={BangoLogo} alt="Brand Bango" height={250} width={250} />
                    <p className='text-4xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 leading-normal'>DeXchange</p>
                </div>
                <div></div>
            </header>
            <form action="
            "></form>
        </div>
    )
}
