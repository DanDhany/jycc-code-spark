import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const TechnicalMeetingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Tampilkan popup saat halaman dimuat
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const hasilTmUrl = "https://s.id/HasilTMjycc";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl w-[95%] sm:w-[90%] md:w-[70%] lg:w-[60%] rounded-lg p-6 overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-center text-primary mb-4">
            Hasil Technical Meeting JYCC
          </DialogTitle>
          <DialogDescription className="text-center">
            Lihat rangkuman hasil Technical Meeting pada tautan berikut.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-2">
          <div className="text-center">
            <a
              href={hasilTmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-words font-medium"
            >
              {hasilTmUrl}
            </a>
            <div className="mt-4 flex justify-center gap-3">
              <Button
                onClick={() => window.open(hasilTmUrl, "_blank")}
                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Buka Hasil TM
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Tutup
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TechnicalMeetingPopup;