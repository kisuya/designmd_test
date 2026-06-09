import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { CategoryRail } from "@/components/CategoryRail";
import { ArtworkGrid } from "@/components/ArtworkGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <CategoryRail />
        <ArtworkGrid />
        <HowItWorks />
      </main>
      <SiteFooter />
    </>
  );
}
