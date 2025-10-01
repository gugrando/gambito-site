"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Queen = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Fade geral do container: começa normal, some no final
  const containerOpacity = useTransform(scrollYProgress, [0, 0.95, 1], [1, 1, 0]);

  // Textos reduzidos
  const texts = [
    { content: "Você já sabe que Negroni é nossa especialidade.", position: "top" },
    { content: "Mas você já experimentou o nosso Negroni?", position: "bottom" },
    { content: "Black Queen, o Negroni do Gambito", position: "top" },
  ];

  // Copo: entra da esquerda, fica centralizado por mais tempo, depois encolhe quando a garrafa entra
  const cupX = useTransform(scrollYProgress, [0.05, 0.15, 0.35, 0.5], ["-100%", "0%", "0%", "-40%"]);
  const cupScale = useTransform(scrollYProgress, [0.05, 0.2, 0.35, 0.5], [1, 1, 1, 0.9]);
  const cupOpacity = useTransform(scrollYProgress, [0, 0.05, 0.85, 0.95], [0, 1, 1, 0]);

  // Garrafa: entra da direita depois do copo, fica ao lado do copo
  const bottleX = useTransform(scrollYProgress, [0.35, 0.5, 0.7], ["100%", "33%", "33%"]);
  const bottleScale = useTransform(scrollYProgress, [0.35, 0.5, 0.7], [1, 0.9, 0.9]);
  const bottleOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.85, 0.95], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-[600vh] bg-black"
      style={{ opacity: containerOpacity }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Fundo */}
        <motion.img
          src="/BQ-bg.webp"
          alt="Fundo Negroni"
          className="absolute w-full h-full object-cover md:object-contain"
          style={{ opacity: containerOpacity }}
        />

        {/* Copo */}
        <motion.img
          src="/NegroniBQ.webp"
          alt="Copo Negroni"
          className="absolute w-[45%] md:w-[15%] object-contain mb-8"
          style={{ x: cupX, scale: cupScale, opacity: cupOpacity }}
        />

        {/* Garrafa */}
        <motion.img
          src="/GarrafaBQ.webp"
          alt="Garrafa Negroni"
          className="absolute w-[45%] md:w-[15%] object-contain mb-5"
          style={{ x: bottleX, scale: bottleScale, opacity: bottleOpacity }}
        />

        {/* Textos */}
        {texts.map((t, i) => {
          const start = 0.1 + i * (0.7 / texts.length);
          const end = start + 0.25;

          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.08, end - 0.08, end],
            [0, 1, 1, 0]
          );
          const y = useTransform(
            scrollYProgress,
            [start, start + 0.08, end - 0.08, end],
            [30, 0, 0, -30]
          );

          return (
            <motion.p
              key={i}
              style={{ opacity, y }}
              className={`absolute text-3xl md:text-4xl text-white text-center px-2 leading-snug ${
                t.position === "top"
                  ? "top-[7%] md:top-[22%] lg:top-[8%]"
                  : "bottom-[13%] md:bottom-[22%] lg:bottom-[8%]"
              }`}
            >
              {t.content}
            </motion.p>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Queen;
