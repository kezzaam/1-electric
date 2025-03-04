import { Link } from "react-router-dom";
import Socials from "./Socials";

const navLink =
  "transition-all hover:text-trueblue hover:text-shadow hover:underline hover:scale-105";

export default function Footer() {
  return (
    <footer className="bottom-0 text-sm w-screen flex flex-col space-y-8 items-center justify-center bg-yankeesblue text-white p-6">
      <nav>
        <ul className="flex space-x-6">
          <li className={navLink}>
            <Link to="/about">About</Link>
          </li>
          <li className={navLink}>
            <Link to="/services">Services</Link>
          </li>
          <li className={navLink}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={navLink}>
            <Link to="/join">Join</Link>
          </li>
          <li className={navLink}>
            <Link to="/terms">Terms</Link>
          </li>
        </ul>
      </nav>
      <Socials />
      <section>
        <p className="text-xs">
          © {new Date().getFullYear()} 1 Electric Ltd. Website by{" "}
          <span className={`${navLink} font-bold`}>
            <Link to="https://moondog.co.nz" target="_blank" rel="noopener noreferrer">
              moondog
            </Link>
          </span>
        </p>
      </section>
    </footer>
  );
}
