import BreweryCard from '../BreweryCard';

export default function BreweryCardExample() {
  return (
    <div className="p-8 bg-background max-w-sm">
      <BreweryCard
        id="1"
        name="花蓮清酒釀造所"
        type="清酒"
        region="花蓮"
        image="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80"
        rating={4.8}
        reviewCount={124}
      />
    </div>
  );
}
