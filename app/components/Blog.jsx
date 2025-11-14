export default function Blog() {
  const blogs = [
    {
      title: "Improving Crop Efficiency",
      img: "https://images.unsplash.com/photo-1519003301878-4e3f7e8ed87b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Sustainable Farming for Future",
      img: "https://images.unsplash.com/photo-1581574200742-73f8e3b21a8e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Smart Water Management",
      img: "https://images.unsplash.com/photo-1580910051073-4cbecc0d8e32?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
    <section className="bg-[#FAFAFA] py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8" style={{ fontFamily: "Manrope" }}>
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 md:gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-[#22282B] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-tight mb-4 md:mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </h2>
            </div>
            <div>
              <p className="text-[#667085] text-lg md:text-[20px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mb-0 md:mb-5">
          {/* Card 1 - Farming Precision */}
          <div
            className="rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[400px] lg:h-[516px]">
              <img
                src="/images/1.png"
                alt="Farming Precision"
                fill
                className="object-cover"
              />
            </div>
            <div className="">
              <h3 className="text-[#222A2C] text-2xl font-bold mb-2">
                Farming Precision
              </h3>
              <p className="text-[#666666] text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </div>

          <div
            className="rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-[250px] sm:h-[300px] md:h-[300px] lg:h-[384px]">
              <img
                src="/images/2.png"
                alt="Crop Surveillance"
                fill
                className="object-cover"
              />
            </div>
            <div className="">
              <h3 className="text-[#222A2C] text-2xl font-bold mb-2">
                Crop Surveillance
              </h3>
              <p className="text-[#666666] text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>

          {/* Card 3 - Automated Farming */}
          <div
            className="rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative h-[280px] sm:h-[350px] md:h-[350px] lg:h-[450px]">
              <img
                src="/images/3.png"
                alt="Automated Farming"
                fill
                className="object-cover"
              />
            </div>
            <div className="">
              <h3 className="text-[#222A2C] text-2xl font-bold mb-2">
                Automated Farming
              </h3>
              <p className="text-[#666666] text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full flex justify-center py-5 md:py-5 bg-[#fff]">
      <div className="w-full max-w-7xl">
        {/* Top Divider */}
        <div className="h-px bg-[#E3E3E3] mb-12 md:mb-16" />

        {/* Content */}
        <div className="grid md:grid-cols-1 lg:grid-cols-[0.8fr_2fr] items-center justify-center gap-6 md:gap-8">
          {/* Image */}
          <div className="relative w-full h-[200px] sm:h-[260px] md:h-[300px] lg:h-[260px] rounded-[30px] md:rounded-[40px] overflow-hidden">
            <img
              src="/images/4.png"
              alt="Agricultural Technology"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-[#22282B] text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-medium">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore
            </h3>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="h-px bg-[#E3E3E3] mt-12 md:mt-16" />
      </div>
    </section>
    </>
  );
}
