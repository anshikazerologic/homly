import {  Home, FileText, FilePlay } from "lucide-react";


const benefits = [
  {
    icon: FilePlay,
    title: "Virtual home tour",
    description: "You can communicate directly with landlords and we provide you with virtual tour before you buy or rent the property.",
    bgColor: "bg-[#2D2665]",
    textColor: "text-white",
    iconBg: "bg-white/10",
    iconColor: "text-white",
  },
  {
    icon: Home,
    title: "Find the best deal",
    description: "Browse thousands of properties, save your favorites and set up search alerts so you don't miss the best home deal!",
    bgColor: "bg-white",
    textColor: "text-[#100A55]",
    iconBg: "bg-[#100A55]/5",
    iconColor: "text-[#100A55]",
  },
  {
    icon: FileText,
    title: "Get ready to apply",
    description: "Find your dream house? You just need to do a little to no effort and you can start move in to your new dream home!",
    bgColor: "bg-[#6366F1]",
    textColor: "text-white",
    iconBg: "bg-white",
    iconColor: "text-[#6366F1]",
  },
];

const stats = [
  { value: "7.4%", label: "Property Return Rate" },
  { value: "3,856", label: "Property in Sell & Rent" },
  { value: "2,540", label: "Daily Completed Transactions" },
];

export default function BenefitSection() {
  return (
    <>
      
      <section className="min-h-screen bg-[#100A55] text-white jakarta_medium py-16 px-4 sm:px-8 lg:px-20 2xl:px-96 flex flex-col justify-center overflow-hidden">
        <div className=" mx-auto w-full">
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16  items-start mb-16 lg:mb-24">
            <div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-4xl jakarta_bold leading-tight max-w-xl">
                We Make It Easy For <span className="text-[#8B5CF6]">Tenants</span> And <span className="text-[#8B5CF6]">Landlords.</span>
              </h2>
            </div>
            
            <div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:pt-4"
            >
              <p className="text-gray-300 text-base md:text-lg lg:text-lg leading-relaxed max-w-lg">
                Whether it's selling your current home, getting financing, or buying a new home, we make it easy and efficient. The best part? You'll save a bunch of money and time with our services.
              </p>
            </div>
          </div>

         
          <div className="relative mb-20 lg:mb-32">
           
            <div className="flex flex-col sm:flex-row sm:overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-8 lg:pb-0 sm:snap-x sm:snap-mandatory no-scrollbar -mx-4 px-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={` md:w-80  sm:shrink-0 lg:w-full sm:snap-center p-8 sm:p-10 rounded-[40px] ${benefit.bgColor} ${benefit.textColor} flex flex-col min-h-72  shadow-2xl`}
                >
                  <div className={`w-14 h-14 rounded-full ${benefit.iconBg} flex items-center justify-center mb-10`}>
                    <benefit.icon className={benefit.iconColor} size={28} />
                  </div>
                  <h3 className="text-2xl  font-bold gap-4">{benefit.title}</h3>
                  <p className="opacity-80 text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`flex flex-col items-center text-center px-4 sm:px-8 ${
                  index !== stats.length - 1 ? "sm:border-r sm:border-white/20" : ""
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl lg:text-3xl font-bold mb-3">{stat.value}</span>
                  <span className="text-gray-400 text-xs lg:text-xs uppercase tracking-wider font-medium">
                    {stat.label}
                  </span>
                </div>
                
                {index !== stats.length - 1 && (
                  <div className="w-12 h-px bg-white/20 mt-8 sm:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
