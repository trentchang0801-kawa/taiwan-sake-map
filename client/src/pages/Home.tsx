import { useState } from "react";
import { Wine, Beer, Grape, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import ReviewPost from "@/components/ReviewPost";
import CreateReviewDialog from "@/components/CreateReviewDialog";
import TaiwanMap from "@/components/TaiwanMap";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockReviews = [
  {
    id: "1",
    username: "王小明",
    userAvatar: undefined,
    breweryName: "花蓮清酒釀造所 - 純米大吟釀",
    breweryId: "1",
    region: "花蓮",
    type: "清酒",
    rating: 5,
    comment: "非常棒的清酒！口感清爽，香氣宜人，帶有淡雅的花果香。搭配生魚片超級適合！",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80",
    timestamp: "2小時前",
  },
  {
    id: "2",
    username: "陳美美",
    userAvatar: undefined,
    breweryName: "台中精釀工坊 - IPA",
    breweryId: "2",
    region: "台中",
    type: "精釀啤酒",
    rating: 4,
    comment: "苦味適中，帶有柑橘香氣，非常適合夏天飲用。CP值很高！",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80",
    timestamp: "5小時前",
  },
  {
    id: "3",
    username: "李大華",
    userAvatar: undefined,
    breweryName: "南投葡萄酒莊 - 紅酒",
    breweryId: "3",
    region: "南投",
    type: "葡萄酒",
    rating: 5,
    comment: "使用台灣在地葡萄釀造，果香濃郁，單寧柔順。搭配牛排一流！",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    timestamp: "8小時前",
  },
  {
    id: "4",
    username: "張雅雯",
    userAvatar: undefined,
    breweryName: "宜蘭清酒館 - 吟釀",
    breweryId: "4",
    region: "宜蘭",
    type: "清酒",
    rating: 4,
    comment: "香氣優雅，口感細緻滑順。冷飲熱飲都很適合。",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80",
    timestamp: "1天前",
  },
  {
    id: "5",
    username: "林志明",
    userAvatar: undefined,
    breweryName: "台南啤酒廠 - 小麥啤酒",
    breweryId: "5",
    region: "台南",
    type: "精釀啤酒",
    rating: 5,
    comment: "清爽順口，帶有小麥的香氣，很適合配熱炒！",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&q=80",
    timestamp: "1天前",
  },
  {
    id: "6",
    username: "黃小芳",
    userAvatar: undefined,
    breweryName: "彰化酒莊 - 白葡萄酒",
    breweryId: "6",
    region: "彰化",
    type: "葡萄酒",
    rating: 4,
    comment: "酸度適中，帶有清新的果香，很適合搭海鮮。",
    image: "https://images.unsplash.com/photo-1566995541428-6a0d44c98631?w=800&q=80",
    timestamp: "2天前",
  },
];

export default function Home() {
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredReviews = selectedType === "all" 
    ? mockReviews 
    : mockReviews.filter(r => r.type === selectedType);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            台灣地酒社群
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            記錄你的品酒時刻，分享美好體驗
          </p>
          
          <Link href="/rankings">
            <Button size="lg" className="gap-2 text-lg px-8 py-6 h-auto" data-testid="button-rankings">
              <TrendingUp className="h-6 w-6" />
              查看排行榜
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-8 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <CreateReviewDialog />
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">最新評論</h2>
            
            <Tabs value={selectedType} onValueChange={setSelectedType} className="hidden md:block">
              <TabsList>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review) => (
              <ReviewPost key={review.id} {...review} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">探索台灣地酒地圖</h2>
            <p className="text-muted-foreground">點擊地圖探索各地酒莊</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <TaiwanMap />
          </div>
          <div className="text-center mt-8">
            <Link href="/map">
              <Button variant="outline" size="lg" data-testid="button-view-map">
                查看完整地圖
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
