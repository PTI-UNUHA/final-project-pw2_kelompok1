export default function DetailKursus({ params }) {
  const { slug } = params;

  const kursusData = {
    "web-development": {
      title: "Web Development",
      description:
        "Belajar HTML, CSS, JavaScript, dan Next.js dari dasar sampai mahir.",
      materi: [
        "HTML & CSS Fundamental",
        "JavaScript Dasar",
        "React & Next.js",
        "Project Website"
      ],
      durasi: "3 Bulan",
      level: "Pemula - Menengah"
    },
    "ui-ux-design": {
      title: "UI / UX Design",
      description:
        "Belajar design modern menggunakan Figma dan UX mindset.",
      materi: [
        "Design Principle",
        "Wireframe & Prototype",
        "UX Research",
        "Design System"
      ],
      durasi: "2 Bulan",
      level: "Pemula"
    },
    "digital-marketing": {
      title: "Digital Marketing",
      description:
        "Strategi pemasaran digital dan pengelolaan social media.",
      materi: [
        "Social Media Strategy",
        "Content Marketing",
        "Ads & Analytics",
        "Brand Growth"
      ],
      durasi: "2 Bulan",
      level: "Pemula - Menengah"
    }
  };

  const kursus = kursusData[slug];

  if (!kursus) {
    return <div className="p-10 text-center">Kursus tidak ditemukan</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-4">
        {kursus.title}
      </h1>

      <p className="text-gray-600 mb-6">
        {kursus.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">📚 Materi</h3>
          <ul className="list-disc list-inside text-gray-600">
            {kursus.materi.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">ℹ️ Info Kursus</h3>
          <p>Durasi: {kursus.durasi}</p>
          <p>Level: {kursus.level}</p>
        </div>
      </div>

      <button className="bg-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500">
        Daftar Sekarang
      </button>
    </div>
  );
}
