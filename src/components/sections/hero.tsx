import Image from "next/image";

import { GhostButton } from "@/components/ghost-button";
import {
  imgBackground,
  imgBackground1,
  imgBackground2,
  imgBackground3,
  imgCloud,
  imgContainer,
  imgContainer1,
  imgHeroScreenshotDesktopFull4Be7130CPng,
  imgPaperBlackDba476C7Png,
  imgPaperNotebook9Ae2B49AWebp,
  imgPaperTexture,
  imgPaperTextureA0B2B1CaWebp,
  imgPaperTextureA0B2B1CaWebp1,
  imgSvg,
} from "@/lib/figma-assets";

/**
 * Découpes de papier décoratives du bas du hero (Figma 1:47, 1:58, 1:68,
 * 1:78, 1:100). Chacune est une forme masquée par un SVG, pivotée, et clippée
 * par le conteneur. Les coordonnées sont celles du canvas 1880×1100 d'origine —
 * la mise à l'échelle est portée par la container query du parent.
 */
function PaperCutouts() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[600px] overflow-hidden rounded-b-xl">
      {/* 1:47 — feuille gris clair, rotation 10° */}
      <div className="absolute left-[-126.36px] top-[44.17px] flex h-[922.331px] w-[1222.736px] items-center justify-center">
        <div className="flex-none rotate-10">
          <div className="relative h-[740.66px] w-[1111px] overflow-hidden">
            <div
              className="absolute inset-0 bg-sand"
              style={{
                maskImage: `url("${imgBackground}")`,
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </div>

      {/* 1:58 — feuille bleu lavande texturée, rotation 15° */}
      <div className="absolute left-[52.79px] top-[167.32px] flex h-[797.351px] w-[874.426px] items-center justify-center">
        <div className="flex-none rotate-15">
          <div className="relative h-[628px] w-[737px] overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                maskImage: `url("${imgContainer}")`,
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-perano" />
              <img
                alt=""
                src={imgPaperTextureA0B2B1CaWebp}
                className="absolute inset-0 size-full max-w-none mix-blend-overlay"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 1:68 — petite feuille blanche retournée */}
      <div className="absolute left-[1250px] top-[217.5px] flex h-[202.5px] w-[405px] items-center justify-center">
        <div className="flex-none -scale-y-100">
          <div className="relative h-[202.5px] w-[405px] overflow-hidden">
            <div
              className="absolute inset-0 bg-white"
              style={{
                maskImage: `url("${imgBackground1}")`,
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
              }}
            />
            <div
              className="absolute inset-[79.75px_-40.5px_-120.25px_-40.5px]"
              style={{
                maskImage: `url("${imgBackground1}")`,
                maskPosition: "40.5px -79.75px",
                maskSize: "calc(100% - 81px) calc(100% - 40.5px)",
                maskRepeat: "no-repeat",
              }}
            >
              <img
                alt=""
                src={imgPaperBlackDba476C7Png}
                className="absolute inset-0 size-full max-w-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 1:78 — feuille grise inclinée, rotation 34° */}
      <div className="absolute left-[869.93px] top-[-70.72px] flex h-[938.114px] w-[932.147px] items-center justify-center">
        <div className="flex-none rotate-34 skew-x-6 scale-y-99">
          <div className="relative h-[546.32px] w-[815px] overflow-hidden">
            <div
              className="absolute inset-0 bg-white"
              style={{
                maskImage: `url("${imgBackground2}")`,
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
              }}
            />
            <div className="absolute inset-[11%_5%_5%_11%]">
              <div
                className="absolute inset-0"
                style={{
                  maskImage: `url("${imgContainer1}")`,
                  maskSize: "783.004px 788.016px",
                  maskRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 bg-iron" />
                <img
                  alt=""
                  src={imgPaperTextureA0B2B1CaWebp1}
                  className="absolute left-0 top-0 h-[458.91px] w-[684.6px] max-w-none mix-blend-overlay"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 1:100 — page de carnet, rotation 174° */}
      <div className="absolute left-[983.07px] top-[232.01px] flex h-[653.494px] w-[953.867px] items-center justify-center">
        <div className="flex-none rotate-174">
          <div className="relative h-[562.5px] w-[900px] overflow-hidden">
            <div
              className="absolute inset-0 bg-white"
              style={{
                maskImage: `url("${imgBackground3}")`,
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                maskImage: `url("${imgBackground3}")`,
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
              }}
            >
              <img
                alt=""
                src={imgPaperNotebook9Ae2B49AWebp}
                className="absolute inset-0 size-full max-w-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 1:40 — grand tracé SVG en bas de section */}
      <div className="absolute left-[210.11px] top-[51px] h-[269px] w-[1441px]">
        <img alt="" src={imgSvg} className="absolute inset-0 size-full max-w-none" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      data-node-id="1:22"
      className="@container relative mx-2 mt-2 overflow-hidden rounded-xl bg-linear-to-b from-cornflower to-[#d1eef9] shadow-[0px_50px_40px_0px_rgba(0,0,0,0.01),0px_50px_40px_0px_rgba(0,0,0,0.02),0px_20px_40px_0px_rgba(0,0,0,0.05),0px_3px_10px_0px_rgba(0,0,0,0.08)] sm:mx-5 sm:mt-5"
    >
      {/* Voile blanc dégradé (1:32) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/0 to-white opacity-30"
      />
      {/* Texture papier (1:35 / 1:37) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay"
      >
        <img
          alt=""
          src={imgPaperTexture}
          className="absolute left-0 top-0 h-[120.87%] w-full max-w-none"
        />
      </div>

      {/* Calque décoratif : canvas 1880×1100 mis à l'échelle par container query.
          Masqué sous `lg`, où il n'apporte rien et coûte cher à rendre. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <div
          className="absolute left-0 top-0 h-[1100px] w-[1880px] origin-top-left"
          style={{ transform: "scale(calc(100cqw / 1880))" }}
        >
          {/* Nuages (1:132, 1:133) */}
          <div className="absolute left-[-260px] top-[240px] h-[246.75px] w-[480px]">
            <img alt="" src={imgCloud} className="size-full max-w-none" />
          </div>
          <div className="absolute left-[1660px] top-[80px] h-[246.75px] w-[480px]">
            <img alt="" src={imgCloud} className="size-full max-w-none" />
          </div>
          <PaperCutouts />
        </div>
      </div>

      {/* Contenu */}
      <div className="relative flex flex-col items-center px-6 pt-32 text-center sm:pt-40 lg:pt-[246px]">
        <h1 className="max-w-[640px] text-balance font-serif text-[clamp(2.25rem,5.5vw,4.469rem)] leading-[1.035] tracking-[-0.031em] text-ink">
          Votre espace pour les notes, les tâches et les grandes idées
        </h1>

        <GhostButton href="/" className="mt-10 lg:mt-[33px]">
          Essayez Craft
        </GhostButton>

        {/* Capture produit (1:107) — déborde volontairement en bas de section */}
        <div className="relative mt-16 -mb-24 w-full max-w-[1044px] shadow-[0px_25px_25px_0px_rgba(0,0,0,0.15)] lg:mt-[100px]">
          <Image
            src={imgHeroScreenshotDesktopFull4Be7130CPng}
            alt="L'interface de Craft sur ordinateur"
            width={1044}
            height={525}
            className="block h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
