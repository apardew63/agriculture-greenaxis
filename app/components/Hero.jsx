import Button from './Button';

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex justify-center items-center text-center text-white"
      style={{
        backgroundImage: "url('/images/6.png')",
        backgroundColor: "#E8E8E8",
      }}
    >
      {/* Optional overlay */}
      <div className="absolute"></div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 flex flex-col justify-center items-center">
        <h1
          className="text-[72px] md:text-[68px] max-sm:text-[50px] text-[#22282B] font-bold leading-tight mb-4"
          style={{ fontFamily: "Manrope" }}
        >
          Bring Fresh Growth <br /> To Agriculture
        </h1>
        <p
          className="text-[15px] sm:text-lg md:text-xl text-[#22282B] mb-6 max-w-[500px]"
          style={{ fontFamily: "Manrope" }}
        >
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        </p>
        <Button>Get Started</Button>
      </div>
    </section>
  );
}
