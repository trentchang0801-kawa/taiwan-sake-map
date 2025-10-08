import ReviewCard from '../ReviewCard';

export default function ReviewCardExample() {
  return (
    <div className="p-8 bg-background max-w-2xl">
      <ReviewCard
        username="王小明"
        rating={5}
        comment="非常棒的清酒！口感清爽，香氣宜人，很適合搭配日式料理。"
        pairingSuggestion="生魚片、壽司、烤雞肉串"
      />
    </div>
  );
}
