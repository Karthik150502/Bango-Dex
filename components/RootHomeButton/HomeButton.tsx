'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function HomeButton() {

    const router = useRouter();

    return (
        <p
            className='cursor-pointer text-xs text-white px-4 hover:text-purple-500 transition-colors duration-150 max-sm:my-4'
            onClick={() => {
                router.push("/")
            }}>Home</p>
    )
}
