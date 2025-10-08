import { useRoute } from "wouter";
import { Star, MapPin, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ReviewPost from "@/components/ReviewPost";

const mockBrewery = {
  id: "1",
  name: "花蓮清酒釀造所",
  type: "清酒",
  region: "花蓮",
  image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1200&q=80",
  rating: 4.8,
  reviewCount: 124,
  description: "花蓮清酒釀造所成立於 2015 年，是台灣第一家獲得日本清酒釀造技術認證的酒莊。我們堅持使用花蓮在地優質稻米，結合日本傳統釀造工藝，釀造出具有台灣風土特色的清酒。",
  purchaseUrl: "https://example.com/shop",
};

const mockReviews = [
  {
    id: "1",
    username: "王小明",
    userAvatar: undefined,
    breweryName: "純米大吟釀",
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
    breweryName: "本釀造",
    breweryId: "1",
    region: "花蓮",
    type: "清酒",
    rating: 4,
    comment: "傳統釀造工藝，口感醇厚，搭配燒烤非常適合。",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80",
    timestamp: "1天前",
  },
  {
    id: "3",
    username: "李大華",
    userAvatar: undefined,
    breweryName: "吟釀清酒",
    breweryId: "1",
    region: "花蓮",
    type: "清酒",
    rating: 5,
    comment: "低溫長期發酵，香氣優雅，口感柔順。冷飲最佳！",
    image: "https://images.unsplash.com/photo-1606491048867-c4cea2a87d6f?w=800&q=80",
    timestamp: "3天前",
  },
];

export default function BreweryDetail() {
  const [, params] = useRoute("/brewery/:id");

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-80 overflow-hidden">
        <img
          src={mockBrewery.image}
          alt={mockBrewery.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <Link href="/">
              <Button variant="ghost" className="mb-4 text-white hover:text-white" data-testid="button-back">
                <ArrowLeft className="h-4 w-4 mr-2" />
                返回
              </Button>
            </Link>
            <Badge className="mb-3" variant="secondary">{mockBrewery.type}</Badge>
            <h1 className="text-4xl font-bold text-white mb-2">{mockBrewery.name}</h1>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{mockBrewery.region}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-semibold">{mockBrewery.rating}</span>
                <span>({mockBrewery.reviewCount} 則評論)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">關於酒莊</h2>
              <p className="text-muted-foreground leading-relaxed">
                {mockBrewery.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">用戶評論</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockReviews.map((review) => (
                  <ReviewPost key={review.id} {...review} />
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-card border border-card-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">購買資訊</h3>
                <Button className="w-full gap-2 mb-6" data-testid="button-purchase">
                  <ExternalLink className="h-4 w-4" />
                  前往購買
                </Button>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">推薦搭配</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="font-medium text-sm mb-1">海鮮料理</div>
                        <p className="text-xs text-muted-foreground">
                          生魚片、壽司、烤魚
                        </p>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="font-medium text-sm mb-1">日式料理</div>
                        <p className="text-xs text-muted-foreground">
                          天婦羅、串燒、茶碗蒸
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
