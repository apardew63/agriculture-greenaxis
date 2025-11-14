import Button from './Button';

export default function Contact() {
  return (
      <section className="relative bg-white py-6 md:py-8 lg:py-10 px-4 md:px-8 lg:px-16 overflow-hidden" style={{ fontFamily: "Manrope" }}>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/images/image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="absolute inset-0" />
        <div className="relative z-10 max-w-8xl mx-auto">
          <div className="flex justify-center items-center min-h-[400px] sm:min-h-[500px] md:min-h-[571px]">
            <div
              className="text-center max-w-[745px] px-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Heading */}
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-medium leading-tight mb-8 md:mb-14">
                Lorem ipsum dolor sit amet, consectetur!
              </h2>

              {/* Newsletter Form */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-[499px] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Email Input */}
                <div className="relative flex-1 w-full sm:w-auto">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full h-14 px-6 rounded-full bg-white text-[#5F5F5F] placeholder-[#5F5F5F] text-base focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    style={{ minWidth: '311px' }}
                  />
                </div>

                {/* Subscribe Button */}
                <Button className='border-1 border-white'>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
