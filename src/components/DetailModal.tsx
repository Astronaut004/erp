import { LucideIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export interface DetailItem {
  icon: LucideIcon;
  label: string;
  tagline: string;
  desc: string;
  description: string;
  highlights: string[];
  badge?: string;
  highlight?: boolean;
}

interface DetailModalProps {
  item: DetailItem | null;
  onClose: () => void;
}

export const DetailModal = ({ item, onClose }: DetailModalProps) => {
  if (!item) return null;

  return (
    <Dialog open={!!item} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-lg w-full">
        <DialogHeader>
          <div className="flex items-start gap-4 mb-2">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <item.icon size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <DialogTitle className="text-xl font-bold">{item.label}</DialogTitle>
                {item.badge && (
                  <Badge variant="default" className="text-xs shrink-0">{item.badge}</Badge>
                )}
              </div>
              <DialogDescription className="text-sm text-primary font-medium mt-0.5">
                {item.tagline}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>

        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Key Highlights
          </p>
          <ul className="space-y-2">
            {item.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm">
                <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};
