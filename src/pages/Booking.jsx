import BottomNav from "../components/BottomNav";

export default function Booking() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-2">My Bookings</h2>
        <p className="text-gray-600">No active bookings yet.</p>
      </div>
      <BottomNav />
    </div>
  );
}
