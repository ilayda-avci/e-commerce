import heroModel from "../assets/hero-model.png";

export default function MainSlider() {
  return (
    <section className="w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* CARD */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#9FE3EF] via-[#BFEFE1] to-[#C8F0D0]" />

          {/* Decorative dots */}
          <span className="absolute left-6 top-10 h-10 w-10 rounded-full bg-white/90" />
          <span className="absolute left-6 bottom-56 h-12 w-12 rounded-full bg-white/90 md:left-10 md:bottom-24" />
          <span className="absolute right-10 bottom-56 h-3 w-3 rounded-full bg-purple-500/70 md:right-24 md:bottom-40" />
          <span className="absolute right-20 bottom-40 h-3 w-3 rounded-full bg-white/90 md:right-28 md:bottom-32" />

          {/* Big white circle behind model */}
          <div className="absolute left-1/2 bottom-[-140px] -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-white md:left-auto md:right-[-80px] md:bottom-[-120px] md:translate-x-0 md:h-[700px] md:w-[700px]" />

          {/* CONTENT WRAPPER */}
          <div className="relative z-10 min-h-[820px] md:min-h-[520px]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              {/* TEXT */}
              <div className="px-8 pt-20 md:px-14 md:pt-0 md:py-16 md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-5">
                <p className="text-sm tracking-widest font-semibold text-blue-700">
                  SUMMER 2020
                </p>

                <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
                  NEW
                  <br />
                  COLLECTION
                </h1>

                <p className="text-base text-slate-600 max-w-sm">
                  We know how large objects will act, but things on a small scale.
                </p>

                <button className="mt-2 px-10 py-4 rounded-md bg-blue-500 text-white font-semibold text-lg">
                  SHOP NOW
                </button>
              </div>

              {/* Spacer for desktop so text doesn't overlap */}
              <div className="hidden md:block md:w-1/2" />
            </div>

            {/* MODEL (absolute) */}
            <img
              src={heroModel}
              alt="hero model"
              className="
                absolute z-20
                left-1/2 bottom-0 -translate-x-1/2
                w-[360px] sm:w-[420px]
                md:left-auto md:right-8 md:bottom-[-10px] md:translate-x-0
                md:w-[520px]
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
