import Hero from "./Hero"
import ServicesCards from "./ServicesCards"
import Why from "./Why"
import Testimonials from "./Testimonials"
import CTA from "./CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <section className="content">
        <ServicesCards />
        <Why /> 
      </section>
      <Testimonials />
      <CTA />
    </>
  )
}