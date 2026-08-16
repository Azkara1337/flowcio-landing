import Image from "next/image";

import { GhostButton } from "@/components/ghost-button";
import {
  imgAppleShortcuts,
  imgBolt,
  imgChatGpt,
  imgClaude,
  imgClaudeCode,
  imgCodexCli,
  imgCursor,
  imgImage,
  imgLovable,
  imgOtherMcpClients,
  imgOtherTools,
  imgPaperTexture,
  imgRaycast,
  imgReplit,
  imgV0,
  imgVisualStudioCode,
  imgWindsurf,
} from "@/lib/figma-assets";

const MCP_CLIENTS = [
  { icon: imgClaude, label: "Claude" },
  { icon: imgChatGpt, label: "ChatGPT" },
  { icon: imgClaudeCode, label: "Claude Code" },
  { icon: imgWindsurf, label: "Windsurf" },
  { icon: imgCursor, label: "Cursor" },
  { icon: imgVisualStudioCode, label: "Visual Studio Code" },
  { icon: imgRaycast, label: "Raycast" },
  { icon: imgOtherMcpClients, label: "Other MCP Clients" },
];

const API_TOOLS = [
  { icon: imgLovable, label: "Lovable" },
  { icon: imgReplit, label: "Replit" },
  { icon: imgAppleShortcuts, label: "Apple Shortcuts" },
  { icon: imgBolt, label: "Bolt" },
  { icon: imgV0, label: "v0" },
  { icon: imgClaudeCode, label: "Claude Code" },
  { icon: imgCodexCli, label: "Codex CLI" },
  { icon: imgOtherTools, label: "Other Tools" },
];

const TEMPLATES = [
  "Blog Publisher",
  "Reading Tracker",
  "Plant Dashboard",
  "Dream Journal",
];

function IconGrid({
  title,
  items,
}: {
  title: string;
  items: { icon: string; label: string }[];
}) {
  return (
    <div>
      <p className="font-ui text-tiny font-semibold tracking-[-0.02em] text-ink/60">
        {title}
      </p>
      <ul className="mt-3 grid grid-cols-4 gap-3">
        {items.map((item) => (
          <li key={item.label} className="flex flex-col items-center gap-1.5">
            <Image
              src={item.icon}
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-lg"
            />
            <span className="text-center font-ui text-[10px] leading-tight text-ink/70">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Imagine() {
  return (
    <section
      data-node-id="1:359"
      className="relative mx-auto mt-24 max-w-content overflow-hidden rounded-3xl bg-vista shadow-[0px_50px_40px_0px_rgba(0,0,0,0.01),0px_50px_40px_0px_rgba(0,0,0,0.02),0px_20px_40px_0px_rgba(0,0,0,0.05),0px_3px_10px_0px_rgba(0,0,0,0.08)] lg:mt-[188px]"
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

      <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[380px_1fr] lg:items-center lg:gap-16">
        <div>
          <p className="font-medium text-body uppercase tracking-[0.01em] text-ink/75">
            Imaginez
          </p>
          <h2 className="mt-4 text-balance font-serif text-[clamp(1.75rem,2.6vw,2.125rem)] leading-[1.292] tracking-[-0.032em] text-ink">
            Imaginez les possibilités lorsque tout est connecté à Craft
          </h2>
          <p className="mt-8 max-w-[320px] text-body leading-[1.4] tracking-[-0.02em] text-ink/75">
            Faites de Craft le vôtre — connectez les outils que vous aimez, créez
            ce dont vous avez besoin.
          </p>
          <GhostButton href="/" className="mt-10">
            En savoir plus
          </GhostButton>
        </div>

        {/* Carte des intégrations (1:375) */}
        <div className="rounded-xl bg-white/90 p-6 shadow-[0px_20px_40px_0px_rgba(0,0,0,0.05),0px_3px_10px_0px_rgba(0,0,0,0.08)] sm:p-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <IconGrid title="MCP connections" items={MCP_CLIENTS} />
            <IconGrid title="API integrations" items={API_TOOLS} />
          </div>

          <div className="mt-8 border-t border-ink/9 pt-6">
            <p className="font-ui text-tiny font-semibold tracking-[-0.02em] text-ink/60">
              Start Building
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {TEMPLATES.map((template) => (
                <li
                  key={template}
                  className="rounded-lg bg-ink/4 px-3 py-1.5 font-ui text-tiny text-ink/80"
                >
                  {template}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-ink/9 pt-6">
            <div>
              <p className="font-ui text-tiny font-semibold text-ink/60">
                Communauté
              </p>
              <p className="font-ui text-small text-ink">200+ builders</p>
            </div>
            <p className="font-ui text-tiny text-ink/70">
              Explore community templates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
