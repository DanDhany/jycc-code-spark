import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type FinalResultPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const FinalResultPopup = ({ open, onOpenChange }: FinalResultPopupProps) => {
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
            src="/hasil_final.png"
            alt="Flyer Hasil Final JYCC"
            className="w-[65%] h-auto mx-auto rounded-md border"
          />
          <div className="mt-4 flex justify-center">
            <Button variant="outline" onClick={() => onOpenChange(false)}>Tutup</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FinalResultPopup;