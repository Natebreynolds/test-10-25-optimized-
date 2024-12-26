import HeroSection from "@/components/hero/HeroSection";
import ServicesIntro from "@/components/sections/ServicesIntro";
import SolutionsSection from "@/components/sections/SolutionsSection";
import FrameworksSection from "@/components/sections/FrameworksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ServicesIntro />
      <SolutionsSection />
      <FrameworksSection />
      <TestimonialsSection />
      <BlogSection />
    </main>
  );
}