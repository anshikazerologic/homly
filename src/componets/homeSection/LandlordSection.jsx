

export default function LandlordSection() {
  return (
    <section className="py-24 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 2xl:px-96 jakarta_medium text-center">
        <div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-primary font-bold text-[#7065F0] uppercase tracking-widest text-sm">No Spam Promise</p>
            <h2 className="text-4xl  jakarta_bold text-gray-900">Are You A Landlord?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover ways to increase your home's value and get listed. No Spam.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-gray-50 p-2 rounded-2xl border border-gray-100">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 bg-transparent focus:outline-none text-gray-900"
            />
            <button className="px-8 py-3 bg-[#7065F0]  text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
              Submit
            </button>
          </div>

          <p className="text-sm text-gray-400">
            Join <span className="text-[#7065F0] font-semibold">10,000+</span> other landlords in our community.
          </p>
        </div>
      </div>
    </section>
  );
}
