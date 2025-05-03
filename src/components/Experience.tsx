import React from 'react';
import { experiences } from '../data/experiences';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section bg-blue-50">
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experiência Profissional
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-dot"></div>
              <div className="mb-1 flex flex-wrap items-center">
                <h3 className="text-xl font-semibold text-primary-700 mr-2">{exp.title}</h3>
                <span className="text-sm bg-primary-100 text-primary-800 px-2 py-0.5 rounded-full">
                  {exp.period}
                </span>
              </div>
              <div className="text-gray-600 mb-2">
                {exp.company} • {exp.location}
              </div>
              <p className="text-gray-700">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#" className="btn btn-outline">
            Download Currículo Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;