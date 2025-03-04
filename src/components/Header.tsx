import { Link } from "react-router-dom";
import { Phone, Menu, XCircle, ChevronRight, ChevronDown } from "react-feather";
import { useState } from "react";

export default function Header() {
  const inline = "flex items-center space-x-6 text-lg";
  const navLink =
    "px-2 py-1 rounded tracking-wide transition-all hover:font-semibold text-white hover:text-shadow-sm";
  const dropdownLink =
    "text-philippinesilver px-2 py-1 tracking-wide transition-all hover:border-l-4 hover:border-metallicorange hover:text-metallicorange";
  const mobileDropdownLink =
    "hover:border-l-4 hover:border-metallicorange hover:pl-1 hover:text-deepkoamaru hover:transition-all";

  // State management
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Toggle dropdown menu
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="fixed w-screen flex flex-row bg-trueblue text-white p-6 justify-between z-50 shadow">
      <section className={inline}>
        {!isMobileMenuOpen && (
          <Link to="/" className="hover:scale-100 lg:hover:scale-105 hover:transition-all scale-95 lg:scale-100">
            <img src="/wordmark.svg" alt="1 Electric Wordmark" width={160} height={47} />
          </Link>
        )}

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-6">
            <li className={`${navLink} relative`} onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
              <div className="flex items-center cursor-pointer">
                <Link to="/services">Services</Link>
                <button>{isDropdownOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}</button>
              </div>

              {/* Dropdown */}
              {isDropdownOpen && (
                <ul className="absolute bg-white shadow text-base p-4 rounded left-0 z-10">
                  <li className={dropdownLink}><Link to="/services#industrial" onClick={toggleDropdown}>Industrial</Link></li>
                  <li className={dropdownLink}><Link to="/services#commercial" onClick={toggleDropdown}>Commercial</Link></li>
                  <li className={dropdownLink}><Link to="/services#residential" onClick={toggleDropdown}>Residential</Link></li>
                </ul>
              )}
            </li>

            <li className={navLink}><Link to="/about">About</Link></li>
            <li className={navLink}><Link to="/gallery">Gallery</Link></li>
            <li className={navLink}><Link to="/join">Join</Link></li>
          </ul>
        </nav>
      </section>

      {/* Contact Info */}
      <section className={`${inline} hidden lg:flex`}>
        <Link to="tel:+64224571594" className={`${navLink} items-center space-x-2`}>
          <span className="flex space-x-2 items-center"><Phone size={20} /><p>022 457 1594</p></span>
        </Link>
        <Link to="/contact">
          <button className="bg-deepkoamaru hover:bg-metallicorange border-2 border-trueblue hover:font-bold hover:border-white transition-all py-2 px-6 rounded-xl hidden lg:flex cursor-pointer">
            Contact Us
          </button>
        </Link>
      </section>

      {/* Mobile Menu Toggle */}
      <div className="absolute right-6 top-6 lg:hidden transition-all z-50">
        <button onClick={toggleMobileMenu}>{isMobileMenuOpen ? <XCircle size={24} /> : <Menu size={24} />}</button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden w-[100%]">
          <ul className="flex flex-col space-y-4 pl-2 mb-6">
            <li className={navLink}><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
            <li className={`${navLink} relative`}>
              <Link to="/services" onClick={toggleMobileMenu}>Services</Link>
              <ul className="text-sm rounded z-10 ml-4 mt-4 space-y-4">
                <li className={mobileDropdownLink}><Link to="/services#industrial" onClick={toggleMobileMenu}>Industrial</Link></li>
                <li className={mobileDropdownLink}><Link to="/services#commercial" onClick={toggleMobileMenu}>Commercial</Link></li>
                <li className={mobileDropdownLink}><Link to="/services#residential" onClick={toggleMobileMenu}>Residential</Link></li>
              </ul>
            </li>
            <li className={navLink}><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
            <li className={navLink}><Link to="/gallery" onClick={toggleMobileMenu}>Gallery</Link></li>
            <li className={navLink}><Link to="/join" onClick={toggleMobileMenu}>Join</Link></li>
          </ul>
          <hr />
          {/* Mobile Contact */}
          <section className="flex flex-col pl-2 text-sm py-4 gap-4">
            <Link to="tel:+64224571594" className={`${navLink} items-center`} onClick={toggleMobileMenu}>
              <span className="flex space-x-1"><Phone size={20} /><p>022 457 1594</p></span>
            </Link>
            <Link to="/contact" onClick={toggleMobileMenu}>
              <button className="bg-deepkoamaru hover:bg-metallicorange border-2 border-trueblue hover:font-bold hover:border-white transition-all py-2 px-6 w-full mt-2 rounded-xl cursor-pointer">
                Contact Us
              </button>
            </Link>
          </section>
        </nav>
      )}
    </header>
  );
}
