import Link from "next/link";

export function Hero() {
  const steps = [
    {
      num: "01",
      title: "Discovery & CBOM Export",
      desc: "Catalog classical algorithms (RSA/ECC) & map dependencies via CycloneDX v1.5 standard.",
      tech: "CycloneDX v1.5",
    },
    {
      num: "02",
      title: "Risk & Vulnerability Audit",
      desc: "Evaluate key size, lifetime exposure, and prioritize high-risk cryptographic targets.",
      tech: "NIST CSF 2.0",
    },
    {
      num: "03",
      title: "Hybrid KEM & Signature Setup",
      desc: "Implement Dual-Algorithm posture pairing classical certs with ML-KEM & ML-DSA.",
      tech: "FIPS 203 / 204",
    },
    {
      num: "04",
      title: "Zero-Downtime Migration",
      desc: "Deploy agility abstraction layer ensuring full backwards compatibility & quantum safety.",
      tech: "Crypto-Agility Architecture",
    },
  ];

  return (
    <>
      {/* Hero Core Section */}
      <section className="w-full max-w-[1600px] mx-auto px-5 md:px-8 pt-16 pb-12">
        <div className="max-w-5xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light border border-primary/20 text-sm text-primary mb-6 font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            System Architect · Post-Quantum Cryptography & NIST FIPS 203/204
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-bold tracking-tight leading-[1.15] mb-6 text-dark">
            Practical system design for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              quantum-safe
            </span>{" "}
            migration
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted max-w-3xl mb-8 leading-relaxed">
            Independent lab and architecture review for post-quantum migration — not a product vendor.
            I work through cryptography migration with clarity: architecture, risk, and real-world
            constraints rather than hype.
          </p>

          {/* CTA Buttons */}
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

      {/* Step 2 Flowchart Section */}
      <section className="w-full max-w-[1600px] mx-auto px-5 md:px-8 pb-16">
        <div className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-6 md:p-10 shadow-2xl">
          <div className="mb-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-3 tracking-wide uppercase">
              ⚡ Architecture Blueprint
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              NIST FIPS 203 / 204 Migration Flowchart
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-2 max-w-2xl">
              A structured four-phase transition strategy to achieve complete post-quantum agility without operational disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-slate-800/80 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-cyan-400 font-mono">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                    {step.tech}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
