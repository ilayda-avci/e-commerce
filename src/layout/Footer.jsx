export default function Footer() {
  return (
    <footer className="w-full bg-white">

      {/* Üst kısım: Logo + sosyal medya */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between border-b">
        <h2 className="text-2xl font-bold text-[#252B42]">Bandage</h2>
        <div className="flex items-center gap-4">
          <a href="#" className="w-9 h-9 rounded-full bg-[#23A6F0] flex items-center justify-center text-white text-sm font-bold">f</a>
          <a href="#" className="w-9 h-9 rounded-full bg-[#23A6F0] flex items-center justify-center text-white text-sm font-bold">in</a>
          <a href="#" className="w-9 h-9 rounded-full bg-[#23A6F0] flex items-center justify-center text-white text-sm font-bold">tw</a>
        </div>
      </div>

      {/* Orta kısım: Linkler */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8">

        <div>
          <h4 className="font-bold text-[#252B42] mb-4">Company Info</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-500">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#252B42] mb-4">Legal</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-500">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#252B42] mb-4">Features</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-500">
            <li><a href="#">Business Marketing</a></li>
            <li><a href="#">User Analytic</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Unlimited Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#252B42] mb-4">Resources</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-500">
            <li><a href="#">IOS & Android</a></li>
            <li><a href="#">Watch a Demo</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#252B42] mb-4">Get In Touch</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-l px-3 py-2 text-sm w-full outline-none"
            />
            <button className="bg-[#23A6F0] text-white text-sm px-4 py-2 rounded-r whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-400">Lorem imp sum dolor Amit</p>
        </div>

      </div>

      {/* Alt kısım: Copyright */}
      <div className="bg-gray-50 py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-500">
            Copyright © 2025 by <span className="font-bold">Emin Mengi</span>
          </p>
        </div>
      </div>

    </footer>
  );
}