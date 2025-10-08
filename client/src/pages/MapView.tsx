import TaiwanMap from "@/components/TaiwanMap";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function MapView() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-6" data-testid="button-back-to-home">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回首頁
          </Button>
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">探索台灣地酒地圖</h1>
          <p className="text-muted-foreground">
            點擊地圖上的區域，探索各地的特色酒莊
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <TaiwanMap />
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-card rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">12</div>
            <div className="text-sm text-muted-foreground">北部酒莊</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">8</div>
            <div className="text-sm text-muted-foreground">中部酒莊</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">15</div>
            <div className="text-sm text-muted-foreground">南部酒莊</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">6</div>
            <div className="text-sm text-muted-foreground">東部酒莊</div>
          </div>
        </div>
      </div>
    </div>
  );
}
