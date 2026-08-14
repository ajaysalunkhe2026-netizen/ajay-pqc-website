import Link from "next/link";

export default function PqcReadinessToolPage() {
  return (
    <main className="w-full max-w-[720px] mx-auto px-5 md:px-8 py-16 md:py-24">
      <Link
        href="/tools"
        className="text-muted text-[15px] hover:text-dark transition inline-block mb-8"
      >
        ← All tools
      </Link>

      <p className="text-primary text-[15px] font-medium mb-3">Assessment</p>

      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark mb-4 leading-tight">
        PQC Migration Readiness Tool
      </h1>

      <p className="text-muted text-[17px] mb-8 leading-relaxed">
        A practical self-assessment and cryptographic inventory tool to help
        organizations understand their readiness for post-quantum cryptography
        migration.
      </p>

      <a
        href="https://pqc-readiness-tool.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex px-6 py-3 rounded-lg bg-primary text-white text-[15px] font-medium hover:bg-primary-hover transition mb-12"
      >
        Launch Tool →
      </a>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-dark mb-3">What it includes</h2>
        <ul className="space-y-2 text-muted text-[15px] list-disc pl-5">
          <li>25-question readiness assessment aligned with NIST guidance</li>
          <li>Cryptographic asset inventory with risk indicators</li>
          <li>Personalized recommendations and a practical 30-day plan</li>
          <li>CycloneDX CBOM export</li>
          <li>Downloadable PDF report</li>
          <li>Support for saving multiple assessments</li>
        </ul>
      </section>

      <section id="info" className="mb-10 scroll-mt-24">
        <h2 className="text-lg font-semibold text-dark mb-3">Tool info</h2>
        <p className="text-muted text-[15px] leading-relaxed">
          This tool is designed as a starting point for teams that need clarity
          before deeper migration work. It helps structure discussion around
          inventory, risk, ownership, and next actions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-semibold text-dark mb-3">Who it is for</h2>
        <ul className="space-y-2 text-muted text-[15px] list-disc pl-5">
          <li>Small and mid-size organizations beginning PQC planning</li>
          <li>Consultants supporting migration readiness conversations</li>
          <li>Security and architecture teams building an initial view of exposure</li>
        </ul>
      </section>

      <div className="bg-white border border-border rounded-xl p-5 md:p-6">
        <h3 className="text-[15px] font-semibold text-dark mb-2">Important note</h3>
        <p className="text-muted text-[14px] leading-relaxed m-0">
          This is a readiness assessment and inventory tool. It does not perform
          automated network scanning or deep certificate analysis. For full TLS
          inspection, use professional scanners such as SSL Labs.
        </p>
      </div>
    </main>
  );
}