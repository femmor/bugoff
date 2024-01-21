"use client";

import Link from "next/link";
import { SiOpenbugbounty } from "react-icons/si";
import { links } from "./utils/Links";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Navbar = () => {
  // Gets the current path (alternative for styling active links)
  const currentPath = usePathname();

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
              className={classNames({
                "text-gray-500": link.href !== currentPath,
                "text-gray-900": link.href === currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
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
