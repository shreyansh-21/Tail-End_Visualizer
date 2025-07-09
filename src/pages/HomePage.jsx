// src/pages/HomePage.jsx
import { Link } from "react-router-dom";
import Spline from '@splinetool/react-spline';
// import TypewriterHero from "../components/TypewriterHero";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F9FAFB", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.25rem", lineHeight: "2.5rem", fontWeight: "700", color: "#1F2937", marginBottom: "1rem" }}>Life in Weeks</h1>
      <div style={{ position: "relative", overflow: "hidden", height: "23.75rem", width: "100%" }}>
        <div style={{ position: "absolute", top: "0", right: "0", bottom: "-3.75rem", left: "0" }}>
          <Spline scene="https://prod.spline.design/p9YDaDQsLRER8yPq/scene.splinecode" />
        </div>
      </div>
      {/* <TypewriterHero /> */}
      <Link to="/visualize" style={{ marginTop: "2rem", display: "inline-block", backgroundColor: "#1F2937", color: "#FFFFFF", padding: "0.75rem 1.5rem", borderRadius: "0.375rem", textDecoration: "none", transition: "background-color 0.3s" }} onMouseEnter={e => e.currentTarget.style.backgroundColor = "#374151"} onMouseLeave={e => e.currentTarget.style.backgroundColor = "#1F2937"}>
        Visualize Your Time
      </Link>
    </div>
  );
}
