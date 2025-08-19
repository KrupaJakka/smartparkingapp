import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
   const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Home"); 
  };

  return (
    
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h1 style={{ textAlign: "center" }}>Sign In</h1>
      <h4 style={{ textAlign: "center", color: "#555" }}>
        Hi! Welcome back, you've been missed
      </h4>
      <form>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="form-control"
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "5px"
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="form-control"
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "5px"
            }}
          />
        </div>

        <button
      type="button"
      style={{
        width: "100%",
        padding: "12px",
        backgroundColor: "#242322",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px"
      }}
      onClick={handleClick}
    >
      Sign In
    </button>

      </form>

      <h4 style={{ marginTop: "20px", textAlign: "center" }}>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </h4>
    </div>
  );
}

export default Login;
