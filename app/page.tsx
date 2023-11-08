import Hero from '@/components/Hero'
import ServicesCards from '@/components/ServicesCards'
import Why from '@/components/Why'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-center p-6 lg:p-24 snap-y">
      <Hero />
      <ServicesCards />
      <Why /> 
    </main>
    <Testimonials />
    <CTA />
    </>
    
  )
}