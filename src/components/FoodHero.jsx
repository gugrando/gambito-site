import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const FoodHero = () => {
  return (
    <motion.div
      className="flex flex-col w-full h-screen"
      style={{
        backgroundImage: "linear-gradient(to bottom, #153831 0%, #153831 80%, black 100%)",
      }}
    >
      <Link
        className="w-full h-fit p-8 px-10 flex items-center gap-4 opacity-30 hover:opacity-100 transition-opacity ease-in"
        to="/"
      >
        <motion.img
          className="w-6 h-6 object-cover"
          src="/back.webp"
          alt="Voltar"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="w-40 object-cover"
          src="/gambito-logo.webp"
          alt="Logo"
        />
      </Link>

      <motion.div className="relative flex flex-col items-center w-full h-full mt-25">
        <div className="flex flex-col items-center justify-center h-[10rem] md:h-[12rem] text-center mb-5">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-3 max-w-2xl text-4xl md:text-5xl font-bold text-white"
          >
            Um menu pensado para você e sua experiência no Gambito
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="px-3 md:max-w-2xl text-white text-lg md:text-xl mt-2"
          >
            Pratos exclusivos e deliciosos para você descobrir
          </motion.p>
        </div>

        <Carousel
          activeTab="comidas"
          images={[
            "/pratomenu.webp",
            "/BolinhoDePinhao.webp",
            "/Burrata.webp",
            "/Coxinha.webp",
            "/Croquete.webp",
            "/Guioza.webp",
            "/PolentinhaMole.webp",
          ]}
        />
      </motion.div>
    </motion.div>
  );
};

export default FoodHero;
