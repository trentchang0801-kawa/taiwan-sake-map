import { useState } from "react";
import { Wine, Beer, Grape, Trophy } from "lucide-react";
import RankingCard from "@/components/RankingCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockRankings = {
  清酒: [
    {
      rank: 1,
      id: "1",
      name: "花蓮清酒釀造所",
      type: "清酒",
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&q=80",
      score: 4.9,
      trend: "up" as const,
      trendValue: 2,
    },
    {
      rank: 2,
      id: "4",
      name: "宜蘭清酒館",
      type: "清酒",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80",
      score: 4.7,
      trend: "same" as const,
    },
    {
      rank: 3,
      id: "7",
      name: "台北清酒工坊",
      type: "清酒",
      image: "https://images.unsplash.com/photo-1606491048867-c4cea2a87d6f?w=400&q=80",
      score: 4.6,
      trend: "up" as const,
      trendValue: 1,
    },
    {
      rank: 4,
      id: "8",
      name: "新竹釀酒廠",
      type: "清酒",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80",
      score: 4.5,
      trend: "down" as const,
      trendValue: 1,
    },
    {
      rank: 5,
      id: "9",
      name: "桃園地酒莊",
      type: "清酒",
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&q=80",
      score: 4.4,
      trend: "same" as const,
    },
  ],
  精釀啤酒: [
    {
      rank: 1,
      id: "2",
      name: "台中精釀工坊",
      type: "精釀啤酒",
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80",
      score: 4.9,
      trend: "up" as const,
      trendValue: 3,
    },
    {
      rank: 2,
      id: "5",
      name: "台南啤酒廠",
      type: "精釀啤酒",
      image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&q=80",
      score: 4.6,
      trend: "same" as const,
    },
    {
      rank: 3,
      id: "10",
      name: "高雄精釀所",
      type: "精釀啤酒",
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80",
      score: 4.5,
      trend: "up" as const,
      trendValue: 1,
    },
    {
      rank: 4,
      id: "11",
      name: "台東啤酒廠",
      type: "精釀啤酒",
      image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&q=80",
      score: 4.4,
      trend: "down" as const,
      trendValue: 2,
    },
    {
      rank: 5,
      id: "12",
      name: "基隆釀酒坊",
      type: "精釀啤酒",
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80",
      score: 4.3,
      trend: "same" as const,
    },
  ],
  葡萄酒: [
    {
      rank: 1,
      id: "3",
      name: "南投葡萄酒莊",
      type: "葡萄酒",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80",
      score: 4.8,
      trend: "up" as const,
      trendValue: 1,
    },
    {
      rank: 2,
      id: "6",
      name: "彰化酒莊",
      type: "葡萄酒",
      image: "https://images.unsplash.com/photo-1566995541428-6a0d44c98631?w=400&q=80",
      score: 4.5,
      trend: "same" as const,
    },
    {
      rank: 3,
      id: "13",
      name: "苗栗葡萄園",
      type: "葡萄酒",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80",
      score: 4.4,
      trend: "down" as const,
      trendValue: 1,
    },
    {
      rank: 4,
      id: "14",
      name: "台中酒莊",
      type: "葡萄酒",
      image: "https://images.unsplash.com/photo-1566995541428-6a0d44c98631?w=400&q=80",
      score: 4.3,
      trend: "up" as const,
      trendValue: 2,
    },
    {
      rank: 5,
      id: "15",
      name: "嘉義葡萄莊園",
      type: "葡萄酒",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80",
      score: 4.2,
      trend: "same" as const,
    },
  ],
};

export default function Rankings() {
  const [selectedType, setSelectedType] = useState<keyof typeof mockRankings>("清酒");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">酒莊排行榜</h1>
          </div>
          <p className="text-muted-foreground">
            根據使用者評論與網路聲量綜合評分
          </p>
        </div>

        <Tabs value={selectedType} onValueChange={(v) => setSelectedType(v as keyof typeof mockRankings)}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="清酒" data-testid="tab-sake-rankings">
              <Wine className="h-4 w-4 mr-1" />
              清酒
            </TabsTrigger>
            <TabsTrigger value="精釀啤酒" data-testid="tab-beer-rankings">
              <Beer className="h-4 w-4 mr-1" />
              精釀啤酒
            </TabsTrigger>
            <TabsTrigger value="葡萄酒" data-testid="tab-wine-rankings">
              <Grape className="h-4 w-4 mr-1" />
              葡萄酒
            </TabsTrigger>
          </TabsList>

          <div className="max-w-3xl mx-auto space-y-3">
            {mockRankings[selectedType].map((ranking) => (
              <RankingCard key={ranking.id} {...ranking} />
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
}
