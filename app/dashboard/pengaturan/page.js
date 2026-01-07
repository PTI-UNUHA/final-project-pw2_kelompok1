'use client';

import { useRouter } from "next/navigation";

export default function PengaturanPage() {
  const router = useRouter();

  return (
    <div className="dashboard-page">
      <h1>⚙️ Pengaturan Akun</h1>
      <p>Kelola informasi akun kamu</p>

      <form className="form">
        <input type="text" placeholder="Nama Lengkap" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password Baru" />

        <button className="btn-primary">Simpan Perubahan</button>
      </form>

      <button className="btn-back" onClick={() => router.push('/dashboard')}>
        ← Kembali ke Dashboard
      </button>
    </div>
  );
}
