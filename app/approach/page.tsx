import Link from "next/link";

export default function ApproachPage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-5 md:px-8 py-16">
      
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="text-sm text-primary font-medium mb-4">
          Approach
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-dark tracking-tight mb-6 leading-tight">
          How I approach post-quantum migration
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          Most migration conversations start with algorithms. 
          I start with systems, constraints, and risk.
        </p>
      </div>

      {/* Core Principle */}
      <section className="max-w-3xl mb-16">
        <h2 className="text-xl font-semibold text-dark mb-4">
          Core principle
        </h2>
        <p className="text-muted text-[16px] leading-relaxed mb-4">
          Post-quantum cryptography is not just a drop-in replacement. 
          It changes performance characteristics, key sizes, protocol behavior, 
          and operational assumptions.
        </p>
        <p className="text-muted text-[16px] leading-relaxed">
          Because of this, I treat migration as a system design problem — 
          not only a cryptographic one.
        </p>
      </section>

      {/* Working Method */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-dark mb-8">
          Working method
        </h2>

        <div className="grid gap-8 max-w-3xl">
          <div className="border-l-2 border-primary/30 pl-6">
            <h3 className="font-semibold text-dark mb-2">1. Current state first</h3>
            <p className="text-muted text-[15px] leading-relaxed">
              Before recommending any change, I focus on understanding where cryptography 
              is actually used, what depends on it, and what cannot be broken during transition.
            </p>
          </div>

          <div className="border-l-2 border-primary/30 pl-6">
            <h3 className="font-semibold text-dark mb-2">2. Risk over novelty</h3>
            <p className="text-muted text-[15px] leading-relaxed">
              Not every system needs the newest algorithm immediately. 
              I prioritize based on data lifespan, exposure, and real operational impact.
            </p>
          </div>

          <div className="border-l-2 border-primary/30 pl-6">
            <h3 className="font-semibold text-dark mb-2">3. Design for coexistence</h3>
            <p className="text-muted text-[15px] leading-relaxed">
              Classical and post-quantum cryptography will need to run together for years. 
              Hybrid designs and phased rollouts are usually more realistic than sudden cuts.
            </p>
          </div>

          <div className="border-l-2 border-primary/30 pl-6">
            <h3 className="font-semibold text-dark mb-2">4. Validate early</h3>
            <p className="text-muted text-[15px] leading-relaxed">
              I prefer testing patterns in controlled conditions before any wide deployment. 
              Performance, compatibility, and failure behavior should be understood early.
            </p>
          </div>
        </div>
      </section>

      {/* What I avoid */}
      <section className="max-w-3xl mb-16">
        <h2 className="text-xl font-semibold text-dark mb-4">
          What I deliberately avoid
        </h2>
        <ul className="space-y-3 text-muted text-[15px]">
          <li className="flex gap-3">
            <span className="text-primary">–</span>
            Treating PQC as a simple library upgrade
          </li>
          <li className="flex gap-3">
            <span className="text-primary">–</span>
            Pushing adoption without understanding system constraints
          </li>
          <li className="flex gap-3">
            <span className="text-primary">–</span>
            Over-promising timelines or performance characteristics
          </li>
          <li className="flex gap-3">
            <span className="text-primary">–</span>
            Ignoring operational reality in favor of theoretical purity
          </li>
        </ul>
      </section>

      {/* Closing */}
      <section className="max-w-3xl border-t border-border pt-10">
        <p className="text-muted text-[16px] leading-relaxed mb-6">
          The goal is not to migrate everything as fast as possible. 
          The goal is to migrate the right things, in the right order, 
          without creating new risk.
        </p>
        <Link
          href="/contact"
          className="inline-flex px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-hover transition"
        >
          Discuss your context
        </Link>
      </section>

    </div>
  );
}