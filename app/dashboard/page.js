'use client';

import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">🎓 EduCorse.id</div>

        <div className="nav-btn">
          <Link href="/">
            <button className="btn-login">Beranda</button>
          </Link>

          <Link href="/login">
            <button className="btn-daftar">Logout</button>
          </Link>
        </div>
      </header>

      {/* DASHBOARD */}
      <section className="dashboard">
        <div className="dashboard-header">
          <h1>Selamat Datang 👋</h1>
          <p>Siap melanjutkan belajar hari ini?</p>
        </div>

        <div className="dashboard-grid">
          {/* KURSUS */}
          <div className="dashboard-card">
            <h3>📚 Kursus Saya</h3>
            <p>Lihat dan lanjutkan kursus yang sedang kamu ikuti.</p>

            <Link href="/dashboard/kursus">
              <button className="dashboard-btn">
                Lihat Kursus
              </button>
            </Link>
          </div>

          {/* SERTIFIKAT */}
          <div className="dashboard-card">
            <h3>📜 Sertifikat</h3>
            <p>Akses sertifikat resmi yang sudah kamu dapatkan.</p>

            <Link href="/dashboard/sertifikat">
              <button className="dashboard-btn">
                Lihat Sertifikat
              </button>
            </Link>
          </div>

          {/* PENGATURAN */}
          <div className="dashboard-card">
            <h3>⚙️ Pengaturan Akun</h3>
            <p>Ubah profil, email, dan password akunmu.</p>

            <Link href="/dashboard/pengaturan">
              <button className="dashboard-btn">
                Pengaturan
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
