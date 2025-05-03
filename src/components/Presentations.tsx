import React, { useState } from 'react';
import { presentations } from '../data/presentations';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Presentations: React.FC = () => {

  return (
    <section id="presentations" className="section bg-white">
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Clientes Satisfeitos
        </motion.h2>
    <Swiper
  modules={[Pagination]}
  spaceBetween={30}
  slidesPerView={1}
  pagination={{ clickable: true }}
  className="mt-12"
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {presentations.map((presentation, index) => (
    <SwiperSlide key={presentation.id} className="flex">
      <motion.div
        className="card h-[500px] flex flex-col justify-between text-center p-6 shadow-md bg-white rounded-lg w-80 mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0, delay: index * 0.1 }}
        >
        <div className="w-32 h-32 mx-auto overflow-hidden rounded-full mb-4 border border-gray-200">
          <img
            src={presentation.imageUrl}
            alt={presentation.title}
            className="w-full h-full object-cover"
            />
        </div>
        <div className="flex flex-col flex-1 px-4">
          <h3 className="text-lg font-semibold text-primary-800">
            {presentation.title}
          </h3>
          <p className="text-sm text-gray-600 mb-5">
            {presentation.location}
          </p>
          <p className="text-gray-700 italic mb-9">"{presentation.description}"</p>
        </div>
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>
  </div>
</section>
  );
};

export default Presentations;