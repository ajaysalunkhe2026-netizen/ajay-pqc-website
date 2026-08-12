import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Understand the current state",
    description:
      "Map existing cryptographic usage, dependencies, and operational constraints before proposing any change.",
  },
  {
    number: "02",
    title: "Identify real risk",
    description:
      "Focus on what actually matters — exposure, lifespan of data, and systems that cannot afford disruption.",
  },
  {
    number: "03",
    title: "Design for transition",
    description:
      "Create hybrid and phased approaches that allow classical and post-quantum cryptography to coexist safely.",
  },
  {
    number: "04",
    title: "Validate before scale",
    description:
      "Test patterns in controlled environments to understand performance, compatibility, and failure modes.",
  },
];

export function Approach() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-5 md:px-8 py-14 border-t border-border">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-3">
          Approach
        </h2>
        <p className="text-muted text-[16px] max-w-2xl leading-relaxed">
          A measured way of working that prioritizes clarity, risk awareness, 
          and practical system design over rushed adoption.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-4">
            <div className="text-primary font-mono text-sm font-medium pt-1 min-w-[28px]">
              {step.number}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-dark mb-2">
                {step.title}
              </h3>
              <p className="text-muted text-[15px] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/approach"
          className="text-sm font-medium text-primary hover:text-primary-hover transition"
        >
          Read the full approach →
        </Link>
      </div>
    </section>
  );
}