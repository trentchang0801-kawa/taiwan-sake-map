import RankingCard from '../RankingCard';

export default function RankingCardExample() {
  return (
    <div className="p-8 bg-background space-y-3 max-w-2xl">
      <RankingCard
        rank={1}
        id="1"
        name="台中精釀工坊"
        type="精釀啤酒"
        image="https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80"
        score={4.9}
        trend="up"
        trendValue={2}
      />
      <RankingCard
        rank={2}
        id="2"
        name="南投葡萄酒莊"
        type="葡萄酒"
        image="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80"
        score={4.7}
        trend="same"
      />
      <RankingCard
        rank={3}
        id="3"
        name="宜蘭清酒館"
        type="清酒"
        image="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&q=80"
        score={4.6}
        trend="down"
        trendValue={1}
      />
    </div>
  );
}
