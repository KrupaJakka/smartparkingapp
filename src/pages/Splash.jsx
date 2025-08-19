import { useNavigate, Link } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to top, #242322ff, #9c9793ff)",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div style={{ flex: 1, width: "100%", overflow: "hidden" }}>
        <img
          src="/log.svg"
          alt="App Logo"
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
        />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px"
        }}
      >
        <h1 style={{ color: "white", marginBottom: "10px" }}>
          Find The Best Parking Spot
        </h1>
        <h5 style={{ color: "white", margin: "5px 0" }}>Find the best parking spot, every</h5>
        <h5 style={{ color: "white", margin: "5px 0" }}>time, without the hassle</h5>

        <button
          style={{
            color: "white",
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "grey",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            marginTop: "25px",
            transition: "all 0.3s ease"
          }}
          onClick={() => navigate("/signup")}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#555")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "grey")}
        >
          Let's Get Started
        </button>

        <h4 style={{ marginTop: "20px", color: "white" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "lightgrey", textDecoration: "underline" }}>
            Sign In
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default Splash;
