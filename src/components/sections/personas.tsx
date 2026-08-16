import Image from "next/image";

import { imgSvg1, imgSvg2, imgSvg3, imgSvg4, imgSvg5 } from "@/lib/figma-assets";

/** Les 5 usages illustrés (Figma 1:141 → 1:158), répartis à intervalle
 *  régulier de 225,66px de part et d'autre du centre dans la maquette. */
const USES = [
  { icon: imgSvg1, label: "Docs" },
  { icon: imgSvg2, label: "Tâches" },
  { icon: imgSvg3, label: "Calendrier" },
  { icon: imgSvg4, label: "Tableaux blancs" },
  { icon: imgSvg5, label: "Notes quotidiennes" },
];

export function Personas() {
  return (
    <section
      data-node-id="1:134"
      className="mx-auto flex max-w-content flex-col items-center px-6 pt-40 text-center lg:pt-[140px]"
    >
      <h2
        data-node-id="1:135"
        className="max-w-[730px] text-balance font-serif text-[clamp(1.875rem,3.8vw,2.981rem)] leading-[1.279] tracking-[-0.031em] text-ink"
      >
        Craft ne se limite pas à un seul usage, il s&apos;adapte à{" "}
        <em className="italic">vos</em> besoins.
      </h2>

      <ul className="mt-16 grid w-full grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:mt-[100px] lg:flex lg:justify-between">
        {USES.map((use) => (
          <li key={use.label} className="flex flex-col items-center gap-3">
            <Image
              src={use.icon}
              alt=""
              width={48}
              height={48}
              className="size-12"
            />
            <span className="font-medium text-body tracking-[-0.02em] text-ink">
              {use.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
