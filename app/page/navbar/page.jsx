"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";  
import logo from "../../../public/assests/logo-bg.png"; 
import "./navbar.css";

export default function Navbar() {
  const pathname = usePathname();   

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Image
            src={logo}
            alt="Logo"
            width={79}
            height={17}
            className="logo-image"
          />
        </div>

        <ul className="nav-links">
     <li>
  <Link href="/page/mainhero" className={pathname === "/" ? "active" : ""}>
    Home
  </Link>
</li>
<li>
  <Link href="/about/mainabout" className={pathname === "/about" ? "active" : ""}>
    About
  </Link>
</li>
          <li>
            <Link href="/help" className={pathname === "/help" ? "active" : ""}>
              Help Center
            </Link>
          </li>
          <li>
            <Link href="/pricing" className={pathname === "/pricing" ? "active" : ""}>
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/pages">
            Privacy Policy
            </Link>
          </li>
        </ul>

        <button className="get-started-btn">Get Started</button>
      </div>
    </nav>
  );
}