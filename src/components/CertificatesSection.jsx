import { Award, ExternalLink, FileText } from "lucide-react";

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "EDGE Project · 80 hours",
    year: "2026",
    file: "EDGE2026.png",
    image: true,
  },
  {
    title: "RACDOX Hackathon",
    issuer: "Hackathon participant",
    year: "2026",
    file: "RACDOX_Hackathon_Certificate.png",
    image: true,
  },
  {
    title: "Deep Learning in Biomedical Image Analysis",
    issuer: "IIUC Tech Fest",
    year: "2025",
    file: "deep-learning-biomedical-image-analysis.jpg",
    image: true,
  },
  {
    title: "IIUC Inter-Department Tech Hackathon",
    issuer: "Participant",
    year: "2025",
    file: "IIUC-inter-department-tech-hackathon-2025.jpg",
    image: true,
  },
  {
    title: "Competitive Programming Bootcamp",
    issuer: "Newcomer · Spring",
    year: "2023",
    file: "competitive-programming-bootcamp.jpg",
    image: true,
  },
  {
    title: "Digital Marketing",
    issuer: "NEXTGEN IT · 45 hours",
    year: "2023",
    file: "NEXTGEN-IT-digital-marketing.pdf",
    image: false,
  },
  {
    title: "ICISET",
    issuer: "International conference participant",
    year: "2022",
    file: "ICISET-2022.jpg",
    image: true,
  },
  {
    title: "Programming with Python",
    issuer: "Workshop participant",
    year: "2022",
    file: "programming-with-python.jpg",
    image: true,
  },
  {
    title: "BRAC IT Career Seminar",
    issuer: "Participant",
    year: "2022",
    file: "BRAC-IT-career-seminar.jpg",
    image: true,
  },
];

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="relative border-t border-white/5 bg-zinc-950 py-20 sm:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-400">
            <Award className="h-3.5 w-3.5" />
            Certificates & Activities
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Learning &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Participation
            </span>
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            Certificates and participation records from my résumé.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {certificates.map((certificate) => {
            const href = `/certificates/${certificate.file}`;

            return (
              <article
                key={certificate.title}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 transition-colors hover:border-cyan-500/30"
              >
                {certificate.image ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${certificate.title} certificate`}
                    className="block aspect-[16/10] overflow-hidden bg-black/40"
                  >
                    <img
                      src={href}
                      alt={`${certificate.title} certificate`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </a>
                ) : (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-cyan-500/10 to-teal-500/5 text-cyan-300"
                    aria-label={`Open ${certificate.title} certificate PDF`}
                  >
                    <FileText className="h-12 w-12" />
                  </a>
                )}

                <div className="flex flex-1 items-start justify-between gap-3 p-4 sm:p-5">
                  <div className="min-w-0">
                    <h3 className="break-words font-semibold text-white">
                      {certificate.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      {certificate.issuer}
                    </p>
                    <p className="mt-2 text-xs font-medium text-cyan-400">
                      {certificate.year}
                    </p>
                  </div>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${certificate.title} certificate`}
                    className="shrink-0 rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-cyan-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
