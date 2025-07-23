"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
  { href: "/coming-soon", label: "Login" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeHash, setActiveHash] = React.useState("");
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const onHashChange = () => setActiveHash(window.location.hash);
      window.addEventListener("hashchange", onHashChange);
      setActiveHash(window.location.hash);
      return () => window.removeEventListener("hashchange", onHashChange);
    }
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("#")) {
      return isHome && activeHash === href;
    }
    return pathname === href;
  };

  return (
    <nav className={`flex items-center justify-between px-8 py-6 shadow-sm transition-colors duration-300 ${isHome ? "bg-white" : "bg-[#0A2B73]"}`}>
      <div className="flex items-center gap-1 text-2xl font-extrabold tracking-tight">
        <Image src="/logo2.png" alt="Bright Path Logo" width={32} height={32} className="h-7 w-7 object-contain" />
        <span>
          <span className={isHome ? "text-[#0A2B73]" : "text-white"}>BRIGHT </span>
          <span className="text-[#FFD600]">PATH</span>
        </span>
      </div>
      {/* Desktop Nav */}
      <div className={`gap-10 font-medium text-base hidden md:flex ${isHome ? "text-[#0A2B73]" : "text-white"}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`relative transition-colors duration-200 ${
              isActive(link.href)
                ? "text-[#FFD600] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-1 after:bg-[#FFD600] after:rounded"
                : "hover:text-[#FFD600]"
            }`}
            style={{ paddingBottom: isActive(link.href) ? 4 : undefined }}
          >
            {link.label}
          </a>
        ))}
      </div>
      {/* Hamburger Icon - Mobile/Tablet Only */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-30"
        aria-label="Open menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={`block w-7 h-0.5 mb-1.5 transition-all duration-300
          ${isHome && !menuOpen ? 'bg-[#0A2B73]' : 'bg-[#FFD600]'}
          ${menuOpen ? 'rotate-45 translate-y-2' : ''}
        `}></span>
        <span className={`block w-7 h-0.5 mb-1.5 transition-all duration-300
          ${isHome && !menuOpen ? 'bg-[#0A2B73]' : 'bg-[#FFD600]'}
          ${menuOpen ? 'opacity-0' : ''}
        `}></span>
        <span className={`block w-7 h-0.5 transition-all duration-300
          ${isHome && !menuOpen ? 'bg-[#0A2B73]' : 'bg-[#FFD600]'}
          ${menuOpen ? '-rotate-45 -translate-y-2' : ''}
        `}></span>
      </button>
      {/* Mobile Nav Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-20 transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col p-8 gap-6 text-[#0A2B73] font-semibold text-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors duration-200 ${isActive(link.href) ? 'text-[#FFD600]' : 'hover:text-[#FFD600]'}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
} 