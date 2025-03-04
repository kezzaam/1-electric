import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const NAVBAR_HEIGHT = 96;

export default function ScrollToAnchor() {
    const location = useLocation();
    const lastHash = useRef("");

    useEffect(() => {
        if (location.hash) {
            lastHash.current = location.hash.slice(1);
        }

        if (lastHash.current) {
            setTimeout(() => {
                const element = document.getElementById(lastHash.current);
                if (element) {
                    const elementPosition =
                        element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: elementPosition - NAVBAR_HEIGHT, // Adjust for fixed header
                        behavior: "smooth",
                    });
                }
                lastHash.current = "";
            }, 100);
        }
    }, [location]);

    return null;
}
