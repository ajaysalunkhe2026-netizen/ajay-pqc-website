import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/projects" },
  alternates: { canonical: "/projects" },
  title: "Projects — PQC & Cryptography Engineering",
  description:
    "Engineering notes and project documentation by Ajay Salunkhe. Explore a lab proof of concept for post-quantum PKI migration, cryptographic algorithm retirement, policy enforcement, and auditability.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Ajay Salunkhe",
    description:
      "Practical project work in post-quantum cryptography, PKI migration, and cryptographic algorithm retirement.",
    url: "https://www.ajaysalunkhe.com/projects",
    siteName: "Ajay Salunkhe",
    type: "website",
  },
};

// Add future GitHub projects here. Keep each entry evidence-led: describe what
// is implemented, what can be reproduced from the public repo, and what remains
// experimental or local-only. Then add its detailed section below.
const projects = [
  {
    number: "01",
    name: "PQC PKI Migration & Algorithm Retirement Lab",
    status: "Laboratory proof of concept",
    focus: "Post-quantum PKI · Algorithm policy · Guarded signing",
    summary:
      "A small lab exploring how to control the retirement of a cryptographic algorithm and approve a replacement through an explicit policy decision.",
    href: "https://github.com/ajaysalunkhe2026-netizen/PQC-PKI-Migration-Lab",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-3">
      {children}
    </p>
  );
}

