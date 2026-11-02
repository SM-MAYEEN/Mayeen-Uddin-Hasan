import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Education", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Certificates", href: "#certificates" },
    { name: "Activities", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/75 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Logo & Availability Status */}
          <a
            href="#"
            className="flex items-center gap-3 group text-white decoration-none"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 text-base font-bold text-black shadow-md shadow-cyan-500/20 transition-transform group-hover:scale-105 sm:h-10 sm:w-10 sm:text-lg">
              MH
            </div>
            <div className="flex flex-col">
              <span className="whitespace-nowrap text-[10px] font-bold tracking-wide text-white transition-colors group-hover:text-cyan-400 sm:text-xs lg:text-sm">
                MAYEEN UDDIN HASAN
              </span>
              <span className="hidden items-center gap-1.5 text-[10px] text-zinc-400 sm:flex sm:text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to Full-Stack Roles
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md xl:flex xl:px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-full px-2 py-1.5 text-xs font-medium text-zinc-300 transition-all hover:bg-white/5 hover:text-cyan-400 xl:px-3.5 xl:text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden items-center gap-2 xl:flex">
            <a
              href="https://github.com/SM-MAYEEN"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black text-xs lg:text-sm font-semibold px-4 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all"
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="/files/Mayeen-Uddin-Hasan-Resume.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-zinc-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <Download className="h-4 w-4" />
              CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href="https://github.com/SM-MAYEEN"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-zinc-400 hover:text-white"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mt-3 space-y-3 border-b border-white/10 bg-zinc-950/95 px-4 py-5 backdrop-blur-xl sm:px-6 sm:py-6 xl:hidden">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full rounded-xl bg-cyan-400 py-2.5 text-center text-sm font-semibold text-black transition-colors hover:bg-cyan-300 sm:flex-1"
            >
              Contact Mayeen
            </a>
            <a
              href="mailto:mdmayeen855@gmail.com"
              className="flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-center text-xs text-zinc-400 transition-colors hover:text-white sm:flex-1"
            >
              <Mail className="w-4 h-4" /> mdmayeen855@gmail.com
            </a>
            <a
              href="/files/Mayeen-Uddin-Hasan-Resume.pdf"
              download
              className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/10 py-2 text-center text-xs text-zinc-300 transition-colors hover:text-cyan-300 sm:flex-1"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
