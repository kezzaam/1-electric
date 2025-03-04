import { useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import Credentials from "./Credentials";
import { Link } from "react-router-dom";

export default function Hero() {
  // Parallax background effect
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundPositionY = -scrollY * 0.5; // Adjust parallax intensity

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gray-900 z-[-1] opacity-70"></div>

      {/* Background Image (Parallax) */}
      <div className="absolute inset-0 z-[-2] overflow-hidden size-[200%] lg:size-[120%]">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/background.webp')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `center ${backgroundPositionY}px`,
          }}
        ></div>
      </div>

      {/* Main Content */}
      <section className="relative flex flex-col lg:flex-row items-center justify-center w-full min-h-screen px-6 pt-24 pb-6 lg:pt-0 snap-center">
        <div className="flex flex-col gap-8 max-w-2xl w-full">
          <div>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold py-6">
              Need an <br />
              <span className="text-trueblue text-shadow-lg">Electrician?</span>
            </h1>
            <p className="text-white text-lg sm:text-xl transition-all">
              We are a locally owned and operated business servicing the Bay of Plenty Region, specializing in heavy industrial, industrial, and commercial electrical. Whether your job is big or small, we provide the solutions to meet your needs. We take pride in providing top-quality service and workmanship to every single client.
            </p>
          </div>

          <Link to="/gallery">
            <button className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-start gap-4 bg-deepkoamaru rounded-3xl p-3 pr-4 text-lg text-white hover:transition-all hover:tracking-wider active:tracking-normal cursor-pointer">
              <div className="bg-trueblue rounded-full py-2 px-4 uppercase w-full lg:w-max whitespace-nowrap">
                Featured
              </div>
              <div className="flex items-center gap-2">
                <p className="text-center sm:text-left break-words">
                  See our latest work
                </p>
                <ArrowRight />
              </div>
            </button>
          </Link>

          <Credentials />
        </div>

        {/* Logo (Responsive Size) */}
        <div className="w-full hidden sm:flex justify-center lg:block max-w-[80%] sm:max-w-[60%] lg:max-w-[36%]">
          <img
            src="/1Electric.png"
            alt="1 Electric Logo"
            className="w-full h-auto object-cover opacity-90"
          />
        </div>
      </section>
    </div>
  );
}
