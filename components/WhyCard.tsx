import React from 'react'

interface WhyCardProps {
    icon: React.ReactNode // ReactNode is a type that accepts any valid JSX
    heading: string
    description: string
}

export default function WhyCard({ icon, heading, description }: WhyCardProps) {
    return (
        <div className="flex flex-col items-center justify-center hover:scale-105 hover:transition-all text-center">
            <div className="bg-trueblue text-white rounded p-4 z-20">{icon}</div>

            <div className="bg-ghostwhite rounded px-10 py-14 -mt-10 z-10 min-h-[250px]">
                <h3 className="text-lg font-semibold my-2">{heading}</h3>
                <p className="text-base">{description}</p>
            </div>
        </div>

    )
}
