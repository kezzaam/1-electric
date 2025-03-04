import { Link } from "react-router-dom";
import { Facebook } from "react-feather";

// Styling adjustments
const navLink =
  "transition-all hover:scale-105 hover:text-trueblue hover:text-shadow hover:underline";

export default function Socials() {
  return (
    <section className="flex space-x-6">
      <span className={navLink}>
        {/* TODO: add facebook link */}
        <Link to="#" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </Link>
      </span>
      {/* Uncomment & Add Links When Ready */}
      {/* <span className={navLink}>
        <Link to="#" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </Link>
      </span>
      <span className={navLink}>
        <Link to="#" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </Link>
      </span> */}
    </section>
  );
}
