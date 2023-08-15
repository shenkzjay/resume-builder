import React from "react";
import { Logo } from "../svg/logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="mt-6 mx-6 md:mx-0">
      <Logo />
    </div>
  );
};

export default Navbar;
