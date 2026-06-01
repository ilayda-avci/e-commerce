import MainSlider from "../components/MainSlider";
import TopCategories from "../components/TopCategories";

export default function HomePage() {
  return (
    <>
      <MainSlider />
      
      {/* Editor's Pick */}
      <section className="w-full bg-[#FAFAFA] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#252B42]">EDITOR'S PICK</h2>
            <p className="mt-2 text-sm text-gray-500">Problems trying to resolve the conflict between</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Sol büyük kart */}
            <div className="relative flex-1 min-h-[400px] bg-gray-200 overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1520975958225-0f4d8b49caa1?auto=format&fit=crop&w=900&q=60"
                alt="Men"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white px-6 py-2">
                <span className="font-bold text-[#252B42]">MEN</span>
              </div>
            </div>

            {/* Orta kart */}
            <div className="relative flex-1 min-h-[400px] bg-gray-200 overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=60"
                alt="Women"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white px-6 py-2">
                <span className="font-bold text-[#252B42]">WOMEN</span>
              </div>
            </div>

            {/* Sağ iki küçük kart */}
            <div className="flex flex-col gap-4 flex-1">
              <div className="relative flex-1 min-h-[190px] bg-gray-200 overflow-hidden rounded">
                <img
                  src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=900&q=60"
                  alt="Accessories"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2">
                  <span className="font-bold text-[#252B42]">ACCESSORIES</span>
                </div>
              </div>
              <div className="relative flex-1 min-h-[190px] bg-gray-200 overflow-hidden rounded">
                <img
                  src="https://images.unsplash.com/photo-1471286174890-9c112ac6476f?auto=format&fit=crop&w=900&q=60"
                  alt="Kids"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2">
                  <span className="font-bold text-[#252B42]">KIDS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TopCategories />
    </>
  );
}