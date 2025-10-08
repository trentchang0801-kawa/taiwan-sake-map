import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type ReviewCardProps = {
  username: string;
  rating: number;
  comment: string;
  pairingSuggestion?: string;
};

export default function ReviewCard({
  username,
  rating,
  comment,
  pairingSuggestion,
}: ReviewCardProps) {
  return (
    <Card className="p-6" data-testid="card-review">
      <div className="flex items-start gap-4">
        <Avatar>
          <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold">{username}</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating
                      ? "fill-amber-400 text-amber-400"
                      : "text-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-foreground mb-2">{comment}</p>
          {pairingSuggestion && (
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">搭餐建議：</span>
              {pairingSuggestion}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
