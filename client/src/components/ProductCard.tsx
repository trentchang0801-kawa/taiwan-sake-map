import { Card } from "@/components/ui/card";

type ProductCardProps = {
  name: string;
  description: string;
  image: string;
};

export default function ProductCard({ name, description, image }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all" data-testid="card-product">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </Card>
  );
}
