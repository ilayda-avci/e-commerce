import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    tag: "SUMMER 2025",
    title: "NEW COLLECTION",
    desc: "We know how large objects will act, but things on a small scale.",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    bg: "#23A6F0",
  },
  {
    id: 2,
    tag: "SUMMER 2025",
    title: "BEST SELLERS",
    desc: "We know how large objects will act, but things on a small scale.",
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80",
    bg: "#2DC071",
  },
  {
    id: 3,
    tag: "SUMMER 2025",
    title: "NEW ARRIVALS",
    desc: "We know how large objects will act, but things on a small scale.",
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80",
    bg: "#E77C40",
  },
];

export default function MainSlider() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full min-h-[600px] flex items-center"
              style={{ backgroundColor: slide.bg }}
            >
              {/* Sağdaki model fotoğrafı */}
              <div className="absolute right-0 top-0 h-full w-1/2">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Sol içerik */}
              <div className="relative z-10 w-1/2 px-16 py-20 flex flex-col gap-6">
                <p className="text-sm font-bold tracking-widest text-white">
                  {slide.tag}
                </p>
                <h1 className="text-6xl font-extrabold text-white leading-tight">
                  {slide.title}
                </h1>
                <p className="text-base text-white/80 max-w-sm">
                  {slide.desc}
                </p>
                <Link
                  to="/shop"
                  className="w-fit bg-[#2DC071] text-white font-bold px-8 py-4 rounded"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}