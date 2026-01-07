import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">🎓 EduCorse.id</div>
        <div className="nav-btn">
          <Link href="/login">
            <button className="btn-login">Login</button>
          </Link>
          <Link href="/daftar">
            <button className="btn-daftar">Daftar</button>
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-text">
            <h3>Masih</h3>
            <h1>BINGUNG</h1>
            <h2>Mau Kursus Online Dimana?</h2>
            <p className="hero-sub">🎓 EduCorse.id yuk!</p>
            <p className="hero-desc">
              Platform pembelajaran digital untuk membantu kamu
              menguasai skill baru dengan mentor berpengalaman
              dan bersertifikat resmi.
            </p>

            <Link href="/daftar">
              <button className="hero-btn">Daftar Sekarang</button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section className="feature">
        <div className="feature-grid">
          <div className="card">
            <h3>📘 Banyak Pilihan Kursus</h3>
            <p>Beragam kelas sesuai minat dan kebutuhanmu.</p>
          </div>

          <div className="card">
            <h3>👨‍🏫 Mentor Profesional</h3>
            <p>Didampingi mentor berpengalaman dan terpercaya.</p>
          </div>

          <div className="card">
            <h3>📜 Sertifikat Resmi</h3>
            <p>Sertifikat sebagai bukti peningkatan skill.</p>
          </div>
        </div>
      </section>
    </>
  );
}
