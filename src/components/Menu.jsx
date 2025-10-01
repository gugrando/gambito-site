import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Carousel from "./Carousel";

// ------------------ COMIDAS ------------------
const foodSections = [
  {
    title: "Quitutes",
    items: [
      { name: "Bolinho de Bacalhau", price: "R$ 56", image: "/menu/bolinho.webp", description: "Clássico português, crocante por fora e macio por dentro." },
      { name: "Agnolini", price: "R$ 49", image: "/menu/agnolini.webp", description: "Massa artesanal recheada, saborosa e delicada." },
      { name: "Guiozas", price: "R$ 49", image: "/menu/guioza.webp", description: "Pastéis orientais recheados e selados na chapa." },
      { name: "Dadinho de Tapioca", price: "R$ 49", image: "/menu/dadinho.webp", description: "Croquetes de tapioca com queijo, crocantes e leves." },
      { name: "Burrata", price: "R$ 54", image: "/menu/burrata.webp", description: "Creme de queijo fresco com azeite e temperos." },
      { name: "Camarão à Milanesa", price: "R$ 76", image: "/menu/camarao.webp", description: "Camarões empanados, crocantes e suculentos." },
    ],
  },
  {
    title: "Pizzas",
    items: [
      { name: "Cogumelos", price: "R$ 64", image: "/menu/cogumelo.webp", description: "Pizza artesanal com mix de cogumelos frescos." },
      { name: "Caprese", price: "R$ 64", image: "/menu/caprese.webp", description: "Clássica combinação de tomate, muçarela e manjericão." },
      { name: "Pepperoni", price: "R$ 64", image: "/menu/pepperoni.webp", description: "Tradicional americana, intensa e saborosa." },
      { name: "Camarão", price: "R$ 88", image: "/menu/pizza-camarao.webp", description: "Pizza especial com camarões frescos e tempero da casa." },
      { name: "Copa e Figo", price: "R$ 64", image: "/menu/copafigo.webp", description: "Harmonização única entre salgado e doce." },
      { name: "Carne de Panela", price: "R$ 64", image: "/menu/carnepanela.webp", description: "Pizza com recheio caseiro de carne desfiada." },
      { name: "Chocolate e Morango", price: "R$ 64", image: "/menu/chocmorango.webp", description: "Sobremesa irresistível, doce e cremosa." },
    ],
  },
  {
    title: "Favoritos",
    items: [
      { name: "Filé Mignon à Milanesa", price: "R$ 48", image: "/menu/filemilanesa.webp", description: "Carne nobre empanada, crocante e suculenta." },
      { name: "Steak Tartar", price: "R$ 59", image: "/menu/tartar.webp", description: "Clássico francês de carne crua temperada." },
      { name: "Croquetes", price: "R$ 56", image: "/menu/croquete.webp", description: "Deliciosos croquetes artesanais da casa." },
      { name: "Coxinhas", price: "R$ 44", image: "/menu/coxinha.webp", description: "O quitute mais amado do Brasil, crocante e macio." },
    ],
  },
  {
    title: "Pratos",
    items: [
      { name: "Risoto de Pesto", price: "R$ 48", image: "/menu/risoto.webp", description: "Risoto cremoso com molho pesto fresco." },
      { name: "Grelhado", price: "R$ 99", image: "/menu/grelhado.webp", description: "Corte especial grelhado no ponto perfeito." },
      { name: "Hambúrguer", price: "R$ 46", image: "/menu/hamburguer.webp", description: "Artesanal, suculento e cheio de sabor." },
    ],
  },
  {
    title: "Doces",
    items: [
      { name: "Cheescake", price: "R$ 42", image: "/menu/cheesecake.webp", description: "Clássico doce cremoso com base crocante." },
      { name: "Brownie", price: "R$ 42", image: "/menu/brownie.webp", description: "Chocolate intenso, macio por dentro e crocante por fora." },
      { name: "Brigadeiro", price: "R$ 14", image: "/menu/brigadeiro.webp", description: "Tradicional brasileiro, doce e cremoso." },
    ],
  },
];

