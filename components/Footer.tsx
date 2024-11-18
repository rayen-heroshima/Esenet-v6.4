
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className=" content-visibility-auto  py-8 px-4 md:px-8 bg-[#001f3f] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div
         
        >
          <div className="flex justify-center space-x-8 mb-10">
            <SocialLink 
              icon={<Facebook className="w-6 h-6" />} 
              href="https://www.facebook.com/esenien" 
            />
            <SocialLink 
              icon={<Linkedin className="w-6 h-6" />} 
              href="https://www.linkedin.com/school/esenien/posts/?feedView=all" 
            />
            <SocialLink 
              icon={<Instagram className="w-6 h-6" />} 
              href="https://www.instagram.com/esen.manouba.officiel/" 
            />
          </div>
          <p className="text-center text-white/60">
            © 2024 ESENet Job Fair. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/60 hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
}
