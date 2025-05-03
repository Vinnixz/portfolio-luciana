import React, { useState } from 'react';
import { ChevronDown, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import  luciana from '../images/luciana.jpeg'

const Hero: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleCvClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };
  

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 leading-tight mb-4">
              Consultora em Educação e Saúde
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Graduada pela USP, com residência na UNIFESP e pós na FGV, atuo em gestão hospitalar, educação e cuidados paliativos. Especialista em processos, treinamentos, qualidade e gestão de pessoas, com forte experiência em negociação e produtos hospitalares.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Contato
              </a>
              <button
                onClick={handleCvClick}
                className="btn btn-outline flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Download CV
              </button>
              {showAlert && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded shadow-md mt-2"
              >
                Currículo temporariamente indisponível.
              </motion.div>
            )}

            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-lg mx-auto max-w-md"
          >
            <img 
              src={luciana}
              alt="Nursing Consultant" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      
      <motion.a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-primary-600 hover:text-primary-800 transition-colors"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span className="text-sm mb-2">Ler mais</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;