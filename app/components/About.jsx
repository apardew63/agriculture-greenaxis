"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

export default function FarmShowcase() {
  const slides = [
    { title: "Technology Irrigation", img: "/images/showcase1.png" },
    { title: "Plant Propagation", img: "/images/showcase2.png" },
    { title: "Irrigation System", img: "/images/showcase3.png" },
    { title: "Agricultural Monitoring", img: "/images/showcase4.png" },
  ];

  const categories = ["Organic Farm", "Automation Farm", "Bio-medical Farm"];

  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 overflow-hidden" style={{ fontFamily: "Manrope" }}>
      {/* Background gradient glow */}
      <div
        className="absolute rounded-full blur-2xl"
        style={{
          width: "416px",
          height: "416px",
          background: "linear-gradient(90deg, #67EF3E 0%, #67EF3E 100%)",
          top: "-130px",
          left: "-146px",
          zIndex: 0,
          opacity: 0.8,
        }}
      />

      {/* Main Grid */}
      <div className="relative z-10 max-w-8xl mx-auto grid md:grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 md:gap-8 lg:gap-16">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 lg:space-y-16 px-4 md:px-5">
          {/* Year */}
          <div className="text-[#205125] font-normal text-[24px] md:text-[24px] leading-tight">
            2025
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-24">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`text-base md:text-lg font-bold transition-colors ${
                    i === 0
                      ? "text-[#205125] pb-2"
                      : "text-[#667085] hover:text-[#0B7A1A]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center">
          <motion.h1
            className="text-[#205125] text-3xl sm:text-4xl md:text-[48px] lg:text-[48px] font-normal leading-tight md:leading-[60px] mb-4 md:mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore.
          </motion.h1>
                
          <div className="flex flex-col sm:flex-row justify-between gap-4 text-[#205125] text-lg md:text-[20px] font-semibold">
            <span>Harvesting Legacy.</span>
            <span>Planting Tomorrow.</span>
          </div>
        </div>
      </div>

      {/* SLIDER SECTION */}
      <div className="relative mt-12 md:mt-20">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={5}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.6, spaceBetween: 24 },
            768: { slidesPerView: 2.3, spaceBetween: 32 },
            1024: { slidesPerView: 3.5, spaceBetween: 32 },
          }}
          className="overflow-visible"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className={`rounded-[24px] overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2 w-full max-w-[372px] h-[750px] md:h-[684px] ${
                  index % 2 === 0 ? "mt-0" : "mt-5 md:mt-10"
                }`}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-[260px] md:h-[500px] object-cover"
                />
                <div className="p-4 md:p-6 text-center">
                  <p className="text-[#22282B] text-base md:text-[24px] font-medium">
                    {slide.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #0b7a1a;
            background: white;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e5e5;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 16px;
            font-weight: bold;
          }
          .swiper-button-next {
            right: -25px;
          }
          .swiper-button-prev {
            left: -25px;
          }
          @media (max-width: 640px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
