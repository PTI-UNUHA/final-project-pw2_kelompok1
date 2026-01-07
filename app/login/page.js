'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault(); // cegah reload
    router.push("/dashboard"); // pindah halaman
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">🎓 EduCorse.id</div>
        <div className="nav-btn">
          <Link href="/">
            <button className="btn-login">Beranda</button>
          </Link>
          <Link href="/register">
            <button className="btn-daftar">Daftar</button>
          </Link>
        </div>
      </header>

      <section className="auth">
        <div className="auth-card">
          <h1>Login</h1>
          <p>Masuk untuk melanjutkan belajar</p>

          <form className="auth-form" onSubmit={handleLogin}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />

            <button type="submit" className="hero-btn">
              Masuk
            </button>
          </form>

          <p className="auth-link">
            Belum punya akun? <Link href="/register">Daftar di sini</Link>
          </p>
        </div>
      </section>
    </>
  );
}
