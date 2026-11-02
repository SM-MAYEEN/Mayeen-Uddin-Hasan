import { Code2, Trophy, Brain, GraduationCap, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const activities = [
    {
      icon: Code2,
      title: "Full-Stack Web Development",
      description:
        "Completed an 80-hour full-stack web development course through the EDGE Project in 2026.",
      highlights: [
        "EDGE Project",
        "80 hours",
        "2026",
      ],
      badge: "Course",
    },
    {
      icon: Trophy,
      title: "Hackathon Participation",
      description:
        "Participated in hackathon events focused on building and presenting software projects.",
      highlights: [
        "RACDOX Hackathon · 2026",
        "IIUC Inter-Department Tech Hackathon · 2025",
      ],
      badge: "Participant",
    },
    {
      icon: Brain,
      title: "Seminars & Conferences",
      description:
        "Participated in academic events covering deep learning, technology, and computer science.",
      highlights: [
        "IIUC Tech Fest · Deep Learning in Biomedical Image Analysis · 2025",
        "ICISET · International Conference Participant · 2022",
        "BRAC IT Career Seminar · 2022",
      ],
      badge: "Learning",
    },
    {
      icon: GraduationCap,
      title: "Courses & Workshops",
      description:
        "Additional training and workshops in programming and digital skills.",
      highlights: [
        "Digital Marketing · 45 hours · NEXTGEN IT · 2023",
        "Programming with Python Workshop · 2022",
      ],
      badge: "Training",
    },
    {
      icon: Code2,
      title: "Competitive Programming",
      description:
        "An active participant in a competitive programming bootcamp, continuing to practice problem solving.",
      highlights: [
        "1,000+ programming problems solved",
        "Competitive Programming Bootcamp · Active participant",
      ],
      badge: "Ongoing",
    },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Activities & Learning
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Learning & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Participation</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Courses, workshops, hackathons, and learning activities from my academic and programming journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-zinc-900/60 border border-white/10 p-8 hover:border-cyan-500/40 hover:bg-zinc-900/90 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-white/5 pt-5">
                    {srv.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
