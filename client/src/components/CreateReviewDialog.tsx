import { useState } from "react";
import { Camera, Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CreateReviewDialog() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Review submitted");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2" data-testid="button-create-review">
          <Camera className="h-5 w-5" />
          發表評論
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>分享你的品酒體驗</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>選擇酒莊</Label>
            <Select>
              <SelectTrigger data-testid="select-brewery">
                <SelectValue placeholder="選擇酒莊..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">花蓮清酒釀造所</SelectItem>
                <SelectItem value="2">台中精釀工坊</SelectItem>
                <SelectItem value="3">南投葡萄酒莊</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>上傳照片</Label>
            <div className="mt-2 flex items-center justify-center w-full h-32 border-2 border-dashed rounded-lg hover-elevate cursor-pointer">
              <div className="text-center">
                <Camera className="mx-auto h-8 w-8 text-muted-foreground" />
                <p className="mt-2 text-sm text-muted-foreground">點擊上傳照片</p>
              </div>
              <Input
                type="file"
                className="hidden"
                accept="image/*"
                data-testid="input-photo"
              />
            </div>
          </div>

          <div>
            <Label>評分</Label>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-8 w-8 cursor-pointer transition-colors ${
                    star <= (hoveredRating || rating)
                      ? "fill-amber-400 text-amber-400"
                      : "text-muted-foreground/30"
                  }`}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                  data-testid={`star-${star}`}
                />
              ))}
            </div>
          </div>

          <div>
            <Label>評論內容</Label>
            <Textarea
              placeholder="分享你的品酒感想..."
              className="mt-2 min-h-24"
              data-testid="textarea-comment"
            />
          </div>

          <div>
            <Label>搭餐建議（選填）</Label>
            <Input
              placeholder="例：生魚片、壽司"
              className="mt-2"
              data-testid="input-pairing"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => setOpen(false)}
              data-testid="button-cancel"
            >
              取消
            </Button>
            <Button type="submit" className="flex-1" data-testid="button-submit-review">
              發布
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
