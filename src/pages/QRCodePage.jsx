import QRScanner from "../components/QRScanner";
import BottomNav from "../components/BottomNav";

export default function QRCodePage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1">
        <QRScanner />
      </div>
      <BottomNav />
    </div>
  );
}
