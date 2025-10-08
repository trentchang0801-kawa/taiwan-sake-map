import { useState } from "react";
import { Link } from "wouter";
import TaiwanMap from "@/components/TaiwanMap";
import BreweryCard from "@/components/BreweryCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Wine, Beer, Grape } from "lucide-react";

const mockBreweries = [
  {
    id: "1",
    name: "花蓮清酒釀造所",
    type: "清酒",
    region: "花蓮",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80",
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: "2",
    name: "台中精釀工坊",
    type: "精釀啤酒",
    region: "台中",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80",
    rating: 4.9,
    reviewCount: 203,
  },
  {
    id: "3",
    name: "南投葡萄酒莊",
    type: "葡萄酒",
    region: "南投",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: "4",
    name: "宜蘭清酒館",
    type: "清酒",
    region: "宜蘭",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80",
    rating: 4.6,
    reviewCount: 89,
  },
  {
    id: "5",
    name: "台南啤酒廠",
    type: "精釀啤酒",
    region: "台南",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&q=80",
    rating: 4.5,
    reviewCount: 167,
  },
  {
    id: "6",
    name: "彰化酒莊",
    type: "葡萄酒",
    region: "彰化",
    image: "https://images.unsplash.com/photo-1566995541428-6a0d44c98631?w=800&q=80",
    rating: 4.4,
    reviewCount: 92,
  },
];

export default function Home() {
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredBreweries = selectedType === "all" 
    ? mockBreweries 
    : mockBreweries.filter(b => b.type === selectedType);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(160,135,116,0.1),transparent_50%)]" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
            探索台灣地酒
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            發現在地清酒、精釀啤酒與葡萄酒的美好
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Link href="/rankings">
              <Button size="lg" data-testid="button-view-rankings">
                查看排行榜
              </Button>
            </Link>
            <Button variant="outline" size="lg" data-testid="button-explore-map">
              探索地圖
            </Button>
          </div>
          
          <div className="mt-12">
            <TaiwanMap />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">精選酒莊</h2>
          
          <Tabs value={selectedType} onValueChange={setSelectedType} className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all" data-testid="tab-all">全部</TabsTrigger>
              <TabsTrigger value="清酒" data-testid="tab-sake">
                <Wine className="h-4 w-4 mr-1" />
                清酒
              </TabsTrigger>
              <TabsTrigger value="精釀啤酒" data-testid="tab-beer">
                <Beer className="h-4 w-4 mr-1" />
                啤酒
              </TabsTrigger>
              <TabsTrigger value="葡萄酒" data-testid="tab-wine">
                <Grape className="h-4 w-4 mr-1" />
                葡萄酒
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBreweries.map((brewery) => (
              <BreweryCard key={brewery.id} {...brewery} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
