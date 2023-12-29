"use client"

import { useState } from "react"
import { Gallery } from "react-grid-gallery"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { images, CustomImage } from "./images"
import CTA2 from "./CTA2"
import Testimonials from "./Testimonials"
import Mount from "./Mount"


type FilterButton = {
  label: string
  value: string
}

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}))

export default function App() {
  const [index, setIndex] = useState(-1)
  const [selectedTag, setSelectedTag] = useState("All") // Initially, show all images
  const [filteredImages, setFilteredImages] = useState(images) // Initialize with all images


  const handleClick = (index: number, item: CustomImage) => setIndex(index)

  const uniqueTags = Array.from(
    new Set(
      images
        .flatMap((image) => (image.tags || []).map((tag) => tag.value))
        // Ensure that undefined or null values are filtered out
        .filter((tag) => tag !== undefined && tag !== null)
    )
  )

  const filterButtons: FilterButton[]= [
    { label: "All", value: "All" }, // Show all images initially
    ...uniqueTags.map((tag) => ({ label: tag as string, value: tag as string })),
  ]

  const filterImagesByTag = (tag: string) => { // Explicitly type tag as string
    if (tag === "All") {
      setFilteredImages(images)
    } else {
      const filtered = images.filter((image) =>
        (image.tags || []).some((item) => item.value === tag)
      )
      setFilteredImages(filtered)
    }
    setSelectedTag(tag)
  }

  return (
    <>
    <Mount />
      <main className="flex flex-col items-center justify-center p-6 lg:px-24 lg:py-12 snap-y">
        <section className="flex flex-col items-center text-center snap-center space-y-10">

          {/* heading, title, description */}
          <div>
            <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">Gallery</h4>
            <h2 className="text-3xl font-bold text-center mb-4">Our Work</h2>
          </div>

          {/* divider */}
          <div className="w-36 h-1 mb-10 bg-trueblue"></div>

          {/* filter buttons */}
          <div className="flex flex-wrap justify-center">
            {filterButtons.map(({ label, value }) => (
              <button
                key={value}
                className={`px-4 py-2 m-2 text-sm font-bold text-white uppercase transition-colors duration-300 ease-in-out rounded-md bg-trueblue hover:bg-trueblue-light ${selectedTag === value ? "bg-trueblue-light" : ""
                  }`}
                onClick={() => typeof value === 'string' ? filterImagesByTag(value) : null}
              >
                {label}
              </button>

            ))}

          </div>
        </section>
      </main>
      {/* gallery - full width so needs to be outside of main */}
      <div>
        <Gallery
          images={filteredImages}
          onClick={handleClick}
          enableImageSelection={false}
        />
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
      <Testimonials />
      <CTA2 />
    </>

  )
}