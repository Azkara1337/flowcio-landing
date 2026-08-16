import Image from "next/image";
import Link from "next/link";

const LOGO_PATHS = [
  { src: "/logo/craft-1.svg", inset: "3.31% 81.3% 3.31% 0.03%" },
  { src: "/logo/craft-2.svg", inset: "3.31% 61.69% 3.31% 21.51%" },
  { src: "/logo/craft-3.svg", inset: "3.31% 41.15% 3.31% 40.18%" },
  { src: "/logo/craft-4.svg", inset: "3.31% 21.07% 3.31% 62.12%" },
  { src: "/logo/craft-5.svg", inset: "3.31% 0.06% 3.31% 81.26%" },
];

const NAV_LINKS = [
  "Produit",
  "Imaginez",
  "Communauté",
  "Tarifs",
  "Apprendre",
  "Télécharger",
];

/**
 * Barre de navigation flottante (Figma 1:1220).
 *
 * La maquette la positionne en absolu à 920×52 centré ; ici elle est en flex
 * avec une largeur max, pour tenir sous 920px sans déborder. La nav complète
 * n'apparaît qu'à partir de `lg` — la maquette n'a pas de variante mobile.
 */
export function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-8">
      <nav
        data-node-id="1:1220"
        className="flex h-13 w-full max-w-[920px] items-center gap-4 rounded-2xl border border-white/40 bg-linear-to-b from-white/40 from-[10%] to-white/80 px-5 shadow-[0px_12px_12px_2px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] backdrop-blur-[2px]"
      >
        {/* Logo — 5 tracés distincts, géométrie conservée depuis la maquette */}
        <Link
          href="/"
          aria-label="Craft, retour à l'accueil"
          className="relative block h-5 w-25 shrink-0"
          data-node-id="1:1227"
        >
          {LOGO_PATHS.map((path) => (
            <span
              key={path.src}
              className="absolute block"
              style={{ inset: path.inset }}
            >
              <Image
                src={path.src}
                alt=""
                fill
                sizes="100px"
                className="block max-w-none object-fill"
                priority
              />
            </span>
          ))}
        </Link>

        <ul className="hidden flex-1 items-center gap-6 text-body tracking-[-0.02em] text-ink lg:flex">
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <Link href="/" className="transition-opacity hover:opacity-60">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-4 lg:ml-0">
          <Link
            href="/"
            className="hidden text-body tracking-[-0.02em] text-ink transition-opacity hover:opacity-60 sm:block"
          >
            Connexion
          </Link>
          <Link
            href="/"
            data-node-id="1:1243"
            className="flex h-9 items-center rounded-full bg-ink px-5 font-medium text-body text-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] transition-opacity hover:opacity-85"
          >
            Essayez Craft
          </Link>
        </div>
      </nav>
    </header>
  );
}
