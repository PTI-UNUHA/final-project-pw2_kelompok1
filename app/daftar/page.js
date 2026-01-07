import Link from "next/link";

const kursusList = [
  {
    title: "💻 Web Development",
    desc: "HTML, CSS, JavaScript, Next.js dari dasar sampai mahir.",
  },
  {
    title: "🎨 UI / UX Design",
    desc: "Belajar desain modern dengan Figma & UX mindset.",
  },
  {
    title: "📊 Digital Marketing",
    desc: "Strategi pemasaran digital & social media.",
  },
];

export default function DaftarPage() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">🎓 EduCorse.id</div>
        <div className="nav-btn">
          <Link href="/login" className="btn-login">
            Login
          </Link>
          <Link href="/" className="btn-daftar">
            Beranda
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="daftar-hero">
        <div className="daftar-wrapper">
          <h1>Pilih Kursus Favoritmu 🚀</h1>
          <p>
            Mulai perjalanan belajarmu bersama mentor profesional
            dan sertifikat resmi dari EduCorse.id
          </p>
        </div>
      </section>

      {/* LIST KURSUS */}
      <section className="kursus">
        <div className="kursus-grid">
          {kursusList.map((kursus, index) => (
            <div className="kursus-card" key={index}>
              <h3>{kursus.title}</h3>
              <p>{kursus.desc}</p>
              <Link href="/register" className="kursus-btn">
                Detail Kursus
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Siap Upgrade Skill Sekarang?</h2>
        <Link href="/register" className="hero-btn">
          Gabung EduCorse.id
        </Link>
      </section>
    </>
  );
}
