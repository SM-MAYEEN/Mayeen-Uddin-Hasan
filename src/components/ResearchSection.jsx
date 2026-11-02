import { BrainCircuit, Eye, Microscope } from "lucide-react";

const researchAreas = [
  {
    icon: BrainCircuit,
    title: "Convolutional Neural Networks",
    description:
      "Academic research experience working with CNN architectures for computer vision.",
  },
  {
    icon: Eye,
    title: "Attention with CBAM",
    description:
      "Explored the Convolutional Block Attention Module (CBAM) in computer vision research.",
  },
  {
    icon: Microscope,
    title: "Explainable Computer Vision",
    description:
      "Interested in explainable AI approaches, including CAM and SAM, alongside deep learning.",
  },
];

export default function ResearchSection() {
  return (
    <section
      id="research"
      className="relative border-t border-white/5 bg-black py-20 sm:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-400">
            <BrainCircuit className="h-3.5 w-3.5" />
            Academic Research
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Computer Vision &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Deep Learning
            </span>
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            Research experience and areas of interest from my computer science
            background.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {researchAreas.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 transition-colors hover:border-cyan-500/30 sm:p-7"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
