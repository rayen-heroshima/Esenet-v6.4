"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimerComponentProps {
  value: number;
  label: string;
}

const TimerComponent: React.FC<TimerComponentProps> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center bg-blue-500/10 rounded-lg p-3 m-2 min-w-[100px] border border-blue-500/20">
    <span className="text-3xl font-bold text-white mb-1">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-xs uppercase tracking-wider text-blue-200">{label}</span>
  </div>
);

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft | null => {
    const targetDate = new Date("2024-11-27");
    const difference = +targetDate - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  // Cache the timeLeft in localStorage or sessionStorage
  useEffect(() => {
    const cachedTimeLeft = localStorage.getItem("timeLeft");

    if (cachedTimeLeft) {
      setTimeLeft(JSON.parse(cachedTimeLeft)); // Load from cache if available
    } else {
      const calculatedTimeLeft = calculateTimeLeft();
      if (calculatedTimeLeft) {
        setTimeLeft(calculatedTimeLeft);
        localStorage.setItem("timeLeft", JSON.stringify(calculatedTimeLeft)); // Save to cache
      }
    }

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft) {
        setTimeLeft(newTimeLeft);
        localStorage.setItem("timeLeft", JSON.stringify(newTimeLeft)); // Update cache every second
      }
    }, 1100);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-white text-xl font-bold bg-blue-500/10 backdrop-blur-sm rounded-lg p-4 mt-6">
        L&apos;événement a commencé !
      </div>
    );
  }

  return (
    <div className="mt-8 mb-6">
      <div className="text-center mb-4">
        <span className="text-blue-200 text-sm uppercase tracking-wider">L&apos;événement commence dans</span>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <TimerComponent value={timeLeft.days} label="jours" />
        <TimerComponent value={timeLeft.hours} label="heures" />
        <TimerComponent value={timeLeft.minutes} label="minutes" />
        <TimerComponent value={timeLeft.seconds} label="secondes" />
      </div>
    </div>
  );
};

const ImagesSliderDemo: React.FC<{ className?: string }> = ({ className }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images: string[] = ["/gallery/501.webp", "/gallery/10.webp", "/gallery/9.webp"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToBottom = useCallback(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, []);

  return (
    <div className={`h-[40rem] backdrop-blur-sm bg-black relative ${className || ""}`}>
      <div className="h-full w-full overflow-hidden relative">


        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              layout="fill" // Ensures the image covers the parent container, just like object-cover
              objectFit="cover" // Ensures the image fills the container without distortion
              className={`transition-opacity duration-700 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          </motion.div>
        ))}

      </div>

      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-50 flex flex-col justify-center items-center px-4 absolute inset-0"
      >
        <p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <span className="text-transparent bg-gradient-to-b bg-clip-text from-blue-900 to-blue-500">
            ESENet Job Fair
          </span>
          <br />
          Odyssée Business 4.0 <br />
          Votre réseau, votre avenir
        </p>

        <Countdown />

        <button
          onClick={scrollToBottom}
          className="
            px-4 py-2 backdrop-blur-sm border bg-blue-300/10 border-blue-500/20 text-white mx-auto text-center 
            rounded-full relative mt-4 hover:bg-blue-400/20 transition-all duration-300 hover:scale-105
          "
        >
          <span className="text-base">Inscrivez-vous maintenant →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent" />
        </button>
      </motion.div>
    </div>
  );
};

export default ImagesSliderDemo;
