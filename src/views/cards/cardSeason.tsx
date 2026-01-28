import { FC, useState, useEffect } from "react";

import Cards from "@/components/card";

import jikanApi from "@/services/jikanApi";
import { Anime } from "@/types/anime";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CardSeason: FC = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);

  const fetchData = async () => {
    try {
      const response = await jikanApi.get("/seasons/now");
      const limitedAnimes = response.data.data.slice(0, 20);
      setAnimes(limitedAnimes);
    } catch (error) {
      console.error("Error fetching season animes:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="season" className="w-full h-auto overflow-hidden">
      <h1 className="text-3xl font-bold mb-6">Season</h1>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={8}
        slidesPerView="auto"
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 5, // ⬅️ JANGAN 10
            spaceBetween: 20,
          },
        }}
        observer
        observeParents
        watchSlidesProgress
        className="w-full px-4"
      >
        {animes.map((anime) => (
          <SwiperSlide key={anime.mal_id}>
            <Cards data={anime} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSeason;
