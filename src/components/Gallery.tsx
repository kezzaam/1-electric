"use client";

import { useState, useMemo, useEffect } from "react";
import { getImages, ProcessedImage } from "../utilities/images";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Testimonials from "./Testimonials";
import PageHeroImage from "./PageHeroImage";

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const [selectedTag, setSelectedTag] = useState("All");

  // 1) Store the actual images in state
  const [images, setImages] = useState<ProcessedImage[]>([]);

  // 2) Load images asynchronously on mount
  useEffect(() => {
    getImages().then((loadedImages) => {
      setImages(loadedImages);
    });
  }, []);

  // 3) Generate unique tags from images
  const uniqueTags = useMemo(() => {
    if (!images.length) return ["All"];
    const allTags = images.flatMap((img) => img.tags?.map((tag) => tag.value) || []);
    return ["All", ...new Set(allTags)];
  }, [images]);

  // 4) Filter images based on the selected tag
  const filteredImages = useMemo(() => {
    if (selectedTag === "All") return images;
    return images.filter((image) => 
      image.tags?.some((tag) => tag.value === selectedTag)
    );
  }, [selectedTag, images]);

  // 5) Convert images to react-image-gallery format
  const galleryImages = useMemo(() => {
    return filteredImages.map(({ original, thumbnail, description }) => ({
      original,
      thumbnail: thumbnail || original,
      originalAlt: description || "Gallery image",
    }));
  }, [filteredImages]);

  // 6) Convert images for Lightbox
  const slides = useMemo(() => {
    return filteredImages.map(({ original }) => ({
      src: original,
    }));
  }, [filteredImages]);

  return (
    <>
      {/* Hero Section */}
      <PageHeroImage
        imageUrl="/banner.png"
      />

      {/* Main Gallery Section */}
      <section className="content">
        <article>
          <div>
            <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">Gallery</h4>
            <h2 className="text-3xl font-bold text-center mb-4">Our Work</h2>
            <div className="divider"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {uniqueTags.map((tag) => (
              <button
                key={tag}
                className={`px-4 py-2 text-sm font-bold uppercase rounded-md transition-all cursor-pointer ${
                  selectedTag === tag
                    ? "bg-metallicorange text-white"
                    : "bg-gray-200 text-trueblue hover:bg-trueblue hover:text-white"
                }`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </article>
      </section>

      {/* Gallery Section */}
      <div className="px-4">
        <ImageGallery
          items={galleryImages}
          showPlayButton={false}
          showFullscreenButton
          onClick={(event) => {
            // If the user clicked a thumbnail, find its index
            const targetSrc = (event.target as HTMLImageElement).src;
            const clickedIndex = galleryImages.findIndex(
              (img) => img.original === targetSrc
            );
            if (clickedIndex !== -1) {
              setIndex(clickedIndex);
            }
          }}
          additionalClass="custom-thumbnail-gallery"
        />
        <Lightbox 
          slides={slides} 
          open={index >= 0} 
          index={index} 
          close={() => setIndex(-1)} 
        />
      </div>

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
}
