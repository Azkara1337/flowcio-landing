import Image from "next/image";
import Link from "next/link";

import { imgPaperTexture, imgSvg19 } from "@/lib/figma-assets";

export function FinalCta() {
  return (
    <section
      data-node-id="1:1104"
      className="relative mx-auto mt-24 max-w-content overflow-hidden rounded-3xl bg-vista px-8 py-14 shadow-[0px_20px_40px_0px_rgba(0,0,0,0.05),0px_3px_10px_0px_rgba(0,0,0,0.08)] sm:px-12 lg:mt-[188px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay"
      >
        <img
          alt=""
          src={imgPaperTexture}
          className="size-full max-w-none object-cover"
        />
      </div>

      <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <h2 className="font-serif text-[clamp(1.875rem,3.4vw,2.7rem)] leading-[1.15] tracking-[-0.03em] text-ink">
            Commençons
          </h2>
          <p className="mt-4 max-w-[360px] text-body leading-[1.4] tracking-[-0.02em] text-ink/75">
            Commencez gratuitement. Aucune carte de crédit n&apos;est
            nécessaire.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="flex h-12 items-center gap-3 rounded-full bg-ink px-6 text-white transition-opacity hover:opacity-85"
          >
            <Image src={imgSvg19} alt="" width={20} height={20} className="size-5" />
            <span className="leading-tight">
              <span className="block text-[10px] opacity-75">
                Télécharger sur l&apos;
              </span>
              <span className="block font-medium text-body">App Store</span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex h-12 items-center rounded-full border border-ink/20 px-6 font-medium text-body text-ink transition-colors hover:bg-white/40"
          >
            Continuer sur le web
          </Link>
        </div>
      </div>
    </section>
  );
}
