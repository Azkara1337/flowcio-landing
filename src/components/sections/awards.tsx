import Image from "next/image";

import {
  imgPrixDeDesignAllemand,
  imgPrixDeDesignApple,
  imgPrixDeLAppStore,
  imgWebby,
} from "@/lib/figma-assets";

/** Les 4 distinctions (Figma 1:500), espacées de 248px dans la maquette. */
const AWARDS = [
  {
    icon: imgPrixDeLAppStore,
    title: "Prix de l'App Store",
    detail: "Application Mac de l'année",
  },
  {
    icon: imgPrixDeDesignApple,
    title: "Prix de design Apple",
    detail: "Finaliste",
  },
  {
    icon: imgWebby,
    title: "Webby",
    detail: "Récompensé à trois reprises dans différentes catégories",
  },
  {
    icon: imgPrixDeDesignAllemand,
    title: "Prix de design allemand",
    detail: "Excellence en communication — Design interactif UX",
  },
];

export function Awards() {
  return (
    <section
      data-node-id="1:500"
      className="mx-auto mt-24 max-w-content px-6 lg:mt-[188px]"
    >
      <ul className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
        {AWARDS.map((award) => (
          <li key={award.title} className="flex flex-col items-start gap-3">
            <Image
              src={award.icon}
              alt=""
              width={48}
              height={48}
              className="size-12"
            />
            <p className="font-medium text-body tracking-[-0.02em] text-ink">
              {award.title}
            </p>
            <p className="max-w-[180px] text-small leading-[1.5] text-ink/75">
              {award.detail}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
