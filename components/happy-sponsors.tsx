

interface Sponsor {
  name: string;
  logo: string;
  description?: string;
}

const sponsors: Sponsor[] = [
{ name: "MESRS", logo: "/logo/ta3lim.webp" },
  { name: "MTCENT", logo: "/logo/logo.webp" },
  { name: "UMA", logo: "/logo/uma.webp" },
  { name: "Technopole", logo: "/logo/S2T.png" },
  { name: "INJAZ", logo: "/logo/INJAZ.webp" },
  { name: "Poulina Group Holding", logo: "/logo/Polina.webp" },
  { name: "UGFS", logo: "/logo/UGFS.webp" },
  { name: "ABSHORE", logo: "/logo/ABSHORE.webp", },
  { name: "Managers", logo: "/logo/M.webp" },
  { name: "bi4you", logo: "/logo/bi4you.webp" },
  { name: "BIU", logo: "/logo/biu.webp" },
  { name: "CCIT", logo: "/logo/ccit.webp" },
  { name: "CNFCPP", logo: "/logo/cnfcpp.webp" },
  { name: "Convergen", logo: "/logo/convergen.webp" },
  { name: "Rotterdam University", logo: "/logo/desktop_rotterdam-university-of-applied-sciences-logo.webp" },
  { name: "ATTIJARI", logo: "/logo/Attijari.png" },
  { name: "LOTUS", logo: "/logo/Lotus.png" },
  { name: "LA POSTE", logo: "/logo/poste.png" },
  { name: "MANPOWER", logo: "/logo/Manpower.png" },
  { name: "MIN COMM", logo: "/logo/MinComm.png" },
  { name: "TAKI ACADEMY", logo: "/logo/takiAcademy.png" },
  { name: "STB", logo: "/logo/STB.png" },
  { name: "TT", logo: "/logo/TT.png" },
  { name: "BTK", logo: "/logo/BTK.png" },
  { name: "DATA DOIT", logo: "/logo/DataDoit.png" },
  { name: "VIRTUAL DEV", logo: "/logo/VIRTUALDEV.png" },
  { name: "WEVIOO", logo: "/logo/Wevioo.png" },
  { name: "TEKRU", logo: "/logo/Tekru.png" },
  { name: "SAPHIR", logo: "/logo/Saphir.png" },
  { name: "MEDICACOM", logo: "/logo/Medicacom.png" },
  { name: "HI INTERNS", logo: "/logo/Hi_Interns.png" },
  { name: "ZEUS_Labs", logo: "/logo/ZEUS_Labs.png" },
  { name: "Elon", logo: "/logo/elon.webp" },
  { name: "Enda", logo: "/logo/enda.webp" },
  { name: "EY", logo: "/logo/ey.webp" },
  { name: "ISCAE", logo: "/logo/iscae.webp" },
  { name: "Neurodata", logo: "/logo/neurodata.webp" },
  { name: "PwC", logo: "/logo/pwc.webp" },
  { name: "Sofrecom", logo: "/logo/sofrecom.webp" },
  { name: "TIDCE", logo: "/logo/tidce.webp" },
  { name: "Trust IT", logo: "/logo/trust.webp" },
  { name: "ODC", logo: "/logo/orange.webp" },
  { name: "AICTO", logo: "/logo/AICTO.webp" },
  
  
  
  
];

export function HappySponsors() {
  return (
    <section className="content-visibility-auto py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-gray-500 text-sm font-bold uppercase mb-4 tracking-wide">
          Nos Partenaires
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12">
          Des Partenaires de Confiance
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center p-6 bg-gray-50 rounded-lg shadow-sm overflow-hidden group"
              
            >
              {/* Background image as the sponsor's logo with overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-100 transition-all duration-300"
                style={{
                  backgroundImage: `url(${sponsor.logo})`,
                  backgroundSize: "contain", // Adjust to make sure the image fits properly
                  backgroundPosition: "center", // Center the image within the container
                  backgroundRepeat: "no-repeat", // Prevent the image from repeating
                }}
                
              ></div>

              {/* Hover overlay that darkens the image only on hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
              
              {/* Sponsor name and description */}
              <div className="relative z-10 text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="font-semibold text-lg text-dark-blue-800 group-hover:text-white transition-all duration-300">{sponsor.name}</h4>
                {sponsor.description && (
                  <p className="text-xs mt-2">{sponsor.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
