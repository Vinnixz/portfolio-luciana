import React from 'react';
import { Award, Briefcase, Users, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { icon: <Briefcase className="w-6 h-6 text-primary-600" />, value: '+20 anos', label: 'Atuação consolidada em gestão de saúde, educação e pessoas.' },
    { icon: <Users className="w-6 h-6 text-primary-600" />, value: 'Mentora de profissionais', label: 'Transformando carreiras e gerando resultados reais.' },
    { icon: <Award className="w-6 h-6 text-primary-600" />, value: 'Consultora estratégica', label: 'Foco em inovação, qualidade e planejamento estratégico.' },
    { icon: <HeartPulse className="w-6 h-6 text-primary-600" />, value: 'Simulações Realisticias', label: 'Treinamentos com simulações.' },
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Sobre Mim
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-primary-700 mb-4">
              Dedicada a melhorar procedimentos e resultados em saúde
            </h3>
            <div className="prose text-gray-700 space-y-4">
              <p>
              Graduada pela USP, realizei residência de enfermagem na UNIFESP urgência e emergência, após a qual fui preceptora. Assumi supervisão e
              coordenação de setores críticos adultos e infantis. Atuei como Gestora em Saúde após pós graduação na FGV, 
              num hospital de médio porte por 2 anos, e migrei para educação e gestão de pessoas
              </p>
              <p>
              Hoje concluindo mestrado em Gestao de centros educacionais internacional e pós no Instituto Paliar em cuidados paliativos. Como coordenação e RT organizei processos, treinamentos, indicadores, selos nacionais e internacionais de qualidade e gestão de
              pessoas com cursos do IBC. Atuei em representação técnica de produtos por 4 anos do qual fortaleceu minhas técnicas de negociação, comunicação e treinamento de produtos da área hospitalar.
              </p>
              <p>
              Em gestão de pessoas fui me especializar em 
              terapias holísticas e cursos na área de espiritualidade e CRM (curso de segurança em ambiente hospitalar). Entre outros
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-blue-50 rounded-lg p-6 text-center transition-transform hover:scale-105"
              >
                <div className="mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary-700 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

            
            <div className="mt-8 p-6 bg-primary-50 rounded-lg border border-primary-100">
              <h4 className="text-xl font-semibold text-primary-800 mb-3">Minhas Formações</h4>
              <ul className="space-y-2">
                {[
                  'Mestrado Internacional em Educação',
                  'Especialização em Cuidados Paliativos',
                  'Especialização em Terapias Holisticas',
                  'Especialização em Admnistração hospitalar',
                  'Especialização em Urgência e emergência',
                  "Residência de Enfermagem UTI Neonatal e Pediátrica"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;