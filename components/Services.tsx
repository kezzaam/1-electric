import Link from 'next/link'
import Image from 'next/image'
import CTA from './CTA'
import { CheckCircle } from 'react-feather'
import Testimonials from './Testimonials'

export default function Services() {

  // service data
  const services = [
    {
      image: '/industrial-image.jpg',
      heading: 'Industrial',
      description: 'Experienced in working with large industrial sites in the Bay of Plenty on a range of electrical solutions',
      bulletPoints: [
        'Power distribution',
        'Lighting',
        'Maintenance',
        'Breakdown and Repairs',
        'Emergency lighting',
        'Backup power supplies',
        'Shutdowns',
        'Integrations',
        'Machine control and safety systems'
      ],
    },
    {
      image: '/commercial-image.jpg',
      heading: 'Commercial',
      description: 'Expert advice working with our commercial partners in the Bay of Plenty on new fit outs and upgrades, design and installation.',
      bulletPoints: [
        'New builds',
        'Alterations',
        'Lighting design and installation',
        'Mechanical wiring',
        'Temporary power supplies'
      ],
    },
    {
      image: '/maintenance-image.jpg',
      heading: 'Residential',
      description: 'Providing a professional service and high quality workmanship in all aspects of residential electrical work.',
      bulletPoints: [
        'Renovations',
        'Home automation',
        'Switchboard upgrades'
      ],
    },
  ]

  return (
    <>
      <div className="flex bg-cover w-auto h-[55vh] bg-[url('/testing-image.jpg')]">
      </div>
      <main className="flex flex-col items-center justify-center p-6 lg:p-24 snap-y">
        <section className="text-center snap-center space-y-10">
          <div>
            <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">What We Do</h4>
            <h2 className="text-3xl font-bold text-center mb-4">Electrical Services</h2>
            <p className="text-xl text-center mb-8 max-w-2xl">
              We are a locally owned and operated business servicing the Bay of Plenty Region, specialising in heavy industrial, industrial and commercial electrical.
              With a key group of experienced and qualified electricians our focus is dependable innovation and robust electrical installations in the industrial and commercial sector.
            </p>
          </div>
          {/* divider */}
          <div className="w-36 h-1 mb-10 bg-trueblue mx-auto"></div>
        </section>
      </main>

      {/* Service sections */}
      {services.map((service, index) => (
        <Link
          key={index}
          href={`#${service.heading.toLowerCase()}`} // Unique href based on service name
        >

          <section
            key={index}
            id={service.heading.toLowerCase().replace(' ', '-')} // Unique ID based on service name
            className={`${index % 2 === 0 ? 'bg-ghostwhite' : 'bg-deepkoamaru text-white'
              } flex flex-col lg:flex-row shadow hover:scale-105 hover:transition-all snap-center scroll-mt-24 items-center`}
          >
            {/* Image column */}
            <div className={`lg:w-1/2 lg:order-${index % 2 === 0 ? '2' : '1'}`}>
              <Image
                src={service.image}
                alt={service.heading}
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>
            {/* Information column */}
            <div className={`lg:w-1/2 lg:order-${index % 2 === 0 ? '1' : '2'} flex flex-col p-8 lg:p-24`}>
              <h3 className="text-2xl font-semibold mb-2">{service.heading}</h3>
              <p className="mb-4">{service.description}</p>
              <ul className="ml-6 space-y-4">
                {service.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-center space-x-2 text-metallicorange">
                    <CheckCircle />
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
              <Link href="/contact"><button className="bg-trueblue rounded-lg p-4 mt-10 text-white text-xl font-bold hover:bg-metallicorange hover:scale-105 hover:transition-all w-full">Find out more</button></Link>
            </div>
          </section>
        </Link>
      ))}
      <Testimonials />
      <CTA />
    </>
  )
}
