import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type FinalResultPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const FinalResultPopup = ({ open, onOpenChange }: FinalResultPopupProps) => {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-[95%] sm:w-[90%] rounded-lg p-0 overflow-y-auto max-h-[85vh]">
        <DialogHeader className="p-4 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
          <DialogTitle className="text-xl md:text-2xl font-bold text-center">
            Pengumpulan Karya Finalis
          </DialogTitle>
        </DialogHeader>

        <div className="px-4 pb-4 space-y-3">
          <Badge className="mx-auto block bg-primary/10 text-primary border-primary/20">
            Pengingat: Segera lakukan pengumpulan karya final.
          </Badge>
          <p className="text-center text-muted-foreground text-sm">
            Silakan gunakan tautan berikut untuk mengunggah karya Anda sesuai ketentuan.
          </p>
          <div className="flex justify-center">
            <Button className="px-6" onClick={() => window.open("https://forms.gle/QvM6Byu7EMGeX1PfA", "_blank")}>Buka Form Pengumpulan</Button>
          </div>
          <div className="flex justify-center">
            <Button variant="outline" className="px-6" onClick={() => window.open("https://drive.google.com/file/d/1bilzDRk0K3jTzbWlIWJggXg2emJaRv9B/view?usp=sharing", "_blank")}>Lihat Hasil Final</Button>
          </div>
          <div className="sticky bottom-0 bg-background/80 backdrop-blur-sm mt-2 px-4 py-2 flex justify-center gap-3">
            <Button className="w-full sm:w-auto" variant="outline" onClick={() => { onOpenChange(false); const target = document.getElementById("timeline-batas-pengumpulan-finalis") || document.getElementById("timeline"); target && target.scrollIntoView({ behavior: "smooth", block: "center" }); }}>Ke Batas Pengumpulan</Button>
            <Button className="w-full sm:w-auto" variant="outline" onClick={() => onOpenChange(false)}>Tutup</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FinalResultPopup;