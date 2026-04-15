
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 jakarta_medium pt-16 pb-8">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 ">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16">


          <div className="lg:w-50 shrink-0">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8  flex items-center justify-center">
                <div className="w-full h-full">
                  <img
                    src="/assets/homlyicon.png"
                  />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#100A55]">Homly</span>
            </div>
          </div>


          <div className="flex-1 grid grid-cols-2 md:grid-cols-3  gap-x-8 gap-y-10 lg:gap-y-12">

            <div className="space-y-4 order-1">
              <h4 className="font-bold text-[#100A55] text-sm uppercase tracking-wider">SELL A HOME</h4>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Request an offer</a></li>
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Stories</a></li>
              </ul>
            </div>


            <div className="space-y-4 order-3 md:order-2 lg:order-5">
              <h4 className="font-bold text-[#100A55] text-sm uppercase tracking-wider">BUY A HOME</h4>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Buy</a></li>
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Finance</a></li>
              </ul>
            </div>

            <div className="space-y-4 order-5 md:order-3 lg:order-2">
              <h4 className="font-bold text-[#100A55] text-sm uppercase tracking-wider">BUY, RENT AND SELL</h4>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Buy and sell properties</a></li>
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Rent home</a></li>
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Builder trade-up</a></li>
              </ul>
            </div>


            <div className="space-y-4 order-2 md:order-4 lg:order-6">
              <h4 className="font-bold text-[#100A55] text-sm uppercase tracking-wider">TERMS & PRIVACY</h4>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Trust & Safety</a></li>
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>


            <div className="space-y-4 order-4 md:order-5 lg:order-3">
              <h4 className="font-bold text-[#100A55] text-sm uppercase tracking-wider">ABOUT</h4>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Company</a></li>
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">How it works</a></li>
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Investors</a></li>
              </ul>
            </div>


            <div className="space-y-4 order-6 md:order-6 lg:order-4">
              <h4 className="font-bold text-[#100A55] text-sm uppercase tracking-wider">RESOURCES</h4>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-[#7065F0] transition-colors">Help Center</a></li>
              </ul>
            </div>

          </div>
        </div>


        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400 font-medium">
            ©2021 Estatery. All rights reserved
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="opacity-60 hover:opacity-100 transition-all duration-200"
            >
              <img
                src="/assets/facebook.svg"
                alt="Facebook"
                className="w-5 h-5 grayscale"
              />
            </a>

            <a
              href="#"
              className="opacity-60 hover:opacity-100 transition-all duration-200"
            >
              <img
                src="/assets/instagram.svg"
                alt="Instagram"
                className="w-5 h-5 grayscale"
              />
            </a>

            <a
              href="#"
              className="opacity-60 hover:opacity-100 transition-all duration-200"
            >
              <img
                src="/assets/twitter.svg"
                alt="Twitter"
                className="w-5 h-5 grayscale"
              />
            </a>

            <a
              href="#"
              className="opacity-60 hover:opacity-100 transition-all duration-200"
            >
              <img
                src="/assets/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5 grayscale"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
