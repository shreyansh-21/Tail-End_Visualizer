// src/pages/HomePage.jsx
import { Link } from "react-router-dom";
// import TypewriterHero from "../components/TypewriterHero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Life in Weeks</h1>
      {/* <TypewriterHero /> */}
      <Link
        to="/visualize"
        className="mt-8 inline-block bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
      >
        Visualize Your Time
      </Link>
    </div>
  );
}
