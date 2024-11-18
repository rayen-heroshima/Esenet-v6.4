//import { EventPromotion } from "@/components/event-promotion";
import { HappySponsors } from "@/components/happy-sponsors";
import ImagesSliderDemo from "@/components/hero-section";
import OventExpoBanner from "@/components/ovent-expo-banner";
import { EventProgram } from "@/components/program";
import { Speaker } from "@/components/speakers";
import { Introduction } from "@/components/Introduction";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <div>
      
      <ImagesSliderDemo />
      <Introduction />
      <OventExpoBanner />
      <Speaker />
      <EventProgram />
      <HappySponsors />
      <Contact />
      <Footer />
    </div>
  );
}
