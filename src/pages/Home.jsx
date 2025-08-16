import BottomNav from "../components/BottomNav";
import ParkingCard from "../components/ParkingCard";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Available Parking</h2>
        <ParkingCard
          name="Lot A - Mall Area"
          location="Main Street"
          price={50}
          available={true}
          onBook={() => alert("Booked Lot A 🚗")}
        />
        <ParkingCard
          name="Lot B - City Center"
          location="High Street"
          price={40}
          available={false}
          onBook={() => {}}
        />
      </div>
      <BottomNav />
    </div>
  );
}
