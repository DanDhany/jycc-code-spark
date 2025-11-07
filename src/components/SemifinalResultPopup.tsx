import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type SemifinalResultPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenGallery?: () => void;
};

const SemifinalResultPopup = ({ open, onOpenChange, onOpenGallery }: SemifinalResultPopupProps) => {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-[95%] sm:w-[90%] rounded-lg p-0 overflow-y-auto max-h-[85vh]">
        <DialogHeader className="p-4 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
          <DialogTitle className="text-xl md:text-2xl font-bold text-center">
            Pengumpulan Karya Semifinalis
          </DialogTitle>
        </DialogHeader>

        <div className="px-4 pb-4 space-y-3">
          <Badge className="mx-auto block bg-primary/10 text-primary border-primary/20">
            Pengingat: Segera lakukan pengumpulan karya semifinal.
          </Badge>
          <p className="text-center text-muted-foreground text-sm">
            Silakan gunakan tautan berikut untuk mengunggah karya Anda sesuai ketentuan.
          </p>
          <div className="flex justify-center">
            <Button className="px-6" onClick={() => window.open("https://forms.gle/xt12es8rUoNxs6xUA", "_blank")}>Buka Form Pengumpulan</Button>
          </div>
          <div className="flex justify-center gap-3">
            <Button onClick={() => { onOpenChange(false); onOpenGallery && onOpenGallery(); }}>Lihat Hasil Semifinal</Button>
            <Button variant="outline" onClick={() => window.open("https://docs.google.com/document/d/1lZ3f-DMq2fRhGWUmtZJ-ypF78oFt4oHq?rtpof=true&usp=drive_fs", "_blank")}>Template Semifinal</Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>Tutup</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SemifinalResultPopup;