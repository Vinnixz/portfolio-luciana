import React from 'react';
import { Stethoscope, Heart } from 'lucide-react';
import { navItems } from '../data/navItems';
import { socialLinks } from '../data/socialLinks';

const Footer: React.FC = () => {
  // Import icons dynamically from lucide-react
  const getIconComponent = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Linkedin: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
      Mail: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
    };
    
    return icons[iconName] || null;
  };

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Stethoscope className="h-7 w-7 text-primary-300" />
              <span className="text-xl font-bold text-white">All Way Saúde</span>
            </div>
            <p className="text-primary-100 mb-6">
            Fornecendo serviços especializados de consultoria de enfermagem para instituições de saúde. Transformando o atendimento ao paciente por meio de práticas baseadas em evidências e desenvolvimento de equipe.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-800 p-2 rounded-full text-primary-200 hover:text-white hover:bg-primary-700 transition-colors duration-300"
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.href}
                    className="text-primary-100 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <address className="not-italic text-primary-100 space-y-3">
              <p>São Paulo, SP</p>
              <p>Email: lu.7.enf@hotmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-primary-800 pt-8 text-center text-primary-300 text-sm">
          <p className="flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} All Way Saúde. Todos os direitos reservados. Feito com <Heart className="w-4 h-4 text-red-400" /> por uma profissional da saúde.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;