import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Anime } from "@/types/anime";

type CardsProps = {
  data: Anime;
};

const Cards = ({ data }: CardsProps) => {
  return (
    <Card className="relative w-50 h-60 max-w-sm pt-0 overflow-hidden">
      <img
        src={data.images.jpg.image_url}
        alt={data.title}
        className="relative z-20 aspect-video w-full h-full object-cover brightness-60"
      />

      <div className="absolute bottom-0 left-0 right-0 z-40">
        <h3 className="text-white p-2 text-center">{data.title}</h3>

        <div className="text-white pb-2 text-center">
          <Badge variant="secondary">{data.score ? data.score : "--"}</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Cards;
