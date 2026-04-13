"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { href: "/dashboard", icon: "home", label: "मुख्य पृष्ठ" },
  { href: "/services", icon: "apps", label: "सेवा" },
  { href: "/complaints", icon: "report_problem", label: "तक्रारी" },
  { href: "/notifications", icon: "notifications", label: "सूचना" },
  { href: "/profile", icon: "person", label: "प्रोफाईल" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav" id="bottom-navigation">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`nav-item ${pathname === item.href ? "active" : ""}`}
          id={`nav-${item.icon}`}
        >
          <span className="material-symbols-rounded">{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
