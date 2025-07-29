import Spline from '@splinetool/react-spline';
import { Typewriter } from 'react-simple-typewriter';
import TextTrail from '@/uiComponents/TextTrail/TextTrail';
src/uiComponents
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0d0d0d] text-white">
      <TextTrail/>
      {/* Heading Section */}
      <div className="w-full flex justify-center p-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          Tail End Visualizer
        </h1>
      </div>

      {/* Spline Section (keep it immersive and as-is) */}
      <div className="relative overflow-hidden min-h-[60vh] w-full">
        <div className="absolute inset-0 -bottom-15">
          <Spline scene="https://prod.spline.design/p9YDaDQsLRER8yPq/scene.splinecode" style={{ pointerEvents: 'none' }}/>
          
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
    </div>
  );
}
