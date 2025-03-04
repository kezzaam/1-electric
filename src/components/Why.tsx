import WhyCard from "./WhyCard";
import { Home, Shield, Award, Tool, Compass, Zap } from "react-feather";

const whyData = [
  { icon: <Home size={36} />, heading: "Locally owned & operated", description: "Servicing the Bay of Plenty Region. No job too big or small." },
  { icon: <Shield size={36} />, heading: "Health & Safety", description: "Comprehensive Workplace Health and Safety policies and processes. Sitesafe member." },
  { icon: <Award size={36} />, heading: "Certified", description: "Master Electricians - all work is guaranteed. Certified for working at heights and on mobile elevated work platforms." },
  { icon: <Tool size={36} />, heading: "Workmanship you can trust", description: "Honest, reliable, quality workmanship and great communication." },
  { icon: <Compass size={36} />, heading: "Specialised", description: "Working on Greenfield Projects, Upgrades, Shutdowns, Integrations and more." },
  { icon: <Zap size={36} />, heading: "Dependable", description: "Electrical service, repairs and maintenance. Scissor lifts available for works and hire." },
];

export default function Why() {
  return (
    <section id="why" className="main-content">
      {/* Heading */}
      <div className="text-center">
        <h4 className="text-sm uppercase text-trueblue tracking-wide my-4">How we do it</h4>
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
      </div>

      {/* Divider */}
      <div className="divider"></div>

      {/* Why Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        {whyData.map((item, index) => (
          <WhyCard key={index} icon={item.icon} heading={item.heading} description={item.description} />
        ))}
      </div>
    </section>
  );
}
