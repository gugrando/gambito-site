import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const dishes = [
  {
    name: "Bolinho de Pinhão",
    image: "/BolinhoDePinhao.webp",
    description: "Massa artesanal com pinhão e temperos da serra, crocante por fora e macio por dentro.",
    ingredients: "Pinhão, queijo colonial, farinha artesanal e ervas frescas."
  },
  {
    name: "Burrata Defumada",
    image: "/Burrata.webp",
    description: "Burrata cremosa com toque defumado, servida com tomates confitados e pesto da casa.",
    ingredients: "Burrata, tomates, manjericão, azeite e redução balsâmica."
  },
  {
    name: "Coxinha de Costela",
    image: "/Coxinha.webp",
    description: "Releitura da clássica coxinha, com recheio suculento de costela bovina desfiada.",
    ingredients: "Costela bovina, massa de batata, farinha panko e especiarias."
  },
  {
    name: "Croquete Alemão",
    image: "/Croquete.webp",
    description: "Inspirado na culinária germânica, com toque rústico e sabor intenso.",
    ingredients: "Carne moída, mostarda escura, cebola caramelizada e cerveja preta."
  },
  {
    name: "Guioza do Gambito",
    image: "/Guioza.webp",
    description: "Guiozas artesanais seladas na chapa, com molho oriental agridoce.",
    ingredients: "Carne suína, gengibre, shoyu e cebolinha."
  },
  {
    name: "Polentinha Mole com Ragu",
    image: "/PolentinhaMole.webp",
    description: "Polenta cremosa servida com ragu de ossobuco, finalizada com queijo colonial.",
    ingredients: "Milho, ossobuco, parmesão e ervas frescas."
  },
];

const FoodHero = () => {
  return (
    <motion.div
      className="flex flex-col w-full min-h-screen bg-gradient-to-b from-[#4f0b19] via-red-800 to-black"
    >
      {/* 🔙 Botão de voltar + logo */}
      <Link
        className="w-full py-8 mt-2 flex items-center justify-center gap-4 opacity-30 hover:opacity-100 transition-opacity ease-in"
        to="/"
      >
        <motion.img
          className="w-4 h-4 object-cover"
          src="/back.webp"
          alt="Voltar"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-32 object-cover"
          src="/gambito-logo.webp"
          alt="Logo"
        />
      </Link>

      {/* 🥂 Cabeçalho */}
      <motion.div className="flex flex-col items-center justify-center text-center px-6 mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-4xl md:text-5xl font-bold text-white"
        >
          Um menu pensado para você e sua experiência no Gambito
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-2xl text-white/90 text-lg md:text-xl mt-3"
        >
          Pratos exclusivos e deliciosos para você descobrir
        </motion.p>
      </motion.div>

      {/* 🍽️ Lista estática de pratos */}
      <motion.div className="flex flex-col items-center gap-16 px-6 pb-20">
        {dishes.map((dish, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8 bg-black/60 p-6 rounded-2xl border border-white/10"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-40 h-40 object-cover rounded-xl shadow-lg"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-white">{dish.name}</h3>
              <p className="text-gray-300 mt-2">{dish.description}</p>
              <p className="text-sm text-gray-500 mt-2 italic">{dish.ingredients}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FoodHero;
