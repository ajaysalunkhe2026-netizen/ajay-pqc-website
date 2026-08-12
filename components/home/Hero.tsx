import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-5 md:px-8 pt-16 pb-16">
      <div className="max-w-5xl">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light border border-primary/20 text-sm text-primary mb-6 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          System Architect · Post-Quantum Cryptography
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-bold tracking-tight leading-[1.15] mb-6 text-dark">
          Practical system design for{" "}
          <span className="text-primary">quantum-safe</span> migration
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-3xl mb-8 leading-relaxed">
          I help organizations think through cryptography migration with clarity — 
          focusing on architecture, risk, and real-world constraints rather than hype.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/work"
            className="px-6 py-3 rounded-lg bg-primary text-white text-[15px] font-medium hover:bg-primary-hover transition"
          >
            View Work
          </Link>
          <Link
            href="/approach"
            className="px-6 py-3 rounded-lg border border-border bg-white hover:border-primary/40 transition text-muted hover:text-dark text-[15px]"
          >
            My Approach
          </Link>
        </div>
      </div>
    </section>
  );
}