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
            <h2 className="text-3xl font-bold text-center mb-4 max-w-2xl mx-auto">Become part of a growing team with a big variety of exciting projects</h2>
            <div className="text-xl mb-8 max-w-4xl space-y-6">
              <p>We are often looking for qualified Electricians in the Bay of Plenty. We specialise in industrial work and have a great team that we look after.</p>
              <p>Depending on our needs at the time, we can accommodate an employee or sub-contractor arrangement with flexibility around days / hours per week for the right person.</p>
              <p>We look for an experienced Industrial Electrician with great problem solving skills and a willingness to learn and to teach apprentices. Excellent communication with all of our team and stakeholders is a must.  The perfect fit for our team is someone who is honest, reliable with great work ethic and an ability to self manage and work independently.</p>

              <p>You would need a current practicing license and a current drivers license. Working at heights and <span title="Mobile Elevating Work Platform">MEWP</span> certification is a bonus however we can provide necessary training for the right person.</p>
              <p>If you think you’ve got what it takes please email us your CV <a href="mailto:admin@1electric.nz">admin@1electric.nz</a> telling us a bit about yourself and we’ll get in touch.</p>

            </div>
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
