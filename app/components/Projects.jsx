"use client";
import { MapPin, ArrowLeft, ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="bg-white px-4 md:px-8 py-8 md:py-10">
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[650px] lg:h-[730px] rounded-[30px] md:rounded-[40px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/5.png')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-start mt-20 md:mt-30 h-full px-6 md:px-8 lg:px-16">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-2xl mb-4 md:mb-6">
            Lorem Ipsum Dolor Sit <br /> Amet, Consectetur Adipiscing Elit,
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-10">
          {/* Location */}
          <div className="flex items-center gap-2 text-white text-lg">
            <MapPin className="w-5 h-5" />
            <span>City, Country</span>
          </div>

          {/* Bottom Right Controls */}
          <div className="flex items-center gap-4">
            <button className="text-white/80 hover:text-white transition">
              <ArrowLeft className="w-6 h-6" />
            </button>

            <div className="w-[80px] h-[80px] bg-[#26402B] rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg border-4 border-[#1B2D1E]">
              01/05
            </div>

            <button className="text-white/80 hover:text-white transition">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
