import { useState } from "react";

export default function QRScanner() {
  const [scannedData, setScannedData] = useState(null);

  const handleScan = () => {
    // simulate QR scan
    setScannedData("PARK12345 - Entry Successful ✅");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 h-full">
      <div className="w-64 h-64 border-4 border-dashed border-gray-400 rounded-xl flex items-center justify-center">
        <p className="text-gray-500">[ QR Scanner View ]</p>
      </div>

      <button
        onClick={handleScan}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
      >
        Simulate Scan
      </button>

      {scannedData && (
        <p className="mt-4 text-green-600 font-medium">{scannedData}</p>
      )}
    </div>
  );
}
