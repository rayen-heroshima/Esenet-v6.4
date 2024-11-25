"use client";
import Image from 'next/image';
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
    designation: "Président de l\'Université de la Manouba",
    src: "/speqkers/UMA.webp",
  },
  {
    quote:
      "Outstanding support and robust features. It\'s rare to find a product that delivers on all its promises.",
    name: "Sarah Lamine",
    designation: "CEO Convergen",
    src: "/speqkers/sara.webp",
  },
  {
    quote:
      "This solution has significantly improved our team\'s productivity.",
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
    src: "/speqkers/Sarahh.webp",
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
    designation: "Directeur d\'investissement Startup UGFS",
    src: "/speqkers/khaled.webp",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Bassem Thabti",
    designation: "CEO VirtualDev",
    src: "/speqkers/VirtualDev.webp",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Selma Zouaoui",
    designation: "Directrice Générale STB SICAR",
    src: "/speqkers/salma.webp",
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
      <h1 className="font-bold text-4xl lg:text-5xl">Intervenants de l&apos;événement</h1>
      <div
        className="relative overflow-hidden  w-full mt-8"
        ref={containerRef}
        style={{ whiteSpace: "nowrap" }}
      >
        <div className="flex w-max gap-6">
          {testimonials.map(({ src, name, designation }, idx) => (
            <div
            key={idx}
            className="flex-shrink-0 min-w-[200px] max-w-[250px] flex flex-col items-center gap-4"
          >
              <div className="relative w-32 h-32 overflow-hidden rounded-full shadow-lg">

                    <Image
                      src={src}
                      alt={name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      priority={false}
                      loading='lazy'
                    />

              </div>
            
            {/* Nom et désignation */}
            <div className="text-center">
              <p className="text-lg font-semibold">{name}</p>
              <p className="text-sm text-gray-600 whitespace-pre-line">{designation}</p>
            </div>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
}
