import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const DrinksHero = () => {
  const eras = [
    {
      carimbo: '/eraclassica.png',
      title: "1800 – Era Clássica",
      description:
        "A coquetelaria nasceu da simplicidade e floresceu na sofisticação.",
      drinks: [
        {
          name: "Old Fashioned",
          author: "Harry Craddock | 1806",
          description:
            "Um coquetel encorpado e equilibrado que celebra o sabor do destilado, considerado a base estrutural da coquetelaria clássica.",
          ingredients:
            "Whiskey bourbon | Demerara | Blend de bitters | Laranja",
          image: "/oldfash.webp",
        },
        {
          name: "Fancy Fashioned",
          description:
            "Uma releitura que traz o dulçor vínico alinhado à complexidade terrosa do cacau.",
          ingredients: "Rum anejo | Redução de vinho tannat | Bitter de cacau",
          image: "/fashioned.webp",
        },
      ],
    },
    {
      title: "1880 – Idade de Ouro",
      description:
        "Onde bartenders se tornaram artistas e coquetéis, verdadeiras obras-primas.",
      drinks: [
        {
          name: "Sfumato",
          description:
            "Uma releitura de martini mais floral com pisco e estrutura de partes iguais.",
          ingredients:
            "Pisco barsol infusionado em nibs de cacau | Aperitivo lillet rosé | Vermute merlot quinado",
          image: "/sfumato.webp",
        },
        {
          name: "Hanky Panky",
          author: "Ada Coleman | 1903",
          description:
            "Uma interpretação de martini com gin, vermute tinto e fernet branca, símbolo de elegância, potência e sofisticação.",
          ingredients: "Gin | Vermute tinto | Fernet branca",
          image: "/d10.webp",
        },
      ],
    },
    {
      title: "1920 – Proibição Americana",
      description:
        "A coquetelaria não foi silenciada – apenas sussurrada atrás de portas fechadas.",
      drinks: [
        {
          name: "Bee’s Knees",
          author: "Harry Craddock | 1920",
          description:
            "Um coquetel cítrico e floral, criado para suavizar o sabor agressivo do gin da época.",
          ingredients:
            "Gin Verve | Suspirito limoncello | Limão siciliano | Mel de eucalipto | Pólen",
          image: "/taca-full.webp",
        },
        {
          name: "Sweet Passion",
          description:
            "Uma interpretação contemporânea que representa a criatividade e adaptabilidade dos bartenders.",
          ingredients:
            "Vodca Verve | Licor de flor de sabugueiro | Maracujá | Camomila",
          image: "/d6.webp",
        },
      ],
    },
    {
      title: "1930 – Era Tiki",
      description:
        "Bebidas exuberantes que transportavam clientes para ilhas distantes.",
      drinks: [
        {
          name: "Zombie",
          author: "Donn Beach | 1934",
          description:
            "Um dos coquetéis mais emblemáticos do movimento tiki, carregado de sabor e complexidade.",
          ingredients:
            "Rum spiced | Abacaxi | Laranja | Falernum | Perfume de absinto",
          image: "d7.webp",
        },
        {
          name: "En Llamas",
          description:
            "Fusão entre o clássico Mai Tai e o moderno Penicillin, unindo defumação e doçura equilibrada.",
          ingredients:
            "Whisky Moonshine | Licor de caramelo | Amêndoas | Pimenta do reino",
          image: "d8.webp",
        },
      ],
    },
    {
      title: "1960 – Era da Discoteca",
      description:
        "Um espetáculo vibrante de cores e excessos, com misturas descomplicadas.",
      drinks: [
        {
          name: "Paloma",
          author: "Don Javier Delgado | 1960",
          description:
            "Refrescante e equilibrado, combina a intensidade da tequila com a leveza cítrica do grapefruit e efervecência do club soda.",
          ingredients:
            "Tequila blanco | Club soda | Grapefruit | Flor de sal",
          image: "d5.webp",
        },
        {
          name: "Lascívia",
          description:
            "Uma interpretação frutada dos clássicos dos anos 90, com um toque de especiarias.",
          ingredients:
            "Aguardente de abacaxi | Aperitivo Alkermes | Limão tahiti | Maçã | Canela",
          image: "/lasciva.webp",
        },
      ],
    },
    {
      title: "1980 – Renascimento Clássico",
      description:
        "O renascimento da coquetelaria trouxe de volta a arte e o respeito aos clássicos.",
      drinks: [
        {
          name: "Cosmopolitan",
          author: "Toby Cecchini | 1988",
          description:
            "Um clássico atemporal, símbolo de sofisticação nos anos 90.",
          ingredients:
            "Vodka Verve | Licor de laranja | Limão siciliano | Picles de romã",
          image: "d2.webp",
        },
      ],
    },
    {
      title: "2000 – Mixologia Molecular",
      description:
        "Na interseção entre química e coquetelaria, surgiram drinques que desafiam a percepção.",
      drinks: [
        {
          name: "Penicillin Clarified",
          author: "Sam Ross | 2005",
          description:
            "Versão clarificada do neoclássico, com perfil mais suave e refinado.",
          ingredients:
            "Single Malt Whisky Verve | Limão siciliano | Mel de eucalipto | Gengibre",
          image: "d4.webp",
        },
        {
          name: "Yuzu Mule",
          description:
            "Interpretação moderna do Moscow Mule, com espuma ácida e destilado brasileiro envelhecido.",
          ingredients:
            "Single malt whisky Verve | Chá preto | Uva passas | Ginger ale | Espuma de yuzu",
          image: "/yuzu.webp",
        },
      ],
    },
    {
      title: "2010 – Era Contemporânea",
      description:
        "Sustentabilidade, técnica e experimentação definem a coquetelaria de hoje.",
      drinks: [
        {
          name: "Oliva Cardinale",
          author: "Rafa Câmara | 2024",
          description:
            "Releitura do clássico Negroni, trazendo um toque salino e um perfil mais seco.",
          ingredients:
            "Aguardente de abacaxi | Vermute seco | Campari | Salmoura siciliana",
          image: "d1.webp",
        },
        {
          name: "Golden Bloom",
          author: "David Debortoli | 2025",
          description:
            "Coquetel no perfil spritz, refrescante, com frutas e espumante da serra.",
          ingredients:
            "Vodka Verve | Pêssego | Limão tahiti | Licor luxardo maraschino | Perini prosecco",
          image: "gbloom.webp",
        },
      ],
    },
  ];

  
  useEffect(() => {
  eras.forEach(era => {
    era.drinks.forEach(drink => {
      const img = new Image();
      img.src = drink.image;
    });
  });
}, [eras]);
  return (
    <motion.section className="flex flex-col items-center justify-center " >
        {/* <Link
            className="w-full h-fit flex items-center gap-4 opacity-30 hover:opacity-100 transition-opacity ease-in"
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
      </Link> */}
{/* INTRODUÇÃO */}
      <motion.div
        className="text-center mb-24 px-8"
        style={{
        backgroundImage: "linear-gradient(to bottom, #153831 0%, #153831 80%, black 100%)",
      }}
      >
        <motion.h1  className="text-5xl md:text-6xl font-semibold text-white mt-20">
          A Carta das Eras
        </motion.h1>
        <motion.p  className="text-neutral-100 mt-4 text-lg lg:text-2xl leading-relaxed px-2 lg:px-120">
          No Gambito, cada coquetel é uma peça de história movida por mãos que
          desafiaram o tempo. Nossa carta é uma jornada pelas eras da
          coquetelaria – Inspirados no espírito dos speakeasies, recriamos não apenas 
          receitas, mas histórias 
        </motion.p>
        {/* <p className="mt-8 text-neutral-400 text-lg lg:text-2xl px-8 lg:px-120">Descubra as Eras da Coquetelaria. <br /> Passado e futuro se misturam em cada taça.</p> */}
      </motion.div>
      {/* ERAS */}
      {eras.map((era, index) => (
        <motion.div
          key={index}
          className="max-w-5xl w-full mb-10 relative px-8 md:px-16"
        >
          {/* <img src={era.carimbo} alt="" className="absolute top-0 right-0 w-25 opacity-60 rotate-30" /> */}
          <motion.div className="flex flex-col items-center justify-center">
            <motion.h2 whileInView={{color: "#03ad5b"}} transition={{ duration: 1, delay: .8}} className="text-3xl text-center md:text-4xl font-semibold mb-1 text-white">
              {era.title}
            </motion.h2>
            <motion.p className="text-center text-neutral-400 mb-10 max-w-2xl">{era.description}</motion.p>
          </motion.div>

          <motion.div className="flex flex-col gap-20">
            {era.drinks.map((drink, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-3 border-y py-2 border-neutral-800/70 px-2 rounded-2xl"
              >
                <motion.div  className="w-full h-64 lg:h-128 bg-neutral-900 rounded-xl overflow-hidden">
                  {drink.image ? (
                    <motion.img
                      src={drink.image}
                      alt={drink.name}
                      className="object-cover w-full h-full"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <motion.div className="flex items-center justify-center w-full h-full text-neutral-600">
                      (imagem)
                    </motion.div>
                  )}
                </motion.div>
                <motion.h3  className="text-xl text-red-600 mb-[-1rem]">{drink.name}</motion.h3>
                {drink.author && (
                  <motion.p  className="text-sm text-neutral-500">{drink.author}</motion.p>
                )}
                <motion.p className="text-neutral-300 mt-1">{drink.description}</motion.p>
                <motion.p className="text-neutral-400 text-sm italic">
                  {drink.ingredients}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
          {/* Linha animada no final */}
          <motion.div>
            <motion.div
              className="w-1 bg-green-500 mx-auto h-24" // altura real da linha
              style={{ originY: 0 }} // escala começa do topo
              initial={{ scaleY: 0 }} // começa invisível
              whileInView={{ scaleY: 1 }} // cresce até a altura total
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 1, delay: 0.5 }} className="w-4 h-4 rounded-full bg-green-500 mx-auto"/>
          </motion.div>
        </motion.div>
      ))}
      <motion.div
  className="max-w-4xl text-center mt-10 mb-12"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
    <motion.h2 className="text-3xl md:text-4xl font-semibold mb-4">
        A Alquimia do Gambito
    </motion.h2>
    <motion.p className="px-8 text-neutral-400 text-lg leading-relaxed">
        Cada coquetel aqui é uma ponte entre épocas, uma mistura de história,
        técnica e ousadia. Do clássico ao experimental, nossa carta celebra a
        essência da coquetelaria e o espírito que move o Gambito: curiosidade,
        criatividade e experiências memoráveis em cada gole.
    </motion.p>
    </motion.div>
    </motion.section>
  );
};

export default DrinksHero;

