import Link from "next/link";
import { SiOpenbugbounty } from "react-icons/si";
import { links } from "./utils/Links";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 h-14 mb-5 border-b">
      <Link href="/" className="flex items-center">
        <SiOpenbugbounty className="text-3xl text-red-500" />
        <span className="" title="bugoff">
          off
        </span>
      </Link>
      <ul className="flex items-center space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
