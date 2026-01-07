'use client';

import { useRouter } from "next/navigation";

export default function SertifikatPage() {
  const router = useRouter();

  return (
    <div className="dashboard-page">
      <h1>🎓 Sertifikat</h1>
      <p>Sertifikat resmi yang sudah kamu dapatkan</p>

      <div className="card-grid">
        <div className="card">
          <h3>Web Development Dasar</h3>
          <p>Status: ✅ Lulus</p>
          <button className="btn-primary">Unduh Sertifikat</button>
        </div>
      </div>

      <button className="btn-back" onClick={() => router.push('/dashboard')}>
        ← Kembali ke Dashboard
      </button>
    </div>
  );
}
