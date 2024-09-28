'use client'
import React from 'react'
import { Button } from '../button'
import { useRouter } from 'next/navigation'
export default function Hero() {

    const router = useRouter();

    return (
        <section id='home' className="w-full py-12 md:py-24 lg:py-32 xl:py-48 max-sm:py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex flex-col items-center justify-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl md:leading-normal lg:text-6xl/none lg:leading-normal bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                            Swap Cryptocurrencies with Ease
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                            Bango provides a seamless, secure, and efficient platform for swapping your favorite cryptocurrencies.
                        </p>
                    </div>
                    <div className="space-x-4 flex flex-row items-center justify-center gap-y-2 gap-x-2 ">
                        <Button className="bg-gradient-to-r from-purple-400 to-pink-600 text-white transition-transform duration-300 rounded-none hover:scale-105 active:scale-90">Connect Wallet</Button>
                        <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-200 transition-colors rounded-none" onClick={() => {
                            router.push("/exchange")
                        }}>To DEX</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
