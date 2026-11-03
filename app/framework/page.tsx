import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Agility Readiness Framework | Ajay Salunkhe",
  description:
    "Reference architecture for crypto agility and PQC migration readiness — inventory first, measurement over labels, KEM path vs signature track.",
};

export default function FrameworkPage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-5 md:px-8 py-16">
      <div className="max-w-3xl mb-14">
        <div className="text-sm text-primary font-medium mb-3">
          Reference architecture
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark tracking-tight mb-4 leading-tight">
          Crypto Agility Readiness Framework
        </h1>
        <p className="text-lg text-muted leading-relaxed mb-3">
          Lab + system design reference for assessing crypto agility and
          post-quantum migration readiness.
        </p>
        <p className="text-sm text-muted">
          Version 1.0 · November 2026 · Status: Reference — open for comment ·
          Author: Ajay Salunkhe
        </p>
        <p className="mt-4 text-sm italic text-primary">
          Lab view. The label is not the measurement.
        </p>
      </div>

      <div className="max-w-3xl space-y-12 text-[15px] leading-relaxed text-muted">
        <section>
          <h2 className="text-xl font-semibold text-dark mb-3">Design stance</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>Inventory first.</li>
            <li>Risk and agility are separate dimensions.</li>
            <li>
              Key-agreement (KEM / hybrid TLS) and signatures / PKI are different
              tracks with different clocks.
            </li>
            <li>Hybrid is a controlled transition, not a destination.</li>
            <li>
              Outputs must be explainable to both engineers and leadership.
            </li>
          </ul>
          <p className="mt-4">
            This is a design reference and assessment model — not a product
            specification and not a compliance certificate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-dark mb-3">
            The problem it addresses
          </h2>
          <p className="mb-3">
            Most programmes still treat “PQC readiness” as a flag: hybrid
            enabled, library upgraded, dashboard green. That is not readiness.
          </p>
          <p>
            Readiness is inventory, measurement on the wire, and a clear path to
            change algorithms without an outage or a silent classical fallback.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-dark mb-3">
            Four questions the framework answers
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              What cryptography is actually in use — and what was not scanned?
            </li>
            <li>Where is quantum-relevant risk concentrated?</li>
            <li>How hard is it to change algorithms on each path?</li>
            <li>
              What should be measured so that “PQC on” is not only a label?
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-dark mb-3">
            Architecture principles
          </h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <span className="text-dark font-medium">Inventory first</span> —
              no reliable CBOM, no reliable score.
            </li>
            <li>
              <span className="text-dark font-medium">Two tracks</span> — key
              agreement (ML-KEM / hybrid) vs signatures and certificates
              (ML-DSA / SLH-DSA / PKI).
            </li>
            <li>
              <span className="text-dark font-medium">
                Measurement over labels
              </span>{" "}
              — handshake success ≠ negotiated PQ group; ticket issued ≠ resume
              success.
            </li>
            <li>
              <span className="text-dark font-medium">Hybrid is transitional</span>{" "}
              — enablement includes exercised exit paths, not only “both on”.
            </li>
            <li>
              <span className="text-dark font-medium">Explainable scoring</span> —
              weights and inputs stay visible.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-dark mb-3">
            Measurement requirements
          </h2>
          <p className="mb-4">These separate a label from a measurement.</p>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-dark mb-1">Key-agreement track</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Log negotiated group after Finished (e.g. X25519MLKEM768 /
                  0x11EC), not only TLS 1.3 success.
                </li>
                <li>
                  Re-test group intersection after upgrades — draft vs final
                  codepoints are not interchangeable.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-dark mb-1">
                Resumption / performance track
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Session ticket issue and resume rates.</li>
                <li>Ticket size under hybrid vs edge buffer limits.</li>
                <li>
                  First-flight size vs typical TCP initial window (~14.6 KB on
                  many stacks).
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-dark mb-1">Signature / PKI track</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Separate clock from KEM enablement.</li>
                <li>
                  Do not hide a red certificate track behind a green KEM tile.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-dark mb-3">
            Maturity model (0–4)
          </h2>
          <ul className="space-y-2">
            <li>
              <span className="text-dark font-medium">0 Unknown</span> — no
              usable inventory.
            </li>
            <li>
              <span className="text-dark font-medium">1 Inventory started</span> —
              partial CBOM; large not-scanned set.
            </li>
            <li>
              <span className="text-dark font-medium">
                2 Risk &amp; agility visible
              </span>{" "}
              — scored assets; measurements defined.
            </li>
            <li>
              <span className="text-dark font-medium">
                3 Hybrid-capable &amp; measured
              </span>{" "}
              — negotiated-group logging; resume checks; signature track owned.
            </li>
            <li>
              <span className="text-dark font-medium">4 Crypto-agile</span> —
              algorithm change is an exercised path; labels match wire
              measurements.
            </li>
          </ul>
          <p className="mt-3">
            Moving from 2 → 3 requires evidence on the wire, not only a library
            version.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-dark mb-3">
            CBOM minimum fields
          </h2>
          <p className="mb-2">
            Asset / path, owner, algorithm, key size, protocol context, library
            version, certificate role, sensitivity &amp; retention, discovery
            confidence, coverage flag (
            <span className="text-dark">observed | inferred | not scanned</span>
            ).
          </p>
          <p>
            “Not scanned” rows are first-class. A CBOM with no unknown rows is
            usually incomplete, not complete.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-dark mb-3">
            Label-only vs this framework
          </h2>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white text-left">
                  <th className="px-4 py-2.5 font-medium">Label-only view</th>
                  <th className="px-4 py-2.5 font-medium">This framework</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-4 py-2">“Hybrid enabled”</td>
                  <td className="px-4 py-2">Negotiated group logged and tested</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-2">“Handshake success”</td>
                  <td className="px-4 py-2">
                    Success + selected group + resume rate
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-2">“CBOM complete”</td>
                  <td className="px-4 py-2">CBOM + explicit not-scanned rows</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-2">Single “PQC %”</td>
                  <td className="px-4 py-2">
                    KEM track and signature track separate
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <p className="mb-4">
            Inventory what you use. Measure what you negotiate. Separate the KEM
            clock from the certificate clock. Treat hybrid as a transition with
            an exit, not a sticker.
          </p>
          <p className="italic text-primary mb-6">
            Lab view. The label is not the measurement.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/crypto-agility-readiness-framework-v1.pdf"
              className="inline-flex px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-hover transition"
            >
              Download PDF
            </a>
            <Link
              href="/contact"
              className="inline-flex px-5 py-2.5 rounded-lg border border-border bg-white hover:border-primary/40 transition text-muted hover:text-dark text-sm"
            >
              Discuss your estate
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
