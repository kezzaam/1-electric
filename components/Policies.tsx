import CTA from '@/components/CTA'
import Testimonials from '@/components/Testimonials'

export default function Policies() {
  return (
    <>
    <div className="flex pt-[95px] bg-cover w-auto h-[55vh] bg-[url('/bayofplenty.jpg')]">
    </div>
    <main className="flex flex-col items-center justify-center p-6 lg:px-24 lg:py-12 snap-y">
      <section className="flex flex-col items-center text-center snap-center space-y-10">

        {/* heading, title, description */}
        <div>
          <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">Health & Safety</h4>
          <h2 className="text-3xl font-bold text-center mb-4">Policies & Procedures</h2>
          <p className="text-xl text-center mb-8 max-w-2xl">
          Details about Health & Safety, work practices and policies here, this would be aimed at showing potential clients you are aware/committed to safety, documentation, regulations etc. Could have any links to files / credentials / certifications here too.</p>
        </div>

        {/* divider */}
        <div className="w-36 h-1 mb-10 bg-trueblue"></div>

        {/* form section */}
        Links here, maybe card layout like on home page

      </section>
    </main>
    <Testimonials />
    <CTA />
  </>
  )
}
