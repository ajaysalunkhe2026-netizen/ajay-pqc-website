import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    'PQC Migration in Practice: Inventory, Hybrid TLS, and What "Enabled" Often Misses | Ajay Salunkhe',
  description:
    "A practical map of post-quantum migration: inventory vs scan, hybrid TLS selected group vs handshake success, silent classical failure modes, and proxy vs real upgrade. Lab notes by Ajay Salunkhe.",
};

export default function PqcMigrationSystemMapPage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-5 md:px-8 py-16">
      <article className="max-w-3xl">
        <div className="text-sm text-primary font-medium mb-4">Insights</div>

        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-dark tracking-tight mb-6 leading-tight">
          PQC migration in practice: a system map, not a dashboard label
        </h1>

        <p className="text-lg text-muted leading-relaxed mb-4">
          Post-quantum cryptography (PQC) migration is often described as
          turning on new algorithms. That framing is incomplete.
        </p>
        <p className="text-muted text-[16px] leading-relaxed mb-4">
          Migration touches at least three jobs: protecting the keys for this
          session, proving identity over a longer trust life, and knowing what
          classical cryptography still runs in the estate. Dashboards and vendor
          slides frequently collapse all three into one green status.
        </p>
        <p className="text-muted text-[16px] leading-relaxed mb-4">
          This page is a working map for that system problem. It is written from
          a lab and architecture perspective — measurement, failure modes, and
          honest gaps — not as a claim that a named production estate was
          migrated here.
        </p>
        <p className="text-muted text-[16px] leading-relaxed mb-10">
          If you only remember one line:{" "}
          <strong className="text-dark">a label is not a measurement.</strong>{" "}
          Handshake success, a library flag, and a hybrid session are not the
          same fact.
        </p>

        {/* 1 */}
        <h2 className="text-xl md:text-2xl font-semibold text-dark mt-12 mb-4">
          1. What post-quantum migration actually includes
        </h2>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          Think in three jobs, not one switch.
        </p>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          <strong className="text-dark">Protect this conversation</strong> —
          key agreement on TLS 1.3. On many paths in 2026 the practical hybrid
          is X25519MLKEM768. The useful question is not only whether hybrid is
          offered, but whether that group was selected for the session.
        </p>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          <strong className="text-dark">Prove who is who</strong> — certificates
          and signatures. Roots, devices, and trust stores move on a slower
          clock. Enabling hybrid key agreement does not finish this job.
        </p>
        <p className="text-muted text-[16px] leading-relaxed mb-6">
          <strong className="text-dark">Know what you still run</strong> —
          inventory: algorithms, where keys live, who owns the change, and what
          a scan never saw. Without this, “PQC ready” stays a slide. Programmes
          stall when these three are scored as one percentage.
        </p>

        {/* 2 */}
        <h2 className="text-xl md:text-2xl font-semibold text-dark mt-12 mb-4">
          2. Why inventory comes before algorithms
        </h2>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          A scan reports what a tool could see from where it stood. An inventory
          is a process. It asks questions the tool cannot close:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-muted text-[16px] mb-4">
          <li>Is this library on the live path, or dead code?</li>
          <li>Where is the key generated, and where is it stored?</li>
          <li>
            What sits behind the CDN, the HSM, the mobile SDK, the vendor
            appliance?
          </li>
          <li>Does production run what the source claims?</li>
          <li>
            <strong className="text-dark">Where did the scan not run?</strong>
          </li>
        </ul>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          That last question is the inventory. A confident list with no
          “unknown” row is often more dangerous than an honest incomplete one.
        </p>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          A useful sequence in practice is visibility → ownership → dependencies
          → risk. Algorithms matter; at estate scale, so does everything
          connected to them.
        </p>
        <p className="text-sm text-muted mb-6">
          Related lab note:{" "}
          <a
            href="https://www.linkedin.com/posts/ajay-salunkhe-pqc_cybersecurity-postquantumcryptography-pqc-share-7467399467550478337-Elyc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Visibility and dependencies before algorithms
          </a>
        </p>

        {/* 3 */}
        <h2 className="text-xl md:text-2xl font-semibold text-dark mt-12 mb-4">
          3. Hybrid TLS key agreement: capability, config, selected group
        </h2>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          TLS 1.3 carries standardized post-quantum hybrid key agreement on many
          public internet paths. Hybrid groups such as X25519MLKEM768 combine a
          classical agreement with ML-KEM so the session remains protected if
          either half still holds, under the usual hybrid assumptions.
        </p>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          Three facts get mixed in status reports:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-muted text-[16px] mb-4">
          <li>
            <strong className="text-dark">Capability</strong> — the binary can
            speak a PQ hybrid group
          </li>
          <li>
            <strong className="text-dark">Config</strong> — that group is offered
            or preferred on this hop
          </li>
          <li>
            <strong className="text-dark">Selected group</strong> — after
            Finished, the session actually used that group
          </li>
        </ul>
        <p className="text-muted text-[16px] leading-relaxed mb-6">
          Only the third is a session-level measurement for that connection.
          Library present is not migration done. On paths that matter for
          harvest-now-decrypt-later exposure, log selected group (or the 16-bit
          codepoint), not only “TLS 1.3 success.”
        </p>

        {/* 4 */}
        <h2 className="text-xl md:text-2xl font-semibold text-dark mt-12 mb-4">
          4. Silent classical: when “PQ capable” still finishes on X25519
        </h2>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          TLS picks a group by codepoint, not by the marketing name “Kyber” or
          “ML-KEM.”
        </p>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          A recurring operational trap: one side still offers an older
          experimental hybrid codepoint; the other only speaks the standardized
          hybrid (X25519MLKEM768, 0x11EC). The intersection of PQ groups is
          empty. The handshake still completes on classical X25519. Nobody sees
          a hard failure; the dashboard can still say PQ-capable.
        </p>
        <p className="text-muted text-[16px] leading-relaxed mb-6">
          Both endpoints can be “PQ capable” on a slide and classical on the
          wire. That is silent classical: availability up, hybrid not selected.
          Standardize on one hybrid group, retire draft names from configs, and
          assert selected group on hybrid-required paths. Handshake success
          alone is not the test.
        </p>

        {/* 5 */}
        <h2 className="text-xl md:text-2xl font-semibold text-dark mt-12 mb-4">
          5. Metric vs label: handshake success is not the hybrid rate
        </h2>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          Common labels: TLS 1.3 percentage, hybrid library present, config
          pq=on.
        </p>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          Useful metrics on the key-agreement path: count of sessions where
          selected group is the intended hybrid (for example X25519MLKEM768 /
          0x11EC), over total TLS 1.3 sessions on the hop you care about.
        </p>
        <p className="text-muted text-[16px] leading-relaxed mb-6">
          If a path is hybrid-required and the selected group is classical,
          treat enablement as failed for that session — even when HTTP returns
          200. Green “PQC on” without a selected-group rate is a label.
        </p>

        {/* 6 */}
        <h2 className="text-xl md:text-2xl font-semibold text-dark mt-12 mb-4">
          6. Proxy and packaging: a layer is not the estate
        </h2>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          A quantum-safe layer in front of systems that still terminate
          classical crypto can be useful. It is not the same outcome as
          upgrading the path underneath.
        </p>
        <p className="text-muted text-[16px] leading-relaxed mb-6">
          Ask where protection starts and stops, what remains classical after
          the purchase, and whether the temporary layer has an owner, a date,
          and a budget for exit. Packaging is not migration complete.
        </p>

        {/* 7 */}
        <h2 className="text-xl md:text-2xl font-semibold text-dark mt-12 mb-4">
          7. Certificates and signatures run on a second clock
        </h2>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          Key agreement enablement can be local to a terminating stack.
          Certificate and signature migration waits on roots, issuance policy,
          and client trust stores. Scoring both as one “PQC %” hides the slower
          track.
        </p>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          Signatures also change size assumptions outside TLS. ML-DSA (FIPS 204)
          signatures are thousands of bytes, not tens. That matters for JWTs,
          cookies, authorization headers, logs, code-signing, and firmware —
          places still sized for classical signatures. Inventory every
          persistent signature path, not only TLS certificates. Measure encoded
          size in the real format before cutover.
        </p>
        <p className="text-sm text-muted mb-6">
          Related lab note:{" "}
          <a
            href="https://www.linkedin.com/posts/ajay-salunkhe-pqc_postquantumcryptography-mldsa-fips204-share-7496393702844723201-6lCN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            ML-DSA signature size and JWT / header limits
          </a>
        </p>

        {/* 8 */}
        <h2 className="text-xl md:text-2xl font-semibold text-dark mt-12 mb-4">
          8. Wire size and operations: plan the bytes you will ship
        </h2>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          Hybrid key agreement and especially signature-chain growth change
          sizes on the wire. A larger handshake means more TCP segments and more
          dependency on congestion-window behaviour. That is a systems effect,
          not only a crypto footnote.
        </p>
        <p className="text-muted text-[16px] leading-relaxed mb-3">
          Plan with fixed lengths from the specifications where they exist.
          Treat certificate and signature bloat as a planning bound. Latency
          impact depends on the path; measure on your hop rather than copying a
          single percentage into a programme plan. Transport tuning (for example
          initial window) can reduce some handshake penalty — carefully, with
          real network conditions in mind.
        </p>
        <p className="text-sm text-muted mb-2">
          Related lab notes:{" "}
          <a
            href="https://www.linkedin.com/posts/ajay-salunkhe-pqc_postquantumcryptography-tls-cybersecurity-share-7458090395923668992-uILN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Hybrid handshake growth and multi-segment behaviour
          </a>
        </p>
        <p className="text-sm text-muted mb-6">
          <a
            href="https://www.linkedin.com/posts/ajay-salunkhe-pqc_postquantumcryptography-pqc-tls-share-7478673227855097856-fSST"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            TCP initial window and hybrid handshake latency
          </a>
        </p>

        {/* 9 */}
        <h2 className="text-xl md:text-2xl font-semibold text-dark mt-12 mb-4">
          9. What not to score as “PQC done”
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-muted text-[16px] mb-6">
          <li>Library present ≠ migration done</li>
          <li>Handshake success ≠ hybrid selected</li>
          <li>Proxy in front ≠ estate migrated</li>
          <li>
            A plan that only lists algorithms, without owners and tests, is
            still a slide
          </li>
        </ul>

        {/* 10 */}
        <h2 className="text-xl md:text-2xl font-semibold text-dark mt-12 mb-4">
          10. A simple working order for 2026
        </h2>
        <ol className="list-decimal pl-5 space-y-2 text-muted text-[16px] mb-6">
          <li>Inventory with owners and explicit unknown rows</li>
          <li>
            Key-agreement path: enable hybrid where needed; measure selected
            group
          </li>
          <li>Retire draft / mismatched PQ codepoints that cause silent classical</li>
          <li>Keep certificate and signature work on a separate readiness line</li>
          <li>Plan wire and token size limits before signature cutover</li>
          <li>Give every temporary proxy layer an exit</li>
        </ol>
        <p className="text-muted text-[16px] leading-relaxed mb-10">
          The hard part in 2026 is not naming the algorithm. It is refusing to
          score a label as a measurement.
        </p>

        <p className="text-muted text-[16px] leading-relaxed mb-2">
          Lab view. Measure your own wire.
        </p>
        <p className="text-sm text-muted mb-10">— Ajay Salunkhe</p>

        <div className="border-t border-border pt-8 flex flex-wrap gap-4">
          <Link
            href="/work"
            className="text-primary text-sm font-medium hover:underline"
          >
            Related work →
          </Link>
          <Link
            href="/approach"
            className="text-primary text-sm font-medium hover:underline"
          >
            Approach →
          </Link>
          <Link
            href="/contact"
            className="text-primary text-sm font-medium hover:underline"
          >
            Contact →
          </Link>
          <a
            href="https://www.linkedin.com/in/ajay-salunkhe-pqc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm font-medium hover:underline"
          >
            LinkedIn →
          </a>
        </div>
      </article>
    </div>
  );
}
