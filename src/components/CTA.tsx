import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";
import { useInView } from "react-intersection-observer";

export default function CTA() {
  // Scroll animations
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation only triggers once
    threshold: 0.5, // Adjust as needed
  });

  return (
    <section
      ref={ref}
      className={`transition-transform duration-1000 flex flex-col lg:flex-row snap-center bg-yankeesblue ${
        inView ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          src="/banner.png"
          alt="Image Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 text-white p-10 flex flex-col justify-center">
        <h4 className="text-sm uppercase text-trueblue tracking-wide mb-4">
          Honest, Reliable, Quality
        </h4>
        <h2 className="text-3xl font-bold mb-4">See for yourself</h2>
        <p className="text-xl mb-6">
          Have a question or need a quote? We would love to hear from you to discuss your electrical needs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col space-y-4 text-yankeesblue">
          <Link
            to="/gallery"
            className="bg-ghostwhite p-4 rounded hover:bg-trueblue hover:text-white transition-transform transform hover:scale-101"
          >
            <span className="flex items-center justify-center space-x-2">
              <p>Gallery</p>
              <ArrowRight size={20} />
            </span>
          </Link>
          <Link
            to="/contact"
            className="bg-ghostwhite p-4 rounded hover:bg-trueblue hover:text-white transition-transform transform hover:scale-101"
          >
            <span className="flex items-center justify-center space-x-2">
              <p>Get a Quote</p>
              <ArrowRight size={20} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
