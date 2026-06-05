import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uzm. Kl. Psk. Hande Turunçkapı | Psikolog Afyonkarahisar",
  description:
    "Afyonkarahisar'da çocuk, ergen ve yetişkin terapisi, online terapi, EMDR, BDT ve oyun terapisi hizmetleri. Uzm. Kl. Psk. Hande Turunçkapı.",
  keywords: [
    "psikolog afyonkarahisar",
    "klinik psikolog",
    "çocuk terapisi",
    "ergen terapisi",
    "online terapi",
    "EMDR terapi",
    "bilişsel davranışçı terapi",
    "oyun terapisi",
    "Hande Turunçkapı",
  ],
  authors: [{ name: "Uzm. Kl. Psk. Hande Turunçkapı" }],
  creator: "Uzm. Kl. Psk. Hande Turunçkapı",
  openGraph: {
    title: "Uzm. Kl. Psk. Hande Turunçkapı | Psikolog Afyonkarahisar",
    description:
      "Afyonkarahisar'da çocuk, ergen ve yetişkin terapisi, online terapi, EMDR, BDT ve oyun terapisi hizmetleri.",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