// ------------------ DRINKS ------------------
const drinkSections = [
  {
    title: "Clássicos e Autorais",
    items: [
      {
        name: "Bee’s Knees",
        price: "R$ 42",
        image: "/drinks/beesknees.webp",
        description: "Coquetel cítrico e floral criado para suavizar o gin.",
      },
      {
        name: "Sweet Passion",
        price: "R$ 45",
        image: "/drinks/sweetpassion.webp",
        description: "Interpretação contemporânea, criativa e adaptável.",
      },
      {
        name: "Zombie",
        price: "R$ 48",
        image: "/drinks/zombie.webp",
        description: "Clássico tiki de sabor intenso e complexo.",
      },
      {
        name: "En Llamas",
        price: "R$ 50",
        image: "/drinks/enllamas.webp",
        description: "Fusão de Mai Tai e Penicillin, defumado e doce equilibrado.",
      },
      {
        name: "Paloma",
        price: "R$ 42",
        image: "/drinks/paloma.webp",
        description: "Refrescante, combina tequila com grapefruit e club soda.",
      },
      {
        name: "Cosmopolitan",
        price: "R$ 44",
        image: "/drinks/cosmopolitan.webp",
        description: "Clássico atemporal, símbolo de sofisticação anos 90.",
      },
      {
        name: "Lascívia",
        price: "R$ 46",
        image: "/drinks/lascivia.webp",
        description: "Frutado e especiado, inspirado nos clássicos anos 90.",
      },
      {
        name: "Penicillin Clarified",
        price: "R$ 50",
        image: "/drinks/penicillin.webp",
        description: "Versão clarificada do neoclássico, suave e refinada.",
      },
      {
        name: "Outros Clássicos",
        price: "R$ 0",
        image: "/drinks/gambito-logo-t.webp",
        description: "Peça ao garçom para descobrir outros coquetéis icônicos.",
      },
    ],
  },
  {
    title: "Whisky",
    items: [
      { name: "Macallan 12y", price: "R$ 110", image: "/gambito-logo-t.webp", description: "Elegante, maturado em barris de carvalho europeu." },
      { name: "Johnnie Green", price: "R$ 55", image: "/gambito-logo-t.webp", description: "Blend suave, marcante e sofisticado." },
      { name: "Johnnie Gold", price: "R$ 47", image: "/gambito-logo-t.webp", description: "Clássico, balanceado e refinado." },
      { name: "Johnnie Black", price: "R$ 29", image: "/gambito-logo-t.webp", description: "Intenso, defumado e encorpado." },
      { name: "Gentleman Jack", price: "R$ 50", image: "/gambito-logo-t.webp", description: "Duplamente suavizado, elegante e macio." },
      { name: "Jack Daniel's", price: "R$ 28", image: "/gambito-logo-t.webp", description: "O clássico do Tennessee, marcante e levemente adocicado." },
      { name: "Woodford", price: "R$ 38", image: "/gambito-logo-t.webp", description: "Bourbon artesanal, rico e aveludado." },
      { name: "Glenfiddich 12y", price: "R$ 60", image: "/gambito-logo-t.webp", description: "Single malt frutado e suave." },
      { name: "Bulleit Bourbon", price: "R$ 30", image: "/gambito-logo-t.webp", description: "Notas picantes, final prolongado." },
      { name: "Maker's Mark", price: "R$ 30", image: "/gambito-logo-t.webp", description: "Bourbon icônico com assinatura artesanal." },
      { name: "Union Blended", price: "R$ 22", image: "/gambito-logo-t.webp", description: "Blend exclusivo com equilíbrio marcante." },
      { name: "Union Extra Turfado", price: "R$ 38", image: "/drinks/whisky/unionextraturfado.webp", description: "Defumado e intenso, estilo turfado." },
      { name: "Union Virgin Oak", price: "R$ 42", image: "/drinks/whisky/unionvirginoak.webp", description: "Maturado em carvalho virgem, rico em aroma." },
      { name: "Union Turfado Wine Cast", price: "R$ 52", image: "/drinks/whisky/unionwinecast.webp", description: "Finalizado em barris de vinho, complexo e único." },
    ],
  },
  {
    title: "Cognac",
    items: [
      { name: "Hennessy XO", price: "R$ 130", image: "/drinks/cognac/hennessyxo.webp", description: "Um ícone de sofisticação, rico e intenso." },
      { name: "Hennessy Very Special", price: "R$ 50", image: "/drinks/cognac/hennessyvs.webp", description: "Notas frutadas e marcantes, clássico francês." },
    ],
  },
  {
    title: "Licor",
    items: [
      { name: "Jack Apple", price: "R$ 29", image: "/drinks/licor/jackapple.webp", description: "Jack Daniel’s com maçã verde, fresco e frutado." },
      { name: "Jack Fire", price: "R$ 29", image: "/drinks/licor/jackfire.webp", description: "Explosão de canela com intensidade." },
      { name: "Jack Honey", price: "R$ 29", image: "/drinks/licor/jackhoney.webp", description: "Doce, suave e marcante." },
      { name: "Licor 48", price: "R$ 38", image: "/drinks/licor/licor48.webp", description: "Tradicional, sabor doce-amargo característico." },
      { name: "Jagmaster", price: "R$ 27", image: "/drinks/licor/jagermeister.webp", description: "O clássico alemão de 56 ervas." },
      { name: "Baileys", price: "R$ 28", image: "/drinks/licor/baileys.webp", description: "Cremoso, com notas de chocolate e café." },
      { name: "Union Licor de Whisky", price: "R$ 20", image: "/drinks/licor/unionwhisky.webp", description: "Produção exclusiva, doce e envolvente." },
    ],
  },
  {
    title: "Amaros",
    items: [
      { name: "Fernet", price: "R$ 37", image: "/drinks/amaros/fernet.webp", description: "Amargo, intenso, argentino clássico." },
      { name: "Brasilberg", price: "R$ 20", image: "/drinks/amaros/brasilberg.webp", description: "Herbal, brasileiro e autêntico." },
      { name: "Campari", price: "R$ 20", image: "/drinks/amaros/campari.webp", description: "Italiano, base de coquetéis clássicos." },
      { name: "Cynar", price: "R$ 21", image: "/drinks/amaros/cynar.webp", description: "Feito de alcachofra, sabor único e marcante." },
    ],
  },
  {
    title: "Cervejas",
    items: [
      { name: "Guarnieri IPA", price: "R$ 34", image: "/drinks/cervejas/guarnieri.webp", description: "Artesanal, lupulada e intensa." },
      { name: "Heineken", price: "R$ 14", image: "/drinks/cervejas/heineken.webp", description: "A lager mais famosa do mundo." },
      { name: "Corona", price: "R$ 14", image: "/drinks/cervejas/corona.webp", description: "Mexicana, leve e refrescante." },
    ],
  },
  {
    title: "Chopp",
    items: [
      { name: "Chopp Brahma", price: "R$ 14", image: "/drinks/chopp/brahma.webp", description: "Clássico, leve e gelado." },
    ],
  },
  {
    title: "Sem Álcool",
    items: [
      { name: "Água", price: "R$ 7", image: "/drinks/semalcool/agua.webp", description: "Mineral, pura e refrescante." },
      { name: "Coca Cola", price: "R$ 8", image: "/drinks/semalcool/coca.webp", description: "O refrigerante mais clássico do mundo." },
      { name: "Coca Zero", price: "R$ 8", image: "/drinks/semalcool/cocazero.webp", description: "Zero açúcar, mesmo sabor." },
      { name: "Guaraná", price: "R$ 8", image: "/drinks/semalcool/guarana.webp", description: "Tradicional brasileiro, doce e refrescante." },
      { name: "Água Tônica", price: "R$ 8", image: "/drinks/semalcool/tonica.webp", description: "Refrescante, levemente amarga." },
      { name: "Suco de Uva Perini", price: "R$ 15", image: "/drinks/semalcool/suco.webp", description: "Suco natural da Serra Gaúcha." },
      { name: "Café Expresso", price: "R$ 6", image: "/drinks/semalcool/cafe.webp", description: "Intenso e aromático, final perfeito." },
    ],
  },
  {
    title: "Outros",
    items: [
      { name: "Tequila", price: "R$ 32", image: "/drinks/outros/tequila.webp", description: "Mexicana, marcante e intensa." },
      { name: "Vodka da Casa", price: "R$ 20", image: "/drinks/outros/vodka.webp", description: "Pura e versátil, ideal para drinks." },
      { name: "Gin da Casa", price: "R$ 30", image: "/drinks/outros/gin.webp", description: "Equilibrado, refrescante e aromático." },
      { name: "Cachaça Weber Black", price: "R$ 38", image: "/drinks/outros/cachaca.webp", description: "Artesanal, brasileira e robusta." },
    ],
  },
];


