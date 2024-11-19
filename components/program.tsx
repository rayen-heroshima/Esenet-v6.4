import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export function EventProgram() {
  const data = [
    {
      title: "8:00 - Accueil et Check-in",
      content: (
        <div className="dark:bg-neutral-800 p-6 mb-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <video
              preload="none"
              controls
              muted
              className="rounded-lg object-cover w-full h-48 md:h-72 lg:h-96 shadow-xl"
              poster="/planing/baha.webp">
              <source src="/gallery/1115.mp4" type="video/mp4" />
              
            </video>
          </div>
        </div>
      ),
    },
    {
      title: "8:30 - L\'Odyssée Commence par un Arbre",
      content: (
        <div className="dark:bg-neutral-800 p-6 mb-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/planing/IMG_7930.webp"
              alt="Business Digital Panel"
              width={700}
              height={500}
              className="rounded-lg object-cover w-full h-auto shadow-xl"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "9:00 - Ouverture",
      content: (
        <div className="dark:bg-neutral-800 p-6 mb-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/planing/Ouverture.webp"
              alt="Ouverture"
              width={700}
              height={500}
              className="rounded-lg object-cover w-full h-auto shadow-xl"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      ),
    },
    
    {
      title: "9:15 - Digital Business\' Challenges",
      content: (
        <div className="dark:bg-neutral-800 p-6 mb-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
          <p className="text-white dark:text-neutral-200 text-base md:text-lg lg:text-xl font-medium mb-4 leading-relaxed">
            Découvrez les dernières tendances et innovations dans le domaine du digital. Une présentation sur les défis actuels auxquels sont confrontées les entreprises et des stratégies pour réussir dans ce secteur.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/planing/Business.webp"
              alt="Business Digital Panel"
              width={700}
              height={500}
              className="rounded-lg object-cover w-full h-auto shadow-xl"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "10:00 - Startup\'Innov",
      content: (
        <div className="dark:bg-neutral-800 p-6 mb-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
          <p className="text-white dark:text-neutral-200 text-base md:text-lg lg:text-xl font-medium mb-4 leading-relaxed">
            Écoutez des start-ups tunisiennes partager leurs parcours inspirants, leurs innovations et leurs visions pour l&apos;avenir.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/planing/Startup_innov.webp"
              alt="Startup Innov"
              width={700}
              height={500}
              className="rounded-lg object-cover w-full h-auto shadow-xl"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "11:00 - Pause Café",
      content: (
        <div className="dark:bg-neutral-800 p-6 mb-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/planing/15.webp"
              alt="Pause Café"
              width={700}
              height={500}
              className="rounded-lg object-cover w-full h-auto shadow-xl"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "11:30 - Réso\'Débat",
      content: (
        <div className="dark:bg-neutral-800 p-6 mb-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
          <p className="text-white dark:text-neutral-200 text-base md:text-lg lg:text-xl font-medium mb-4 leading-relaxed">
            Engagez un dialogue avec des recruteurs et experts du marché pour mieux comprendre les tendances actuelles et maximiser vos chances de réussite.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/planing/Réso_Débat.webp"
              alt="Reso Débats"
              width={700}
              height={500}
              className="rounded-lg object-cover w-full h-auto shadow-xl"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "12:30 - Visite des Stands",
      content: (
        <div className="dark:bg-neutral-800 p-6 mb-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
          <p className="text-white dark:text-neutral-200 text-base md:text-lg lg:text-xl font-medium mb-4 leading-relaxed">
            Explorez les opportunités proposées par nos entreprises partenaires. Découvrez de nouveaux produits et services tout en créant des contacts professionnels.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/planing/NETWORKING2.webp"
              alt="Networking"
              width={700}
              height={500}
              className="rounded-lg object-cover w-full h-auto shadow-xl"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "13:30 -\nWorkshop: Formation certifiante PMI",
      content: (
        <div className="dark:bg-neutral-800 p-6 mb-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
          <br />
          <br />
          <p className="text-white dark:text-neutral-200 text-base md:text-lg lg:text-xl font-medium mb-4 leading-relaxed">
            Une session immersive animée par INJAZ Tunisie pour acquérir des compétences professionnelles clés et booster votre insertion professionnelle.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/planing/INZAJ.webp"
              alt="Atelier Certifié PMI"
              width={700}
              height={500}
              className="rounded-lg object-cover w-full h-auto shadow-xl"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "15:30 - Clôture",
      content: (
        <div className="dark:bg-neutral-800 p-6 mb-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
          <p className="text-white dark:text-neutral-200 text-base md:text-lg lg:text-xl font-medium mb-4 leading-relaxed">
            Merci pour votre présence !!
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="content-visibility-auto w-full bg-gradient-to-br from-[#002b56] via-[#003f7f] to-[#005e9b] py-10 px-6">
      <Timeline data={data} />
    </div>
  );
}
