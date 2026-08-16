import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// La maquette utilise Georgia (titres) et Helvetica Neue (UI) — deux polices
// système, non chargées. Seul Inter, utilisé pour les petits textes, vient de
// Google Fonts.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Craft — Votre espace de travail tout-en-un",
  description:
    "Écrivez, planifiez et organisez vos idées dans un espace unique, pensé pour la clarté.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
