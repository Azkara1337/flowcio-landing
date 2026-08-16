import Image from "next/image";

/**
 * Témoignage (Figma 1:341/1:347/1:350 et ses trois répétitions) : pastille
 * d'avatar, prénom, filet horizontal, et citation en Georgia italique.
 * `reverse` place le bloc identité à droite, comme pour Amity et Leo.
 */
export function Testimonial({
  name,
  avatar,
  initial,
  avatarBackground,
  quote,
  reverse = false,
}: {
  name: string;
  /** Absent pour Deanna, remplacée par `initial` sur pastille noire. */
  avatar?: string;
  initial?: string;
  avatarBackground: string;
  quote: string;
  reverse?: boolean;
}) {
  return (
    <figure
      className={`mx-auto flex max-w-content flex-col gap-8 px-6 lg:flex-row lg:items-start lg:gap-0 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <figcaption
        className={`flex shrink-0 items-center gap-4 lg:w-[320px] ${
          reverse ? "lg:justify-start" : ""
        }`}
      >
        <span
          className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-ink/9 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]"
          style={{ backgroundColor: avatarBackground }}
        >
          {avatar && (
            <Image
              src={avatar}
              alt=""
              width={54}
              height={54}
              className="size-13.5 object-cover"
            />
          )}
          {!avatar && initial && (
            <span className="font-serif text-[22px] text-white">{initial}</span>
          )}
        </span>
        <span className="text-[20px] leading-7 tracking-[-0.03em] text-ink/75">
          {name}
        </span>
        <span aria-hidden className="hidden h-px flex-1 bg-ink/20 lg:block" />
      </figcaption>

      <blockquote className="max-w-[624px] font-serif text-[clamp(1.375rem,2.3vw,1.881rem)] italic leading-[1.595] tracking-[-0.043em] text-ink">
        «&nbsp;{quote}&nbsp;»
      </blockquote>
    </figure>
  );
}
