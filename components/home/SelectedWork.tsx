import Link from "next/link";

const works = [
  {
    title: "PQC Readiness Assessment",
    description:
      "A structured approach to evaluate existing cryptographic posture and identify migration priorities without disrupting live systems.",
    tag: "Architecture",
  },
  {
    title: "Hybrid Cryptography Design",
    description:
      "Practical patterns for combining classical and post-quantum algorithms during transition phases while managing performance and compatibility.",
    tag: "System Design",
  },
  {
    title: "Crypto Inventory & Visibility",
    description:
      "Methods to discover, classify, and track cryptographic assets across applications and infrastructure for better risk decisions.",
    tag: "Visibility",
  },
];

export function SelectedWork() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-5 md:px-8 py-14 border-t border-border">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-3">
          Selected Work
        </h2>
        <p className="text-muted text-[16px] max-w-2xl leading-relaxed">
          Focused work on practical system design for post-quantum migration — 
          emphasizing architecture, risk, and operational reality.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {works.map((work) => (
          <div
            key={work.title}
            className="bg-white border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-sm transition duration-200"
          >
            <div className="text-xs font-medium text-primary mb-3 tracking-wide">
              {work.tag}
            </div>
            <h3 className="text-lg font-semibold text-dark mb-3">
              {work.title}
            </h3>
            <p className="text-muted text-[15px] leading-relaxed mb-5">
              {work.description}
            </p>
            <Link
              href="/work"
              className="text-sm font-medium text-primary hover:text-primary-hover transition"
            >
              View details →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}