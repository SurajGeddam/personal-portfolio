import "./globals.css";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Suraj Geddam",
  description: "MS in Machine Learning @ Georgia Tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 text-gray-100">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
