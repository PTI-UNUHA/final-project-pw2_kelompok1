import Link from "next/link";

export default function RegisterPage() {
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
            <button className="btn-daftar">Login</button>
          </Link>
        </div>
      </header>

      {/* REGISTER FORM */}
      <section className="auth">
        <div className="auth-card">
          <h1>Daftar Akun</h1>
          <p>Mulai perjalanan belajarmu sekarang</p>

          <form className="auth-form">
            <input type="text" placeholder="Nama Lengkap" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button type="submit" className="hero-btn">
              Daftar
            </button>
          </form>

          <p className="auth-link">
            Sudah punya akun?{" "}
            <Link href="/login">Login di sini</Link>
          </p>
        </div>
      </section>
    </>
  );
}
