'use client';

import { useRouter } from "next/navigation";

export default function KursusPage() {
  const router = useRouter();

  return (
    <div className="dashboard-page">
      <h1>📚 Kursus Saya</h1>
      <p>Daftar kursus yang sedang kamu ikuti</p>

      <div className="card-grid">

        {/* KURSUS 1 */}
        <div className="card">
          <h3>Web Development Dasar</h3>
          <p>Progress: 60%</p>

          <button 
            className="btn-primary"
            onClick={() => router.push('/dashboard/kursus/web-dev')}
          >
            Lanjutkan
          </button>
        </div>

        {/* KURSUS 2 */}
        <div className="card">
          <h3>UI/UX Design</h3>
          <p>Progress: 30%</p>

          <button 
            className="btn-primary"
            onClick={() => router.push('/dashboard/kursus/uiux')}
          >
            Lanjutkan
          </button>
        </div>

      </div>

      <button 
        className="btn-back" 
        onClick={() => router.push('/dashboard')}
      >
        ← Kembali ke Dashboard
      </button>
    </div>
  );
}
