import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Navbar({ title }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center bg-white shadow-md px-4 py-3">
      <button onClick={() => navigate(-1)} className="mr-4">
        <ArrowLeft className="w-6 h-6 text-gray-700" />
      </button>
      <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
    </div>
  );
}
