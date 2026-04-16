import React, { useState } from "react";
import { Bed, Bath, Square, Heart, Search, Home, Key, ShoppingBag } from "lucide-react";


const properties = [
  {
    id: 1,
    title: "Elivaas",
    location: "Udaipur",
    price: "2,095",
    image: "/assets/eilvaas.png",
    beds: 3,
    baths: 2,
    area: "5x7",
    tag: "POPULAR",
  },
  {
    id: 2,
    title: "SaffronStays",
    location: "Udaipur",
    price: "2,700",
    image: "/assets/saddronStays.png",
    beds: 4,
    baths: 2,
    area: "6x7.5",
    tag: "POPULAR",
  },
  {
    id: 3,
    title: "StayVista's",
    location: "Udaipur",
    price: "4,550",
    image: "/assets/Stayvista.png",
    beds: 4,
    baths: 3,
    area: "8x10",
    tag: "POPULAR",
  },
  {
    id: 4,
    title: "Kilakot Suits",
    location: "Udaipur",
    price: "2,400",
    image: "/assets/kilakotsuits.png",
    beds: 4,
    baths: 2,
    area: "6x8",
    tag: null,
  },
  {
    id: 5,
    title: "Glen Villa",
    location: "Udaipur",
    price: "2,500",
    image: "/assets/gienvilla.png",
    beds: 2,
    baths: 1,
    area: "5x7.5",
    tag: null,
  },
  {
    id: 6,
    title: "Compact Charm",
    location: "Udaipur",
    price: "1,600",
    image: "/assets/compactcharm.png",
    beds: 3,
    baths: 1,
    area: "5x7",
    tag: null,
  },
];

export default function PropertySection() {
  const [activeTab, setActiveTab] = useState("Rent");

  return (
    <section className="min-h-screen bg-[#F7F7FD] font-sans text-[#100A55]">
      
    

      <div className=" mx-auto px-4 md:px-15 lg:px-20 2xl:px-40 3xl:px-60 jakarta_medium py-12 md:py-20">
       
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl jakarta_bold mb-4">Based On Your Location</h2>
          <p className="text-gray-500 text-sm md:text-base">Some of our picked properties near your location.</p>
        </div>

      
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 md:mb-12">
          
          <div className="flex bg-[#E8E8FB] p-1.5 rounded-xl w-full md:w-auto order-2 md:order-1">
            {[
              { name: "Rent", icon: Key },
              { name: "Buy", icon: Home },
              { name: "Sell", icon: ShoppingBag }
            ].map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.name
                    ? "bg-white text-[#7065F0] shadow-sm"
                    : "text-[#908DB7] hover:text-[#7065F0]"
                }`}
              >
                <tab.icon size={16} />
                {tab.name}
              </button>
            ))}
          </div>

         
          <div className="relative w-full md:w-80 order-1 md:order-2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7065F0]" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-3 bg-[#F0F0FA] border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7065F0]/20 transition-all text-sm"
            />
          </div>
        </div>
       
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-x-visible gap-5 md:gap-8 pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {properties.map((property) => (
            <div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-w-[85%] sm:min-w-0 snap-center bg-white rounded-2xl overflow-hidden  transition-all duration-500 group"
            >
              
              <div className="relative aspect-4/2 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {property.tag && (
                  <div className="absolute top-0 left-0 mt-4 -ml-1">
                    <div className="bg-[#7065F0] text-white text-[10px] font-bold px-4 py-1.5 rounded-r-lg flex items-center gap-1.5 shadow-lg">
                      <span
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        <img src="/assets/featuresicon.svg"/>
                      </span>
                      {property.tag}
                    </div>
                  </div>
                )}
              </div>

             
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-2xl font-bold text-[#7065F0]">₹{property.price}</span>
                      <span className="text-xs text-gray-400 font-medium">/per night</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#100A55] mb-1">{property.title}</h3>
                    <p className="text-sm text-gray-400 font-medium">{property.location}</p>
                  </div>
                  <button className="w-11 h-11 rounded-full border border-[#E8E8FB] flex items-center justify-center text-[#7065F0] hover:bg-[#7065F0] hover:text-white transition-all duration-300 group/heart">
                    <Heart size={20} className="group-hover/heart:fill-current" />
                  </button>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-[#F0F0FA]">
                  <div className="flex items-center gap-2 text-[#908DB7] text-xs font-semibold">
                    <Bed size={16} className="text-[#7065F0]" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#908DB7] text-xs font-semibold">
                    <Bath size={16} className="text-[#7065F0]" />
                    <span>{property.baths} Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#908DB7] text-xs font-semibold">
                    <Square size={16} className="text-[#7065F0]" />
                    <span>{property.area} m²</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 md:mt-20 text-center">
          <button className="px-10 py-4 bg-[#100A55] text-white font-bold rounded-xl hover:bg-[#1c137a] transition-all duration-300 shadow-xl shadow-[#100A55]/20 hover:-translate-y-1">
            Browse more properties
          </button>
        </div>
      </div>
    </section>
  );
}
