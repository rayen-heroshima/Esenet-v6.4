import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ESENet Job Fair 2024 - Connecting Talent with Opportunity",
  description: "Rejoignez-nous à l'ESENet Job Fair 2024 #1 Événement de réseautage, des présentations d'entreprises et des panels de conférenciers. Connectez-vous avec des leaders de l'industrie et trouvez votre prochaine opportunité de carrière. Organisé par l'ESEN, Université de Manouba.",
  keywords: [
    "ESENet 2024",
    "EseNet",
    "ESENet5.0",
    "ESENet",
    "ESEN",
    "ESEN Tunisia",
    "ESEN Manouba",
    "ESEN Manouba Université",
    "Université de Manouba",
    "Job Fair 2024",
    "opportunités de carrière",
    "réseautage",
    "emplois étudiants",
    "événements de carrière",
    "salon de l'emploi",
    "recrutement",
    "carrières jeunes diplômés",
    "manouba université",
    "ESEN Tunisia",
    "recrutement ESEN",
    "opportunités professionnelles",
    "industrie et recrutement",
    "formation professionnelle",
    "ESEN événements 2024",
    "job fair tunisie 2024",
    "Université Manouba recrutement",
    "étudiants ESEN Manouba",
    "stages et emplois étudiants",
    "ESENet 2023",
  ],
  robots: "index, follow",
  
        
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
