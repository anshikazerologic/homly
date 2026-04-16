import { Search, KeyRound, SearchIcon } from "lucide-react";


export default function Hero() {
  return (
    <section className="bg-[#E0DEF7] overflow-hidden">
      <div className="grid lg:relative lg:grid-cols-2 min-h-screen">

        <div className="relative jakarta_medium order-1 lg:order-2 h-100 md:h-125 lg:h-auto 2xl:h-230">


          <img
            src="assets/homlyherosection_bgimg.png"
            alt="house"
            className="w-full h-full object-cover "
            referrerPolicy="no-referrer"
          />


          <div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-6 left-6 lg:top-35 lg:-left-10 lg:right-auto  bg-white p-4 lg:py-6  rounded-xl shadow-2xl  w-40 md:h-40   lg:w-64 lg:h-64  "
          >

            <div className="flex items-center gap-3 md:mb-2 lg:mb-4">
              <img
                src="/assets/ajeet.png"
                className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
                alt=""
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-bold text-xs lg:text-sm">Ajeet Singh</p>
                <p className="text-[8px] lg:text-xs text-gray-500">Renter</p>
                <p className="text-[6px] lg:text-xs flex text-gray-500 mb-1 ">
                  Moved with{" "}

                  <span className="font-semibold flex text-indigo-500">
                    <img src="/assets/homlyicon.png" className="w-2 h-2 lg:w-4 lg:h-4 mx-1" />
                    Homly</span>
                </p>
              </div>
            </div>




            <p className="text-[6px] lg:text-xs text-gray-600 mb-2 md:mb-4  lg:mb-6 ">
              “ I loved how smooth the move was, and finally got the house we wanted.”
            </p>

            <div className="border-t  md:pt-2  lg:pt-6  flex justify-between text-[6px] lg:text-xs">
              <div>
                <p className="font-bold text-base lg:text-lg">13L</p>
                <span className="text-gray-500 pb-2">Saved up to</span>
              </div>
              <div>
                <p className="font-bold text-base lg:text-lg">-24 hrs</p>
                <span className="text-gray-500 pb-2">Process time</span>
              </div>
            </div>

          </div>


          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-0 right-0  bg-[#0B1B3F] text-white px-4 py-6  rounded-tl-xl w-36 md:w-52 shadow-lg"
          >

            <div className="flex items-center justify-between mb-2">
              <span className="text-xs md:text-sm font-semibold">Excellent</span>
              <span className="text-[10px] text-green-400">★ Trustpilot</span>
            </div>

            <div className="text-yellow-400 text-[10px] mb-2">
              ★ ★ ★ ★ ★
            </div>

            <p className="text-[8px] md:text-[10px] text-gray-300">
              From 3,456 reviews
            </p>

          </div>

        </div>


        <div className="flex items-center  px-4 md:px-15 lg:px-20 2xl:px-50   order-2 lg:order-1">
          <div className="max-w-195 z-20 py-5   lg:absolute  flex flex-col gap-12">


            <div className="flex flex-col gap-8">
              <h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:w-111 xl:w-136 text-4xl md:text-5xl xl:text-6xl jakarta_bold  font-bold text-slate-950 leading-tight capitalize"
              >
                Buy, Rent, or Sell your property easily
              </h1>

              <p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-md text-lg md:text-xl lg:text-lg  jakarta_medium text-slate-950 leading-relaxed"
              >
                A great platform to buy, sell, or even rent your properties without any commissions.
              </p>
            </div>


            <div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-195 rounded-tr-lg jakarta_medium rounded-bl-lg rounded-br-lg shadow-[0px_30px_30px_rgba(90,90,90,0.10)]"
            >


              <div className="md:inline-flex border-b bg-white rounded-t-xl border-violet-200">
                {["Rent", "Buy", "Sell"].map((tab, i) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 text-lg ${i === 0
                      ? "text-indigo-500 font-bold border-b-[3px] border-indigo-500"
                      : "text-slate-950"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>


              <div className="hidden md:flex items-center rounded-b-xl rounded-tr-xl bg-white px-8 py-4 justify-between flex-wrap gap-6">


                <div className="flex flex-col">
                  <span className="text-slate-950/70 text-base">Location</span>
                  <span className="text-lg font-bold text-slate-950">
                    Udaipur, India
                  </span>
                </div>


                <div className="hidden md:block h-10 w-px bg-violet-200" />


                <div className="flex flex-col">
                  <span className="text-slate-950/70 text-base">When</span>
                  <div className="flex items-center gap-2 text-lg font-bold text-slate-950">
                    Select Move-in Date
                  </div>
                </div>


                <button className="px-8 py-4 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 transition">
                  Browse Properties
                </button>
              </div>


              <div className="flex md:hidden items-center bg-white rounded-b-xl  px-6 py-4 justify-between gap-4">
                <div className="flex items-center  text-slate-950/70">
                  <span className=" text-base font-medium">Search location</span>
                </div>
                <button className="p-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
                  <Search size={20} />
                </button>
              </div>
            </div>


            <div className="flex gap-3 md:gap-6 lg:gap-8 lg:justify-start jakarta_medium">

              <div
                className="group flex flex-col items-start md:items-start text-center md:text-left gap-5 sm:gap-0 w-1/2 md:w-auto"
              >
                <div className="relative inline-flex items-center justify-center mb-0 sm:mb-6 shrink-0">

                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#edecfb] rounded-full flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                    <img src="/assets/users.svg" className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>

                  <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-7 sm:h-7 bg-indigo-600 rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                    <KeyRound size={10} className="sm:w-3.5 sm:h-3.5" strokeWidth={2.5} />
                  </div>
                </div>

                <p className="text-indigo-500 text-base md:text-xl lg:text-2xl font-bold">
                  50k+ renters
                </p>
                <p className="text-slate-950 text-xs md:text-sm lg:text-base">
                  believe in our service
                </p>
              </div>

              <div
                className="group flex flex-col items-start md:items-start text-center md:text-left gap-5 sm:gap-0 w-1/2 md:w-auto"
              >
                <div className="relative inline-flex items-center justify-center mb-0 sm:mb-6 shrink-0">

                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#edecfb] rounded-full flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                    <img src="/assets/propertyicon.svg" className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>

                  <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-7 sm:h-7 bg-indigo-600 rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                    <SearchIcon size={10} className="sm:w-3.5 sm:h-3.5" strokeWidth={2.5} />
                  </div>
                </div>

                <p className="text-indigo-500 text-base md:text-xl lg:text-2xl font-bold">
                  10k+ properties
                </p>
                <p className="text-slate-950 text-xs md:text-sm lg:text-base">
                   ready for occupancy
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
