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
    let pubKeySize = 1184;
    let sigSize = 0;
    let primitiveType = 'key-establishment';

    if (algo.includes('ML-KEM-768')) {
      pubKeySize = 1184;
    } else if (algo.includes('ML-KEM-1024')) {
      pubKeySize = 1568;
    } else if (algo.includes('ML-DSA-65')) {
      pubKeySize = 1952;
      sigSize = 3309;
      primitiveType = 'digital-signature';
    } else if (algo.includes('ML-DSA-87')) {
      pubKeySize = 2592;
      sigSize = 4595;
      primitiveType = 'digital-signature';
    } else if (algo.includes('Hybrid')) {
      pubKeySize = 1216;
    }

    const estimatedOverhead = pubKeySize + sigSize + 256;
    const isFragmented = estimatedOverhead > mtu - 40;

    const res = {
      timestamp: new Date().toISOString(),
      targetAlgorithm: algo,
      primitive: primitiveType,
      publicKeyBytes: pubKeySize,
      signatureBytes: sigSize,
      estimatedHandshakeOverheadBytes: estimatedOverhead,
      networkMtuLimit: mtu,
      riskStatus: isFragmented
        ? 'CRITICAL: IP Fragmentation / PMTUD Blackhole Risk Detected due to large Post-Quantum payload'
        : 'OPTIMAL: Fits within standard transport window limits',
      recommendedRemediation: isFragmented
        ? 'Implement TCP MSS clamping on load balancers, tune QUIC datagram probe sizes, and evaluate certificate chain offloading.'
        : 'No transport fragmentation remediation required for current threshold.',
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
        tools: [{ vendor: 'Ajay Salunkhe', name: 'PQC Migration Engineering Hub', version: '4.2.0-Ultimate' }],
        component: { type: 'application', name: 'Enterprise-Cryptographic-Asset', purl: 'pkg:generic/pqc-migration@active' },
      },
      cryptography: {
        assets: [{
          assetId: `crypto-${algo.toLowerCase()}`,
          type: 'algorithm',
          algorithmProperties: { primitive: report.primitive, parameterSet: algo },
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
      {/* FAQ Schema & Software Application Schema for Google Rich Snippets */}
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
                  text: 'PQC Migration is the strategic process of transitioning enterprise cryptographic systems from legacy algorithms to NIST-standardized Post-Quantum Cryptography (such as FIPS 203 ML-KEM and FIPS 204 ML-DSA).'
                }
              },
              {
                '@type': 'Question',
                name: 'How does client-side CBOM generation work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'This un-gated platform performs browser-based cryptographic asset inventory analysis and exports a machine-readable CycloneDX v1.5 compliant Cryptographic Bill of Materials (CBOM) JSON instantly.'
                }
              }
            ]
          }),
        }}
      />
      
      <div style={{ maxWidth: '950px', margin: '20px auto', padding: '30px', background: '#161b22', border: '1px solid #30363d', borderRadius: '8px' }}>
        <span style={{ background: '#238636', color: '#fff', padding: '5px 10px', fontSize: '11px', borderRadius: '4px', fontWeight: 'bold' }}>
          ZERO-SERVER DOM EXECUTION | NIST FIPS 203/204 & CBOM v1.5 READY
        </span>
        
        <h1 style={{ color: '#58a6ff', fontSize: '24px', borderBottom: '1px solid #30363d', paddingBottom: '10px', marginTop: '15px' }}>
          PQC Migration Engineering & Cryptographic Bill of Materials (CBOM) Hub
        </h1>
        
        <p style={{ color: '#8b949e', fontSize: '14px', marginBottom: '20px', lineHeight: '1.5' }}>
          Independent <strong style={{ color: '#c9d1d9' }}>PQC Migration</strong> architecture by Ajay Salunkhe. Evaluate NIST FIPS 203 (ML-KEM) and FIPS 204 (ML-DSA) packet expansion risks, MTU fragmentation limits, and export CycloneDX compliance reports without corporate gated forms.
        </p>

        {/* Category 1 */}
        <button onClick={() => toggleAccordion(0)} style={{ background: '#21262d', color: '#c9d1d9', cursor: 'pointer', padding: '14px', width: '100%', textAlign: 'left', border: '1px solid #30363d', borderRadius: '6px', fontSize: '15px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
          <span>1. PQC Migration Made Easy: Live DOM Assessment</span>
          <span>{openAccordion === 0 ? '-' : '+'}</span>
        </button>
        {openAccordion === 0 && (
          <div style={{ padding: '18px', background: '#0d1117', border: '1px solid #30363d', borderTop: 'none', borderRadius: '0 0 6px 6px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#8b949e', fontSize: '13px' }}>Select Target NIST Algorithm (FIPS 203 / FIPS 204 / Hybrid):</label>
            <select value={algo} onChange={(e) => setAlgo(e.target.value)} style={{ width: '100%', padding: '10px', background: '#0d1117', border: '1px solid #30363d', color: '#c9d1d9', borderRadius: '4px', marginBottom: '15px' }}>
              <option value="ML-KEM-768">NIST FIPS 203: ML-KEM-768 (Key Encapsulation)</option>
              <option value="ML-KEM-1024">NIST FIPS 203: ML-KEM-1024 (High Security KEM)</option>
              <option value="ML-DSA-65">NIST FIPS 204: ML-DSA-65 (Digital Signatures)</option>
              <option value="ML-DSA-87">NIST FIPS 204: ML-DSA-87 (High Security Signatures)</option>
              <option value="Hybrid-X25519-MLKEM768">Hybrid: X25519 + ML-KEM-768 (Recommended TLS 1.3)</option>
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
            <p style={{ fontSize: '12px', color: '#8b949e', marginTop: '5px' }}>Calculates transport-layer packet drop risks caused by large Post-Quantum public keys and signature chains.</p>
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
