import ServiceCard from './ServiceCard'

export default function ServicesCards() {
  return (
    <section className="mt-[96px] flex flex-col items-center justify-center snap-center">
      <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">Subheading</h4>
      <h2 className="text-3xl font-bold text-center mb-4">Electrical Services</h2>
      <p className="text-center mb-8 max-w-2xl">
        Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
      </p>
      <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
        <ServiceCard
          title="Industrial"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="/services#industrial"
          image="/industrial-image.jpg"
        />
        <ServiceCard
          title="Commercial"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="/services#commercial"
          image="/commercial-image.jpg"
        />
        <ServiceCard
          title="Repairs & Maintenance"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          link="/services#repairs-maintenance"
          image="/maintenance-image.jpg"
        />
      </div>
    </section>
  )
}