import React from 'react'
import { HOW_IT_WORKS_STEPS } from '@/lib/configConstants/config'

function StepCard({ title, description, stepNo }: { title: string, description: string, stepNo: number }) {
    return <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold mb-4">{stepNo + 1}</div>
        <h3 className="text-xl font-bold mb-2 text-purple-400">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
}


export default function HowItWorks() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 flex flex-col items-center justify-center" id="how-it-works">
            <div className="container px-4 md:px-6 ">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-content-end">
                    {
                        HOW_IT_WORKS_STEPS.map((item, index) => {
                            return <StepCard
                                title={item.title}
                                description={item.description}
                                stepNo={index}
                            />
                        })
                    }
                </div>
            </div>
        </section>
    )
}



