import Link from 'next/link'
import Image from 'next/image'
import { Mail } from 'react-feather'

interface ProfileCardProps {
    name: string
    position: string
    description: string
    email: string
    image: string
}

export default function ProfileCard({ name, position, description, email, image }: ProfileCardProps) {
    return (
        <div className="w-full">
            <div className="opacity-90 bg-white rounded shadow flex flex-col h-full hover:scale-105 hover:opacity-100 hover:transition-all text-left">
                <div className="flex-grow">
                    <div className="w-full rounded-t relative overflow-hidden">
                        <Image src={image} alt={name} width={500} height={300} />
                    </div>
                    <div className="p-4">
<h5 className="text-sm text-trueblue mt-4">{position}</h5>
                    <h3 className="text-lg font-semibold my-2">{name}</h3>
                    <p className="text-base">{description}</p>
                    </div>
                    
                </div>
                <Link href={`mailto:${email}`} className="mt-4 text-trueblue hover:text-metallicorange transition-all p-4">
                    <span className="flex items-center space-x-1"><Mail size={20} /><p>{email}</p></span>
                </Link>
            </div>
        </div>

    )
}
