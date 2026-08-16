import Image from "next/image";

import { imgSvg10 } from "@/lib/figma-assets";

/**
 * Chrome de fenêtre des maquettes d'app (Figma 1:252 → 1:274 et 1:310 → 1:318) :
 * trois pastilles, un onglet à icône et un onglet titré.
 */
export function MockWindowChrome({ title }: { title: string }) {
  return (
    <div className="absolute inset-x-0 top-0 h-[53px]">
      {[16, 34, 52].map((left) => (
        <span
          key={left}
          className="absolute top-5 h-3.5 w-3.5 rounded-full bg-black/5"
          style={{ left }}
        />
      ))}
      <span className="absolute left-[145.47px] top-[13px] flex h-7 w-[37px] items-center rounded-lg bg-black/4">
        <Image
          src={imgSvg10}
          alt=""
          width={19}
          height={18}
          className="ml-2 h-[18px] w-[19px]"
        />
      </span>
      <span className="absolute left-[184.47px] top-[13px] flex h-7 items-center rounded-lg bg-black/8 px-5">
        <span className="font-ui text-tiny tracking-[-0.02em] text-ink">
          {title}
        </span>
      </span>
    </div>
  );
}

/** Ligne de tâche cochable des maquettes : case 14×14 + libellé + étiquette. */
export function MockTask({
  label,
  tag,
  className,
}: {
  label: string;
  tag?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <span className="size-3.5 shrink-0 rounded-xs border-2 border-black/12" />
      <span className="font-ui text-small tracking-[-0.016em] text-ink/90">
        {label}
      </span>
      {tag && (
        <span className="rounded-xs bg-black/4 px-[5px] py-[2px] font-ui text-tiny tracking-[-0.02em] text-shark/60">
          {tag}
        </span>
      )}
    </div>
  );
}
