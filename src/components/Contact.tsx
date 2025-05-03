import React, { useState } from 'react';
import { socialLinks } from '../data/socialLinks';
import { MapPin, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Erro ao enviar a mensagem');

      setToastMessage('Mensagem enviada com sucesso!');
      reset();
    } catch (error) {
      console.error(error);
      setToastMessage('Erro ao enviar a mensagem. Tente novamente.');
    } finally {
      setTimeout(() => setToastMessage(null), 5000);
    }
  };

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Linkedin: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
      Mail: <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
    };
    return icons[iconName] || null;
  };

  return (
    <section id="contact" className="section bg-blue-50 relative">
      {toastMessage && (
        <div className="fixed top-6 right-6 bg-green-100 border border-green-300 text-green-900 px-8 py-5 max-w-sm w-full rounded-xl shadow-2xl text-base font-medium z-50 transition-opacity duration-300">
          {toastMessage}
        </div>
      )}

      <div className="container-custom">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          Contato
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-semibold text-primary-700 mb-6">Informação para contato</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Localização</h4>
                  <p className="text-gray-600">São Paulo, SP</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">lu.7.enf@hotmail.com</p>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-medium text-primary-700 mb-4">Minhas Redes Sociais</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-sm text-primary-600 hover:text-white hover:bg-primary-600 transition-colors duration-300">
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-primary-700 mb-6">Enviar Mensagem</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Seu Nome</label>
                  <input id="name" type="text" className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`} placeholder="Nome aqui" {...register('name', { required: 'Nome é obrigatório' })} />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input id="email" type="email" className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} placeholder="Email aqui" {...register('email', {
                    required: 'Email é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido',
                    }
                  })} />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea id="message" rows={4} className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`} placeholder="Sua mensagem aqui..." {...register('message', { required: 'Mensagem é obrigatória' })}></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                </div>

                <button type="submit" className="w-full btn btn-primary flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
