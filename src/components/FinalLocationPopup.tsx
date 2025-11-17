import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type FinalLocationPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const addressLine1 = "Ruang Perpustakaan Universitas Surabaya (UBAYA) Lantai 5";
const addressLine2 = "Jalan Raya Kali Rungkut, Surabaya, Jawa Timur";
const mapsQuery = `${addressLine1} ${addressLine2}`;

const FinalLocationPopup = ({ open, onOpenChange }: FinalLocationPopupProps) => {
  const openMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;
    window.open(url, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg w-[95%] sm:w-[90%] rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center">Lokasi Final (Luring)</DialogTitle>
        </DialogHeader>
        <div className="space-y-2 text-center">
          <p className="font-semibold">{addressLine1}</p>
          <p className="text-muted-foreground">{addressLine2}</p>
        </div>
        <div className="mt-4 flex justify-center gap-3">
          <Button onClick={openMaps}>Buka Google Maps</Button>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Tutup</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FinalLocationPopup;