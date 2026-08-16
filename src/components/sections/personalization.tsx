import Image from "next/image";

import { GhostButton } from "@/components/ghost-button";
import {
  imgGroup1Of18CrimsonCoil,
  imgGroup2Of18Writer,
  imgGroup3Of18ShapeShift,
  imgGroup4Of18HopefullySweet,
  imgGroup5Of18LittleWorld,
  imgGroup6Of18BlurryBloom,
  imgGroup7Of18MarketWalks,
  imgGroup8Of18StartOfTheDay,
  imgGroup9Of18InfinityVoid,
} from "@/lib/figma-assets";

/** Les 9 couvertures de carnet visibles (Figma 1:897) — la maquette en
 *  annonce 18, dont la moitié hors cadre. */
const COVERS = [
  { src: imgGroup1Of18CrimsonCoil, name: "Crimson Coil" },
  { src: imgGroup2Of18Writer, name: "Writer" },
  { src: imgGroup3Of18ShapeShift, name: "Shape Shift" },
  { src: imgGroup4Of18HopefullySweet, name: "Hopefully Sweet" },
  { src: imgGroup5Of18LittleWorld, name: "Little World" },
  { src: imgGroup6Of18BlurryBloom, name: "Blurry Bloom" },
  { src: imgGroup7Of18MarketWalks, name: "Market Walks" },
  { src: imgGroup8Of18StartOfTheDay, name: "Start of the Day" },
  { src: imgGroup9Of18InfinityVoid, name: "Infinity Void" },
];

export function Personalization() {
  return (
    <section data-node-id="1:897" className="mt-24 lg:mt-[188px]">
      <div className="mx-auto max-w-content px-6 text-center">
        <p className="font-medium text-body uppercase tracking-[0.01em] text-ink/75">
          Personnalisation
        </p>
        <h2 className="mx-auto mt-6 max-w-[620px] text-balance font-serif text-[clamp(1.875rem,3.4vw,2.7rem)] leading-[1.15] tracking-[-0.03em] text-ink">
          Rendez-le incontestablement vôtre
        </h2>
      </div>

      {/* Bande de couvertures : plus large que le viewport, elle défile. */}
      <div className="mt-14 overflow-x-auto pb-4 scrollbar-none [&::-webkit-scrollbar]:hidden">
        <ul className="flex w-max items-end gap-5 px-6">
          {COVERS.map((cover, index) => (
            <li
              key={cover.name}
              className="w-40 shrink-0 overflow-hidden rounded-lg shadow-[0px_20px_40px_0px_rgba(0,0,0,0.08),0px_3px_10px_0px_rgba(0,0,0,0.08)]"
              style={{
                // Léger décalage vertical alterné, comme dans la maquette.
                transform: `translateY(${index % 2 === 0 ? 0 : 16}px)`,
              }}
            >
              <Image
                src={cover.src}
                alt={cover.name}
                width={160}
                height={220}
                className="block h-auto w-full"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 flex justify-center">
        <GhostButton href="/">En savoir plus</GhostButton>
      </div>
    </section>
  );
}
