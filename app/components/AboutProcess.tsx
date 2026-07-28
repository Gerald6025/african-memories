"use client";

export default function AboutProcess() {
  const steps = [
    {
      title: "Step 1: Initial Consultation",
      description: "Connect with our safari experts to discuss your travel goals, preferences, and budget. We'll guide you through the best destinations and tailor an itinerary just for you.",
    },
    {
      title: "Step 2: Get Ready for Your Adventure",
      description: "We handle all the details from accommodations to permits so you can focus on preparing for an unforgettable trip. Receive expert tips on packing, safety, and cultural insights.",
    },
    {
      title: "Step 3: Experience the Journey of a Lifetime",
      description: "Embark on your African safari with confidence! Enjoy breathtaking landscapes, incredible wildlife, and immersive cultural experiences while we ensure a seamless adventure.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600 mb-4">
            Our Processes
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#3b2b18]">
            Traveling with Safario
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-[#f7ede0] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-[#3b2b18] mb-3">
                {step.title}
              </h3>
              <p className="text-[#7a6855] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}