import { HomeHero } from "@/features/cms/home/hero";
import { HomeMarquee } from "@/features/cms/home/marquee";
import { HomeNews } from "@/features/cms/home/news";
import { HomeNextEvent } from "@/features/cms/home/next-event";
import { HomePartners } from "@/features/cms/home/partners";
import { HomeScrollProgress } from "@/features/cms/home/scroll-progress";
import { HomeShortcuts } from "@/features/cms/home/shortcuts";
import "@/features/cms/home/home.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <HomeScrollProgress />
      <HomeHero />
      <HomeMarquee />
      <HomeNextEvent />
      <HomeNews />
      <HomeShortcuts />
      <HomePartners />
    </div>
  );
}
