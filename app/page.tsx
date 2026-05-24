import AIEngine from "@/components/AIEngine";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import PageInteractions from "@/components/PageInteractions";
import StatsRow from "@/components/StatsRow";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import UserPaths from "@/components/UserPaths";

export default function Home() {
  return (
    <>
      <PageInteractions />
      <Navbar />
      <Hero />
      <TrustBar />
      <UserPaths />
      <HowItWorks />
      <AIEngine />
      <StatsRow />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}
