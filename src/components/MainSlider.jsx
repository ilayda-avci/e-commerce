export default function MainSlider() {
  return (
    <section className="w-full overflow-x-hidden">
      <div className="w-full h-[620px] bg-[#A7D7D9]">
        <div
          className="
            max-w-6xl mx-auto h-full px-4
            flex flex-col items-center justify-center text-center gap-6
            md:flex-row md:justify-between md:text-left
          "
        >
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-xs tracking-widest font-semibold text-blue-900">
              SUMMER 2020
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              NEW COLLECTION
            </h1>

            <p className="text-sm text-blue-900/70 max-w-xs">
              We know how large objects will act, but things on a small scale.
            </p>

            <button className="mt-2 px-6 py-3 rounded bg-blue-600 text-white font-semibold">
              SHOP NOW
            </button>
          </div>

          <div className="w-full max-w-sm overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=60"
              alt="hero"
              className="w-full h-64 md:h-80 object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
