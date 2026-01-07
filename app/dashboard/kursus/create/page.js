"use client";
import { useState } from "react";

export default function CreateCourse() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div className="min-h-screen bg-[#F0F7F4] flex flex-col items-center py-12 px-6">
      
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        
        <h1 className="text-3xl font-extrabold text-green-900 mb-2">
          Buat Kursus Baru
        </h1>

        <p className="text-gray-600 mb-6">
          Silakan isi data kursus yang ingin kamu tambahkan
        </p>

        <div className="space-y-5">

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Judul Kursus
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Contoh: Web Development Dasar"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Kategori
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Contoh: Programming, Design"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Deskripsi Kursus
            </label>
            <textarea
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              rows="4"
              placeholder="Tuliskan deskripsi kursus..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          <button className="bg-yellow-400 hover:bg-yellow-500 transition font-bold text-black px-6 py-2 rounded-full">
            Simpan Kursus
          </button>

          <a
            href="/dashboard/kursus"
            className="text-green-700 font-semibold block mt-3"
          >
            ← Kembali ke Kursus Saya
          </a>
        </div>
      </div>
    </div>
  );
}
