import { useState } from 'react';

export default function CapitronApp() {
  const [status, setStatus] = useState('🧠 Capitron is initializing...');

  return (
    <div>
      <h1>🧠 Capitron OS - Final Edition</h1>
      <p>{status}</p>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setStatus('🟢 AI Command Console Activated')}>Activate Console</button>
        <button onClick={() => setStatus('🟢 Persona Panel Loaded')}>Load Persona</button>
        <button onClick={() => setStatus('🟢 Risk Sentinel Ready')}>Enable Sentinel</button>
        <button onClick={() => setStatus('🟢 Dock & Signal Feed Connected')}>Connect Dock</button>
      </div>
    </div>
  );
}
