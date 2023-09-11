"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Menu, XCircle, ChevronRight, ChevronDown } from 'react-feather'
import { useState } from 'react'

export default function Header() {
  const inline = "flex items-center space-x-6 text-lg"
  const navLink = "px-2 py-1 rounded tracking-wide transition-all hover:scale-110 hover:font-bold hover:text-shadow hover:tracking-normal hover:translate-x-4 hover:lg:translate-x-1"
  const dropdownLink = "text-philippinesilver px-2 py-1 tracking-wide transition-all hover:border-l-4 hover:border-metallicorange hover:shadow hover:text-metallicorange"
  const mobileDropdownLink = "hover:border-l-4 hover:border-metallicorange hover:pl-2 hover:text-deepkoamaru hover:transition-all"

  // Define a state to track whether the mobile menu is open or closed.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Function to toggle the mobile menu.
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Function to toggle the dropdown menu.
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <header className="fixed w-screen flex flex-row bg-trueblue text-white p-6 justify-between z-50 shadow">
      <section className={inline}>
        {!isMobileMenuOpen && ( // Render the logo only if the mobile menu is closed

          <Link href="#" className="hover:scale-100 lg:hover:scale-110 hover:transition-all scale-90 lg:scale-100">
            <Image
              src="/wordmark.svg"
              alt="1 Electric Wordmark"
              width={160}
              height={43}
              priority
            />
          </Link>
        )}

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center ">
          <ul className="flex space-x-6">
            <li className={`${navLink} relative`}>
              <div
                className="flex items-center cursor-pointer"
                onMouseEnter={toggleDropdown} // Use onMouseEnter and onMouseLeave to handle hover
                onMouseLeave={toggleDropdown}
              >
                <Link href="#">Services</Link>
                <button>
                  {isDropdownOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>


                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <ul className="absolute bg-white shadow text-base p-4 rounded mt-40 left-0 z-10">
                    <li className={dropdownLink}>
                      <Link href="#">Industrial</Link>
                    </li>
                    <li className={dropdownLink}>
                      <Link href="#">Commercial</Link>
                    </li>
                    <li className={dropdownLink}>
                      <Link href="#">Maintenance</Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>

            <li className={navLink}>
              <Link href="#">About</Link>
            </li>
            <li className={navLink}>
              <Link href="#">Gallery</Link>
            </li>
            <li className={navLink}>
              <Link href="#">Join</Link>
            </li>
          </ul>
        </nav>

      </section>

      {/* Phone number and button */}
      <section className={`${inline} hidden lg:flex`}>
        <Link href="tel:+64224571594" className={`${navLink} items-center space-x-2 `}>
          <span className="flex space-x-2 items-center"><Phone size={20} /><p>022 457 1594</p></span>
        </Link>

        <Link href="#">
          <button className="bg-deepkoamaru hover:bg-metallicorange hover:font-bold border-2 border-trueblue hover:shadow transition-all hover:scale-105 py-2 px-6 rounded-xl hidden lg:flex">Contact Us</button>
        </Link>
      </section>


      {/* Display the hamburger menu icon on small screens */}
      <div className="absolute right-6 top-6 lg:hidden transition-all">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <XCircle size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden w-[100%]">
          <ul className="flex flex-col space-y-4 pl-2 mb-6">
          <li className={`${navLink} relative`}>
                  <Link href="#">Services</Link>
                  
                  {/* No dropdown on mobile menu */}
                  <ul className="text-sm rounded z-10 ml-4 mt-2 space-y-4">
                    <li className={mobileDropdownLink}>
                      <Link href="#">Industrial</Link>
                    </li>
                    <li className={mobileDropdownLink}>
                      <Link href="#">Commercial</Link>
                    </li>
                    <li className={mobileDropdownLink}> 
                      <Link href="#">Maintenance</Link>
                    </li>
                  </ul>

            </li>
            <li className={navLink}>
              <Link href="#">About</Link>
            </li>
            <li className={navLink}>
              <Link href="#">Gallery</Link>
            </li>
            <li className={navLink}>
              <Link href="#">Join</Link>
            </li>
          </ul>
          <hr />
          {/* phone number and button */}
          <section className="flex flex-col pl-2 text-sm py-2">
            <Link href="tel:+64224571594" className={`${navLink} items-center`}>
              <span className="flex space-x-1"><Phone size={20} /><p>022 457 1594</p></span>
            </Link>
            <Link href="#" >
              <button className="bg-deepkoamaru hover:bg-metallicorange border-2 border-trueblue hover:font-bold hover:shadow transition-all hover:scale-110 py-2 px-6 w-full mt-2 rounded-xl">Contact Us</button>
            </Link>
          </section>
        </nav>
      )}
    </header>
  )
}
