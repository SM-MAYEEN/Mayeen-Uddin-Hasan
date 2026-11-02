import { GraduationCap, Code, FolderGit2, Brain } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: GraduationCap,
      value: "3.402",
      label: "B.Sc. CGPA",
      desc: "Computer Science and Engineering · IIUC",
    },
    {
      icon: Code,
      value: "1000+",
      label: "Problems Solved",
      desc: "Programming and algorithmic problem solving",
    },
    {
      icon: FolderGit2,
      value: "3",
      label: "Featured Projects",
      desc: "RoamEase, KanbanFlow, and Heaven Furniture Mart",
    },
    {
      icon: Brain,
      value: "2026",
      label: "CSE Graduate",
      desc: "International Islamic University Chittagong",
    },
  ];

  return (
    <section className="relative z-20 py-16 bg-zinc-950 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl bg-zinc-900/60 border border-white/10 p-6 transition-all duration-300 hover:border-cyan-500/40 hover:bg-zinc-900/90 group"
              >
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-zinc-200 mt-1">
                  {stat.label}
                </div>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
