"use client";

import { useEffect, useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow.",
    name: "Ameur Cherif",
    designation: "Président de l'Université de la Manouba",
    src: "/speqkers/UMA.webp",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "Sarah Lamine",
    designation: "CEO Convergen",
    src: "/speqkers/sara.webp",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity.",
    name: "Sofiene Hemissi",
    designation: "Ministre \n des Technologies de la Communication",
    src: "/speqkers/elwzir.webp",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization.",
    name: "TakiEddine Ben Masoud",
    designation: "CEO de Takiacademy",
    src: "/speqkers/takieddine.webp",
  },
  {
    quote:
      "Highly recommend to any growing business.",
    name: "Mahjoub Langar",
    designation: "PDG Poulina Group Holding",
    src: "/speqkers/Mahjoub.webp",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Sahar Mechri",
    designation: "Dir. Exécutive Magazine Managers",
    src: "/speqkers/Sarahh.jpg",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Houda Bakir",
    designation: "Historiar- ODC",
    src: "/speqkers/mra.webp",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Youssef Boufaied",
    designation: "Coordinateur du projet Maken TIC DCE",
    src: "/speqkers/sayed.webp",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Abdlkerim REZGUI",
    designation: "CEO BI4YOU",
    src: "/speqkers/Abdelkerim.webp",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Khaled Dridi",
    designation: "Directeur d’investissement Startup UGFS",
    src: "/speqkers/khaled.jpg",
  },
];


export function Speaker() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Optimized auto-scroll
  useEffect(() => {
    const scrollContainer = containerRef.current;
    let animationFrame: number | null = null;

    if (scrollContainer) {
      const scrollStep = () => {
        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1; // Adjust step size for smoother or faster scrolling
        }
        animationFrame = requestAnimationFrame(scrollStep);
      };

      animationFrame = requestAnimationFrame(scrollStep);

      return () => {
        if (animationFrame) cancelAnimationFrame(animationFrame);
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-center bg-slate-50 py-14">
      <h1 className="font-bold text-4xl lg:text-5xl">Intervenants de l'événement</h1>
      <div
        className="overflow-hidden relative w-full mt-8"
        ref={containerRef}
        style={{ whiteSpace: "nowrap" }}
      >
        <div className="flex w-max gap-6">
          {testimonials.map(({ src, name, designation }, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 min-w-[300px] max-w-[350px] p-4 transition-transform duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden bg-white shadow-lg rounded-lg">
                <img
                  src={src}
                  alt={name}
                  className="w-full h-[300px] object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 text-white p-8 opacity-0 hover:opacity-100 transition-opacity">
                <p className="text-xl font-semibold">{name}</p>
                <p className="text-md text-center break-words whitespace-pre-line">{designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
