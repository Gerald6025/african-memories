import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdventureHero from "../components/AdventureHero";
import AdventureCards from "../components/AdventureCards";
import { adventures } from "../data/adventures";

export const metadata = {
  title: "Adventures & Things to Do - African Memories",
  description: "Discover unforgettable adventures across Africa's untamed landscapes. From wildlife safaris to adrenaline-pumping activities.",
};

export default function AdventuresPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AdventureHero />
      <AdventureCards adventures={adventures} />
      <Footer />
    </div>
  );
}
