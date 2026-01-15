import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { AppShowcase } from "@/components/AppShowcase";
import { DemoVideoSection } from "@/components/DemoVideoSection";
import { Business } from "@/components/Business";
import { Testimonials } from "@/components/Testimonials";
import { Security } from "@/components/Security";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <HowItWorks />
      <Features />
      <AppShowcase />
      <DemoVideoSection />
      <Business />
      <Testimonials />
      <Security />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
