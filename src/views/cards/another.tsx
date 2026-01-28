import { FC, useState, useEffect } from "react";

import Cards from "@/components/card";

import jikanApi from "@/services/jikanApi";
import { Anime } from "@/types/anime";

const CardAnother: FC = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);

  const fetchData = async () => {
    try {
      const response = await jikanApi.get("/schedules");
      setAnimes(response.data.data);
    } catch (error) {
      console.error("Error fetching season animes:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="another" className="mx-auto">
      <h1 className="text-3xl font-bold">Another</h1>
      <div className="flex gap-4 justify-center mt-10 flex-wrap">
        {animes.map((anime) => (
          <Cards key={anime.mal_id} data={anime} />
        ))}
      </div>
    </div>
  );
};

export default CardAnother;
