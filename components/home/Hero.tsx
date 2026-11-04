import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-5 md:px-8 pt-16 pb-16">
      <div className="max-w-5xl">
        
        {/* Trust Badge - Security & Quantum Identity */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light border border-primary/20 text-sm text-primary mb-6 font-medium shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          System Architect · Post-Quantum Cryptography & NIST FIPS 203/204
        </div>

        {/* Main Heading with High Authority Visual Focus */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-bold tracking-tight leading-[1.15] mb-6 text-dark">
          Practical system design for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            quantum-safe
          </span>{" "}
          migration
        </h1>

        {/* Cognitive Load Optimized Description */}
        <p className="text-lg md:text-xl text-muted max-w-3xl mb-8 leading-relaxed">
          Independent lab and architecture review for post-quantum migration — not a product vendor.
          I work through cryptography migration with clarity: architecture, risk, and real-world
          constraints rather than hype.
        </p>

        {/* Psychology-Optimized CRO CTA Buttons (Fitts's Law & Trust Gradients) */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/work"
            className="px-8 py-4 rounded-xl font-semibold text-white text-[15px] bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/20 hover:from-blue-500 hover:to-cyan-400 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 flex items-center gap-2"
          >
            <span>🛡️ View Work & PQC Audit</span>
          </Link>
          
          <Link
            href="/approach"
            className="px-8 py-4 rounded-xl border border-border bg-white hover:border-cyan-400 hover:bg-slate-50 transition-all duration-300 text-muted hover:text-dark text-[15px] font-semibold shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <span>📖 My Approach</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
