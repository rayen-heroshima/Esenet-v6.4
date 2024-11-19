"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Input } from '@/components/ui/input';

import { Send } from 'lucide-react';


export function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    Tele: '',
    vous: '',
    faculte: '',
    organisme: '',
    recherche: '',
    source: '',
  });

  const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Trigger the loading modal

    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModalContent("Form submitted successfully! Check your inbox.");
      } else {
        setModalContent("Failed to submit form. You can't submit more than once.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setModalContent("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false); // Hide the loading modal
      setIsModalOpen(true); // Show the main modal
    }
  };

  // Automatically close the modal after 5 seconds
  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setIsModalOpen(false);
      }, 9000);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  return (
    <section  className="content-visibility-auto py-32 px-4 md:px-8 bg-[#001f3f] relative overflow-hidden" >
      <BackgroundLines />
      <div  className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-200">
            Inscrivez vous
          </h2>
            <form onSubmit={handleSubmit} className="space-y-8 p-8 bg-white/5 backdrop-blur-lg border-white/10 rounded-xl shadow-xl translate-y-[-2px] transition-all">
              <div className="grid md:grid-cols-2 gap-8">
                <Input
                  name="nom"
                  placeholder="Nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                />
                <Input
                  name="prenom"
                  placeholder="Prénom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                />
              </div>
              <Input
                name="email"
                type="email"
                placeholder="Adresse e-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              />
              <Input
                name="Tele"
                type="tel"
                placeholder="Numéro de téléphone"
                value={formData.Tele}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              />
            <select
            name="vous"
            value={formData.vous}
            onChange={handleChange}
            required
            className="bg-white/10 border-white/20 text-white/50 placeholder:text-white/50 h-12 w-full rounded-md"
          >
            <option value=""> &nbsp; Vous êtes?</option>
            <option value="etudiant" className='text-black'> &nbsp; Étudiant</option>
            <option value="Enseignant" className='text-black'> &nbsp; Enseignant</option>
            <option value="Entreprise" className='text-black'> &nbsp; Entreprise</option>
            <option value="Startup" className='text-black'> &nbsp; Startup</option>
            <option value="A/ONG" className='text-black'> &nbsp; Association / ONG</option>
            <option value="Autre" className='text-black'> &nbsp; Autre</option>
          </select>
             {["etudiant", "Enseignant"].includes(formData.vous) && (
            <>
              {/* Faculté Selection */}
              <select
                name="faculte"
                value={formData.faculte}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white/50 placeholder:text-white/50 h-12 w-full rounded-md"
              >
                <option value="" > &nbsp; Votre Etablissement d&apos;affiliation?</option>
                <option value="ESEN" className='text-black'>Ecole Supérieure de l Economie Numérique de la Manouba (ESEN)</option>
                <option value="ENSI" className='text-black'>Ecole Nationale des Sciences de l Informatique (ENSI)</option>
                <option value="ISAMM" className='text-black'>Institut Supérieur des Arts Multimédia de la Manouba (ISAMM)</option>
                <option value="ESC" className='text-black'>Ecole Supérieure de Commerce(ESC)</option>
                <option value="ISCAE" className='text-black'>Institut Supérieur de Comptabilité et d&apos;Administration des Entreprises(ISCAE)</option>
                <option value="TBS" className='text-black'>Tunisia Buisness school (TBS)</option>
                <option value="ISI" className='text-black'>Institut Supérieur d&apos;Informatique (ISI)</option>
                <option value="FST" className='text-black'>Mathématiques, informatique, sciences et technologie de la matière ( FST )</option>
                <option value="ESSECT" className='text-black'>ESSECT</option>
                <option value="IHEC" className='text-black'>Institut des Hautes Etudes Commerciales de Carthage (IHEC)</option>
                <option value="ISGT" className='text-black'>ISG Tunis</option>
                <option value="FSEGT" className='text-black'>Faculté des Sciences Economiques et de Gestion de Tunis (FSEGT)</option>
                <option value="INSAT" className='text-black'> Institut National des Sciences Appliquées et de Technologie (INSAT)</option>
                <option value="ISTIC" className='text-black'> Institut Supérieur des Technologies de l&apos;Information et des Communications (ISTIC)</option>
                <option value="SUPCOM" className='text-black'>Ecole Supérieure des Communications de Tunis (SUPCOM)</option>
                <option value="ENSIT" className='text-black'>ENSIT</option>
                <option value="autre" className='text-black'>autre</option>
                <option value="ESSTD" className='text-black'>Ecole Supérieure des Sciences et Technologies du Design</option>
                <option value="ISSEPK" className='text-black'>Institut Supérieur du Sport et de l Education Physique de Ksar Saïd </option>
                <option value="IPSI" className='text-black'>Institut de Presse et des Sciences de l Information</option>
                <option value="FSB" className='text-black'>Faculté des Sciences de Bizerte (FSB)</option>
                <option value="ISGB" className='text-black'> Institut Supérieur de Gestion de Bizerte (ISGB)</option>
                <option value="FSEGN" className='text-black'>Faculté des Sciences Economiques et de Gestion de Nabeul (FSEGN)</option>
                <option value="FSJPST" className='text-black'>Faculté des Sciences Juridiques, Politiques et Sociales de Tunis (FSJPST)</option>
                <option value="ISSAT" className='text-black'>Institut Supérieur des Sciences Appliquées et de Technologie de Mateur (ISSAT)</option>
                <option value="EPT" className='text-black'> Ecole Polytechnique de Tunisie (EPT)</option>
                <option value="ENICar" className='text-black'>Ecole Nationale d&apos;Ingénieurs de Carthage (ENICar)</option>
                <option value="ISES" className='text-black'>Institut Supérieur de l Education Spécialisée </option>
                <option value="FLAH" className='text-black'>Faculté des Lettres, des Arts et des Humanités</option>
                <option value="ISDT" className='text-black'>Institut Supérieur de Documentation de Tunis</option>
                <option value="IBLV" className='text-black'>Institut Bourguiba des Langues Vivantes (IBLV)</option>
                <option value="IPEIM" className='text-black'>Institut Préparatoire aux Eudes d&apos;Ingénieurs El Manar (IPEIM)</option>
                <option value="ISSBAT" className='text-black'>Institut Supérieur des Sciences Biologiques Appliquées de Tunis (ISSBAT)</option>
                <option value="ISSHT" className='text-black'>Institut Supérieur des Sciences Humaines de Tunis (ISSHT)</option>
                <option value="ISSIT" className='text-black'>Institut Supérieur des Sciences Infirmières de Tunis (ISSIT)</option>
                <option value="ISTMT" className='text-black'>Institut Supérieur des Technologies Médicales de Tunis (ISTMT)</option>
                <option value="ENIT" className='text-black'>Ecole Nationale d&apos;Ingénieurs de Tunis (ENIT)</option>
                <option value="FSHST" className='text-black'>FSHST</option>
                <option value="IPEIT" className='text-black'>IPEIT</option>
                <option value="ISBAT" className='text-black'>ISBAT</option>
                <option value="ISMT" className='text-black'>ISMT</option>
                <option value="ISAD" className='text-black'>ISAD</option>
                <option value="ISMPT" className='text-black'>ISMPT</option>
                <option value="ISEAHT" className='text-black'>ISEAHT</option>
                <option value="ISAJC" className='text-black'>ISAJC</option>
                <option value="ENS" className='text-black'>ENS</option>
                <option value="ISEAHZ" className='text-black'>ISEAHZ</option>
              
                
                  </select>
                                {/* Recherche Selection */}
              <select
                name="recherche"
                value={formData.recherche}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white/50 placeholder:text-white/50 h-12 w-full rounded-md"
              >
                <option value=""> &nbsp; Êtes-vous à la recherche de :</option>
                <option value="stage" className='text-black'>D&apos;un stage</option>
                <option value="emploi" className='text-black'>D&apos;un emploi</option>
                <option value="apprentissage" className='text-black'>D&apos;un apprentissage</option>
                <option value="information" className='text-black'>D&apos;informations</option>
              </select>
            </>
          )}
               {["Entreprise", "Startup", "A/ONG", "Autre"].includes(formData.vous) && (
            <>
              {/* Organisme Affiliation */}
              <input
                name="organisme"
                placeholder=" &nbsp;Votre organisme d'affiliation?"
                value={formData.organisme}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white/50 placeholder:text-white/50 h-12 w-full rounded-md"
              />

              {/* Recherche1 Selection */}
              <select
                name="recherche"
                value={formData.recherche}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white/50 placeholder:text-white/50 h-12 w-full rounded-md"
              >
                <option value=""> &nbsp; Êtes-vous à la recherche de :</option>
                <option value="stager" className='text-black'>De stagiaires</option>
                <option value="networking" className='text-black'>De networking</option>
                <option value="partenaires" className='text-black'>De partenaires</option>
                <option value="information" className='text-black'>D&apos;informations</option>
              </select>
            </>
          )}
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white/50 placeholder:text-white/50 h-12 w-full rounded-md"
              >
                <option value="" className='text-black'> &nbsp; Où avez-vous découvert ESENet</option>
                <option value="officialPage" className='text-black'>Via page officielle</option>
                <option value="website" className='text-black'>Via site web</option>
                <option value="email" className='text-black'>Par e-mail</option>
                <option value="radio" className='text-black'>Via radio</option>
                <option value="socialMedia" className='text-black'>Sur les réseaux sociaux (Facebook, Instagram, LinkedIn)</option>
                <option value="friend" className='text-black'>Par un(e) ami(e) ou un(e) collègue</option>
              </select>
              <button
                type="submit"
                className="
                  w-full bg-white text-[#001f3f] hover:bg-blue-50 h-12 text-lg font-semibold rounded-lg 
                  flex items-center justify-center gap-2
                "
              >
                Submit <Send className="w-5 h-5" />
              </button>
            </form>
        </motion.div>
      </div>

      {isLoading && ( 
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
         <div className=" p-6 rounded shadow-lg text-center">
         <p className="text-xl font-bold text-white ">Submitting...</p>
        </div>
        </div>

     )}

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-8 right-8 bg-black text-white p-4 rounded-lg shadow-lg z-50"
        >
          <p>{modalContent}</p>
        </motion.div>
      )}
    </section>
  );

}

function BackgroundLines() {
  return (
    <div className="absolute inset-0 opacity-10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-500"
          animate={{
            x: [0, Math.random() * 100, 0],
            y: [0, Math.random() * 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            width: Math.random() * 300 + 50,
            height: 2,
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            transform: 'rotate(' + Math.random() * 360 + 'deg)',
          }}
        />
      ))}
    </div>
  );
}
