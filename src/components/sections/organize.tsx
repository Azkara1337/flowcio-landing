/** Trois approches d'organisation (Figma 1:657), chacune avec son aperçu. */
const APPROACHES = [
  {
    title: "Espaces",
    detail: "Basculer entre le mode travail et le mode personnel",
    background: "bg-pattens",
    rows: [
      { group: "Espace personnel" },
      { group: "Étoilé", items: ["Routine d'entraînement", "Horaire de Lily"] },
      { group: "Dossiers", items: ["Notes", "Idée"] },
      { group: "Hard Work Space" },
      { group: "Étoilé", items: ["Identité de la marque"] },
      { group: "Tags" },
    ],
  },
  {
    title: "Dossiers et tags",
    detail: "Structure classique pour des hiérarchies claires",
    background: "bg-papaya",
    rows: [
      { group: "Dossiers", items: ["Notes", "Idée"] },
      { group: "", items: ["🧘‍♂️ Réflexion", "🌍 Voyage"] },
      { group: "Tags", items: ["# idée", "# design"] },
    ],
  },
  {
    title: "Collections",
    detail: "Pour un suivi structuré et des données riches",
    background: "bg-athens",
    rows: [{ group: "", items: ["Aa Titre", "Auteur"] }],
  },
];

export function Organize() {
  return (
    <section
      data-node-id="1:657"
      className="mx-auto mt-24 max-w-content px-6 lg:mt-[188px]"
    >
      <p className="text-center font-medium text-body uppercase tracking-[0.01em] text-ink/75">
        Organiser
      </p>
      <h2 className="mx-auto mt-6 max-w-[620px] text-balance text-center font-serif text-[clamp(1.875rem,3.4vw,2.7rem)] leading-[1.15] tracking-[-0.03em] text-ink">
        Une structure qui <em className="italic">s&apos;adapte</em> à votre
        pensée
      </h2>
      <p className="mx-auto mt-6 max-w-[720px] text-center text-body leading-[1.4] tracking-[-0.02em] text-ink/75">
        Choisissez l&apos;approche qui vous convient le mieux : organisez avec
        des espaces, des dossiers et des étiquettes, ou créez des bases de
        données riches avec des collections
      </p>

      <ul className="mt-16 grid gap-6 lg:grid-cols-3">
        {APPROACHES.map((approach) => (
          <li
            key={approach.title}
            className={`overflow-hidden rounded-xl p-6 ${approach.background}`}
          >
            <h3 className="font-serif text-[26px] leading-tight tracking-[-0.02em] text-ink">
              {approach.title}
            </h3>
            <p className="mt-2 text-small leading-[1.5] text-ink/70">
              {approach.detail}
            </p>

            <div className="mt-6 rounded-lg border border-ink/9 bg-white p-4 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.06)]">
              {approach.rows.map((row, index) => (
                <div key={`${approach.title}-${index}`} className="mb-3 last:mb-0">
                  {row.group && (
                    <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.05em] text-ink/45">
                      {row.group}
                    </p>
                  )}
                  {row.items?.map((item) => (
                    <p
                      key={item}
                      className="mt-1.5 font-ui text-tiny text-ink/85"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
