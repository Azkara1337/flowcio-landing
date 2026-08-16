import Image from "next/image";
import Link from "next/link";

import { imgGroup, imgGroup1, imgSvg15, imgSvg16 } from "@/lib/figma-assets";

/** Les 4 canaux communautaires (Figma 1:927), chacun avec sa couleur de marque. */
const CHANNELS = [
  {
    icon: imgGroup,
    handle: "r/craftdocs",
    detail: "Discuter, partager et explorer",
    className: "bg-vermilion text-white",
  },
  {
    icon: imgGroup1,
    handle: "Slack",
    detail: "Découvrez les nouvelles fonctionnalités de l'application",
    className: "bg-gallery text-ink",
  },
  {
    icon: imgSvg15,
    handle: "@craftdocsapp",
    detail: "Restez au courant de nos dernières publications",
    className: "bg-ink text-white",
  },
  {
    icon: imgSvg16,
    handle: "@craftdocs",
    detail: "Conseils, tutoriels et approfondissement des fonctionnalités",
    className: "bg-[#f0f0f0] text-ink",
  },
];

export function Community() {
  return (
    <section
      data-node-id="1:927"
      className="mx-auto mt-24 max-w-content px-6 lg:mt-[188px]"
    >
      <h2 className="mx-auto max-w-[620px] text-balance text-center font-serif text-[clamp(1.875rem,3.4vw,2.7rem)] leading-[1.15] tracking-[-0.03em] text-ink">
        Restez dans la boucle
      </h2>
      <p className="mx-auto mt-6 max-w-[560px] text-center text-body leading-[1.4] tracking-[-0.02em] text-ink/75">
        Rejoignez la communauté et découvrez comment d&apos;autres personnes
        tirent le meilleur parti de Craft.
      </p>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CHANNELS.map((channel) => (
          <li key={channel.handle}>
            <Link
              href="/"
              className={`flex h-full flex-col gap-4 rounded-xl p-6 transition-transform hover:-translate-y-1 ${channel.className}`}
            >
              <Image
                src={channel.icon}
                alt=""
                width={40}
                height={40}
                className="size-10"
              />
              <span className="font-medium text-body tracking-[-0.02em]">
                {channel.handle}
              </span>
              <span className="text-small leading-[1.5] opacity-75">
                {channel.detail}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
