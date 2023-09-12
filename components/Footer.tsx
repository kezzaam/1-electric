import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'react-feather'

const navLink = "transition-all hover:scale-125 hover:text-deepkoamaru hover:text-shadow hover:underline"

export default function Footer() {
  return (
    <footer className="text-sm w-screen flex flex-col space-y-8 items-center justify-center bg-trueblue text-white p-6">
        <nav>
            <ul className="flex space-x-6 ">
                <li className={navLink}>
                    <Link href="/about">About</Link>
                </li>
                <li className={navLink}>
                    <Link href="/services">Services</Link>
                </li>
                <li className={navLink}>
                    <Link href="/contact">Contact</Link>
                </li>
                <li className={navLink}>
                    <Link href="/join">Join</Link>
                </li>
                <li className={navLink}>
                    <Link href="/policies">Policies</Link>
                </li>
            </ul>
        </nav>
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
        <section>
            <p className="text-xs">© 2023 1 Electric Ltd. Website by <span className={`${navLink} font-bold`}><Link href="https://moondog.co.nz">moondog</Link></span></p>
        </section>
    </footer>
  )
}
