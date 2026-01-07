export default function Login() {
  return (
    <div className="auth">
      <div
        className="scale-in"
        style={{
          background: "white",
          padding: "40px 32px",
          borderRadius: "28px",
          width: "320px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#1b5e3c", marginBottom: 8 }}>Login</h1>
        <p style={{ marginBottom: 24 }}>Masuk ke EduCorse.id</p>

        <input placeholder="Email" style={{ marginBottom: 12 }} />
        <input type="password" placeholder="Password" style={{ marginBottom: 20 }} />

        <button style={{ width: "100%" }}>Masuk</button>
      </div>
    </div>
  );
}
