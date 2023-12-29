import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';
import Mount from './Mount';

export default function Terms() {
  return (
    <>
      <Mount />
      <main className="flex flex-col items-center justify-center p-6 lg:px-24 lg:py-12 snap-y">
        <section className="flex flex-col items-center text-center snap-center space-y-10">
          <div>
            <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">Privacy Statement</h4>
            <h2 className="text-3xl font-bold text-center mb-4">Our Commitment to Privacy</h2>
            <p className="text-xl text-center mb-8 max-w-2xl">
              At 1 Electric, we prioritize the integrity, security, and privacy of personal information. We adhere to the principles outlined in the Privacy Act 2020 and are committed to safeguarding your information.
              <br /><br />
              We collect various types of personal information, including but not limited to: name, contact information, location, and site/job-specific details. This information is utilized to complete electrical projects and may be shared with other tradespeople involved in a project.
              <br /><br />
              You have the right to request a copy of your personal information held by us and request corrections if necessary. For inquiries or corrections, please contact us at admin@1electric.nz or call 022 457 1594.
            </p>
          </div>

          <div className="w-36 h-1 mb-10 bg-trueblue"></div>

          <div>
            <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">Health & Safety Statement</h4>
            <h2 className="text-3xl font-bold text-center mb-4">Our Commitment to Health & Safety</h2>
            <p className="text-xl text-center mb-8 max-w-2xl">
              At 1 Electric, we maintain a proactive approach to health and safety. We continuously evolve our practices based on incident reports, changes in regulations, and best practices in the industry.
              <br /><br />
              We prioritize providing a safe and healthy workplace for our team and others present on-site. Our comprehensive workplace health and safety policies, updated regularly, ensure adherence to sound practices. Additionally, our team holds certifications in first aid, working at heights, and elevated working platforms. We are certified master electricians and members of Sitesafe.
            </p>
          </div>
        </section>
      </main>
      <Testimonials />
      <CTA />
    </>
  );
}
