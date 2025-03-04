import { calculateImageOrientation } from "./calculateImageOrientation";

export const images = await Promise.all(
    [
        {
            src: "/gallery/1000002197.webp",
            description: "Industrial automation setup with mechanical and electrical systems.",
            tags: ["Industrial", "Automation"],
        },
        {
            src: "/gallery/1000002213.webp",
            description: "High-capacity electrical control panels in an industrial facility.",
            tags: ["Electrical", "Industrial"],
        },
        {
            src: "/gallery/1000003606.webp",
            description: "Outdoor generator setup at a commercial worksite.",
            tags: ["Commercial", "Power Systems"],
        },
        {
            src: "/gallery/1000005282.webp",
            description: "Electrical control cabinets with overhead cable trays for power distribution.",
            tags: ["Electrical", "Power Distribution"],
        },
        {
            src: "/gallery/1000005306.webp",
            description: "Large-scale industrial facility with external power and structural work in progress.",
            tags: ["Industrial", "Construction"],
        },
        {
            src: "/gallery/1000006037.webp",
            description: "Vibratory conveyor system with dual motorized actuators.",
            tags: ["Manufacturing", "Automation"],
        },
        {
            src: "/gallery/1000006302.webp",
            description: "Electrical switchgear system with multiple access panels and safety controls.",
            tags: ["Electrical", "Safety Systems"],
        },
        {
            src: "/gallery/1000006318.webp",
            description: "Construction site trenching with underground electrical conduit installation.",
            tags: ["Construction", "Infrastructure"],
        },
        {
            src: "/gallery/1000006468.webp",
            description: "Industrial scissor lift being used for overhead steel structure installation.",
            tags: ["Industrial", "Structural Work"],
        },
    ].map(async (image) => {
        const { width, height, orientation } = await calculateImageOrientation(image.src);

        return {
            original: image.src,
            thumbnail: `/gallery/thumbnails/${image.src.split("/").pop()?.replace(".webp", "-thumb.webp")}`,
            width,
            height,
            orientation,
            description: image.description,
            tags: image.tags.map((tag) => ({ value: tag, title: tag })),
        };
    })
);
