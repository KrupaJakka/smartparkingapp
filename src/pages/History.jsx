import BottomNav from "../components/BottomNav";

export default function History() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-2">Parking History</h2>
        <p className="text-gray-600">No past records.</p>
      </div>
      <BottomNav />
    </div>
  );
}