function ArchitectureDiagram() {
  const nodes = [
    { n: "01", title: "Signing request", detail: "Algorithm + message" },
    { n: "02", title: "Policy engine", detail: "Explicit allow-list · default DENY" },
    { n: "03", title: "Decision", detail: "Retired / unapproved → DENY" },
    { n: "04", title: "Guarded execution", detail: "Approved algorithm → signing path" },
    { n: "05", title: "Audit record", detail: "Decision and execution outcome" },
  ];

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-400 font-semibold">
            Project architecture
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-white mt-2">
            Policy before cryptographic execution
          </h3>
        </div>
        <span className="rounded-full border border-cyan-800 bg-cyan-950/60 px-3 py-1 text-xs text-cyan-200">
          Lab workflow
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {nodes.map((node, index) => (
          <div key={node.n} className="relative min-w-0">
            <div className="h-full rounded-xl border border-slate-700 bg-slate-900 p-4">
              <div className="text-xs font-mono text-cyan-400 mb-3">{node.n}</div>
              <h4 className="text-sm md:text-base font-semibold text-white mb-2">
                {node.title}
              </h4>
              <p className="text-xs leading-relaxed text-slate-400">{node.detail}</p>
            </div>
            {index < nodes.length - 1 && (
              <div aria-hidden="true" className="hidden md:block absolute top-1/2 -right-3 z-10 text-cyan-400 text-lg">
                →
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-4">
        <div className="rounded-lg border border-rose-900/70 bg-rose-950/40 p-4">
          <p className="text-xs uppercase tracking-wider text-rose-300 font-semibold mb-1">DENY</p>
          <p className="text-sm text-slate-200">ML-DSA-65 — marked retired in the lab policy.</p>
          <p className="text-xs text-slate-400 mt-1">ML-DSA-44 — not on the approved list.</p>
        </div>
        <div className="rounded-lg border border-emerald-900/70 bg-emerald-950/40 p-4">
          <p className="text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-1">ALLOW</p>
          <p className="text-sm text-slate-200">SLH-DSA-SHA2-128s — explicitly approved by the lab policy.</p>
          <p className="text-xs text-slate-400 mt-1">Signing prerequisites and local evidence are separate from public policy tests.</p>
        </div>
      </div>
      <p className="text-xs leading-relaxed text-slate-500 mt-5">
        Conceptual view of the guarded application path. The Python wrapper only controls
        operations routed through it; it does not globally disable algorithms in OpenSSL.
      </p>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-5 md:px-8 py-12 md:py-16">
      <header className="max-w-4xl mb-12 md:mb-16">
        <SectionLabel>Projects & lab notes</SectionLabel>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-dark mb-6">
          Work in progress, documented with evidence.
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-muted max-w-3xl">
          This page collects my engineering projects, experiments, and technical
          write-ups. I describe what a project is intended to test, what is
          implemented, what is publicly reproducible, and what still has limits.
          No inflated production claims.
        </p>
      </header>

      <section className="mb-14">
        <div className="flex items-end justify-between gap-4 flex-wrap mb-5">
          <div>
            <SectionLabel>Project index</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-semibold text-dark">Published work</h2>
          </div>
          <span className="text-sm text-muted">{projects.length} project documented</span>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-border bg-white p-6 md:p-7 hover:border-primary/40 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="font-mono text-sm text-primary">{project.number}</span>
                <span className="text-xs rounded-full bg-primary-light text-primary px-3 py-1">
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3 group-hover:text-primary transition">
                {project.name}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-5">{project.summary}</p>
              <p className="text-xs text-muted mb-5">{project.focus}</p>
              <span className="text-sm font-semibold text-primary">Open GitHub repository ↗</span>
            </a>
          ))}
        </div>
      </section>

      <article className="border-t border-border pt-12 md:pt-16">
        <header className="max-w-4xl mb-10">
          <SectionLabel>Project 01 · Detailed write-up</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-dark leading-tight mb-5">
            PQC PKI Migration & Algorithm Retirement Lab
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            A practical proof of concept that explores an often-overlooked part of
            post-quantum migration: deciding when an algorithm must no longer be
            used, controlling that decision, and recording what happened.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {["Python", "OpenSSL wrapper", "JSON policy", "JSONL audit", "PQC / PKI"].map((tag) => (
              <span key={tag} className="rounded-full border border-border bg-white px-3 py-1.5 text-xs text-muted">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-8 lg:gap-12">
          <div className="min-w-0 space-y-10">
            <section>
              <SectionLabel>01 · Why this project</SectionLabel>
              <h3 className="text-xl md:text-2xl font-semibold text-dark mb-3">
                Replacing an algorithm is only half the problem
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                A migration plan needs more than a new algorithm that can produce a
                signature. It also needs a controlled way to stop using an old
                algorithm, decide which replacement is permitted, and leave an
                auditable record of the decision. This lab focuses on that
                algorithm-exit path.
              </p>
              <blockquote className="border-l-4 border-primary pl-5 py-1 text-lg md:text-xl font-semibold text-dark">
                Design the algorithm exit path before you deploy the replacement.
              </blockquote>
            </section>

            <section>
              <SectionLabel>02 · How the public implementation works</SectionLabel>
              <h3 className="text-xl md:text-2xl font-semibold text-dark mb-3">
                A default-deny policy gate
              </h3>
              <p className="text-muted leading-relaxed mb-5">
                The public Python policy engine reads an explicit JSON policy. It
                validates the policy structure, rejects duplicate or overlapping
                algorithm lists, and requires the default action to be DENY. It
                then evaluates the requested algorithm against the retired and
                approved lists. Anything not approved is denied.
              </p>
              <ArchitectureDiagram />
            </section>

            <section>
              <SectionLabel>03 · Policy decisions</SectionLabel>
              <h3 className="text-xl md:text-2xl font-semibold text-dark mb-4">
                What the current policy says
              </h3>
              <div className="overflow-x-auto rounded-xl border border-border bg-white">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-dark">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Algorithm</th>
                      <th className="px-4 py-3 font-semibold">Decision</th>
                      <th className="px-4 py-3 font-semibold">Reason / behaviour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-muted">
                    <tr>
                      <td className="px-4 py-3 font-medium text-dark">ML-DSA-65</td>
                      <td className="px-4 py-3"><span className="text-rose-700 font-semibold">DENY</span></td>
                      <td className="px-4 py-3">Listed as retired; guarded signing is blocked before the OpenSSL signing call.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-dark">SLH-DSA-SHA2-128s</td>
                      <td className="px-4 py-3"><span className="text-emerald-700 font-semibold">ALLOW</span></td>
                      <td className="px-4 py-3">Explicitly approved by policy; local signing test is reported separately.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-dark">ML-DSA-44</td>
                      <td className="px-4 py-3"><span className="text-rose-700 font-semibold">DENY</span></td>
                      <td className="px-4 py-3">Not approved by the current policy.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <SectionLabel>04 · Tests and evidence</SectionLabel>
              <h3 className="text-xl md:text-2xl font-semibold text-dark mb-3">
                Separate reproducible tests from local lab results
              </h3>
              <p className="text-muted leading-relaxed mb-5">
                The public repository includes the policy engine, policy JSON,
                test runner, and a recorded JSON report. The recorded policy suite
                has three checks: retired ML-DSA-65 is denied, approved
                SLH-DSA-SHA2-128s is allowed, and unapproved ML-DSA-44 is denied.
                The committed report records 3/3 PASS; it is a saved run, not a
                claim that this website executed the tests.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 mb-5">
                {[
                  ["ML-DSA-65", "DENY", "Retired"],
                  ["SLH-DSA-SHA2-128s", "ALLOW", "Approved"],
                  ["ML-DSA-44", "DENY", "Unapproved"],
                ].map(([name, decision, note]) => (
                  <div key={name} className="rounded-xl border border-border bg-white p-4">
                    <p className="text-xs text-muted mb-2">{note}</p>
                    <p className="text-sm font-semibold text-dark break-words">{name}</p>
                    <p className={`text-sm font-bold mt-3 ${decision === "ALLOW" ? "text-emerald-700" : "text-rose-700"}`}>{decision}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-slate-950 text-slate-200 p-5">
                <p className="text-xs uppercase tracking-wider text-cyan-300 mb-3">Run the public policy tests</p>
                <code className="block text-sm leading-relaxed break-all">python algorithm-retirement/run_tests.py</code>
                <p className="text-xs text-slate-400 mt-3">
                  Requires Python 3. The command writes a fresh report to the results folder.
                </p>
              </div>
              <h4 className="font-semibold text-dark mt-7 mb-3">Additional results reported from the local lab</h4>
              <p className="text-sm text-muted leading-relaxed mb-3">
                The lab report records ML-DSA-65 PKI and certificate-chain checks,
                TLS 1.3 with X25519MLKEM768, mTLS client-authentication checks,
                offline CRL revocation checks, an SLH-DSA replacement trust chain
                and mTLS test, plus signing, verification, and tampered-message
                rejection. These are local-lab results, not reproducible from a
                clean clone of the public repository because the supporting
                certificates, keys, scripts, and lab files are not published.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                The JSONL audit sample is included in the repository. The guarded
                signing wrapper requires local OpenSSL, local SLH-DSA keys, and a
                local sample message.
              </p>
            </section>

            <section>
              <SectionLabel>05 · Repository contents</SectionLabel>
              <h3 className="text-xl md:text-2xl font-semibold text-dark mb-3">
                What you can inspect on GitHub
              </h3>
              <div className="rounded-xl border border-border bg-white p-5">
                <pre className="text-xs sm:text-sm leading-relaxed text-slate-700 overflow-x-auto">{`PQC-PKI-Migration-Lab/
├── algorithm-retirement/
│   ├── policies/
│   │   └── algorithm-policy.json
│   ├── results/
│   │   ├── retirement-policy-test-report.json
│   │   └── execution-audit.jsonl
│   ├── policy_engine.py
│   ├── run_tests.py
│   └── guarded_sign.py
├── docs/
│   ├── algorithm-retirement-lab-report.md
│   └── PROJECT-CHECKLIST.md
├── results/
│   └── mtls-pqc-test-report.md
└── README.md`}</pre>
              </div>
              <p className="text-sm text-muted leading-relaxed mt-4">
                Private keys and generated signing inputs/outputs are intentionally
                excluded. The PKI directories, certificates, clients, and supporting
                test scripts mentioned in the reports are local-only and are not
                part of the public repository tree.
              </p>
            </section>

            <section>
              <SectionLabel>06 · Boundaries and next steps</SectionLabel>
              <h3 className="text-xl md:text-2xl font-semibold text-dark mb-3">
                What this lab does not claim
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted leading-relaxed">
                <li>It is a laboratory proof of concept, not a production migration platform.</li>
                <li>The Python guard controls only operations routed through that wrapper; it does not globally disable algorithms in OpenSSL or other applications.</li>
                <li>The policy is a manually maintained JSON file, not a distributed enterprise policy service.</li>
                <li>The CRL demonstration uses offline revocation checking, not automatic CRL enforcement by every TLS server.</li>
                <li>Enterprise-wide cryptographic discovery, production HSM/KMS integration, multi-vendor interoperability, production scale, and rollback are not demonstrated.</li>
              </ul>
              <h4 className="font-semibold text-dark mt-7 mb-3">Potential engineering extensions</h4>
              <p className="text-sm text-muted leading-relaxed">
                Future work identified in the lab includes cryptographic asset
                inventory and dependency mapping, distributed policy enforcement,
                certificate and key lifecycle automation, HSM/KMS integration,
                interoperability testing, and rollback and trust-continuity testing.
              </p>
            </section>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-white p-5 sticky top-24">
              <SectionLabel>Repository</SectionLabel>
              <h3 className="text-lg font-semibold text-dark mb-2">Explore the source</h3>
              <p className="text-sm text-muted leading-relaxed mb-5">
                Read the code, policy, test runner, recorded results, and lab reports
                in the public GitHub repository.
              </p>
              <a
                href="https://github.com/ajaysalunkhe2026-netizen/PQC-PKI-Migration-Lab"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary-hover transition"
              >
                View GitHub repository ↗
              </a>
              <div className="border-t border-border mt-5 pt-5 space-y-3 text-sm">
                <div className="flex justify-between gap-3"><span className="text-muted">Project type</span><span className="text-dark font-medium text-right">Lab / PoC</span></div>
                <div className="flex justify-between gap-3"><span className="text-muted">Public policy tests</span><span className="text-dark font-medium">3 / 3 recorded PASS</span></div>
                <div className="flex justify-between gap-3"><span className="text-muted">Policy default</span><span className="text-dark font-medium">DENY</span></div>
                <div className="flex justify-between gap-3"><span className="text-muted">Implementation</span><span className="text-dark font-medium">Python</span></div>
              </div>
              <p className="text-xs text-muted leading-relaxed mt-5">
                The test count refers to the committed policy-test report, not a
                live status check.
              </p>
            </div>
          </aside>
        </div>
      </article>

      <section className="mt-16 border-t border-border pt-10">
        <div className="rounded-2xl bg-slate-950 p-7 md:p-10 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-300 font-semibold mb-3">More project notes</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Engineering work, added as it develops.</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              I will use this page to document future public GitHub projects with
              their purpose, design, implementation details, evidence, and limitations.
            </p>
          </div>
          <Link href="/contact" className="inline-flex shrink-0 justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition">
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
