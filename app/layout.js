import "./globals.css";

export const metadata = {
  title: "EduCorse.id",
  description: "Belajar Dengan Kenyamanan Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
