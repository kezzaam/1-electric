import WhyCard from "./WhyCard"
import { Home, Shield, Award, Tool, Compass, Zap } from "react-feather"

export default function Why() {
  return (
    <section className="mt-[96px] flex flex-col items-center justify-center snap-center">
      {/* heading, title, description */}
      <div>
        <h4 className="text-sm uppercase text-trueblue tracking-wide my-4 text-center">How we do it</h4>
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us?</h2>
        <p className="text-xl text-center mb-8 max-w-2xl">
          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
        </p>
      </div>
      {/* divider */}
      <div className="w-36 h-1 mb-10 bg-trueblue"></div>
      {/* why cards */}
      {/* NOTE - for CMS put logic in to break new sentences to new lines */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <WhyCard icon={<Home size={36} />} heading="Locally owned & operated" description="Servicing the Bay of Plenty Region. No job too big or small." />
        <WhyCard icon={<Shield size={36} />} heading="Health & Safety" description="Comprehensive Workplace Health and Safety policies and processes" />
        <WhyCard icon={<Award size={36} />} heading="Certified" description="Master Electricians - all work is guaranteed. Certified for working at heights and on mobile elevated work platforms." />
        <WhyCard icon={<Tool size={36} />} heading="Workmanship you can trust" description="Honest, reliable, quality workmanship and great communication." />
        <WhyCard icon={<Compass size={36} />} heading="Specialised" description="Working on Greenfield Projects, Upgrades, Shutdowns, Integrations and more." />
        <WhyCard icon={<Zap size={36} />} heading="Dependable" description="Electrical service, repairs and maintenance. Scissor lifts available for works and hire." />
      </div>
    </section>
  )
}
