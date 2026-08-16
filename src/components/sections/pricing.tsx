import Link from "next/link";

/** Les deux formules (Figma 1:1056). La formule Plus est sur fond encre. */
const PLANS = [
  {
    name: "Gratuit",
    detail: "Accès complet, idéal si vous l'utilisez occasionnellement chaque semaine.",
    price: "$0",
    cta: "Commencer",
    dark: false,
  },
  {
    name: "Plus",
    detail: "Conçu pour s'intégrer facilement à votre quotidien.",
    price: "$8.0",
    cta: "Passer à Plus",
    dark: true,
  },
];

export function Pricing() {
  return (
    <section
      data-node-id="1:1056"
      className="mx-auto mt-24 max-w-content px-6 lg:mt-[188px]"
    >
      <p className="text-center font-medium text-body uppercase tracking-[0.01em] text-ink/75">
        Tarifs
      </p>
      <h2 className="mx-auto mt-6 max-w-[620px] text-balance text-center font-serif text-[clamp(1.875rem,3.4vw,2.7rem)] leading-[1.15] tracking-[-0.03em] text-ink">
        Votre rythme, votre plan
      </h2>
      <p className="mx-auto mt-6 max-w-[420px] text-center text-body leading-[1.4] tracking-[-0.02em] text-ink/75">
        Utilisez-le ponctuellement, ou intégrez-le à votre routine quotidienne.
      </p>

      <ul className="mx-auto mt-14 grid max-w-[880px] gap-6 md:grid-cols-2">
        {PLANS.map((plan) => (
          <li
            key={plan.name}
            className={`flex flex-col rounded-xl border p-8 ${
              plan.dark
                ? "border-transparent bg-ink text-white"
                : "border-ink/12 bg-white text-ink"
            }`}
          >
            <h3 className="font-serif text-[28px] leading-tight tracking-[-0.02em]">
              {plan.name}
            </h3>
            <p
              className={`mt-3 text-small leading-[1.5] ${
                plan.dark ? "text-white/75" : "text-ink/75"
              }`}
            >
              {plan.detail}
            </p>
            <p className="mt-10 font-serif text-[44px] leading-none tracking-[-0.03em]">
              {plan.price}
              <span
                className={`ml-2 align-middle text-small ${
                  plan.dark ? "text-white/60" : "text-ink/60"
                }`}
              >
                /mois
              </span>
            </p>
            <Link
              href="/"
              className={`mt-8 flex h-11 items-center justify-center rounded-full font-medium text-body transition-opacity hover:opacity-85 ${
                plan.dark ? "bg-white text-ink" : "bg-ink text-white"
              }`}
            >
              {plan.cta}
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center text-small text-ink/60">
        <Link href="/" className="underline underline-offset-4">
          En savoir plus sur les réductions pour les groupes
        </Link>
      </p>
    </section>
  );
}
