"use client"
import { useInView } from "react-intersection-observer"
import Credentials from "./Credentials"

export default function CTA() {
    // scroll animations
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures the animation triggers only once
        threshold: 0.5, // Adjust this threshold as needed
    })

    return (
        <section
            ref={ref}
            className={`transition ease-in-out duration-1000 scale-0 flex flex-col lg:flex-row mt-[50px] snap-center bg-yankeesblue p-8 lg:p-24 ${inView ? 'scale-100' : ''
                }`}      >

            <Credentials />

        </section>
    )
}
