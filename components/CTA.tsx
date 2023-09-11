import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "react-feather"

export default function CTA() {
  return (
    <section className="flex flex-col lg:flex-row mt-[50px] snap-center bg-yankeesblue">
      {/* Image */}
      <div className="flex">
        <Image
          src="/banner.png"
          alt="Image Banner"
          width={749}
          height={546}
        />
      </div>

      {/* Content section */}
      <div className="flex-1 text-white h-full p-10 max-w-3xl">
        <h4 className="text-sm uppercase text-trueblue tracking-wide mb-4">
          Honest, Reliable, Quality
        </h4>
        <h2 className="text-3xl font-bold mb-4">See for yourself</h2>
        <p className="text-base mb-6">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
        <div className="flex flex-col space-y-4 text-yankeesblue">
          <Link href="#" className="bg-ghostwhite py-2 px-4 rounded hover:bg-trueblue hover:text-white transition-all hover:scale-105">
          <span className="flex items-center justify-center space-x-2"><p>Gallery</p><ArrowRight size={20} /></span>
          </Link>
          <Link href="#" className="bg-ghostwhite py-2 px-4 rounded hover:bg-trueblue hover:text-white transition-all hover:scale-105">
          <span className="flex items-center justify-center space-x-2"><p>Get a Quote</p><ArrowRight size={20} /></span>
          </Link>
        </div>
      </div>
    </section>
  )
}
