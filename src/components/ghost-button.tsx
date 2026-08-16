import Link from "next/link";

import { imgGradient } from "@/lib/figma-assets";

/**
 * Bouton pilule translucide de la maquette (Figma 1:116, 1:241, …) : dégradé
 * blanc à 75 % d'opacité, surligné par un second dégradé masqué en SVG.
 */
export function GhostButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`relative inline-block overflow-hidden rounded-full px-8 py-3 shadow-[0px_12px_12px_2px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] ${className ?? ""}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 opacity-75"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.59) 25%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.84) 75%)",
        }}
      />
      <span
        aria-hidden
        className="absolute inset-0 rounded-xl"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.64) 40%, rgba(255,255,255,0) 75%, rgba(255,255,255,0) 95%, rgba(255,255,255,0.64) 100%)",
          maskImage: `url("${imgGradient}")`,
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
        }}
      />
      <span className="relative font-medium text-body text-ink">{children}</span>
    </Link>
  );
}
