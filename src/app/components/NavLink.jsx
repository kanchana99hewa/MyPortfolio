import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="text-white hover:text-[#b39db4] transition-colors duration-300 text-lg md:text-xl"
    >
      {title}
    </Link>
  );
};

export default NavLink;
