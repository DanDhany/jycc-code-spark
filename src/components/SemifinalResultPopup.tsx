import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type SemifinalResultPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SemifinalResultPopup = ({ open, onOpenChange }: SemifinalResultPopupProps) => {
  const images = [
    "/hasil_semifinal (1).jpeg",
    "/hasil_semifinal (2).jpeg"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl w-[95%] sm:w-[90%] md:w-[80%] rounded-lg p-0 overflow-y-auto max-h-[90vh]">
        <DialogHeader className="p-4 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
          <DialogTitle className="text-xl md:text-2xl font-bold text-center">
            Hasil Semifinal JYCC
          </DialogTitle>
        </DialogHeader>

        <div className="px-4 pb-4">
          <Badge className="mb-2 mx-auto block bg-green-100 text-green-700 border-green-200">
            Selamat kepada tim yang lolos ke babak Semi Final!
          </Badge>
          {/* Carousel Container */}
          <div className="relative w-full max-w-[440px] mx-auto">
            <img
              src={images[currentIndex]}
              alt={`Hasil Semifinal JYCC - Gambar ${currentIndex + 1}`}
              className="w-full h-auto rounded-md border"
            />

            {/* Center Zoom Button */}
            <Button
              variant="outline"
              size="sm"
              aria-label="Lihat gambar ukuran penuh"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow rounded-full"
              onClick={() => window.open(images[currentIndex], "_blank")}
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="sm"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevImage}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextImage}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Image Indicators */}
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>

          {/* Reminder Badge */}
          <Badge className="mt-3 mx-auto block bg-primary/10 text-primary border-primary/20">
            Pengingat: Unduh Template Semifinal untuk lanjut ke babak berikutnya.
          </Badge>

          <p className="mt-3 text-center text-red-600 text-sm">
            jika hasil masih belum muncul atau tidak termuat, harap gunakan tombol Lihat Versi Asli dibawah
          </p>
          <div className="sticky bottom-0 bg-background/80 backdrop-blur-sm mt-2 px-4 py-2 flex justify-center gap-3">
            <Button onClick={() => window.open("https://docs.google.com/document/d/1lZ3f-DMq2fRhGWUmtZJ-ypF78oFt4oHq?rtpof=true&usp=drive_fs", "_blank")}>Template Semifinal</Button>
            <Button onClick={() => window.open("https://drive.google.com/file/d/1ZuVWikJwqKmc3XxmUxL09vgxgV4h7Sdu/view?usp=drive_link", "_blank")}>Lihat Versi Asli</Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>Tutup</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SemifinalResultPopup;