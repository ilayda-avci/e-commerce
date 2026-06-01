import heroModel from "../assets/hero-model.png";
import TopCategories from "../components/TopCategories";

export default function HomePage() {
  return (
    <>
      <section className="w-full bg-white px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <div
            className="
              relative overflow-hidden rounded-2xl
              bg-gradient-to-r from-[#A7D7D9] to-[#BFE7D2]
              p-6 md:p-12
              min-h-[820px] md:min-h-0
            "
          >
            <span className="pointer-events-none absolute -left-6 -top-6 h-16 w-16 rounded-full bg-white/70" />
            <span className="pointer-events-none absolute left-1/2 top-8 h-14 w-14 -translate-x-1/2 rounded-full bg-white/85" />
            <span className="pointer-events-none absolute right-6 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-white/85" />
            <span className="pointer-events-none absolute right-10 top-40 h-3 w-3 rounded-full bg-[#7c5cff]/60" />
            <span className="pointer-events-none absolute right-16 bottom-16 h-3 w-3 rounded-full bg-[#7c5cff]/60" />

            <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-center">
              <div className="max-w-lg md:pl-2 text-center md:text-left">
                <p className="text-xs font-bold tracking-widest text-[#2A7CC7]">
                  SUMMER 2020
                </p>

                <h1 className="mt-4 text-5xl font-extrabold leading-none tracking-tight text-[#252B42] md:text-6xl">
                  NEW <br className="hidden md:block" /> COLLECTION
                </h1>

                <p className="mt-5 max-w-md text-base leading-relaxed text-[#737373] mx-auto md:mx-0">
                  We know how large objects will act,
                  <br className="hidden md:block" />
                  but things on a small scale.
                </p>

                <button className="mt-8 rounded-md bg-[#2A7CC7] px-10 py-4 text-sm font-bold text-white">
                  SHOP NOW
                </button>
              </div>

              <div className="relative hidden md:block md:flex-1" />
            </div>

            <div
              className="
                pointer-events-none absolute
                left-1/2 bottom-[-140px] -translate-x-1/2
                h-[520px] w-[520px] rounded-full bg-white
                md:left-auto md:bottom-auto md:-right-40 md:-top-28 md:translate-x-0
                md:h-[640px] md:w-[640px]
              "
            />

            <img
              src={heroModel}
              alt="Hero Model"
              className="
                pointer-events-none absolute
                left-1/2 bottom-0 -translate-x-1/2 translate-y-6
                h-[340px] w-auto
                sm:h-[380px]
                md:left-auto md:right-0 md:bottom-0 md:translate-x-24 md:translate-y-16
                md:h-[520px]
              "
            />
          </div>
        </div>
      </section>
      <TopCategories />
    </>
  );
}
