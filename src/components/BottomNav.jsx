import { Link, useLocation } from "react-router-dom";
import { Home, Map, CalendarCheck, User } from "lucide-react";

export default function BottomNav() {
  const location = useLocation();

  const links = [
    { to: "/home", icon: <Home />, label: "Home" },
    { to: "/map", icon: <Map />, label: "Map" },
    { to: "/booking", icon: <CalendarCheck />, label: "Booking" },
    { to: "/profile", icon: <User />, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t flex justify-around py-2">
      {links.map(({ to, icon, label }) => (
        <Link
          key={to}
          to={to}
          className={`flex flex-col items-center text-sm ${
            location.pathname === to ? "text-blue-500" : "text-gray-500"
          }`}
        >
          <div className="w-6 h-6">{icon}</div>
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
}
