"use client";

import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    { value: 25, suffix: "+", label: "Year Of Experience" },
    { value: 300, suffix: "+", label: "Field In Progress" },
    { value: 115000, suffix: "+", label: "Farmer Around World" },
    { value: 15, suffix: " Billion", label: "Agricultural Product", prefix: "$" },
  ];

  return (
    <section className="bg-white py-5 md:py-10 lg:py-12">
      <div className="max-w-8xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-16 text-center px-4 md:px-6 lg:px-8">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
            <h2 className="text-[#205125] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold leading-tight md:leading-[80px]" style={{ fontFamily: "Manrope" }}>
              {item.prefix && item.prefix}
              <CountUp end={item.value} duration={3} separator="," />
              {item.suffix}
            </h2>
            <p className="text-[#205125] text-[18px] md:text-[18px] font-medium leading-5 md:leading-6" style={{ fontFamily: "Manrope" }}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
