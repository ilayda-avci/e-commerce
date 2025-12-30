import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    kicker: "SUMMER 2020",
    title: "NEW COLLECTION",
    desc: "We know how large objects will act, but things on a small scale.",
    buttonText: "SHOP NOW",
    bg: "bg-[#A7D7D9]",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=60",
  },
  {
    kicker: "SUMMER 2020",
    title: "NEW COLLECTION",
    desc: "We know how large objects will act, but things on a small scale.",
    buttonText: "SHOP NOW",
    bg: "bg-[#23A6F0]",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=60",
  },
];

export default function MainSlider() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        className="w-full h-[620px]"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className={`${s.bg} h-full w-full`}>
              <div
                className="
                  max-w-6xl mx-auto h-full px-4
                  flex flex-col items-center justify-center text-center gap-4
                  md:flex-row md:text-left md:justify-between
                "
              >
                <div className="flex flex-col items-center md:items-start gap-4">
                  <p className="text-xs tracking-widest text-blue-900 font-semibold">
                    {s.kicker}
                  </p>

                  <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
                    {s.title}
                  </h1>

                  <p className="text-sm text-blue-900/70 max-w-xs">
                    {s.desc}
                  </p>

                  <button className="mt-2 px-6 py-3 rounded bg-blue-600 text-white font-semibold">
                    {s.buttonText}
                  </button>
                </div>
                <div className="mt-6 md:mt-0 w-full max-w-sm overflow-hidden rounded-2xl">
                  <img
                    src={s.img}
                    alt="slide"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
