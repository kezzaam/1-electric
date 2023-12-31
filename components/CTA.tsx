"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "react-feather"
import { useInView } from "react-intersection-observer"

export default function CTA() {
  // scroll animations
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation triggers only once
    threshold: 0.5, // Adjust this threshold as needed
  })

  return (
    <section 
      ref={ref}
      className={`transition ease-in-out duration-1000 scale-0 flex flex-col lg:flex-row mt-[50px] snap-center bg-yankeesblue ${
        inView ? 'scale-100' : ''
      }`}      >
      {/* Image */}
      <div className="flex">
        <Image
          src="/banner.png"
          alt="Image Banner"
          width={749}
          height={456}
          priority
        />
      </div>

      {/* Content section */}
      <div className="flex-1 text-white h-full p-10 max-w-3xl">
        <h4 className="text-sm uppercase text-trueblue tracking-wide mb-4">
          Honest, Reliable, Quality
        </h4>
        <h2 className="text-3xl font-bold mb-4">See for yourself</h2>
        <p className="text-xl mb-6">
        Have a question or need a quote? We would love to hear from you to discuss your electrical needs.
        </p>
        <div className="flex flex-col space-y-4 text-yankeesblue">
          <Link href="/gallery" className="bg-ghostwhite p-4 rounded hover:bg-trueblue hover:text-white transition-all hover:scale-105">
          <span className="flex items-center justify-center space-x-2"><p>Gallery</p><ArrowRight size={20} /></span>
          </Link>
          <Link href="/contact" className="bg-ghostwhite p-4 rounded hover:bg-trueblue hover:text-white transition-all hover:scale-105">
          <span className="flex items-center justify-center space-x-2"><p>Get a Quote</p><ArrowRight size={20} /></span>
          </Link>
        </div>
      </div>
    </section>
  )
}
