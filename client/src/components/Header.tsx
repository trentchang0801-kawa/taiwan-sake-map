import { Link, useLocation } from "wouter";
import { Moon, Sun, TrendingUp, Map, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 hover-elevate active-elevate-2 px-3 py-2 rounded-lg transition-all cursor-pointer">
              <div className="text-2xl font-serif font-bold text-primary">
                台灣地酒
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <Link href="/rankings" data-testid="link-rankings">
              <Button
                variant={location.startsWith("/rankings") ? "secondary" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <TrendingUp className="h-4 w-4" />
                排行榜
              </Button>
            </Link>
            <Link href="/map" data-testid="link-map">
              <Button
                variant={location === "/map" ? "secondary" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <Map className="h-4 w-4" />
                地酒地圖
              </Button>
            </Link>
            <Link href="/pairing" data-testid="link-pairing">
              <Button
                variant={location === "/pairing" ? "secondary" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <UtensilsCrossed className="h-4 w-4" />
                搭餐建議
              </Button>
            </Link>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
