import { GhostButton } from "@/components/ghost-button";
import { imgImage, imgPaperTexture } from "@/lib/figma-assets";

/** Petite carte d'aperçu de l'app dans la grille de droite (Figma 1:522). */
function PlanCard({
  title,
  accent,
  children,
}: {
  title: string;
  accent?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-ink/9 bg-white p-4 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)]">
      <p className="font-ui text-tiny font-semibold uppercase tracking-[0.04em] text-ink/50">
        {title}
      </p>
      {accent && (
        <p className="mt-2 font-serif text-[22px] leading-tight text-ink">
          {accent}
        </p>
      )}
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  );
}

function Row({ label, meta }: { label: string; meta?: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1 size-3 shrink-0 rounded-xs border-2 border-black/12" />
      <span className="font-ui text-tiny leading-snug text-ink/85">{label}</span>
      {meta && (
        <span className="ml-auto shrink-0 font-ui text-[10px] text-ink/45">
          {meta}
        </span>
      )}
    </div>
  );
}

export function Plan() {
  return (
    <section
      data-node-id="1:522"
      className="relative mx-auto mt-24 max-w-content overflow-hidden rounded-3xl bg-golden-glow shadow-[0px_50px_40px_0px_rgba(0,0,0,0.01),0px_50px_40px_0px_rgba(0,0,0,0.02),0px_20px_40px_0px_rgba(0,0,0,0.05),0px_3px_10px_0px_rgba(0,0,0,0.08)] lg:mt-[188px]"
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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-50 mix-blend-screen"
      >
        <img
          alt=""
          src={imgImage}
          className="absolute left-0 top-0 h-[115.16%] w-[110.37%] max-w-none"
        />
      </div>

      <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[340px_1fr] lg:items-center lg:gap-16">
        <div>
          <p className="font-medium text-body uppercase tracking-[0.01em] text-ink/75">
            Plan
          </p>
          <h2 className="mt-4 text-balance font-serif text-[clamp(1.75rem,2.6vw,2.125rem)] leading-[1.292] tracking-[-0.032em] text-ink">
            Une planification qui ne ressemble pas à du travail
          </h2>
          <p className="mt-8 text-body leading-[1.4] tracking-[-0.02em] text-ink/75">
            Gardez vos idées et vos tâches ensemble, là où elles doivent être.
            Craft intègre des tâches directement dans vos documents, ce qui
            permet à vos idées les plus pertinentes de rester connectées à ce qui
            doit être fait.
          </p>
          <GhostButton href="/" className="mt-10">
            En savoir plus
          </GhostButton>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <PlanCard title="Calendrier" accent="16 Aug">
            <p className="font-ui text-tiny text-ink/60">
              Aujourd&apos;hui · Dimanche
            </p>
            <Row label="Faire les valises" />
            <Row label="Imprimer les billets" />
          </PlanCard>

          <PlanCard title="Tâches" accent="Aujourd'hui">
            <Row
              label="Définir un e-mail de réponse automatique pour les vacances"
              meta="Boîte de réception"
            />
            <p className="font-ui text-tiny text-ink/45">Ajouter une tâche</p>
          </PlanCard>

          <PlanCard title="Journal" accent="Aujourd'hui">
            <p className="font-ui text-tiny leading-snug text-ink/85">
              Cette note n&apos;est pas urgente. Il s&apos;agit d&apos;une
              observation. Son rôle est de conserver des fragments de la
            </p>
          </PlanCard>

          <PlanCard title="Rappels">
            <Row label="derniers détails du voyage" meta="12:30" />
            <Row label="sur Craft" meta="17:10" />
          </PlanCard>
        </div>
      </div>
    </section>
  );
}
