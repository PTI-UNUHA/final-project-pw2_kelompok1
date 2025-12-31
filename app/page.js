export default function Home() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="logo">
          EduCorse<span>.id</span>
        </div>

        <nav className="nav">
          <a href="#">Login</a>
          <a href="#" className="btn-daftar">Daftar</a>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section
        className="hero"
        style={{ backgroundImage: "url('/unuha.jpg')" }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              Tingkatkan Skill <br />
              <span>Raih Masa Depan</span>
            </h1>

            <p>
              Platform pembelajaran digital untuk membantu kamu
              menguasai skill baru dengan mentor berpengalaman
              dan sertifikat resmi.
            </p>

            <div className="hero-btn">
              <a href="#" className="btn-primary">Mulai Belajar</a>
              <a href="#" className="btn-secondary">Lihat Kursus</a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features">
        <div className="card">
          <div className="icon">📘</div>
          <h3>Banyak Pilihan Kursus</h3>
          <p>
            Tersedia berbagai kursus dari bidang teknologi,
            pendidikan, hingga pengembangan diri.
          </p>
        </div>

        <div className="card">
          <div className="icon">👨‍🏫</div>
          <h3>Mentor Profesional</h3>
          <p>
            Belajar langsung dengan mentor berpengalaman
            yang siap membimbing kamu sampai paham.
          </p>
        </div>

        <div className="card">
          <div className="icon">🎓</div>
          <h3>Sertifikat Resmi</h3>
          <p>
            Dapatkan sertifikat resmi sebagai bukti
            kompetensi setelah menyelesaikan kursus.
          </p>
        </div>
      </section>

      {/* ================= CTA BOTTOM ================= */}
      <section className="cta">
        <h2>Siap Mulai Perjalanan Belajarmu?</h2>
        <p>
          Bergabung bersama ribuan pelajar lainnya dan
          tingkatkan kemampuanmu bersama EduCorse.id
        </p>
        <a href="#" className="btn-primary">Daftar Sekarang</a>
      </section>
    </>
  );
}
