import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'react-feather'

interface ServiceCardProps {
    title: string
    description: string
    link: string
    image: string
}

export default function ServiceCard({ title, description, link, image }: ServiceCardProps) {
    return (
        <div className="w-full">
            <div className="opacity-90 bg-white rounded shadow flex flex-col h-full hover:scale-105 hover:opacity-100 hover:transition-all">
                <div className="flex-grow">
                    <div className="w-full rounded-t relative overflow-hidden">
                        <Image src={image} alt={title} width={500} height={300} />
                    </div>
                    <div className="p-4">
<h5 className="text-sm text-trueblue mt-4">Subheading</h5>
                    <h3 className="text-lg font-semibold my-2">{title}</h3>
                    <p className="text-base">{description}</p>
                    </div>
                    
                </div>
                <Link href={link} className="mt-4 text-trueblue hover:text-metallicorange transition-all p-4">
                    <span className="flex items-center">More <ChevronRight size={20} /></span>
                </Link>
            </div>
        </div>

    )
}
