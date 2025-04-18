export default function ChamberWebsiteMockup() {
  return (
    <main className="bg-white text-black font-sans">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
	      
		{/* Add this image tag below */}
		<img
		  src="/chamber-icon.png"
          alt="Chamber Logo"
          className="mx-auto mb-4 w-16 h-16
        />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Precision Living. Delivered.</h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl">Modular homes engineered to outlast and outshine. Wind-rated to 200mph. Built with elegance, strength, and simplicity.</p>
        <div className="mt-6 space-x-4">
          <button className="px-6 py-3 bg-black text-white rounded-full text-sm">View Models</button>
          <button className="px-6 py-3 border border-black text-black rounded-full text-sm">Reserve Now</button>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Explore the Chamber Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: "Chamber Pre", desc: "Premium starter model. Efficient. Elegant. Reliable." },
            { name: "Chamber Del", desc: "Deluxe finish with upgraded layout and interiors." },
            { name: "Chamber Lux", desc: "Luxury model with smart tech and designer features." },
            { name: "Chamber Flex", desc: "Expandable modular unit adaptable to your needs." },
            { name: "Chamber Clinic", desc: "Healthcare-ready modular for mobile treatment delivery." },
          ].map((model, idx) => (
            <div key={idx} className="p-6 border rounded-2xl shadow-sm">
              <h3 className="text-xl font-medium mb-2">{model.name}</h3>
              <p className="text-sm text-gray-600">{model.desc}</p>
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-full text-xs">Learn More</button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 text-center px-6">
        <h2 className="text-2xl font-semibold mb-6">Reserve & Build Process</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Reserve", "Customize", "We Build", "We Deliver"].map((step, idx) => (
            <div key={idx} className="p-4">
              <div className="text-lg font-semibold">{step}</div>
              <p className="text-sm text-gray-600">Step {idx + 1}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 text-center px-6">
        <h2 className="text-2xl font-semibold mb-4">Virtual Tour</h2>
        <p className="text-gray-600 max-w-xl mx-auto">Step inside The Chamber and experience a full 360° tour before it's even built. Coming soon.</p>
        <button className="mt-6 px-5 py-2 border border-black text-black rounded-full text-sm">Take the Tour</button>
      </section>

      <footer className="bg-black text-white py-10 px-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} The Chamber by Dzign Labs. All rights reserved.</p>
        <p className="text-xs mt-2">Email: dzignlabs@gmail.com</p>
      </footer>
    </main>
  );
}