import ServiceCard from './ServiceCard'

export default function ServicesCards() {
  return (
    <section id="what" className="mt-[96px] flex flex-col items-center justify-center snap-center">
      {/* heading, title, description */}
      <div>
        <h4 className="text-sm uppercase text-trueblue tracking-wide my-4 text-center">What we do</h4>
        <h2 className="text-3xl font-bold text-center mb-4">Electrical Services</h2>
        <p className="text-xl text-center mb-8 max-w-2xl">
        With a key group of experienced and qualified electricians, our focus is dependable innovation and robust electrical installations in the industrial and commercial sector.
        </p>
      </div>
      {/* divider */}
      <div className="w-36 h-1 mb-10 bg-trueblue"></div>
      {/* service cards */}
      <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
        <ServiceCard
          title="Industrial"
          description="Experienced in working with large industrial sites in the Bay of Plenty on a range of electrical solutions."
          link="/services#industrial"
          image="/industrial-image.jpg"
        />
        <ServiceCard
          title="Commercial"
          description="Expert advice working with our commercial partners in the Bay of Plenty on new fit outs and upgrades, design and installation."
          link="/services#commercial"
          image="/commercial-image.jpg"
        />
        <ServiceCard
          title="Residential"
          description="Providing a professional service and high quality workmanship in all aspects of residential electrical work."
          link="/services#residential"
          image="/maintenance-image.jpg"
        />
      </div>
    </section>
  )
}