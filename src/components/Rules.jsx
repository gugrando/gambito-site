import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";

const rules = [
  {
    title: "Voz baixa, presença marcante.",
    description:
      "Aqui no Gambito, o clima é íntimo e especial. Pedimos que as conversas sejam em tom baixo, risadas contidas e respeito ao som ambiente.",
  },
  {
    title: "Deixe bolo, balão e cooler para outra ocasião.",
    description:
      "Somos um bar com alma autoral, não uma festa de salão. A ideia é curtir a experiência com leveza e foco no que preparamos para você.",
  },
  {
    title: "Respeito é a base de tudo.",
    description:
      "Abordagens respeitosas e gentis fazem parte do nosso DNA. Aqui, todo mundo merece se sentir seguro e confortável.",
  },
  {
    title: "Nosso menu é pensado para você.",
    description:
      "Temos uma seleção enxuta e intencional, feita para surpreender. Se estiver em dúvida, confie em nossa proposta e experimente algo novo.",
  },
  {
    title: "Queremos criar algo só seu.",
    description:
      "Se não sabe o que pedir, conte para gente como quer se sentir, do suave ao intenso, vamos fazer a bebida perfeita para você.",
  },
  {
    title: "Cuidar do ambiente é cuidar da vibe.",
    description:
      "Comportamentos que não respeitam o espaço e as pessoas podem encurtar a noite, sempre mantendo o clima que todos amam.",
  },
  {
    title: "Aqui, o equilíbrio é essencial.",
    description:
      "O Gambito valoriza a presença consciente. Nossa intenção é oferecer momentos de qualidade, sem exageros.",
  },
  {
    title: "Cada momento tem seu tempo.",
    description:
      "As entradas encerram às 23h. Depois disso, continuamos juntos por um tempo breve, até nos despedirmos com carinho.",
  },
  {
    title: "Espaço é cuidado e respeito.",
    description:
      "Sentar onde quiser? Claro, desde que haja lugar. Acomodar-se com atenção faz parte do charme do nosso bar.",
  },
];

const pieces = [
  "Torre.png",
  "Cavalo.png",
  "Bispo.png",
  "Rainha.png",
  "Peao.png",
  "Rei.png",
  "Bispo.png",
  "Cavalo.png",
  "Torre.png",
];

const RuleItem = ({ title, description, piece, delay, index, setActiveIndex }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });

  if (inView) setActiveIndex(index);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-row items-start gap-4"
    >
      {/* Ícone */}
      <motion.div className="flex-shrink-0">
        <motion.img
          src={`/${piece}`}
          alt={piece}
          className="w-16 h-16 object-contain select-none"
          initial={{ opacity: 0, scale: 0.6, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: delay - 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        />
      </motion.div>

      {/* Conteúdo (Título + Descrição) */}
      <motion.div className="flex flex-col gap-1">
        <motion.h3 className="text-white text-lg font-semibold">{title}</motion.h3>
        <motion.p className="text-neutral-300 text-sm leading-snug pr-4">{description}</motion.p>
      </motion.div>
    </motion.div>
  );
};


const Rules = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section className="z-40 w-full h-full bg-cover bg-[url('/backhouse.jpg')] bg-center flex flex-col justify-center items-center gap-8 pt-[6rem] px-3 py-4">
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 1, ease: "easeIn" }} className="max-w-3xl mx-auto flex flex-col gap-4 bg-[#153831]/70 backdrop-blur-xl shadow-[1px_0px_10px_1px_rgba(0,0,0,0.1)] shadow-green-900/70 rounded-2xl pb-8">
          
          {/* Título dinâmico */}
          <motion.div className="w-full h-fit flex flex-col justify-center items-center">
            <AnimatePresence mode="wait">
                <motion.img
                whileInView={{ opacity: 1 }}
                key={activeIndex}
                src={`/${pieces[activeIndex]}`}
                alt="piece"
                className="w-40 h-40 object-contain select-none"
                initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.7, rotate: 15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                />
            </AnimatePresence>
            <motion.h1 
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }} 
            >
                
                    Regras da Casa
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.7 }}
                className="text-neutral-300 mb-10 text-center"
            >
                Comportamento exigido ao cliente que usufrua dos nossos serviços
            </motion.p>
          </motion.div>


        

        {/* Lista de regras */}
        <div className="flex flex-col gap-10 justify-center items-center md:px-8">
          {rules.map((rule, index) => (
            <RuleItem
              key={index}
              index={index}
              title={rule.title}
              description={rule.description}
              piece={pieces[index]}
              delay={index * 0.15}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Rules;
