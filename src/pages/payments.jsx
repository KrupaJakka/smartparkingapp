import BottomNav from "../components/BottomNav";

export default function Payments() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-2">Payments</h2>
        <p className="text-gray-600">Payment history will appear here.</p>
      </div>
      <BottomNav />
    </div>
  );
}
