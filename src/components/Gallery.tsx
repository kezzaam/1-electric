"use client";

import { useState, useMemo } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images } from "../utilities/images";
import Testimonials from "./Testimonials";
import PageHeroImage from "./PageHeroImage";

export default function Gallery() {
    const [index, setIndex] = useState(-1);
    const [selectedTag, setSelectedTag] = useState("All");

    // Generate unique tags dynamically
    const uniqueTags = useMemo(
        () => ["All", ...new Set(images.flatMap((img) => img.tags?.map((tag) => tag.value) || []))],
        []
    );

    // Filter images dynamically based on selectedTag
    const filteredImages = useMemo(
        () =>
            selectedTag === "All"
                ? images
                : images.filter((image) => image.tags?.some((tag) => tag.value === selectedTag)),
        [selectedTag]
    );

    // Convert images to react-image-gallery format
    const galleryImages = filteredImages.map(({ original, thumbnail, description }) => ({
        original,
        thumbnail: thumbnail || original, // Use original if no thumbnail exists
        originalAlt: description || "Gallery image", // Adds alt text for accessibility
    }));

    // Convert images for Lightbox
    const slides = filteredImages.map(({ original }) => ({
        src: original,
    }));

    return (
        <>
            {/* Hero Section */}
            <PageHeroImage
                imageUrl="/mount.jpg"
                photoCredit="Tim Walker"
                photoLink="http://electricphotography.co.nz/"
            />

            {/* Main Gallery Section */}
            <main className="flex flex-col items-center justify-center p-6 lg:px-24 lg:py-12">
                <section className="flex flex-col items-center text-center space-y-10">
                    {/* Heading & Title */}
                    <div>
                        <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">Gallery</h4>
                        <h2 className="text-3xl font-bold text-center mb-4">Our Work</h2>
                    </div>

                    {/* Divider */}
                    <div className="w-36 h-1 mb-10 bg-trueblue"></div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {uniqueTags.map((tag) => (
                            <button
                                key={tag}
                                className={`px-4 py-2 text-sm font-bold uppercase rounded-md transition-all cursor-pointer ${selectedTag === tag
                                        ? "bg-metallicorange text-white"
                                        : "bg-gray-200 text-trueblue hover:bg-trueblue hover:text-white"
                                    }`}
                                onClick={() => setSelectedTag(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </section>
            </main>

            {/* Gallery Section */}
            <div className="px-4">
                <ImageGallery
                    items={galleryImages}
                    showPlayButton={false}
                    showFullscreenButton={true}
                    onClick={(event) => {
                        const clickedIndex = galleryImages.findIndex(
                            (img) => img.original === (event.target as HTMLImageElement).src
                        );
                        if (clickedIndex !== -1) setIndex(clickedIndex);
                    }}
                    additionalClass="custom-thumbnail-gallery"
                />
                <Lightbox slides={slides} open={index >= 0} index={index} close={() => setIndex(-1)} />
            </div>

            {/* Testimonials Section */}
            <Testimonials />
        </>
    );
}
