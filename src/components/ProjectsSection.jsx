import { useState } from "react";
import { FolderGit2, ExternalLink, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "roamease",
      title: "RoamEase",
      category: "travel",
      categoryLabel: "Travel & Discovery",
      tagline: "Global tour booking and discovery platform",
      image: "/images/project-roamease.jpg",
      imageAlt: "RoamEase travel discovery and booking website",
      description:
        "An interactive travel discovery and booking experience featuring more than 30 domestic and international destinations.",
      features: [
        "Country and category filters for exploring destinations",
        "Map exploration with React-Leaflet, geo-tracking, and dynamic pins",
        "Group discounts up to 18%, service add-ons, and a persistent wishlist",
      ],
      tech: ["React", "Vite", "Tailwind CSS", "React-Leaflet", "LocalStorage"],
      github: "https://github.com/SM-MAYEEN/RoamEase",
      demo: "https://roameasett.vercel.app/",
      accent: "from-cyan-500/20 to-blue-500/5",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    },
    {
      id: "kanbanflow",
      title: "KanbanFlow",
      category: "collaboration",
      categoryLabel: "Team Workspace",
      tagline: "Agile project management platform",
      image: "/images/project-kanban.jpg",
      imageAlt: "KanbanFlow project management dashboard",
      description:
        "A collaborative Agile workspace with real-time Kanban boards and Scrum and delivery tools.",
      features: [
        "Drag-and-drop Kanban boards, WIP limits, and Socket.io synchronization",
        "Sprint lifecycles, backlog prioritization, burndown and velocity charts",
        "Team chat, role-based access, AI-assisted subtasks, and CSV exports",
      ],
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Zustand", "Tailwind CSS"],
      github: "https://github.com/SM-MAYEEN/Kanban-Real",
      demo: "https://kanban-real.vercel.app/",
      accent: "from-teal-500/20 to-emerald-500/5",
      badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/30",
    },
    {
      id: "heaven-furniture",
      title: "Heaven Furniture Mart",
      category: "ecommerce",
      categoryLabel: "Digital Showroom",
      tagline: "E-commerce and curated furniture collections",
      image: "/images/project-heaven-furniture.jpg",
      imageAlt: "Heaven Furniture Mart online showroom",
      description:
        "A responsive online showroom for discovering curated furniture collections.",
      features: [
        "Category-based browsing for furniture collections",
        "Interactive product previews and curated catalog views",
        "Smooth page transitions built during a hackathon sprint",
      ],
      tech: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
      github: "https://github.com/SM-MAYEEN/RACDOX-Hackathon--Heaven-Furniture-Mart",
      demo: "https://heaven-furniture-mart-hackathon.vercel.app/",
      accent: "from-blue-500/20 to-indigo-500/5",
      badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-black relative border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Selected Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A selection of my web projects built with modern frontend and backend technologies.
          </p>

          {/* Filter Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "travel", label: "Travel" },
              { id: "collaboration", label: "Team Collaboration" },
              { id: "ecommerce", label: "E-Commerce" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  filter === btn.id
                    ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/25 scale-105"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-3xl bg-zinc-900/60 border border-white/10 overflow-hidden backdrop-blur-sm hover:border-cyan-500/40 hover:bg-zinc-900/90 transition-all duration-300 group shadow-2xl"
            >
              {/* Project Preview */}
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="block aspect-[16/9] overflow-hidden bg-black/40"
                aria-label={`View live ${project.title} project`}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>

              {/* Card Header */}
              <div className={`p-6 sm:p-8 bg-gradient-to-br ${project.accent} border-b border-white/5 relative`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.badgeColor}`}>
                    {project.categoryLabel}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-black/40 text-zinc-300 hover:text-white hover:bg-black/80 transition-colors border border-white/10"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-black/40 text-zinc-300 hover:text-white hover:bg-black/80 transition-colors border border-white/10"
                      title="Project Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-cyan-200/80 font-medium">
                  {project.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mt-5 space-y-2.5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Key Capabilities:
                    </div>
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips & CTA */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Explore Repository & Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
