import Spline from '@splinetool/react-spline';
import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [dob, setDob] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (dob) {
      navigate(`/visualize?dob=${dob}`);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0d0d0d] text-white">

      {/* Heading Section */}
      <div className="w-full flex justify-center p-10 bg-[#0d0d0d]">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest relative text-center text-transparent bg-clip-text bg-gradient-to-br from-gray-500 via-gray-300 to-gray-600">
          TAIL END VISUALIZER
          <span className="block absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-gray-500 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.3)] animate-pulse" />
        </h1>
      </div>


      {/* Spline Section (keep it immersive and as-is) */}
      <div className="relative overflow-hidden h-[60vh] w-full">
        <div className="absolute inset-0 -bottom-15">
          <Spline scene="https://prod.spline.design/p9YDaDQsLRER8yPq/scene.splinecode" style={{ pointerEvents: 'none' }} />
        </div>
      </div>

      {/* Typewriter Section */}
      <div className="w-full flex justify-center px-6 py-10">
        <h1 className="text-xl md:text-3xl text-center max-w-3xl">
          <Typewriter
            words={[
              "You have 52 weeks a year. That's 4,160 weeks in an 80-year life.",
              "And most of them are already behind you.",
              "Make the rest count."
            ]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={45}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </h1>
      </div>

      <div className="w-full flex flex-col items-center px-2 pb-16 space-y-6">
        <p className="text-center text-lg text-gray-300">
          Reflect deeper — start by entering your birth date.
        </p>
        <input
          type="date"
          className="p-2 rounded-md text-white"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-white text-black px-2 py-2 rounded-md hover:bg-gray-200 transition-colors"
          disabled={!dob}
        >
          Visualize my life
        </button>
      </div>
    </div>
  );
}
