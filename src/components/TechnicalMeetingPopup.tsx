import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const TechnicalMeetingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Tampilkan popup saat halaman dimuat
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Tampilkan setelah 1 detik untuk memberi waktu halaman dimuat

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md w-[90%] sm:w-[95%] rounded-lg p-6 overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-center text-primary mb-4">
            Technical Meeting JYCC
          </DialogTitle>
          <DialogDescription className="sr-only">
            Detail Technical Meeting Jatim Youth Codepreneur Challenge
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground">Tanggal & Waktu</h3>
            <p className="text-foreground">25 Oktober 2025</p>
            <p className="text-foreground">10.00 - 12.00 WIB</p>
          </div>
          
          <div className="pt-4">
            <h3 className="text-lg font-semibold text-foreground mb-2">Tempat</h3>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-foreground">Luring:</h4>
                <p className="text-foreground">SGFBE Kampus Ubaya Tenggilis</p>
                <p className="text-foreground text-sm">Jl. Raya Kalirungkut, Surabaya</p>
              </div>
              
              <div className="pt-2">
                <h4 className="font-medium text-foreground">Daring (Zoom):</h4>
                <p className="text-foreground break-words">https://s.id/tmJYCC</p>
                <p className="text-foreground">Meeting ID: 817 7721 7000</p>
                <p className="text-foreground">Passcode: 928679</p>
              </div>
            </div>
          </div>
          
          {/* <div className="pt-4 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">Scan QR untuk Informasi Lebih Lanjut</h3>
            <div className="p-3 bg-white rounded-lg border border-gray-200">
              <img 
                src="/qr-tmJYCC.png" 
                alt="QR Code Technical Meeting JYCC" 
                className="w-40 h-40 object-contain"
              />
            </div>
          </div> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TechnicalMeetingPopup;