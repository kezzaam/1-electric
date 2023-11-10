"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight } from 'react-feather'
import Credentials from './Credentials'

export default function Hero() {
    // for parallax background
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        // check for component mounting and client side rendering
        let isMounted = true

        // if (typeof window !== 'undefined') condition ensures that this only runs on client side eliminating conflicts with SSR 
        if (isMounted && typeof window !== 'undefined') {
                    // Function to update the scrollY state
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        // Add scroll event listener to update scrollY
        window.addEventListener('scroll', handleScroll)

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
        }

    }, [])

    // Calculate the parallax effect by adjusting the background position
    const backgroundPositionY = -scrollY * 0.5 // adjust the multiplier to control the parallax effect

    return (
        <>
            {/* Parallax background container */}
            <div
                className="parallax absolute inset-0 z-[-1]"
                style={{
                    backgroundPosition: `center ${backgroundPositionY}px`, // Apply the parallax effect here
                }}
            >
            </div>

            <section className="relative h-screen w-full flex items-center justify-around -mt-[96px] snap-center">
                <div className="flex flex-col space-y-8 mt-60 lg:mt-0 max-w-2xl">
                    <div>
                        <h1 className="text-white text-4xl lg:text-6xl font-bold py-6">Need an<br /><span className="text-trueblue text-shadow-lg">Electrician?</span></h1>
                        <p className="text-white text-xl lg:text-xl transition-all">We are a locally owned and operated business servicing the Bay of Plenty Region, specialising in heavy industrial, industrial and commercial electrical.  Whether your job is big or small we provide the solutions to meet your needs.  We take pride in providing top quality service and workmanship to every single client.</p>
                    </div>
                    <div>
                        <button className="bg-deepkoamaru rounded-full p-2 hover:transition-all hover:tracking-wider active:tracking-normal">
                            <span className="flex text-white text-sm items-center space-x-2 pr-2">
                                <div className="bg-trueblue rounded-full py-2 px-4 uppercase ">Featured</div>
                                <p>See our latest work</p>
                                <ArrowRight />
                            </span> 
                        </button>
                    </div>
                    <Credentials />

                </div>

                <div className="p-10 hidden lg:flex">
                    <Image src="/1Electric.png" alt="Hero Image" width={600} height={600} />
                </div>

            </section>
        </>
    )
}