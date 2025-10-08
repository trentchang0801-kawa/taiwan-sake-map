import { Wine, Beer, Grape, UtensilsCrossed } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const pairingSuggestions = {
  清酒: [
    {
      category: "海鮮料理",
      description: "清酒的清爽口感最適合搭配海鮮",
      items: ["生魚片", "壽司", "烤魚", "蒸魚", "海鮮鍋"],
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
    },
    {
      category: "日式料理",
      description: "傳統日式料理與清酒是絕配",
      items: ["天婦羅", "串燒", "茶碗蒸", "煮物", "烏龍麵"],
      image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=800&q=80",
    },
    {
      category: "清淡台菜",
      description: "適合搭配清爽的台灣料理",
      items: ["蒸魚", "炒青菜", "白斬雞", "滷味", "湯品"],
      image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&q=80",
    },
  ],
  精釀啤酒: [
    {
      category: "燒烤料理",
      description: "啤酒的苦味與燒烤香氣完美結合",
      items: ["烤肉", "炸雞", "香腸", "烤玉米", "串燒"],
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    },
    {
      category: "重口味料理",
      description: "精釀啤酒能解膩提味",
      items: ["炸物", "薯條", "披薩", "漢堡", "辣味料理"],
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
    },
    {
      category: "熱炒小吃",
      description: "台式熱炒與啤酒是經典組合",
      items: ["鹽酥雞", "三杯雞", "快炒", "滷味", "鐵板料理"],
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80",
    },
  ],
  葡萄酒: [
    {
      category: "牛排",
      description: "紅酒與牛排是經典搭配",
      items: ["菲力牛排", "肋眼牛排", "紐約客", "T骨牛排", "戰斧牛排"],
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
    },
    {
      category: "起司拼盤",
      description: "葡萄酒與起司相得益彰",
      items: ["硬質起司", "軟質起司", "藍紋起司", "煙燻起司", "起司拼盤"],
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&q=80",
    },
    {
      category: "精緻西餐",
      description: "適合搭配精緻的西式料理",
      items: ["羊排", "鴨胸", "鵝肝", "龍蝦", "義大利麵"],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    },
  ],
};

export default function Pairing() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <UtensilsCrossed className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">搭餐建議</h1>
          </div>
          <p className="text-muted-foreground">
            找到最適合你的酒食搭配
          </p>
        </div>

        <Tabs defaultValue="清酒" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="清酒" data-testid="tab-sake-pairing">
              <Wine className="h-4 w-4 mr-1" />
              清酒
            </TabsTrigger>
            <TabsTrigger value="精釀啤酒" data-testid="tab-beer-pairing">
              <Beer className="h-4 w-4 mr-1" />
              精釀啤酒
            </TabsTrigger>
            <TabsTrigger value="葡萄酒" data-testid="tab-wine-pairing">
              <Grape className="h-4 w-4 mr-1" />
              葡萄酒
            </TabsTrigger>
          </TabsList>

          {Object.entries(pairingSuggestions).map(([type, suggestions]) => (
            <TabsContent key={type} value={type}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {suggestions.map((suggestion, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover-elevate transition-all"
                    data-testid={`pairing-card-${index}`}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={suggestion.image}
                        alt={suggestion.category}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">
                        {suggestion.category}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4">
                        {suggestion.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {suggestion.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="px-3 py-1 bg-muted rounded-full text-sm"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <section className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">搭餐小技巧</h2>
          <div className="grid gap-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">1. 相似原則</h3>
              <p className="text-sm text-muted-foreground">
                選擇風味相近的酒款與食物，例如清淡的酒搭配清淡的料理，濃郁的酒搭配重口味的食物。
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">2. 對比原則</h3>
              <p className="text-sm text-muted-foreground">
                利用對比來平衡味道，例如用清爽的酒來解膩油膩的食物，或用甜味酒來中和辛辣。
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">3. 地域搭配</h3>
              <p className="text-sm text-muted-foreground">
                當地的酒搭配當地的料理通常是最佳選擇，因為它們在風土文化中自然形成完美搭配。
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">4. 個人喜好</h3>
              <p className="text-sm text-muted-foreground">
                最重要的是找到自己喜歡的搭配方式，不要被規則限制，勇於嘗試新組合。
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
