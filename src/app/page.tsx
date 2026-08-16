import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Testimonial } from "@/components/testimonial";
import { Awards } from "@/components/sections/awards";
import { Community } from "@/components/sections/community";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Imagine } from "@/components/sections/imagine";
import { Organize } from "@/components/sections/organize";
import { Personalization } from "@/components/sections/personalization";
import { Personas } from "@/components/sections/personas";
import { Plan } from "@/components/sections/plan";
import { Pricing } from "@/components/sections/pricing";
import { UseCases } from "@/components/sections/use-cases";
import { Write } from "@/components/sections/write";
import {
  imgAmitySenseiAvatar,
  imgLeoAvatar,
  imgTomAvatar,
} from "@/lib/figma-assets";

/**
 * Ordre des sections repris des positions verticales du frame `1:17`
 * (« 1920w light ») de la maquette Figma.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Personas />
        <UseCases />
        <Write />

        <div className="mt-24 lg:mt-[244px]">
          <Testimonial
            name="Tom"
            avatar={imgTomAvatar}
            avatarBackground="#9bd8a9"
            quote="Publier directement à partir de Craft me semble naturel — c'est là que j'écris, il est donc logique de partager à partir de là aussi."
          />
        </div>

        <Imagine />
        <Awards />

        <div className="mt-24 lg:mt-[188px]">
          <Testimonial
            name="Amity Sensei"
            avatar={imgAmitySenseiAvatar}
            avatarBackground="#fde99b"
            reverse
            quote="Je peux rendre mes notes non seulement fonctionnelles mais aussi visuellement agréables — ce qui me motive vraiment à rester organisée."
          />
        </div>

        <Plan />
        <Organize />

        <div className="mt-24 lg:mt-[188px]">
          <Testimonial
            name="Deanna"
            initial="D"
            avatarBackground="#030302"
            quote="Craft est le seul outil dont vous avez besoin pour tout — une organisation sans effort, une navigation fluide et un espace de travail qui s'adapte à vos besoins."
          />
        </div>

        <Personalization />

        <div className="mt-24 lg:mt-[188px]">
          <Testimonial
            name="Leo"
            avatar={imgLeoAvatar}
            avatarBackground="#fde99b"
            reverse
            quote="Craft est bien plus fonctionnel qu'Apple ou Google Notes tout en étant bien plus facile à utiliser que Notion."
          />
        </div>

        <Community />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
