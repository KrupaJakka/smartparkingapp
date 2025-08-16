import ProfileCard from "../components/ProfileCard";
import BottomNav from "../components/BottomNav";

export default function Profile() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-4">My Profile</h2>
        <ProfileCard
          name="Jakka Krupa Ratnam"
          email="kruparatnamjakka22@gmail.com"
          vehicle="AP 05 AB 1234"
        />
      </div>
      <BottomNav />
    </div>
  );
}
