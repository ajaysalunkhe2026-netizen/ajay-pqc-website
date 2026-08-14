import Link from "next/link";

export default function ToolsPage() {
  return (
    <main className="w-full max-w-[900px] mx-auto px-5 md:px-8 py-16 md:py-24">
      <p className="text-primary text-[15px] font-medium mb-3">Tools</p>

      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark mb-4">
        Practical tools
      </h1>

      <p className="text-muted text-[17px] max-w-[540px] mb-12 leading-relaxed">
        Tools built to support post-quantum cryptography migration —
        focused on readiness, inventory, and clear next steps.
      </p>

      <div className="space-y-4">
        <div className="bg-white border border-border rounded-xl p-6 md:p-8">
          <p className="text-primary text-[13px] font-medium mb-2">Assessment</p>

          <h2 className="text-xl font-semibold text-dark mb-2">
            PQC Migration Readiness Tool
          </h2>

          <p className="text-muted text-[15px] mb-5 max-w-[520px] leading-relaxed">
            A structured self-assessment and cryptographic inventory tool to help
            teams understand their current readiness and identify practical next
            steps for post-quantum migration.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/tools/pqc-readiness-tool"
              className="text-primary text-[15px] font-medium hover:underline"
            >
              View tool →
            </Link>
            <Link
              href="/tools/pqc-readiness-tool#info"
              className="text-muted text-[15px] font-medium hover:text-dark transition"
            >
              Tool info →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}