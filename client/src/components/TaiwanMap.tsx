import { useState } from "react";
import { useLocation } from "wouter";

type Region = {
  id: string;
  name: string;
  breweryCount: number;
  path: string;
};

const regions: Region[] = [
  { id: "north", name: "北部", breweryCount: 12, path: "M 180 80 L 220 80 L 240 120 L 220 140 L 180 130 Z" },
  { id: "central", name: "中部", breweryCount: 8, path: "M 170 150 L 230 150 L 240 190 L 200 200 L 170 185 Z" },
  { id: "south", name: "南部", breweryCount: 15, path: "M 165 210 L 215 210 L 220 260 L 190 270 L 165 250 Z" },
  { id: "east", name: "東部", breweryCount: 6, path: "M 250 100 L 280 100 L 290 240 L 260 250 L 240 200 L 250 140 Z" },
];

export default function TaiwanMap() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [, setLocation] = useLocation();

  const handleRegionClick = (regionId: string) => {
    setLocation(`/region/${regionId}`);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 400 350"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {regions.map((region) => (
          <g key={region.id}>
            <path
              d={region.path}
              className={`
                transition-all duration-200 cursor-pointer
                ${hoveredRegion === region.id 
                  ? 'fill-primary/30 stroke-primary stroke-2' 
                  : 'fill-primary/10 stroke-primary/40 stroke-1'
                }
              `}
              filter={hoveredRegion === region.id ? "url(#glow)" : undefined}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
              onClick={() => handleRegionClick(region.id)}
              data-testid={`map-region-${region.id}`}
            />
          </g>
        ))}
      </svg>

      {hoveredRegion && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="bg-card border border-card-border rounded-lg p-4 shadow-lg">
            <div className="text-lg font-bold text-card-foreground">
              {regions.find(r => r.id === hoveredRegion)?.name}
            </div>
            <div className="text-sm text-muted-foreground">
              {regions.find(r => r.id === hoveredRegion)?.breweryCount} 間酒莊
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
