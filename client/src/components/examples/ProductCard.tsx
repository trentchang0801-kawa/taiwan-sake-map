import ProductCard from '../ProductCard';

export default function ProductCardExample() {
  return (
    <div className="p-8 bg-background max-w-xs">
      <ProductCard
        name="純米大吟釀"
        description="使用台灣在地優質稻米釀造，口感清爽細緻，帶有淡雅果香。"
        image="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80"
      />
    </div>
  );
}
