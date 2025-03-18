import CollectionsSection from "@/ui/CollectionsSection";
import ContactSection from "@/ui/ContactSection";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import HeroSection from "@/ui/HeroSection";
import ReviewsSection from "@/ui/ReviewsSection";
import TechnologiesSection from "@/ui/TechnologiesSection";

export default function Page() {
  return (
    <>
      <main className="grid grid-cols-12 max-w-5xl mx-auto gap-4 min-h-dvh px-4 lg:px-0">
        <Header />
        <HeroSection />
        <TechnologiesSection />
        <CollectionsSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
