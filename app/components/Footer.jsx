import Button from './Button';

export default function Footer() {
  return (
    <footer className="relative bg-white pt-10 md:pt-15 px-4 md:px-8 lg:px-16 overflow-hidden" style={{
        backgroundImage: "url('/images/Footer.png')",
      }}>
      <div
        className="absolute w-[441px] h-[441px] rounded-full blur-[360px] opacity-100"
        style={{
          background: "rgb(103, 239, 62)",
          bottom: "-111px",
          left: "1149px",
          zIndex: 0,
        }}
      />
      <div
        className="absolute w-[542px] h-[542px] rounded-full blur-[200px] opacity-100"
        style={{
          background: "rgb(32, 94, 57)",
          bottom: "-121px",
          left: "-343px",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 mb-16 md:mb-20">
          <div className="space-y-14">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-[100px] md:w-[130px] h-[60px] md:h-[80px] rounded-full flex items-center justify-center">
                  <img src="/images/logo.png" alt="Logo" width={150} height={150} />
                </div>
              </div>
              <p className="text-[#222A2C] text-base leading-6 max-w-[430px]">
                We are custom home builder located in Dallas, TX servicing
                Highland Park, Greenaxis..
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-5">
              {[
                { name: "Facebook", src: "/images/icons/facebook.png" },
                { name: "Twitter", src: "/images/icons/twitter.png" },
                { name: "Instagram", src: "/images/icons/insta.png" },
                { name: "LinkedIn", src: "/images/icons/linkedin.png" },
              ].map((social, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full border border-[#222A2C]/20 bg-[#222A2C]/4 flex items-center justify-center hover:bg-[#222A2C]/10 transition-colors cursor-pointer"
                >
                  <img src={social.src} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Company */}
            <div>
              <h3 className="text-[#667085] text-[18px] font-bold mb-6 uppercase">
                Company
              </h3>
              <ul className="space-y-4">
                {["Features", "Pricing", "About Us", "Contact", "Pricing"].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-[#222A2C] text-sm hover:text-[#0B7A1A] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Resource */}
            <div>
              <h3 className="text-[#667085] text-[18px] font-bold mb-6 uppercase">
                Resource
              </h3>
              <ul className="space-y-4">
                {[
                  "Blog",
                  "Customer Stories",
                  "Information",
                  "Legal",
                  "Payments",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[#222A2C] text-sm hover:text-[#0B7A1A] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career */}
            <div>
              <h3 className="text-[#667085] text-[18px] font-bold mb-6 uppercase">
                Career
              </h3>
              <ul className="space-y-4">
                {["Jobs", "Hiring", "News", "Tips & Tricks"].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-[#222A2C] text-sm hover:text-[#0B7A1A] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-[#667085] text-[18px] font-bold mb-6 uppercase">Help</h3>
              <ul className="space-y-4">
                {["FAQ", "Help Center", "Support"].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[#222A2C] text-sm hover:text-[#205125] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-20">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-4">
              <h3 className="text-[#222A2C] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Get In Touch!
              </h3>
              <p className="text-[#222A2C] text-base leading-6 max-w-[305px]">
                have questions or need assistance? We&apos;re here to help!
              </p>
            </div>

            <div className="relative">
              <div className="bg-[#EDEDED] rounded-full p-1 flex items-center">
                <input
                  type="email"
                  placeholder="Footer Email Field"
                  className="flex-1 bg-transparent px-6 py-3 text-[#222A2C] placeholder-[#222A2C] focus:outline-none"
                />
                <Button className='bg-[#22282B]'>Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Address 1 */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[#667085] text-[18px] font-bold mb-6 uppercase">
                  Address
                </h4>
                <p className="text-[#222A2C] text-sm leading-6">
                  1901 Thornridge Cir. Shiloh, Hawaii 81063
                </p>
              </div>
              <div>
                <h4 className="text-[#667085] text-[18px] font-bold mb-6 uppercase">
                  Address
                </h4>
                <p className="text-[#222A2C] text-sm leading-6">
                  1901 Thornridge Cir. Shiloh, Hawaii
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[#667085] text-[18px] font-bold mb-6 uppercase">
                  Phone
                </h4>
                <p className="text-[#222A2C] text-sm leading-6">
                  [303] 303-303189
                </p>
              </div>
              <div>
                <h4 className="text-[#667085] text-[18px] font-bold mb-6 uppercase">
                  Email
                </h4>
                <p className="text-[#222A2C] text-sm leading-6">
                  GreenaxisExports@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-[#222A2C] pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#222A2C] text-sm">@ Copyright 2025. All Right Reserved</p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-[#222A2C] text-sm hover:text-[#0B7A1A] transition-colors"
              >
                FAQ
              </a>
              <a
                href="#"
                className="text-[#222A2C] text-sm hover:text-[#0B7A1A] transition-colors"
              >
                Term of Service
              </a>
              <a
                href="#"
                className="text-[#222A2C] text-sm hover:text-[#0B7A1A] transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
