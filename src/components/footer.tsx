import Image from "next/image";
import Link from "next/link";

import {
  imgFooterPaper,
  imgFooterSocial1,
  imgFooterSocial2,
  imgFooterSocial3,
  imgFooterSocial4,
} from "@/lib/figma-assets";

type FooterEntry = { label: string; nested?: boolean; dividerBefore?: boolean };
type FooterColumn = { title: string; entries: FooterEntry[] };

/** Colonnes du footer (Figma 1:1130). L'indentation `nested` et les séparateurs
 *  reproduisent la hiérarchie de la maquette. */
const COLUMNS: FooterColumn[] = [
  {
    title: "Produit",
    entries: [
      { label: "Nouveautés produit" },
      { label: "Fonctionnalités" },
      { label: "Écrire", nested: true },
      { label: "Plan", nested: true },
      { label: "Organiser", nested: true },
      { label: "Personnaliser", nested: true },
      { label: "Imaginez avec Craft" },
      { label: "Tarifs", dividerBefore: true },
      { label: "Offre Éducation", nested: true },
    ],
  },
  {
    title: "Communauté",
    entries: [
      { label: "Slack" },
      { label: "Communauté Reddit" },
      { label: "X / Twitter" },
      { label: "Apprendre", dividerBefore: true },
      { label: "Comparer Craft" },
      { label: "Guide de démarrage" },
      { label: "Galerie de modèles" },
    ],
  },
  {
    title: "Support",
    entries: [{ label: "Centre d'aide" }, { label: "Contacter le support" }],
  },
  {
    title: "Entreprise",
    entries: [
      { label: "À propos de nous" },
      { label: "Blog" },
      { label: "Carrières" },
      { label: "Programme d'affiliation" },
      { label: "Médias" },
      { label: "Juridique", dividerBefore: true },
      { label: "Conditions d’utilisation", nested: true },
      { label: "Politique de confidentialité", nested: true },
      { label: "Sécurité", nested: true },
      { label: "ESG", nested: true },
      { label: "Divulgation responsable", nested: true },
    ],
  },
  {
    title: "Télécharger",
    entries: [
      { label: "Craft pour iPhone" },
      { label: "Craft pour iPad" },
      { label: "Craft pour Mac" },
      { label: "Craft pour Windows" },
      { label: "Windows x64", nested: true },
      { label: "Windows ARM64", nested: true },
      { label: "Craft pour Vision Pro" },
      { label: "Craft pour Android" },
    ],
  },
];

const SOCIALS = [
  { src: imgFooterSocial1, label: "X / Twitter" },
  { src: imgFooterSocial2, label: "Reddit" },
  { src: imgFooterSocial3, label: "Slack" },
  { src: imgFooterSocial4, label: "YouTube" },
];

export function Footer() {
  return (
    <footer
      data-node-id="1:1130"
      className="relative mx-2 mb-2 overflow-hidden rounded-xl bg-ink px-6 py-12 text-white sm:mx-4 sm:mb-4 sm:px-12 lg:px-[244px] lg:py-[124px]"
    >
      {/* Texture papier — mix-blend-screen à 40 %, comme dans la maquette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[length:1192px_843px] bg-left-top opacity-40 mix-blend-screen"
        style={{ backgroundImage: `url("${imgFooterPaper}")` }}
      />

      <div className="relative">
        <div className="grid grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          {COLUMNS.map((column) => (
            <div key={column.title} className="min-w-0">
              <h2 className="font-sans text-h4 font-medium uppercase tracking-[0.01em]">
                {column.title}
              </h2>
              <div className="mt-2 h-px bg-white/20" />
              <ul className="mt-4 space-y-[7px]">
                {column.entries.map((entry) => (
                  <li key={entry.label}>
                    {entry.dividerBefore && (
                      <div className="my-4 h-px bg-white/20" aria-hidden />
                    )}
                    <Link
                      href="/"
                      className={`block text-h4 leading-[21px] text-white/80 transition-opacity hover:opacity-100 ${
                        entry.nested ? "pl-4" : ""
                      }`}
                    >
                      {entry.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 h-px bg-white/20" />

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body tracking-[-0.02em] text-white/80">
            © 2026 Craft Docs Limited, Inc. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="text-body tracking-[-0.02em] text-white transition-opacity hover:opacity-80"
            >
              Français
            </button>
            <ul className="flex items-center gap-2">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <Link
                    href="/"
                    aria-label={social.label}
                    className="flex size-8 items-center justify-center rounded-lg border border-white/30 transition-colors hover:bg-white/10"
                  >
                    <Image
                      src={social.src}
                      alt=""
                      width={24}
                      height={24}
                      className="size-6"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
