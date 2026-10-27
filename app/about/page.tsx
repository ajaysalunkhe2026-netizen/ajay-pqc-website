import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-5 md:px-8 py-16">
      
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="text-sm text-primary font-medium mb-4">
          About
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-dark tracking-tight mb-6 leading-tight">
          About Ajay Salunkhe
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          System Architect focused on practical post-quantum cryptography migration 
          and secure system design.
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-3xl space-y-10">

        <section>
          <h2 className="text-xl font-semibold text-dark mb-4">
            What I do
          </h2>
          <p className="text-muted text-[16px] leading-relaxed mb-4">
            Independent lab and architecture review — not a product vendor.
          </p>
          <p className="text-muted text-[16px] leading-relaxed mb-4">
            I work on the system design side of post-quantum cryptography migration. 
            My focus is on helping organizations understand their current cryptographic 
            posture, identify real risk, and design practical transition paths.
          </p>
          <p className="text-muted text-[16px] leading-relaxed">
            I treat migration as an architecture and operations problem, not only 
            a cryptographic one.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-dark mb-4">
            How I think
          </h2>
          <p className="text-muted text-[16px] leading-relaxed mb-4">
            Most discussions around post-quantum cryptography begin with algorithms. 
            I usually begin with systems, constraints, and consequences.
          </p>
          <p className="text-muted text-[16px] leading-relaxed">
            Performance characteristics, key sizes, protocol behavior, dependency chains, 
            and operational risk all matter. Ignoring them leads to fragile migration plans.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-dark mb-4">
            What I focus on
          </h2>
          <ul className="space-y-3 text-muted text-[15px]">
            <li className="flex gap-3">
              <span className="text-primary">–</span>
              Cryptographic inventory and visibility
            </li>
            <li className="flex gap-3">
              <span className="text-primary">–</span>
              Risk-based prioritization of migration work
            </li>
            <li className="flex gap-3">
              <span className="text-primary">–</span>
              Hybrid and phased transition design
            </li>
            <li className="flex gap-3">
              <span className="text-primary">–</span>
              Practical system architecture for quantum-safe change
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-dark mb-4">
            What I do not do
          </h2>
          <ul className="space-y-3 text-muted text-[15px]">
            <li className="flex gap-3">
              <span className="text-primary">–</span>
              Present post-quantum migration as a simple upgrade
            </li>
            <li className="flex gap-3">
              <span className="text-primary">–</span>
              Push adoption without understanding system constraints
            </li>
            <li className="flex gap-3">
              <span className="text-primary">–</span>
              Over-promise timelines or performance outcomes
            </li>
            <li className="flex gap-3">
              <span className="text-primary">–</span>
              Sell a proxy or wrapper as a completed estate migration
            </li>
          </ul>
        </section>

        <section className="border-t border-border pt-10">
          <p className="text-muted text-[16px] leading-relaxed mb-6">
            If you are dealing with cryptographic migration questions in a real system 
            and want a clear, architecture-oriented discussion, you can reach out.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-hover transition"
          >
            Get in Touch
          </Link>
        </section>

      </div>
    </div>
  );
}
