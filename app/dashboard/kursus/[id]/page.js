export default function CourseDetail({ params }) {
  const { id } = params;

  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold" }}>
        Halaman Kursus: {id}
      </h1>

      <p>
        Ini adalah halaman detail / materi kursus kamu 😊
      </p>
    </div>
  );
}

