import { Link, useLocation } from "wouter";
import { Moon, Sun, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  const categories = [
    { name: "清酒", path: "/category/sake" },
    { name: "精釀啤酒", path: "/category/beer" },
    { name: "葡萄酒", path: "/category/wine" },
  ];

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
            {categories.map((category) => (
              <Link key={category.path} href={category.path} data-testid={`link-${category.name}`}>
                <Button
                  variant={location === category.path ? "secondary" : "ghost"}
                  size="sm"
                  className="font-medium"
                >
                  {category.name}
                </Button>
              </Link>
            ))}
            <Link href="/rankings" data-testid="link-rankings">
              <Button
                variant={location === "/rankings" ? "secondary" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <TrendingUp className="h-4 w-4" />
                排行榜
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
