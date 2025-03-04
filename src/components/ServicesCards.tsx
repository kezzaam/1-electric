import ServiceCard from "./ServiceCard";

export default function ServicesCards() {
  return (
    <article id="what" className="flex flex-col items-center justify-center snap-center">
      {/* Heading, Title, Description */}
      <div className="text-center">
        <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">What we do</h4>
        <h2 className="text-3xl font-bold mb-4">Electrical Services</h2>
        <p className="text-xl mb-8 max-w-2xl">
          With a key group of experienced and qualified electricians, our focus is dependable innovation and robust 
          electrical installations in the industrial and commercial sector.
        </p>
      </div>

      {/* Divider */}
      <div className="divider"></div>

      {/* Service Cards */}
      <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
        <ServiceCard
          title="Industrial"
          subheading="Powering Heavy Industry"
          description="Experienced in working with large industrial sites in the Bay of Plenty on a range of electrical solutions."
          link="/services#industrial"
          image="/industrial-image.jpg"
        />
        <ServiceCard
          title="Commercial"
          subheading="Reliable Business Solutions"
          description="Expert advice working with our commercial partners in the Bay of Plenty on new fit-outs and upgrades, design, and installation."
          link="/services#commercial"
          image="/commercial-image.jpg"
        />
        <ServiceCard
          title="Residential"
          subheading="Safe & Efficient Homes"
          description="Providing a professional service and high-quality workmanship in all aspects of residential electrical work."
          link="/services#residential"
          image="/maintenance-image.jpg"
        />
      </div>
    </article>
  );
}
