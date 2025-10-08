import { Star, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type ReviewPostProps = {
  id: string;
  username: string;
  userAvatar?: string;
  breweryName: string;
  breweryId: string;
  region: string;
  type: string;
  rating: number;
  comment: string;
  image: string;
  timestamp: string;
};

export default function ReviewPost({
  id,
  username,
  userAvatar,
  breweryName,
  breweryId,
  region,
  type,
  rating,
  comment,
  image,
  timestamp,
}: ReviewPostProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all" data-testid={`review-post-${id}`}>
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Link href={`/user/${username}`}>
            <Avatar className="h-10 w-10 cursor-pointer">
              <AvatarImage src={userAvatar} />
              <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex-1">
            <Link href={`/user/${username}`}>
              <div className="font-semibold hover:text-primary transition-colors cursor-pointer">
                {username}
              </div>
            </Link>
            <div className="text-sm text-muted-foreground">{timestamp}</div>
          </div>
        </div>

        <Link href={`/brewery/${breweryId}`}>
          <div className="relative aspect-square rounded-lg overflow-hidden mb-3 cursor-pointer group">
            <img
              src={image}
              alt={breweryName}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        <div className="space-y-2">
          <Link href={`/brewery/${breweryId}`}>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-bold text-lg hover:text-primary transition-colors cursor-pointer">
                {breweryName}
              </h3>
              <Badge variant="outline">{type}</Badge>
            </div>
          </Link>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{region}</span>
          </div>

          <div className="flex items-center gap-1">
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

          {comment && (
            <p className="text-foreground leading-relaxed">{comment}</p>
          )}
        </div>
      </div>
    </Card>
  );
}
