import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";



function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Login");
  };

  return (
    <div style={{ maxWidth: "700px", margin: "20px auto", textAlign: "center" }}>
      <h1 style={{ color: "black" }}>Create Account</h1>
      <h4 style={{ color: "grey", marginBottom: "20px" }}>
        Fill your information below or register
        <br />
        with your social account
      </h4>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label htmlFor="fullname" style={{ display: "block", marginBottom: "5px" }}>
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Full Name"
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px", textAlign: "left" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#a6aba7",
            color: "#fff",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Sign Up
        </button>
      </form>
      <h4
  style={{
    padding: "0 120px", 
    display: "flex",
    alignItems: "center",
    color: "grey",
    margin: "20px 0",
  }}
>
  <span style={{ width: "50px", height: "1px", backgroundColor: "#ccc" }}></span>
  <span style={{ margin: "0 10px" }}>Or Sign Up with</span>
  <span style={{ width: "50px", height: "1px", backgroundColor: "#ccc" }}></span>
</h4>

<div style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "20px 0" }}>
      <button
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <FcGoogle size={24} />
      </button>

      <button
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#1877F2",
        }}
      >
        <FaFacebookF size={24} />
      </button>

      <button
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#000",
        }}
      >
        <FaApple size={24} />
      </button>
    </div>
   
<h4>
  Already have an account?{" "}
  <Link to="/Login" style={{ color: "lightgrey", textDecoration: "underline" }}>
    Sign In
  </Link>
</h4>
    </div>
  );
}

export default Signup;
