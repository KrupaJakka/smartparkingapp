import { Edit } from "lucide-react";

export default function ProfileCard({ name, email, vehicle }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4">
      <img
        src="https://via.placeholder.com/60"
        alt="Profile"
        className="w-16 h-16 rounded-full border"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{email}</p>
        <p className="text-sm text-gray-500">🚗 Vehicle: {vehicle}</p>
      </div>
      <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200">
        <Edit className="w-5 h-5 text-blue-600" />
      </button>
    </div>
  );
}
