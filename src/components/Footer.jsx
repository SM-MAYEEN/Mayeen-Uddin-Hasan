import { ArrowUp, Mail, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Education", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Research", href: "#research" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Activities", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 flex items-center justify-center font-bold text-black text-base">
                MH
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                MAYEEN UDDIN HASAN
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-2 max-w-sm">
              Full-stack web developer and Computer Science and Engineering graduate interested in web development, programming, and AI.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/SM-MAYEEN"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:mdmayeen855@gmail.com"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/sm-mayeen/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>

            <a
              href="https://codeforces.com/profile/mayeenuddinhasan"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              title="Codeforces"
              aria-label="Codeforces Profile"
            >
              <Code2 className="h-4 w-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-cyan-400 text-black hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/20"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© {currentYear} Mayeen Uddin Hasan. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Designed & Engineered with React 19, GSAP & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
