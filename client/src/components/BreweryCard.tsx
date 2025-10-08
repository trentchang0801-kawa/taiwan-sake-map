import { Star, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type BreweryCardProps = {
  id: string;
  name: string;
  type: string;
  region: string;
  image: string;
  rating: number;
  reviewCount: number;
};

export default function BreweryCard({
  id,
  name,
  type,
  region,
  image,
  rating,
  reviewCount,
}: BreweryCardProps) {
  return (
    <Link href={`/brewery/${id}`} data-testid={`card-brewery-${id}`}>
      <Card className="overflow-hidden hover-elevate transition-all duration-300 cursor-pointer group">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Badge className="absolute top-3 left-3" variant="secondary">
            {type}
          </Badge>
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="text-white font-bold text-lg mb-1">{name}</h3>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <MapPin className="h-3 w-3" />
              <span>{region}</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold">{rating.toFixed(1)}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({reviewCount} 則評論)
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
