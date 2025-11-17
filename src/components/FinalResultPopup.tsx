import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ZoomIn } from "lucide-react";

type FinalResultPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const FinalResultPopup = ({ open, onOpenChange }: FinalResultPopupProps) => {
  const [imgSrc, setImgSrc] = useState("https://s.id/GJrp7");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl w-[95%] sm:w-[90%] md:w-[80%] rounded-lg p-0 overflow-y-auto max-h-[90vh]">
        <DialogHeader className="p-4 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
          <DialogTitle className="text-xl md:text-2xl font-bold text-center">
            Hasil Final JYCC
          </DialogTitle>
        </DialogHeader>

        <div className="px-4 pb-4">
          <div className="relative w-full max-w-[440px] mx-auto">
            <img
              src={imgSrc}
              alt="Flyer Hasil Final JYCC"
              className="w-full h-auto mx-auto rounded-md border"
              referrerPolicy="no-referrer"
              onError={() => setImgSrc("/hasil_final.png")}
            />

            <Button
              variant="outline"
              size="sm"
              aria-label="Lihat gambar ukuran penuh"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow rounded-full"
              onClick={() => window.open("https://drive.google.com/file/d/1bilzDRk0K3jTzbWlIWJggXg2emJaRv9B/view?usp=sharing", "_blank")}
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
          </div>
          <p className="mt-3 text-center text-red-600 text-sm">
            jika hasil belum muncul atau tidak termuat, gunakan tombol Lihat Versi Asli di bawah
          </p>
          <div className="sticky bottom-0 bg-background/80 backdrop-blur-sm mt-2 px-4 py-2 flex justify-center gap-3">
            <Button onClick={() => window.open("https://drive.google.com/file/d/1bilzDRk0K3jTzbWlIWJggXg2emJaRv9B/view?usp=sharing", "_blank")}>Lihat Versi Asli</Button>
            <Button onClick={() => window.open("https://forms.gle/QvM6Byu7EMGeX1PfA", "_blank")}>Pengumpulan Finalis</Button>
            <Button variant="outline" onClick={() => { onOpenChange(false); const target = document.getElementById("timeline-batas-pengumpulan-finalis") || document.getElementById("timeline"); target && target.scrollIntoView({ behavior: "smooth", block: "center" }); }}>Ke Batas Pengumpulan</Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>Tutup</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FinalResultPopup;