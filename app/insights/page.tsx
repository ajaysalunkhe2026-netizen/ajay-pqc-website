import Link from "next/link";

const insights = [
  {
    title: "Why post-quantum migration is a system design problem",
    summary:
      "Most conversations start with algorithms. The harder problems usually sit in architecture, dependencies, and operational constraints.",
    tag: "Architecture",
  },
  {
    title: "Hybrid cryptography is not a temporary compromise",
    summary:
      "Classical and post-quantum algorithms will need to coexist for a long time. Designing for that reality is more useful than waiting for a clean cutover.",
    tag: "System Design",
  },
  {
    title: "Visibility before migration",
    summary:
      "Without a clear inventory of cryptographic usage, prioritization becomes guesswork. Visibility is the foundation of any serious migration plan.",
    tag: "Risk",
  },
];

export default function InsightsPage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-5 md:px-8 py-16">
      
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <div className="text-sm text-primary font-medium mb-4">
          Insights
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-dark tracking-tight mb-6 leading-tight">
          Insights
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          Notes on system design, risk, and practical approaches to 
          post-quantum cryptography migration.
        </p>
      </div>

      {/* Insights list */}
      <div className="max-w-3xl space-y-6">
        {insights.map((item) => (
          <article
            key={item.title}
            className="border border-border rounded-xl p-6 bg-white hover:border-primary/30 transition"
          >
            <div className="text-xs font-medium text-primary mb-3 tracking-wide">
              {item.tag}
            </div>
            <h2 className="text-xl font-semibold text-dark mb-3">
              {item.title}
            </h2>
            <p className="text-muted text-[15px] leading-relaxed mb-4">
              {item.summary}
            </p>
            <span className="text-sm text-muted">
              Coming soon
            </span>
          </article>
        ))}
      </div>

      {/* Note */}
      <div className="max-w-3xl mt-14 pt-8 border-t border-border">
        <p className="text-muted text-[15px] leading-relaxed">
          These are topics under active thinking. Full write-ups will be added over time.
        </p>
      </div>

    </div>
  );
}