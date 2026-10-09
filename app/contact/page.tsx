import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";

export default async function Contact({ searchParams }: { searchParams: Promise<{ experience?: string; destination?: string }> }) {
  const { experience, destination } = await searchParams;
  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactForm initialMessage={experience ? `Hello African Memories, I’d like to enquire about ${experience}. Please help me with dates, availability and a quote.` : ""} initialDestination={destination || ""} />
      <Footer />
    </div>
  );
}
