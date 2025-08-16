import BottomNav from "../components/BottomNav";

export default function Map() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">[ Google Map Integration Here 🗺️ ]</p>
      </div>
      <BottomNav />
    </div>
  );
}
