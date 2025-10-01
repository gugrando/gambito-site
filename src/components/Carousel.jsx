import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const CarouselSingle = ({ images, activeTab }) => {
  const [current, setCurrent] = useState(0);

  // Reset quando muda o tab (comidas/drinks)
  useEffect(() => {
    setCurrent(0);
  }, [activeTab]);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full md:max-w-[40rem] h-[25rem] md:h-[30rem] mt-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Imagem com animação */}
      <AnimatePresence mode="wait">
                <motion.img
        key={current}
        src={images[current]}
        className="w-full h-full object-cover rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.03}}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0}
        onDragEnd={(event, info) => {
            if (info.offset.x < -50) nextImage();
            else if (info.offset.x > 50) prevImage();
        }}
        />

      </AnimatePresence>

      {/* Indicadores de carrossel */}
      <div className="absolute bottom-6 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === current ? "bg-white/50" : "bg-white/20"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselSingle;