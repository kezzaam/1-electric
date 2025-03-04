export function calculateImageOrientation(imageSrc: string): Promise<{
    width: number;
    height: number;
    orientation: "square" | "portrait" | "landscape";
}> {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = imageSrc;

        img.onload = () => {
            const width = img.naturalWidth;
            const height = img.naturalHeight;
            let orientation: "square" | "portrait" | "landscape";

            if (width === height) {
                orientation = "square";
            } else if (width > height) {
                orientation = "landscape";
            } else {
                orientation = "portrait";
            }

            resolve({ width, height, orientation });
        };

        img.onerror = (error) => {
            console.error("Error loading image:", imageSrc, error);
            resolve({ width: 800, height: 600, orientation: "landscape" }); // Default fallback
        };
    });
}