const Menu = () => {
  const [activeTab, setActiveTab] = useState("comidas");
  const location = useLocation();

  useEffect(() => {
    if (location.state?.type) {
      setActiveTab(location.state.type);
    }
    window.scrollTo(0, 0);
  }, [location]);

  const currentSections = activeTab === "comidas" ? foodSections : drinkSections;
  const currentHeader =
    activeTab === "comidas"
      ? {
          title: "Um menu pensado para você e sua experiência no Gambito",
          subtitle: "Pratos exclusivos e deliciosos para você descobrir",
        }
      : {
          title: "Drinks autorais e clássicos para uma noite única",
          subtitle: "Coquetéis exclusivos e experiências em cada taça",
        };

  return (
    <motion.section className="w-full h-fit scroll-auto">
      {/* Header */}
      <motion.div
        className="flex flex-col w-full h-[45rem]"
        style={{
          backgroundImage:
            activeTab === "comidas"
              ? "linear-gradient(to bottom, #153831 0%, #153831 80%, black 100%)"
              : "linear-gradient(to bottom, black 0%, red 80%, black 100%)",
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

        {/* Conteúdo dinâmico */}
        <motion.div className="relative flex flex-col items-center w-full h-full mt-10">
          {/* Bloco fixo para título + subtítulo */}
          <div className="flex flex-col items-center justify-center h-[10rem] md:h-[12rem] text-center">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="px-3 max-w-2xl text-4xl md:text-5xl font-bold text-white"
            >
              {currentHeader.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="px-3 md:max-w-2xl text-white text-lg md:text-xl mt-2"
            >
              {currentHeader.subtitle}
            </motion.p>
          </div>

          {/* Carrossel */}
          <Carousel
            activeTab={activeTab}
            images={
              activeTab === "comidas"
                ? [
                    "/pratomenu.webp",
                    "/BolinhoDePinhao.webp",
                    "/Burrata.webp",
                    "/Coxinha.webp",
                    "/Croquete.webp",
                    "/Guioza.webp",
                    "/PolentinhaMole.webp",
                  ]
                : [
                    "/BQ.webp",
                    "/taca-full.webp",
                    "/d1.webp",
                    "/d2.webp",
                    "/d3.webp",
                    "/d4.webp",
                    "/d5.webp",
                    "/d6.webp",
                    "/d7.webp",
                    "/d8.webp",
                    "/d10.webp",
                  ]
            }
          />
        </motion.div>
      </motion.div>

      {/* Botão de seleção */}
      <div className="flex justify-center mt-10 z-50 md:mt-40">
        <div className="flex w-64 h-12 rounded-xl overflow-hidden border border-white/30">
          <button
            onClick={() => setActiveTab("comidas")}
            className={`flex-1 flex items-center justify-center text-sm font-semibold transition-colors ${
              activeTab === "comidas"
                ? "bg-[#153831] text-white"
                : "bg-neutral-800 text-gray-400"
            }`}
          >
            Comidas
          </button>
          <button
            onClick={() => setActiveTab("drinks")}
            className={`flex-1 flex items-center justify-center text-sm font-semibold transition-colors ${
              activeTab === "drinks"
                ? "bg-red-600 text-white"
                : "bg-neutral-800 text-gray-400"
            }`}
          >
            Bebidas
          </button>
        </div>
      </div>

      {/* Lista dinâmica */}
      <motion.div className="flex flex-col items-center w-full bg-black py-16 px-6">
        <div className="max-w-4xl w-full flex flex-col gap-16">
          {currentSections.map((section, sIndex) => (
            <motion.div
              key={sIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: sIndex * 0.2,
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col gap-6"
            >
              <h2
                className={`text-2xl font-bold text-white border-b ${
                  activeTab === "comidas"
                    ? "border-[#153831]/70"
                    : "border-red-600/40"
                } pb-2`}
              >
                {section.title}
              </h2>

              <div className="flex flex-col gap-6">
                {section.items.map((item, iIndex) => (
                  <motion.div
                    key={iIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: iIndex * 0.1,
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <motion.img
                      src={`/gambito-logo-t.webp`}
                      alt={item.name}
                      className="w-16 h-16 object-contain rounded-lg shadow-md"
                    />
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center justify-between border-b border-dotted border-gray-500 pb-1">
                        <span className="text-white text-lg font-medium">
                          {item.name}
                        </span>
                        <span className="text-white font-medium">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Menu;
