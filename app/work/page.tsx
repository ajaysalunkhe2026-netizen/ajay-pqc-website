import Link from "next/link";

const projects = [
  {
    title: "PQC Readiness Assessment",
    tag: "Architecture",
    summary:
      "A structured method to evaluate an organization's current cryptographic posture and identify realistic migration priorities through empirical measurement.",
    points: [
      "Mapping cryptographic baselines by generating Cryptographic Bill of Materials (CBOM) via AST parsing",
      "Identifying hardcoded classical primitives and evaluating gaps against NIST FIPS 203, 204, and 205 baselines",
      "Risk-scoring based on hardware constraints, memory limits, and protocol dependencies—not just blanket upgrades",
    ],
  },
  {
    title: "Hybrid Cryptography Design",
    tag: "System Design",
    summary:
      "Practical patterns for running classical and post-quantum algorithms together during transition periods, focusing on wire-level realities.",
    points: [
      "Modeling TLS 1.3 hybrid handshakes to identify and prevent 'Silent Classical' fallback scenarios (e.g., Draft 0x6399 vs Final 0x11EC)",
      "Evaluating wire-level consequences like MTU packet fragmentation and byte bloat during enterprise rollouts",
      "Designing operational mitigation patterns that distinguish between quantum-safe proxy wrappers and true origin path upgrades",
    ],
  },
  {
    title: "Crypto Inventory & Visibility",
    tag: "Visibility",
    summary:
      "Approaches to discover, classify, and maintain visibility of cryptographic assets across applications without relying on unverified vendor dashboards.",
    points: [
      "Deploying custom AST parsing utilities (like SUSTUM-PQC-Checker MVP) for static codebase discovery",
      "Generating CycloneDX-compliant CBOMs to track algorithm lifecycles and deprecation schedules",
      "Tracking key ownership and execution context through zero-trust, out-of-band architectural models",
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
