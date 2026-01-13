export default function DetailKursus() {
  return (
    <section className="detail-kursus">
      <div className="detail-wrapper">
        <h2>Detail Kursus</h2>
        <p className="detail-subtitle">
          Pelajari materi lengkap yang dirancang untuk mahasiswa dan pemula
        </p>

        <div className="detail-grid">
          {/* UI UX */}
          <div className="detail-card">
            <h3>🎨 UI / UX Design</h3>
            <p className="detail-desc">
              Kursus ini membahas perancangan tampilan dan pengalaman pengguna
              agar aplikasi dan website lebih nyaman dan menarik.
            </p>
            <ul>
              <li>Dasar UI & UX</li>
              <li>User Research & Persona</li>
              <li>Wireframe & User Flow</li>
              <li>Figma & Prototyping</li>
              <li>Testing & Studi Kasus</li>
            </ul>
            <span className="detail-info">
              ⏱ 12 Minggu • 🎓 Sertifikat • Level Pemula
            </span>
          </div>

          {/* Web Dev */}
          <div className="detail-card">
            <h3>💻 Web Development</h3>
            <p className="detail-desc">
              Belajar membuat website modern dari nol hingga siap dipublish dan
              digunakan sebagai portofolio.
            </p>
            <ul>
              <li>HTML & CSS Dasar</li>
              <li>Responsive Design</li>
              <li>JavaScript Dasar</li>
              <li>Struktur Website</li>
              <li>Project Website Akhir</li>
            </ul>
            <span className="detail-info">
              ⏱ 16 Minggu • 🎓 Sertifikat • Level Pemula
            </span>
          </div>

          {/* Digital Marketing */}
          <div className="detail-card">
            <h3>📈 Digital Marketing</h3>
            <p className="detail-desc">
              Mempelajari strategi pemasaran digital untuk bisnis, UMKM, dan
              personal branding di era digital.
            </p>
            <ul>
              <li>Dasar Digital Marketing</li>
              <li>Social Media Marketing</li>
              <li>Content Planning</li>
              <li>SEO Dasar</li>
              <li>Facebook & Instagram Ads</li>
            </ul>
            <span className="detail-info">
              ⏱ 10 Minggu • 🎓 Sertifikat • Level Menengah
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
