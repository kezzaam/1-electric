import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Why from '@/components/Why'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-center p-6 lg:p-24 snap-y">
      <Hero />
      <Services />
      <Why />
    </main>
    <CTA />
    </>
    
  )
}
