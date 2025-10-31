import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type FinalResultPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const FinalResultPopup = ({ open, onOpenChange }: FinalResultPopupProps) => {
  const [imgSrc, setImgSrc] = useState("https://s.id/GJrp7");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-[95%] sm:w-[90%] md:w-[80%] rounded-lg p-0 overflow-hidden">
        <DialogHeader className="p-4">
          <DialogTitle className="text-xl md:text-2xl font-bold text-center">
            Hasil Final JYCC
          </DialogTitle>
        </DialogHeader>

        <div className="px-4 pb-4">
          <img
            src={imgSrc}
            alt="Flyer Hasil Final JYCC"
            className="w-[45%] h-auto mx-auto rounded-md border"
            referrerPolicy="no-referrer"
            onError={() => setImgSrc("/hasil_final.png")}
          />
          <p className="mt-3 text-center text-red-600 text-sm">
            jika hasil masih belum muncul atau tidak termuat, harap gunakan tombol Lihat Versi Asli dibawah
          </p>
          <div className="mt-2 flex justify-center gap-3">
            <Button onClick={() => window.open("https://s.id/GJrp7", "_blank")}>Lihat Versi Asli</Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>Tutup</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FinalResultPopup;