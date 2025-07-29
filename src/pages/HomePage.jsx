// pages/index.js
import Spline from '@splinetool/react-spline';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <div className="relative h-screen w-full bg-[#0d0d0d] overflow-hidden">
      
      <div className="relative overflow-hidden h-95 w-full">
        <div className="absolute inset-0 -bottom-15">
          <Spline scene="https://prod.spline.design/p9YDaDQsLRER8yPq/scene.splinecode" />
        </div>
      </div>

      <div className="absolute top-10 left-0 w-full flex justify-center z-10">
        <h1 className="text-white text-xl md:text-3xl text-center max-w-3xl px-4">
          <Typewriter
            words={[
              "You have 52 weeks a year. That’s 4,160 weeks in an 80-year life.",
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
