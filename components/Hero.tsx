"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowRight } from 'react-feather'

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
                        <h1 className="text-white text-4xl lg:text-6xl font-bold py-6">A great heading<br /><span className="text-trueblue">goes right here</span></h1>
                        <p className="text-white text-lg lg:text-xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.</p>
                    </div>
                    <div>
                        <button className="bg-deepkoamaru rounded-full p-2 hover:transition-all hover:tracking-wider active:tracking-normal">
                            <span className="flex text-white text-sm items-center space-x-2 pr-2">
                                <div className="bg-trueblue rounded-full py-2 px-4 uppercase ">Featured</div>
                                <p>Link to something you want to showcase</p>
                                <ArrowRight />
                            </span> 
                        </button>
                    </div>
                    <div className="text-philippinesilver">
                        <h2 className="uppercase tracking-wide pb-2">Certified Master Electricians</h2>
                        <span className="flex items-center justify-between flex-wrap space-y-4">
                            <Image src="/cert-01.png" alt="Master Electricians Logo" width={130} height={43} />
                            <Image src="/cert-02.png" alt="Master Electricians Logo" width={140} height={24} />
                            <Image src="/cert-03.png" alt="Master Electricians Logo" width={140} height={40} />
                            <Image src="/cert-04.png" alt="Master Electricians Logo" width={130} height={57} />
                        </span>
                    </div>
                </div>

                <div className="p-10 hidden lg:flex">
                    <Image src="/1Electric.png" alt="Hero Image" width={600} height={600} />
                </div>

            </section>
        </>
    )
}
