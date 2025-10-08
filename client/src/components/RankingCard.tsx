import { Star, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type RankingCardProps = {
  rank: number;
  id: string;
  name: string;
  type: string;
  image: string;
  score: number;
  trend: "up" | "down" | "same";
  trendValue?: number;
};

const getMedalColor = (rank: number) => {
  if (rank === 1) return "text-amber-500";
  if (rank === 2) return "text-slate-400";
  if (rank === 3) return "text-amber-700";
  return "text-muted-foreground";
};

export default function RankingCard({
  rank,
  id,
  name,
  type,
  image,
  score,
  trend,
  trendValue,
}: RankingCardProps) {
  return (
    <Link href={`/brewery/${id}`} data-testid={`ranking-card-${rank}`}>
      <Card className="p-4 hover-elevate transition-all cursor-pointer">
        <div className="flex items-center gap-4">
          <div className={`font-serif text-4xl font-bold min-w-12 text-center ${getMedalColor(rank)}`}>
            {rank}
          </div>
          
          <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg truncate">{name}</h3>
              <Badge variant="outline" className="flex-shrink-0">{type}</Badge>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-semibold">{score.toFixed(1)}</span>
              </div>
              {trend !== "same" && (
                <div className={`flex items-center gap-1 text-sm ${
                  trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  {trend === "up" ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {trendValue && <span>{trendValue}</span>}
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
