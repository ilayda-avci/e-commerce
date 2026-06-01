import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <section className="w-full">

      {/* Hero */}
      <div className="bg-[#FAFAFA] py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-bold text-gray-400 tracking-widest">WHAT WE DO</p>
          <h1 className="mt-3 text-4xl font-extrabold text-[#252B42]">
            Innovation tailored for you
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
            <Link to="/" className="text-[#252B42] font-bold hover:text-blue-500">Home</Link>
            <span>›</span>
            <span>About</span>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl font-extrabold text-[#252B42]">
            We know what traders want
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics and Maxwell's theory of electromagnetism.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics and Maxwell's theory of electromagnetism.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-[#252B42]">15K</h3>
              <p className="text-sm text-gray-500">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-[#252B42]">150K</h3>
              <p className="text-sm text-gray-500">Monthly Visitors</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-[#252B42]">15</h3>
              <p className="text-sm text-gray-500">Countries Worldwide</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-[#252B42]">100+</h3>
              <p className="text-sm text-gray-500">Top Partners</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
            alt="About Us"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full bg-[#FAFAFA] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden bg-gray-300">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
              alt="Video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-16 border-transparent border-l-[#23A6F0] ml-1" style={{borderLeftWidth: "20px", borderLeftColor: "#23A6F0"}} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work With Us */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-[#252B42]">Start your 14 days free trial</h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/signup" className="bg-[#23A6F0] text-white font-bold px-8 py-3 rounded">
            Try it free now
          </Link>
        </div>
      </div>

    </section>
  );
}