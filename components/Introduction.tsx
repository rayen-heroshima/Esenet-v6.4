
import { Button } from '@/components/ui/button';

export function Introduction() {
  return (
    <section id="introduction" className="py-20 px-6 md:px-8 bg-white text-[#002b56]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-12">
        
        {/* Image Section */}
        <div
          className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden group"
        >
          <img
            src="/gallery/121.webp"
            alt="ecole"
            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002b56]/50 to-transparent" />
        </div>
        
        {/* Text Section */}
        <div
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#002b56] bg-clip-text text-transparent bg-gradient-to-r from-[#002b56] to-blue-400">
            Bienvenue à l'ESEN
          </h2>
          <p className="text-xl leading-relaxed mb-8 text-gray-600 text-justify">
            L'École Supérieure d'Économie Numérique (ESEN) de l'Université de La Manouba (UMA), fondée en 2004 et réformée profondément en 2012, est un établissement d'enseignement supérieur qui s'est positionné dans un domaine de formation en évolution constante, à savoir l'économie numérique. Ainsi, l'ESEN a toujours porté dans ses gênes une capacité d'adaptation et une agilité exceptionnelles à répondre aux changements.
            L'ESEN offre des licences et des mastères en E-Business, Business Intelligence, Systèmes d'information, Data Science, Veille et intelligence compétitive, et en contrôle de gestion digitalisé.
          </p>
          <a
            href="https://www.esen.tn/portail/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-xl"
            >
              Découvrez l'ESEN
            </Button>
          </a>
        </div>
      </div>

      {/* Event Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Section */}
        <div
          
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#002b56] bg-clip-text text-transparent bg-gradient-to-r from-[#002b56] to-blue-400">
            ESENet Job Fair
          </h2>
          <p className="text-xl leading-relaxed mb-8 text-gray-600 text-justify">
            L’École Supérieure d’Économie Numérique (ESEN) organise le Mercredi 27 novembre 2024, 
            la sixième édition de l’ESENet Job Fair. L’édition de cette année se veut une occasion à la 
            fois conviviale et professionnelle de réunir académiciens et experts autour de la thématique 
            « Odyssée Business 4.0 », traitant des enjeux de la transformation digitale en Tunisie. Un focus 
            sera mis sur l’innovation et l’entrepreneuriat à l’ère du digital.  
            Cet événement permettra, d’une part, à nos partenaires actuels et ceux potentiels de découvrir 
            la spécificité de la formation interdisciplinaire offerte par l’ESEN. D’autre part, il permettra de 
            donner une visibilité à nos diplômés auprès d’acteurs influents dans le domaine de l'économie 
            numérique.  
            Le programme de la journée commence par une séance plénière au tour de la transformation 
            digitale en Tunisie. Après cette séance d’ouverture, des sessions thématiques suivront. La 
            première « Startup’Innov » consiste en un partage d’expérience de startups tunisiennes. La 
            deuxième « Réso’Débat » vise à engager un dialogue avec des recruteurs et experts du marché 
            pour mieux comprendre les tendances actuelles en matière d’insertion professionnelle. Une 
            visite des stands des entreprises participantes est, de même, prévue suivie d’un « workshop 
            certifiant PMI » animé par INJAZ Tunisie. 
          </p>
        </div>

        {/* Image Section */}
        <div
          className="relative h-auto md:h-[600px] rounded-2xl overflow-hidden group"
        >
          <img
            src="/gallery/999.jpg"
            alt="ecole"
            className="object-cover  w-full h-full transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002b56]/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
