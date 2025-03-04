import { Link } from "react-router-dom";
import CTA from "./CTA";
import { CheckCircle } from "react-feather";
import Testimonials from "./Testimonials";

// Service data
const services = [
  {
    image: "/industrial-image.jpg",
    heading: "Industrial",
    description:
      "Experienced in working with large industrial sites in the Bay of Plenty on a range of electrical solutions.",
    bulletPoints: [
      "Power distribution",
      "Lighting",
      "Maintenance",
      "Breakdown and Repairs",
      "Emergency lighting",
      "Backup power supplies",
      "Shutdowns",
      "Integrations",
      "Machine control and safety systems",
    ],
  },
  {
    image: "/commercial-image.jpg",
    heading: "Commercial",
    description:
      "Expert advice working with our commercial partners in the Bay of Plenty on new fit-outs and upgrades, design, and installation.",
    bulletPoints: [
      "New builds",
      "Alterations",
      "Lighting design and installation",
      "Mechanical wiring",
      "Temporary power supplies",
    ],
  },
  {
    image: "/maintenance-image.jpg",
    heading: "Residential",
    description:
      "Providing a professional service and high-quality workmanship in all aspects of residential electrical work.",
    bulletPoints: ["Renovations", "Home automation", "Switchboard upgrades"],
  },
];

export default function Services() {

  return (
    <>
      {/* Hero Background */}
      <div className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/services-banner.webp')",
          height: "33vw", // 3:1 ratio based on viewport width
          minHeight: "120px", // Prevents too small images on narrow screens
          maxHeight: "300px", // Limits excessive scaling on wider screens
        }}
      ></div>


      {/* Services Overview */}
      <section className="content">
        <article>
          <div>
            <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">
              What We Do
            </h4>
            <h2 className="text-3xl font-bold mb-4">Electrical Services</h2>
            <div className="divider"></div>
            <p className="text-xl mb-8 max-w-2xl">
              We are a locally owned and operated business servicing the Bay of
              Plenty Region, specialising in heavy industrial, industrial, and
              commercial electrical.
              <br /><br />
              With a key group of experienced and qualified electricians, our
              focus is dependable innovation and robust electrical installations
              in the industrial and commercial sector.
            </p>
          </div>
        </article>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={index}
          id={service.heading.toLowerCase().replace(" ", "-")}
          className={`${index % 2 === 0 ? "bg-ghostwhite" : "bg-deepkoamaru text-white"
            } flex flex-col lg:flex-row shadow hover:scale-101 hover:transition-all snap-center scroll-mt-24 items-center`}
        >
          {/* Image Column */}
          <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
            <img
              src={service.image}
              alt={service.heading}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Info Column */}
          <div
            className={`lg:w-1/2 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"
              } flex flex-col p-8 lg:p-24`}
          >
            <h3 className="text-2xl font-semibold mb-2">{service.heading}</h3>
            <p className="mb-4">{service.description}</p>
            <ul className="ml-6 space-y-4">
              {service.bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-metallicorange">
                  <CheckCircle />
                  <p>{point}</p>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <button className="bg-trueblue rounded-lg p-4 mt-10 text-white text-xl font-bold hover:bg-metallicorange hover:scale-101 hover:transition-all w-full cursor-pointer">
                Find out more
              </button>
            </Link>
          </div>
        </section>
      ))}

      {/* Testimonials & CTA */}
      <Testimonials />
      <CTA />
    </>
  );
}
