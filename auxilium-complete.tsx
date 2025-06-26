"use client"

import Header from "./components/header"
import HeroSection from "./components/hero-section"
import StatsSection from "./components/stats-section"
import AboutSection from "./components/about-section"
import ManagementSection from "./components/management-section"
import ServicesSection from "./components/services-section"
import ContactSection from "./components/contact-section"
import Footer from "./components/footer"

export default function AuxiliumComplete() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ManagementSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
