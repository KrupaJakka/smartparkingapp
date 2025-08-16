export default function ParkingCard({ name, location, price, available, onBook }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 mb-4">
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">{location}</p>
      
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm text-gray-600">₹{price}/hr</span>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-lg ${
            available ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
          }`}
        >
          {available ? "Available" : "Full"}
        </span>
      </div>

      <button
        disabled={!available}
        onClick={onBook}
        className={`mt-3 w-full py-2 rounded-lg font-medium ${
          available
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {available ? "Book Now" : "Unavailable"}
      </button>
    </div>
  );
}
