import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type SemifinalResultGalleryPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SemifinalResultGalleryPopup = ({ open, onOpenChange }: SemifinalResultGalleryPopupProps) => {
  const images = [
    "/hasil_semifinal (1).jpeg",
    "/hasil_semifinal (2).jpeg",
  ];
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl w-[95%] sm:w-[90%] md:w-[80%] rounded-lg p-0 overflow-y-auto max-h-[90vh]">
        <DialogHeader className="p-4 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
          <DialogTitle className="text-xl md:text-2xl font-bold text-center">
            Hasil Semifinal JYCC
          </DialogTitle>
        </DialogHeader>

        <div className="px-4 pb-4">
          {/* Carousel Container */}
          <div className="relative w-full max-w-[440px] mx-auto">
            <img
              src={images[index]}
              alt={`Hasil Semifinal ${index + 1}`}
              className="w-full h-auto rounded-md border"
            />

            {/* Center Zoom Button */}
            <Button
              variant="outline"
              size="sm"
              aria-label="Lihat gambar ukuran penuh"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow rounded-full"
              onClick={() => window.open(images[index], "_blank")}
            >
              <ZoomIn className="w-4 h-4" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="sm"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prev}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={next}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Image Indicators */}
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <p className="mt-3 text-center text-red-600 text-sm">
            jika hasil masih belum muncul atau tidak termuat, harap gunakan tombol Lihat di Google Drive di bawah
          </p>
          <div className="sticky bottom-0 bg-background/80 backdrop-blur-sm mt-2 px-4 py-2 flex justify-center gap-3">
            <Button onClick={() => window.open("https://drive.google.com/file/d/1ZuVWikJwqKmc3XxmUxL09vgxgV4h7Sdu/view?usp=drive_link", "_blank")}>Lihat di Google Drive</Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>Tutup</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SemifinalResultGalleryPopup;