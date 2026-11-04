'use client';

import React, { useState } from 'react';

export default function PQCMigrationPage() {
  const [algo, setAlgo] = useState('ML-KEM-768');
  const [mtu, setMtu] = useState(1500);
  const [report, setReport] = useState<any>(null);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const runAssessment = () => {
    let pubKeySize = algo.includes('1024') ? 1568 : 1184;
    if (algo.includes('Hybrid')) pubKeySize = 1216;

    const estimatedClientHello = pubKeySize + 256;
    const isFragmented = estimatedClientHello > mtu - 40;

    const res = {
      timestamp: new Date().toISOString(),
      targetAlgorithm: algo,
      publicKeyBytes: pubKeySize,
      estimatedClientHelloSize: estimatedClientHello,
      networkMtuLimit: mtu,
      riskStatus: isFragmented
        ? 'CRITICAL: IP Fragmentation / PMTUD Blackhole Risk Detected'
        : 'OPTIMAL: Fits within standard MSS window',
      recommendedRemediation: isFragmented
        ? 'Implement TCP MSS clamping on load balancers and tune QUIC datagram probe sizes.'
        : 'No transport fragmentation remediation required.',
    };

    setReport(res);
    setOpenAccordion(2);
  };

  const downloadCBOM = () => {
    if (!report) return;
    const cbomData = {
      $schema: 'http://cyclonedx.org/schema/cbom-1.0.a.json',
      bomFormat: 'CycloneDX',
      specVersion: '1.5',
      serialNumber: `urn:uuid:ajaysalunkhe-pqc-${Date.now()}`,
      version: 1,
      metadata: {
        timestamp: report.timestamp,
        tools: [{ vendor: 'Ajay Salunkhe', name: 'PQC Migration Engineering Hub', version: '4.0.0' }],
        component: { type: 'application', name: 'Enterprise-Cryptographic-Asset', purl: 'pkg:generic/pqc-migration@active' },
      },
      cryptography: {
        assets: [{
          assetId: `crypto-${algo.toLowerCase()}`,
          type: 'algorithm',
          algorithmProperties: { primitive: 'key-establishment', parameterSet: algo },
          analysis: report,
        }],
      },
    };

    const blob = new Blob([JSON.stringify(cbomData, null, 4)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pqc-migration-cbom-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ backgroundColor: '#0d1117', color: '#c9d1d9', fontFamily: 'monospace', minHeight: '100vh', padding: '20px' }}>
      {/* Software Application & FAQ Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is PQC Migration?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'PQC Migration is the strategic process of transitioning enterprise cryptographic systems from legacy algorithms (like RSA and ECC) to NIST-standardized Post-Quantum Cryptography (such as ML-KEM and ML-DSA) to protect against quantum computing decryption threats.'
                }
              },
              {
                '@type': 'Question',
                name: 'How does client-side CBOM generation work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'This un-gated platform performs browser-based cryptographic asset inventory analysis and exports a machine-readable CycloneDX v1.5 compliant Cryptographic Bill of Materials (CBOM) JSON instantly without server latency.'
                }
              }
            ]
          }),
        }}
      />
      
      <div style={{ maxWidth: '950px', margin: '20px auto', padding: '30px', background: '#161b22', border: '1px solid #30363d', borderRadius: '8px' }}>
        <span style={{ background: '#238636', color: '#fff', padding: '5px 10px', fontSize: '11px', borderRadius: '4px', fontWeight: 'bold' }}>
          ZERO-SERVER DOM EXECUTION | NO GATED FORMS
        </span>
        
        {/* Exact Match Generic Keyword H1 */}
        <h1 style={{ color: '#58a6ff', fontSize: '24px', borderBottom: '1px solid #30363d', paddingBottom: '10px', marginTop: '15px' }}>
          PQC Migration Engineering & Cryptographic Bill of Materials (CBOM) Hub
        </h1>
        
        <p style={{ color: '#8b949e', fontSize: '14px', marginBottom: '20px', lineHeight: '1.5' }}>
          Welcome to the independent <strong style={{ color: '#c9d1d9' }}>PQC Migration</strong> technical hub by Ajay Salunkhe. Designed for security architects to evaluate TLS 1.3 hybrid key encapsulation packet expansion, solve MTU blackhole fragmentation risks, and export CycloneDX compliance reports without corporate gated forms.
        </p>

        {/* Category 1 */}
        <button onClick={() => toggleAccordion(0)} style={{ background: '#21262d', color: '#c9d1d9', cursor: 'pointer', padding: '14px', width: '100%', textAlign: 'left', border: '1px solid #30363d', borderRadius: '6px', fontSize: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
          <span>1. PQC Migration Made Easy: Live DOM Assessment</span>
          <span>{openAccordion === 0 ? '-' : '+'}</span>
        </button>
        {openAccordion === 0 && (
          <div style={{ padding: '18px', background: '#0d1117', border: '1px solid #30363d', borderTop: 'none', borderRadius: '0 0 6px 6px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#8b949e', fontSize: '13px' }}>Select Target NIST Algorithm (FIPS 203 / Hybrid):</label>
            <select value={algo} onChange={(e) => setAlgo(e.target.value)} style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', color: '#c9d1d9', borderRadius: '4px', marginBottom: '15px' }}>
              <option value="ML-KEM-768">NIST FIPS 203: ML-KEM-768 (Standard Security)</option>
              <option value="ML-KEM-1024">NIST FIPS 203: ML-KEM-1024 (High Security)</option>
              <option value="Hybrid-X25519-MLKEM768">Hybrid: X25519 + ML-KEM-768 (Recommended)</option>
            </select>
            <button onClick={runAssessment} style={{ width: '100%', padding: '10px', background: '#238636', color: 'white', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Run Client-Side Evaluation
            </button>
          </div>
        )}

        {/* Category 2 */}
        <button onClick={() => toggleAccordion(1)} style={{ background: '#21262d', color: '#c9d1d9', cursor: 'pointer', padding: '14px', width: '100%', textAlign: 'left', border: '1px solid #30363d', borderRadius: '6px', fontSize: '15px', fontWeight: 'bold', marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <span>2. MTU Fragmentation & Network Risk Analyzer</span>
          <span>{openAccordion === 1 ? '-' : '+'}</span>
        </button>
        {openAccordion === 1 && (
          <div style={{ padding: '18px', background: '#0d1117', border: '1px solid #30363d', borderTop: 'none', borderRadius: '0 0 6px 6px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#8b949e', fontSize: '13px' }}>Network MTU Limit (Bytes):</label>
            <input type="number" value={mtu} onChange={(e) => setMtu(Number(e.target.value))} style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', color: '#c9d1d9', borderRadius: '4px' }} />
            <p style={{ fontSize: '12px', color: '#8b949e', marginTop: '5px' }}>Calculates transport-layer packet drop risks caused by large Post-Quantum public keys in TLS handshakes.</p>
          </div>
        )}

        {/* Category 3 */}
        <button onClick={() => toggleAccordion(2)} style={{ background: '#21262d', color: '#c9d1d9', cursor: 'pointer', padding: '14px', width: '100%', textAlign: 'left', border: '1px solid #30363d', borderRadius: '6px', fontSize: '15px', fontWeight: 'bold', marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <span>3. Telemetry Output & Diagnostics</span>
          <span>{openAccordion === 2 ? '-' : '+'}</span>
        </button>
        {openAccordion === 2 && (
          <div style={{ padding: '18px', background: '#0d1117', border: '1px solid #30363d', borderTop: 'none', borderRadius: '0 0 6px 6px' }}>
            <pre style={{ background: '#0d1117', padding: '15px', border: '1px solid #30363d', borderRadius: '4px', overflowX: 'auto', color: '#7ee787', fontSize: '12px' }}>
              {report ? JSON.stringify(report, null, 4) : 'Awaiting assessment execution from Section 1...'}
            </pre>
          </div>
        )}

        {/* Category 4 */}
        <button onClick={() => toggleAccordion(3)} style={{ background: '#21262d', color: '#c9d1d9', cursor: 'pointer', padding: '14px', width: '100%', textAlign: 'left', border: '1px solid #30363d', borderRadius: '6px', fontSize: '15px', fontWeight: 'bold', marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <span>4. One-Click CycloneDX CBOM JSON Exporter</span>
          <span>{openAccordion === 3 ? '-' : '+'}</span>
        </button>
        {openAccordion === 3 && (
          <div style={{ padding: '18px', background: '#0d1117', border: '1px solid #30363d', borderTop: 'none', borderRadius: '0 0 6px 6px' }}>
            <p style={{ fontSize: '12px', color: '#8b949e', marginBottom: '10px' }}>Generate machine-readable compliance inventories instantly for CISO and auditor review.</p>
            {report ? (
              <button onClick={downloadCBOM} style={{ width: '100%', padding: '10px', background: '#1f6feb', color: 'white', fontWeight: 'bold', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Download CycloneDX CBOM v1.5 JSON
              </button>
            ) : (
              <p style={{ color: '#8b949e', fontSize: '12px' }}>Please run an assessment first to enable download.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
