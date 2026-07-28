"use client";

export default function AboutValues() {
  const values = [
    {
      title: "Tailored Tours",
      description: "Each journey is uniquely crafted, ensuring personalized experiences that match your travel dreams.",
    },
    {
      title: "Value for Money",
      description: "Safari adventures at competitive prices, offering the best wildlife experiences without compromise.",
    },
    {
      title: "Experienced Team",
      description: "A team of expert guides, conservationists, & travel planners ensuring a seamless journey.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600 mb-4">
            Traveling with Safario
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#3b2b18]">
            What Sets Us Apart
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-[#f7ede0] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <h3 className="text-xl font-semibold text-[#3b2b18] mb-3">
                {value.title}
              </h3>
              <p className="text-[#7a6855] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}