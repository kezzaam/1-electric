import React from "react";

interface WhyCardProps {
  icon: React.ReactNode;
  heading: string;
  description: string;
}

export default function WhyCard({ icon, heading, description }: WhyCardProps) {
  return (
    <article
      className="flex flex-col items-center justify-center text-center transition-transform hover:scale-105 focus-within:scale-105"
      tabIndex={0} 
    >
      {/* Icon */}
      <div className="bg-trueblue text-white rounded p-4 z-20">{icon}</div>

      {/* Content */}
      <div className="bg-ghostwhite rounded px-10 py-14 -mt-10 z-10 min-h-[250px]">
        <h3 className="text-lg font-semibold my-2">{heading}</h3>
        <p className="text-base">{description}</p>
      </div>
    </article>
  );
}
