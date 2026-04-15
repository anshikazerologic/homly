import { Shield, Tag, Percent, Home, CheckCircle2, DollarSign, MousePointer2 } from "lucide-react";


const features = [
  {
    icon: Shield,
    badgeIcon: CheckCircle2,
    title: "Property Insurance",
    description: "We offer our customer property protection of liability coverage and insurance for their better life.",
  },
  {
    icon: DollarSign,
    badgeIcon: Percent,
    title: "Best Price",
    description: "Not sure what you should be charging for your property? No need to worry, let us do the numbers for you.",
  },
  {
    icon: Tag,
    badgeIcon: DollarSign,
    title: "Lowest Commission",
    description: "You no longer have to negotiate commissions and haggle with other agents it only cost 2%!",
  },
  {
    icon: MousePointer2,
    badgeIcon: Home,
    title: "Overall Control",
    description: "Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.",
  },
];

export default function Features() {
  return (
    <section className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <div className=" mx-auto px-4 sm:px-6 md:px-20 jakarta_medium 2xl:px-96 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
         
          <div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#F8F9FF] border border-indigo-50 rounded-xl  overflow-hidden"
          >
            <div className="relative  max-w-md p-8">
              <h2 className="text-2xl md:text-3xl  jakarta_bold text-[#0A0A3C] leading-tight">
                The New Way To Find Your New Home
              </h2>
              <p className="mt-6 text-slate-500 text-lg leading-relaxed">
                Find your dream place to live in with more than 10k+ properties listed.
              </p>
              <button className="mt-8 px-8 py-3.5 bg-[#0A0A3C] text-white font-semibold rounded-xl hover:bg-[#151550] transition-all hover:shadow-lg active:scale-95">
                Browse Properties
              </button>
            </div>

            
            <div className="pl-8 flex justify-center z-10 ">
              <img
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                src="/assets/featuresimg.png"
                alt="Modern House Illustration"
                className="w-full  shadow-2xl "
                referrerPolicy="no-referrer"
              />
            </div>
            
            
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl" />
          </div>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 sm:gap-y-16 ">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-row sm:flex-col items-start gap-5 sm:gap-0"
              >
                <div className="relative inline-flex items-center justify-center mb-0 sm:mb-6 shrink-0">
                 
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={24} className="sm:w-7 sm:h-7" strokeWidth={1.5} />
                  </div>
                  
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 bg-indigo-600 rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                    <feature.badgeIcon size={12} className="sm:w-3.5 sm:h-3.5" strokeWidth={2.5} />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A0A3C] mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm sm:text-[15px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
