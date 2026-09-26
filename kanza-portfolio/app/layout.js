import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "Kanza Iqbal — UI/UX & Product Designer",
  description:
    "Kanza Iqbal is a UI/UX & Product Designer turning ideas into intuitive experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-body bg-ink`}>
        {children}
      </body>
    </html>
  );
}
