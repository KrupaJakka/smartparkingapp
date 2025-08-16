import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <input type="email" placeholder="Email" className="w-full p-3 mb-3 border rounded-lg" />
      <input type="password" placeholder="Password" className="w-full p-3 mb-6 border rounded-lg" />

      <button
        onClick={() => navigate("/home")}
        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
      >
        Login
      </button>

      <p className="mt-4 text-sm">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-blue-600">
          Sign up
        </Link>
      </p>
    </div>
  );
}
