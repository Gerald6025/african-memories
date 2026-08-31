"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdventureHero from "../components/AdventureHero";
import AdventureCards from "../components/AdventureCards";
import { adventures } from "../data/adventures";
import { useState, useMemo } from "react";

const CATEGORY_MAP: Record<string, string[]> = {
  "Scenic": ["Scenic Views"],
  "Adrenaline": ["Adrenaline"],
  "Cultural": ["Culture", "Dining"],
  "Special Tour": ["Adventure", "Heritage", "Culture"],
  "Wildlife": ["Wildlife"],
  "Safari": ["Wildlife"],
};

export default function AdventuresPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredAdventures = useMemo(() => {
    if (activeFilter === "All") return adventures;
    const categories = CATEGORY_MAP[activeFilter] || [];
    return adventures.filter((a) => categories.includes(a.category));
  }, [activeFilter]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <AdventureHero />
      <div className="mt-16 mb-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <label htmlFor="activity-filter" className="text-sm font-medium text-[#5D4A37]">
              Filter:
            </label>
            <div className="relative w-full max-w-sm">
              <select
                id="activity-filter"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="appearance-none bg-transparent border-0 border-b border-gray-300 text-sm text-[#5D4A37] py-1 pr-8 pl-1 focus:outline-none focus:border-[#ea580c] cursor-pointer transition-colors w-full"
              >
                {["All", "Scenic", "Adrenaline", "Cultural", "Special Tour", "Wildlife", "Safari"].map((filter) => (
                  <option key={filter} value={filter}>
                    {filter}
                  </option>
                ))}
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdventureCards adventures={filteredAdventures} />
      <Footer />
    </div>
  );
}
