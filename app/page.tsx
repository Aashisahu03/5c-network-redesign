"use client";

import { useEffect } from "react";
import AIEngine from "@/components/AIEngine";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import StatsRow from "@/components/StatsRow";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import UserPaths from "@/components/UserPaths";

export default function Page() {
  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    fadeEls.forEach((el) => observer.observe(el));

    const steps = document.querySelectorAll(".step-item");
    const onStepClick = (event: Event) => {
      steps.forEach((step) => step.classList.remove("active", "border-blue5c/40"));
      const current = event.currentTarget as Element;
      current.classList.add("active", "border-blue5c/40");
    };
    steps.forEach((step) => step.addEventListener("click", onStepClick));

    return () => {
      observer.disconnect();
      steps.forEach((step) => step.removeEventListener("click", onStepClick));
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <UserPaths />
        <HowItWorks />
        <AIEngine />
        <StatsRow />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
