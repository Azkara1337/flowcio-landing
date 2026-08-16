import Image from "next/image";

import {
  imgAaron,
  imgAaron1,
  imgAmitySensei,
  imgAmitySensei1,
  imgAna,
  imgAna1,
  imgGagan,
  imgGagan1,
  imgGian,
  imgGian1,
  imgSeoyoung,
  imgTom,
  imgTom1,
} from "@/lib/figma-assets";

type Persona = {
  name: string;
  role: string;
  uses: string;
  base: string;
  /** Calque supérieur (découpe du personnage), décalé vers le bas de 5 %. */
  overlay?: { src: string; height: string; top: string };
};

/** Les 7 portraits de la bande horizontale (Figma 1:163), dans l'ordre
 *  gauche → droite de la maquette. */
const PERSONAS: Persona[] = [
  {
    name: "Tom",
    role: "Podcasteur et rédacteur de newsletters",
    uses: "Notes de réunion, messages pour les réseaux sociaux",
    base: imgTom,
    overlay: { src: imgTom1, height: "100%", top: "0%" },
  },
  {
    name: "Ana",
    role: "Productrice et photographe",
    uses: "Plans de tournage, scripts, calendriers, notes sur la garde-robe",
    base: imgAna,
    overlay: { src: imgAna1, height: "98.03%", top: "1.97%" },
  },
  {
    name: "Gagan",
    role: "Chef de produit",
    uses: "Notes, tâches, plans de voyage, brouillons de blog",
    base: imgGagan,
    overlay: { src: imgGagan1, height: "96.71%", top: "3.29%" },
  },
  {
    name: "Amity",
    role: "Créatrice et éducatrice",
    uses: "Cours, scripts, projets, inspirations quotidiennes",
    base: imgAmitySensei,
    overlay: { src: imgAmitySensei1, height: "98.03%", top: "1.97%" },
  },
  {
    name: "Aaron",
    role: "Écrivain et podcasteur",
    uses: "Notes d'émission, plans de livres, tâches quotidiennes",
    base: imgAaron,
    overlay: { src: imgAaron1, height: "95.39%", top: "4.61%" },
  },
  {
    name: "Seoyoung",
    role: "Créateur",
    uses: "Idées créatives, plans, projets, scénarios",
    base: imgSeoyoung,
  },
  {
    name: "Gian",
    role: "Responsable de site",
    uses: "Rapports de travail, tableaux de projet, wiki",
    base: imgGian,
    overlay: { src: imgGian1, height: "92.76%", top: "7.24%" },
  },
];

function PersonaCard({ persona }: { persona: Persona }) {
  return (
    <li className="flex w-60 shrink-0 flex-col items-center text-center">
      <div className="relative h-75 w-60 overflow-hidden rounded-xl shadow-[0px_50px_40px_0px_rgba(0,0,0,0.01),0px_50px_40px_0px_rgba(0,0,0,0.02),0px_20px_40px_0px_rgba(0,0,0,0.05),0px_3px_10px_0px_rgba(0,0,0,0.08)]">
        <Image
          src={persona.base}
          alt={`${persona.name}, ${persona.role}`}
          fill
          sizes="240px"
          className="object-cover"
        />
        {persona.overlay && (
          // Calque décoratif : géométrie en pourcentages reprise de la maquette,
          // donc une balise `img` simple plutôt que next/image (incompatible
          // avec `fill` + hauteur explicite).
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 top-[5%] overflow-hidden rounded-xl"
          >
            <img
              src={persona.overlay.src}
              alt=""
              className="absolute left-0 w-full max-w-none"
              style={{
                height: persona.overlay.height,
                top: persona.overlay.top,
              }}
            />
          </span>
        )}
      </div>

      <p className="mt-[71px] font-medium text-body uppercase tracking-[-0.02em] text-ink">
        {persona.name}, {persona.role}
      </p>
      <p className="mt-4 max-w-[220px] font-serif text-lead italic text-ink">
        {persona.uses}
      </p>
    </li>
  );
}

export function UseCases() {
  return (
    <section className="pt-40 lg:pt-[210px]">
      <h2
        data-node-id="1:159"
        className="mx-auto max-w-content text-balance px-6 text-center font-serif text-[clamp(1.875rem,4.6vw,3.606rem)] leading-[1.04] tracking-[-0.021em] text-ink"
      >
        Comment les gens utilisent Craft
      </h2>

      {/* La bande dépasse la largeur du canvas dans la maquette : elle défile. */}
      <div
        data-node-id="1:163"
        className="mt-[90px] overflow-x-auto pb-4 scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        <ul className="flex w-max gap-15 px-6 lg:px-[52px]">
          {PERSONAS.map((persona) => (
            <PersonaCard key={persona.name} persona={persona} />
          ))}
        </ul>
      </div>
    </section>
  );
}
