import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      <DialogContent className="max-w-3xl w-[95%] sm:w-[90%] md:w-[80%] rounded-lg p-0 overflow-hidden">
        <DialogHeader className="p-4">
          <DialogTitle className="text-xl md:text-2xl font-bold text-center">
            Hasil Semifinal JYCC
          </DialogTitle>
        </DialogHeader>

        <div className="px-4 pb-4">
          {/* Carousel Container */}
          <div className="relative w-[45%] mx-auto">
            <img
              src={images[currentIndex]}
              alt={`Hasil Semifinal JYCC - Gambar ${currentIndex + 1}`}
              className="w-full h-auto rounded-md border"
            />
            
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

          <p className="mt-3 text-center text-red-600 text-sm">
            jika hasil masih belum muncul atau tidak termuat, harap gunakan tombol Lihat Versi Asli dibawah
          </p>
          <div className="mt-2 flex justify-center gap-3">
            <Button onClick={() => window.open("https://s.id/G5ZYf", "_blank")}>Lihat Versi Asli</Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>Tutup</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SemifinalResultPopup;