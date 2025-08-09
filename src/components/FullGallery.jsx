import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { galleryImages } from '../data/galleryData';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

Modal.setAppElement('#root');

const FullGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  // Auto-slide interval
  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        goNext();
      }, 4000); // 4 seconds
      return () => clearInterval(interval);
    }
  }, [isOpen, currentImg]);

  // Keyboard escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const openModal = (index) => {
    setCurrentImg(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goNext = () => {
    setCurrentImg((prev) => (prev + 1) % galleryImages.length);
  };

  const goPrev = () => {
    setCurrentImg((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleSwipe = (startX, endX) => {
    if (startX - endX > 50) goNext();
    else if (endX - startX > 50) goPrev();
  };

  let touchStartX = 0;

  return (
    <section className="px-4 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Smile Moments Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
              onClick={() => openModal(idx)}
            >
              <img
                src={img}
                alt={`gallery-${idx}`}
                loading="lazy"
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Gallery Modal"
        className="fixed inset-0 flex items-center justify-center z-50 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 z-40"
      >
        <div
          className="relative w-full h-full flex items-center justify-center"
          onTouchStart={(e) => (touchStartX = e.changedTouches[0].clientX)}
          onTouchEnd={(e) => handleSwipe(touchStartX, e.changedTouches[0].clientX)}
        >
          <button onClick={closeModal} className="absolute top-6 right-6 text-white text-2xl z-50">
            <FaTimes />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-4 text-white text-3xl z-50"
          >
            <FaArrowLeft />
          </button>

          <img
            src={galleryImages[currentImg]}
            alt={`modal-${currentImg}`}
            className="max-w-[90%] max-h-[90%] object-contain rounded-xl shadow-lg transition-all duration-500"
          />

          <button
            onClick={goNext}
            className="absolute right-4 text-white text-3xl z-50"
          >
            <FaArrowRight />
          </button>
        </div>
      </Modal>

      {/* Back to top */}
      <div className="text-center mt-12">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back to Top
        </button>
      </div>
    </section>
  );
};

export default FullGallery;
