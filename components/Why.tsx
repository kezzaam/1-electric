import WhyCard from "./WhyCard"
import { Home, Shield, Award, Tool, Compass, Zap } from "react-feather"

export default function Why() {
  return (
<section className="mt-[96px] flex flex-col items-center justify-center snap-center">
      <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">Subheading</h4>
      <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us?</h2>
      <p className="text-center mb-8 max-w-2xl">
        Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <WhyCard icon={<Home size={36} />} heading="Locally owned & operated" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <WhyCard icon={<Shield size={36} />} heading="Comprehensive Health & Safety" description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <WhyCard icon={<Award size={36} />} heading="Certified Master Electricians" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." />
        <WhyCard icon={<Tool size={36} />} heading="Workmanship you can trust" description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
        <WhyCard icon={<Compass size={36} />} heading="Specialised" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <WhyCard icon={<Zap size={36} />} heading="Dependable innovation" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      </div>
    </section>
  )
}
