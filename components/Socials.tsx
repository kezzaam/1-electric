import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'react-feather'

// styling
const navLink = "transition-all hover:scale-125 hover:text-trueblue hover:text-shadow hover:underline"


export default function Socials() {
    return (
        <section className="flex space-x-6">
            <span className={navLink}>
                <Link href="#">
                    <Facebook />
                </Link>
            </span>
            <span className={navLink}>
                <Link href="#">
                    <Instagram />
                </Link>
            </span>
            <span className={navLink}>
                <Link href="#">
                    <Twitter />
                </Link>
            </span>
        </section>
    )
}
