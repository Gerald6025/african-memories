"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
  );
}