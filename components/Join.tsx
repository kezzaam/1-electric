import CTA from '@/components/CTA'
import Testimonials from '@/components/Testimonials'

export default function Join() {
  return (
    <>
      <div className="flex pt-[95px] bg-cover w-auto h-[55vh] bg-[url('/bayofplenty.jpg')]">
      </div>
      <main className="flex flex-col items-center justify-center p-6 lg:px-24 lg:py-12 snap-y">
        <section className="flex flex-col items-center text-center snap-center space-y-10">

          {/* heading, title, description */}
          <div>
            <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">We are 1 Electric</h4>
            <h2 className="text-3xl font-bold text-center mb-4">Join our team</h2>
            <p className="text-xl text-center mb-8 max-w-2xl">
              Brief description around hiring. Form for expressions of interest with relevant details. This part could indicate whether hiring or not hiring and have a switch in CMS to change the description
            </p>
          </div>

          {/* divider */}
          <div className="w-36 h-1 mb-10 bg-trueblue"></div>

          {/* form section */}
          Form goes here

        </section>
      </main>
      <Testimonials />
      <CTA />
    </>
  )
}
