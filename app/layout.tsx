import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export const metadata: Metadata = {
  title: "Elixer - Learning app",
  description: "Elixer helps to teach CSEB exam practising students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <>
          <Header />
          <div className="p-4">{children}</div>
          <Footer />
        </>
      </body>
    </html>
  );
}
