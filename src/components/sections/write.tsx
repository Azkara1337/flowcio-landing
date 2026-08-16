import Image from "next/image";

import { MockTask, MockWindowChrome } from "@/components/mock-window";
import { GhostButton } from "@/components/ghost-button";
import {
  imgImage,
  imgPaperTexture,
  imgSvg6,
  imgSvg7,
  imgSvg8,
  imgSvg9,
} from "@/lib/figma-assets";

const FEATURES = [
  { icon: imgSvg6, label: "Modèles" },
  { icon: imgSvg7, label: "Tableaux blancs" },
  { icon: imgSvg8, label: "Écrire avec l'IA" },
  { icon: imgSvg9, label: "Publier et partager" },
];

/** Maquette « liste de notes » (Figma 1:247), 420×420 à taille fixe. */
function NotesMock() {
  return (
    <div className="relative h-105 w-105 shrink-0 overflow-hidden rounded-xl border border-ink/12 bg-[#f5f5f7] shadow-[0px_50px_40px_0px_rgba(0,0,0,0.01),0px_50px_40px_0px_rgba(0,0,0,0.02),0px_20px_40px_0px_rgba(0,0,0,0.05),0px_3px_10px_0px_rgba(0,0,0,0.08)]">
      <MockWindowChrome title="Todo" />
      <div className="absolute inset-x-4 bottom-[13px] top-[53px] overflow-hidden rounded-xl border border-ink/9 bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]">
        <div className="space-y-[13px] px-8 pt-[39px]">
          <MockTask label="Recette de pain parfaite" tag="Cuisine" />
          <MockTask label="Nourrir le levain" tag="Boîte de réception" />
          <MockTask label="Réserver des billets pour Barcelone" tag="Voyage" />
          <MockTask label="Trouver des restaurants à essayer" tag="Voyage" />
        </div>
        <p className="mt-8 px-8 font-ui text-small leading-[22.5px] tracking-[-0.016em] text-ink/90">
          J&apos;ai de nouveau pensé à Bourdain. Pas seulement la nourriture,
          les couteaux, l&apos;arrière-cuisine, mais aussi la façon dont il se
          déplaçait dans le monde. Curieux. Acerbe. Honnête. Avec des défauts
          qui avaient du sens. Ce genre d&apos;honnêteté me manque.
        </p>
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-3 h-45 bg-linear-to-b from-white/0 to-white"
        />
      </div>
    </div>
  );
}

/** Maquette « fiche recette » (Figma 1:307), 480×480 à taille fixe. */
function RecipeMock() {
  return (
    <div className="relative h-120 w-120 shrink-0 overflow-hidden rounded-xl border border-ink/12 bg-negroni shadow-[0px_50px_40px_0px_rgba(0,0,0,0.01),0px_50px_40px_0px_rgba(0,0,0,0.02),0px_20px_40px_0px_rgba(0,0,0,0.05),0px_3px_10px_0px_rgba(0,0,0,0.08)]">
      <MockWindowChrome title="Mon pain au levain" />
      <div className="absolute inset-x-4 top-[53px] -bottom-7 rounded-xl border border-ink/9 bg-serenade drop-shadow-[0px_4px_6px_rgba(0,0,0,0.1)]">
        <h3 className="px-8 pt-10 font-ui text-[20px] font-bold leading-7 tracking-[-0.02em] text-ink">
          Mon pain au levain
        </h3>
        <div className="mx-8 mt-3 border-t border-ink/9" />
        <div className="mt-6 space-y-[13px] px-8">
          <MockTask label="500 g de farine de pain" />
          <MockTask label="350 g d'eau tiède" />
          <MockTask label="100 g de levain actif" />
          <MockTask label="10 g de sel" />
        </div>
        <p className="mt-8 px-8 font-ui text-small leading-[22.5px] tracking-[-0.016em] text-ink/90">
          Commencez le matin. Prenez un grand bol et mélangez 500 g de farine de
          pain (ou tout usage, n&apos;y pensez pas trop) avec 350 g d&apos;eau
          tiède. Mélangez le tout pour obtenir une pâte hirsute. Il ne s&apos;agit
          pas de pétrir, mais de mélanger. Couvrez le bol et laissez-le reposer
          pendant 30 à 45 minutes. Laissez la farine et l&apos;eau apprendre à se
          connaître, c&apos;est l&apos;autolyse, là où la magie commence.
        </p>
        <p className="mt-4 px-8 font-ui text-small leading-[22.5px] tracking-[-0.016em] text-ink/90">
          Revenez. Ajoutez maintenant 100 g de votre levain
        </p>
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-3 h-35 bg-linear-to-b from-serenade/0 to-serenade"
        />
      </div>
    </div>
  );
}

export function Write() {
  return (
    <section
      data-node-id="1:206"
      className="relative mx-auto mt-40 max-w-content overflow-hidden rounded-3xl bg-perano shadow-[0px_50px_40px_0px_rgba(0,0,0,0.01),0px_50px_40px_0px_rgba(0,0,0,0.02),0px_20px_40px_0px_rgba(0,0,0,0.05),0px_3px_10px_0px_rgba(0,0,0,0.08)] lg:mt-[264px]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay">
        <img alt="" src={imgPaperTexture} className="size-full max-w-none object-cover" />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-50 mix-blend-screen">
        <img alt="" src={imgImage} className="absolute left-0 top-0 h-[115.16%] w-[110.37%] max-w-none" />
      </div>

      <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[420px_1fr] lg:items-start lg:gap-14">
        {/* Colonne maquettes : décalées l'une par rapport à l'autre */}
        <div className="relative flex justify-center overflow-hidden lg:block lg:h-[636px]">
          <div className="hidden lg:block">
            <NotesMock />
            <div className="absolute left-[42px] top-40">
              <RecipeMock />
            </div>
          </div>
          <div className="lg:hidden">
            <RecipeMock />
          </div>
        </div>

        <div className="lg:pt-2">
          <p className="font-medium text-body uppercase tracking-[0.01em] text-ink/75">
            Écrire
          </p>
          <h2 className="mt-4 max-w-[420px] text-balance font-serif text-[clamp(1.75rem,2.6vw,2.125rem)] leading-[1.292] tracking-[-0.032em] text-ink">
            De la première idée à la forme finale
          </h2>
          <p className="mt-8 max-w-[500px] text-body leading-[1.4] tracking-[-0.02em] text-ink/75">
            Avec Craft, vos idées vous suivent partout. Notez-les en un instant
            sur n&apos;importe quel appareil, puis développez-les quand vous le
            souhaitez. Transformez les notes rapides prises sur votre iPhone en
            documents que vous êtes fier de partager.
          </p>

          <GhostButton href="/" className="mt-10">
            En savoir plus
          </GhostButton>

          <ul className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6">
            {FEATURES.map((feature) => (
              <li key={feature.label} className="flex items-center gap-3">
                <Image src={feature.icon} alt="" width={40} height={40} className="size-10 shrink-0" />
                <span className="font-medium text-[18px] leading-[25.2px] tracking-[-0.02em] text-ink">
                  {feature.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
