import Link from "next/link";

const projects = [
  {
    title: "PQC Readiness Assessment",
    tag: "Architecture",
    summary:
      "A structured way to look at current cryptographic use and set migration priorities from risk and constraints — not from a single green dashboard.",
    points: [
      "Map where classical crypto still appears and what depends on it",
      "Compare usage against NIST PQC families (ML-KEM, ML-DSA, SLH-DSA) without treating every gap as equal priority",
      "Prioritise by exposure, data lifespan, and operational constraint — not blanket upgrades",
    ],
  },
  {
    title: "Hybrid Cryptography Design",
    tag: "System Design",
    summary:
      "Practical patterns for classical and post-quantum algorithms running together during transition, with attention to what actually happens on the wire.",
    points: [
      "Model TLS 1.3 hybrid negotiation traps (e.g. draft 0x6399 vs final 0x11EC leading to silent classical sessions)",
      "Account for wire effects: larger handshakes, MTU pressure, and middlebox behaviour",
      "Separate edge proxy or wrapper from true origin-path upgrade, with an exit plan for temporary layers",
    ],
  },
  {
    title: "Crypto Inventory & Visibility",
    tag: "Visibility",
    summary:
      "Treat inventory as a process with owners and gaps — not only a scan file or a vendor readiness label.",
    points: [
      "Prefer inventory with owners, paths, and explicit unknown rows over a one-shot scan PDF",
      "Track algorithm use so “PQC ready” is measured against real usage, not only a dashboard flag",
      "Record what was not scanned — that gap is part of the inventory",
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-5 md:px-8 py-16">
      
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="text-sm text-primary font-medium mb-4">
          Work
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-dark tracking-tight mb-6 leading-tight">
          Selected work
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          Focused work on practical system design for post-quantum cryptography migration. 
          The emphasis is on architecture, risk, and operational reality.
          Lab and architecture patterns — not a product catalogue.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-12 max-w-4xl">
        {projects.map((project) => (
          <article
            key={project.title}
            className="border border-border rounded-xl p-7 bg-white"
          >
            <div className="text-xs font-medium text-primary mb-3 tracking-wide">
              {project.tag}
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-dark mb-3">
              {project.title}
            </h2>
            <p className="text-muted text-[16px] leading-relaxed mb-5">
              {project.summary}
            </p>
            <ul className="space-y-2">
              {project.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-[15px] text-muted"
                >
                  <span className="text-primary mt-1">–</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Closing */}
      <div className="max-w-3xl mt-16 pt-10 border-t border-border">
        <p className="text-muted text-[16px] leading-relaxed mb-6">
          These represent areas of focused work rather than a complete portfolio. 
          Each engagement is shaped by the specific constraints of the system in question.
        </p>
        <Link
          href="/contact"
          className="inline-flex px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-hover transition"
        >
          Discuss a specific context
        </Link>
      </div>

    </div>
  );
}
