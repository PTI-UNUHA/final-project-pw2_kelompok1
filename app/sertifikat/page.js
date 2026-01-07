"use client";

export default function SertifikatPage() {
  const unduhSertifikat = () => {
    const sertifikat = `
====================================
        SERTIFIKAT KELULUSAN
====================================

Diberikan kepada:
Neli Agustina

Telah menyelesaikan kursus:
Web Development Dasar

Status: LULUS

EduCourse.id
====================================
    `;

    const blob = new Blob([sertifikat], {
      type: "text/plain;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Sertifikat-Web-Development.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-2">
        🎓 Sertifikat
      </h1>
      <p className="text-gray-600 mb-8">
        Sertifikat resmi yang sudah kamu dapatkan
      </p>

      <div className="bg-white rounded-2xl p-6 shadow flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-green-800">
            Web Development Dasar
          </h2>
          <p className="mt-2">
            Status: <span className="text-green-600 font-semibold">✅ Lulus</span>
          </p>
        </div>

        <button
          onClick={unduhSertifikat}
          className="bg-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 cursor-pointer"
        >
          Unduh Sertifikat
        </button>
      </div>

      <a
        href="/dashboard"
        className="inline-block mt-6 text-green-700 font-semibold"
      >
        ← Kembali ke Dashboard
      </a>
    </div>
  );
}
