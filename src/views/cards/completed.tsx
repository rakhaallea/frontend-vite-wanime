import { FC, useState, useEffect } from "react";

import Cards from "@/components/card";

import jikanApi from "@/services/jikanApi";
import { Anime } from "@/types/anime";

const CardCompleted: FC = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);

  const fetchData = async () => {
    try {
      const response = await jikanApi.get("/seasons/now");
      setAnimes(response.data.data);
    } catch (error) {
      console.error("Error fetching season animes:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="completed" className="mx-auto">
      <h1 className="text-3xl font-bold">Completed</h1>
      <div className="flex gap-4 justify-center mt-10">
        {animes.map((anime) => (
          <Cards key={anime.mal_id} data={anime} />
        ))}
      </div>
    </div>
  );
};

export default CardCompleted;
