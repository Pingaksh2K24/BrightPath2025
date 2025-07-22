"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeHash, setActiveHash] = React.useState("");

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
      <div className={`flex gap-10 font-medium text-base ${isHome ? "text-[#0A2B73]" : "text-white"}`}>
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
    </nav>
  );
} 