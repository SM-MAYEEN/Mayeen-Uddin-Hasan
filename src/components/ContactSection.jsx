import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Copy,
  Check,
  Send,
  Code2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailDraftOpened, setEmailDraftOpened] = useState(false);

  const email = "mdmayeen855@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formState.subject.trim());
    const body = encodeURIComponent(
      `Name: ${formState.name.trim()}\nReply email: ${formState.email.trim()}\n\n${formState.message.trim()}`,
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setEmailDraftOpened(true);
  };

  return (
    <section id="contact" className="py-24 bg-black relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Extraordinary</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            I’m open to full-stack web development opportunities. Feel free to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left Column: Direct Info Cards (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status card */}
            <div className="rounded-3xl bg-zinc-900/70 border border-white/10 p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                  Currently Available
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Open to Full-Stack Web Development Roles
              </h3>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                I’m currently looking for opportunities as a full-stack web developer.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3">
              {/* Email item */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors relative"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  {copied && (
                    <span className="absolute -top-7 right-0 text-[10px] bg-emerald-500 text-black font-bold px-2 py-0.5 rounded shadow">
                      Copied!
                    </span>
                  )}
                </button>
              </div>

              <a
                href="tel:+8801885363684"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/50 p-4 transition-colors hover:border-cyan-500/30"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">
                    Phone
                  </div>
                  <div className="text-sm font-semibold text-white">
                    +880 1885-363684
                  </div>
                </div>
              </a>

              {/* GitHub item */}
              <a
                href="https://github.com/SM-MAYEEN"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-cyan-500/30 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">
                      GitHub Profile
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      github.com/SM-MAYEEN
                    </div>
                  </div>
                </div>
                <span className="text-xs text-zinc-400 group-hover:text-white transition-colors">
                  Visit →
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/sm-mayeen/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/50 p-4 transition-colors hover:border-cyan-500/30"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                    <LinkedinIcon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                      LinkedIn
                    </div>
                    <div className="break-all text-sm font-semibold text-white transition-colors group-hover:text-cyan-300">
                      linkedin.com/in/sm-mayeen
                    </div>
                  </div>
                </div>
                <span className="shrink-0 text-xs text-zinc-400 transition-colors group-hover:text-white">
                  Visit →
                </span>
              </a>

              <a
                href="https://codeforces.com/profile/mayeenuddinhasan"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/50 p-4 transition-colors hover:border-cyan-500/30"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                      Competitive Programming
                    </div>
                    <div className="break-all text-sm font-semibold text-white transition-colors group-hover:text-cyan-300">
                      Codeforces · mayeenuddinhasan
                    </div>
                  </div>
                </div>
                <span className="shrink-0 text-xs text-zinc-400 transition-colors group-hover:text-white">
                  Visit →
                </span>
              </a>

              {/* Location item */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-900/50 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">
                    Location & Timezone
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Chattogram, Bangladesh
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (3 cols) */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-zinc-900/70 border border-white/10 p-6 sm:p-10 backdrop-blur-sm shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                        Your Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                        Your Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      Subject
                    </label>
                    <input
                      name="subject"
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      placeholder="Project Inquiry / Full Stack Role"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about your project, timeline, or objectives..."
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 py-4 text-sm font-bold tracking-wide text-black shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.01] hover:shadow-cyan-500/40 active:scale-[0.99]"
                  >
                    <Send className="h-4 w-4" />
                    <span>Open Email App</span>
                  </button>
                  <p
                    aria-live="polite"
                    className="text-center text-xs leading-relaxed text-zinc-400"
                  >
                    {emailDraftOpened
                      ? "Your email app should open with this message ready. Review it and press Send there."
                      : "This opens your email app with the message filled in; it does not send anything automatically."}
                  </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
