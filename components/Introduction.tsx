import Image from 'next/image';
export function Introduction() {
  return (
    <section id="introduction" className="py-20 px-6 md:px-8 bg-white text-[#002b56]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-12">
        
        {/* Image Section */}
        <div
          className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden group relative w-full h-full"
        >
              <Image
                src="/gallery/121.webp"
                alt="ecole"
                layout="fill" // Makes the image fill the parent container
                objectFit="cover" // Ensures the image behaves like "object-cover"
                className="transform group-hover:scale-110 transition-transform duration-700"
              />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002b56]/50 to-transparent" />
        </div>
        
        {/* Text Section */}
        <div
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#002b56] bg-clip-text text-transparent bg-gradient-to-r from-[#002b56] to-blue-400">
            Bienvenue à l&apos;ESEN
          </h2>
          <p className="text-xl leading-relaxed mb-8 text-gray-600 text-justify">
            L&apos;École Supérieure d&apos;Économie Numérique (ESEN) de l&apos;Université de La Manouba (UMA), fondée en 2004 et réformée profondément en 2012, est un établissement d&apos;enseignement supérieur qui s&apos;est positionné dans un domaine de formation en évolution constante, à savoir l&apos;économie numérique. Ainsi, l&apos;ESEN a toujours porté dans ses gênes une capacité d&apos;adaptation et une agilité exceptionnelles à répondre aux changements.
            L&apos;ESEN offre des licences et des mastères en E-Business, Business Intelligence, Systèmes d&apos;information, Data Science, Veille et intelligence compétitive, et en contrôle de gestion digitalisé.
          </p>
          <a
            href="https://www.esen.tn/portail/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="
                inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background  
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
                bg-blue-500 hover:bg-blue-600/90 h-11 px-8
                text-white transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-xl
              "
            >
              Découvrez l&apos;ESEN
            </button>
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
            L&apos;École Supérieure d&apos;Économie Numérique (ESEN) organise le Mercredi 27 novembre 2024, 
            la sixième édition de l&apos;ESENet Job Fair. L&apos;édition de cette année se veut une occasion à la 
            fois conviviale et professionnelle de réunir académiciens et experts autour de la thématique 
            « Odyssée Business 4.0 », traitant des enjeux de la transformation digitale en Tunisie. Un focus 
            sera mis sur l&apos;innovation et l&apos;entrepreneuriat à l&apos;ère du digital.  
            Cet événement permettra, d&apos;une part, à nos partenaires actuels et ceux potentiels de découvrir 
            la spécificité de la formation interdisciplinaire offerte par l&apos;ESEN. D&apos;autre part, il permettra de 
            donner une visibilité à nos diplômés auprès d&apos;acteurs influents dans le domaine de l&apos;économie 
            numérique.  
            Le programme de la journée commence par une séance plénière au tour de la transformation 
            digitale en Tunisie. Après cette séance d&apos;ouverture, des sessions thématiques suivront. La 
            première « Startup&apos;Innov » consiste en un partage d&apos;expérience de startups tunisiennes. La 
            deuxième « Réso&apos;Débat » vise à engager un dialogue avec des recruteurs et experts du marché 
            pour mieux comprendre les tendances actuelles en matière d&apos;insertion professionnelle. Une 
            visite des stands des entreprises participantes est, de même, prévue suivie d&apos;un « workshop 
            certifiant PMI » animé par INJAZ Tunisie. 
          </p>
        </div>

        {/* Image Section */}
        <div
          className="relative h-auto md:h-[600px] rounded-2xl overflow-hidden group relative w-full h-full"
        >
            <Image
              src="/gallery/999.webp"
              alt="ecole"
              layout="fill" // Makes the image fill its parent container
              objectFit="cover" // Ensures the image behaves like "object-cover"
              className="transform group-hover:scale-110 transition-transform duration-700"
            />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002b56]/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
