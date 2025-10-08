import { useRoute } from "wouter";
import { Star, MapPin, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";

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

const mockProducts = [
  {
    id: "1",
    name: "純米大吟釀",
    description: "使用台灣在地優質稻米釀造，口感清爽細緻，帶有淡雅果香。",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80",
  },
  {
    id: "2",
    name: "本釀造",
    description: "傳統釀造工藝，口感醇厚，適合搭配各式料理。",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&q=80",
  },
  {
    id: "3",
    name: "吟釀清酒",
    description: "低溫長期發酵，香氣優雅，口感柔順。",
    image: "https://images.unsplash.com/photo-1606491048867-c4cea2a87d6f?w=400&q=80",
  },
];

const mockReviews = [
  {
    id: "1",
    username: "王小明",
    rating: 5,
    comment: "非常棒的清酒！口感清爽，香氣宜人，很適合搭配日式料理。",
    pairingSuggestion: "生魚片、壽司、烤雞肉串",
  },
  {
    id: "2",
    username: "陳美美",
    rating: 4,
    comment: "品質不錯，帶有獨特的台灣風味，值得一試。",
    pairingSuggestion: "海鮮、冷盤、白肉魚",
  },
  {
    id: "3",
    username: "李大華",
    rating: 5,
    comment: "完全不輸給日本清酒，而且更有台灣在地特色！",
    pairingSuggestion: "烤肉、火鍋、燒烤",
  },
];

export default function BreweryDetail() {
  const [, params] = useRoute("/brewery/:id");

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-96 overflow-hidden">
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

            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="products" data-testid="tab-products">品項</TabsTrigger>
                <TabsTrigger value="reviews" data-testid="tab-reviews">評論</TabsTrigger>
                <TabsTrigger value="pairing" data-testid="tab-pairing">搭餐建議</TabsTrigger>
              </TabsList>
              
              <TabsContent value="products" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {mockProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-4">
                  {mockReviews.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="pairing" className="mt-6">
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold mb-4">推薦搭配</h3>
                  <div className="grid gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">海鮮料理</h4>
                      <p className="text-sm text-muted-foreground">
                        清爽的清酒最適合搭配新鮮海鮮，如生魚片、壽司、烤魚等，能襯托出海鮮的鮮甜。
                      </p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">日式料理</h4>
                      <p className="text-sm text-muted-foreground">
                        與傳統日式料理如天婦羅、串燒、茶碗蒸等完美搭配。
                      </p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">清淡台菜</h4>
                      <p className="text-sm text-muted-foreground">
                        也很適合搭配台灣清淡的家常菜，如蒸魚、炒青菜等。
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-card border border-card-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">購買資訊</h3>
                <Button className="w-full gap-2" data-testid="button-purchase">
                  <ExternalLink className="h-4 w-4" />
                  前往購買
                </Button>
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium mb-3">酒莊資訊</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">類型</span>
                      <span className="font-medium">{mockBrewery.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">地區</span>
                      <span className="font-medium">{mockBrewery.region}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">評分</span>
                      <span className="font-medium">{mockBrewery.rating} / 5.0</span>
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
