import ReviewPost from '../ReviewPost';

export default function ReviewPostExample() {
  return (
    <div className="p-8 bg-background max-w-md">
      <ReviewPost
        id="1"
        username="王小明"
        breweryName="花蓮清酒釀造所 - 純米大吟釀"
        breweryId="1"
        region="花蓮"
        type="清酒"
        rating={5}
        comment="非常棒的清酒！口感清爽，香氣宜人，帶有淡雅的花果香。搭配生魚片超級適合！"
        image="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80"
        timestamp="2小時前"
      />
    </div>
  );
}
