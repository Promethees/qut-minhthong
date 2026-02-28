import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tra Quang Minh Thong | Research Engineer & PhD Applicant",
  description:
    "Personal portfolio of Tra Quang Minh Thong — Research Engineer at Center for Bioscience and Biotechnology, NUS Computer Engineering graduate.",
  openGraph: {
    title: "Tra Quang Minh Thong | Research Engineer & PhD Applicant",
    description:
      "Research Engineer specialising in biosensing systems, robotics, and intelligent diagnostics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
