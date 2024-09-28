import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Button } from '../button'

export default function Comp() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-900 to-gray-900 flex flex-col items-center justify-center" id="start-swapping">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2 flex flex-col items-center gap-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl md:leading-normal bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Ready to Start Swapping?</h2>
                        <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                            Join thousands of users who trust Bango for their cryptocurrency exchanges.
                        </p>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-400 to-pink-600 text-white transition-transform duration-300 rounded-none hover:scale-105 active:scale-90" size="default">
                        Connect Wallet
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
