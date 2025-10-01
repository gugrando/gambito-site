import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// ------------------ COMIDAS ------------------
const foodSections = [
  {
    title: "Quitutes",
    items: [
      { name: "Bolinho de Bacalhau", price: "R$ 42", image: "/menu/bolinho.png", description: "Clássico português, crocante por fora e macio por dentro." },
      { name: "Agnolini", price: "R$ 38", image: "/menu/agnolini.png", description: "Massa artesanal recheada, saborosa e delicada." },
      { name: "Guiozas", price: "R$ 34", image: "/menu/guioza.png", description: "Pastéis orientais recheados e selados na chapa." },
      { name: "Dadinho de Tapioca", price: "R$ 28", image: "/menu/dadinho.png", description: "Croquetes de tapioca com queijo, crocantes e leves." },
      { name: "Burrata", price: "R$ 49", image: "/menu/burrata.png", description: "Creme de queijo fresco com azeite e temperos." },
      { name: "Camarão à Milanesa", price: "R$ 56", image: "/menu/camarao.png", description: "Camarões empanados, crocantes e suculentos." },
    ],
  },
  {
    title: "Pizzas",
    items: [
      { name: "Cogumelo", price: "R$ 62", image: "/menu/cogumelo.png", description: "Pizza artesanal com mix de cogumelos frescos." },
      { name: "Caprese", price: "R$ 58", image: "/menu/caprese.png", description: "Clássica combinação de tomate, muçarela e manjericão." },
      { name: "Pepperoni", price: "R$ 65", image: "/menu/pepperoni.png", description: "Tradicional americana, intensa e saborosa." },
      { name: "Camarão", price: "R$ 72", image: "/menu/pizza-camarao.png", description: "Pizza especial com camarões frescos e tempero da casa." },
      { name: "Copa e Figo", price: "R$ 68", image: "/menu/copafigo.png", description: "Harmonização única entre salgado e doce." },
      { name: "Carne de Panela", price: "R$ 70", image: "/menu/carnepanela.png", description: "Pizza com recheio caseiro de carne desfiada." },
      { name: "Chocolate e Morango", price: "R$ 42", image: "/menu/chocmorango.png", description: "Sobremesa irresistível, doce e cremosa." },
    ],
  },
  {
    title: "Favoritos",
    items: [
      { name: "Filé Mignon à Milanesa", price: "R$ 78", image: "/menu/filemilanesa.png", description: "Carne nobre empanada, crocante e suculenta." },
      { name: "Steak Tartar", price: "R$ 72", image: "/menu/tartar.png", description: "Clássico francês de carne crua temperada." },
      { name: "Croquetes", price: "R$ 38", image: "/menu/croquete.png", description: "Deliciosos croquetes artesanais da casa." },
      { name: "Coxinhas", price: "R$ 32", image: "/menu/coxinha.png", description: "O quitute mais amado do Brasil, crocante e macio." },
    ],
  },
  {
    title: "Pratos",
    items: [
      { name: "Risoto de Pesto", price: "R$ 65", image: "/menu/risoto.png", description: "Risoto cremoso com molho pesto fresco." },
      { name: "Grelhado", price: "R$ 74", image: "/menu/grelhado.png", description: "Corte especial grelhado no ponto perfeito." },
      { name: "Hambúrguer", price: "R$ 54", image: "/menu/hamburguer.png", description: "Artesanal, suculento e cheio de sabor." },
    ],
  },
  {
    title: "Doces",
    items: [
      { name: "Cheesecake", price: "R$ 32", image: "/menu/cheesecake.png", description: "Clássico doce cremoso com base crocante." },
      { name: "Brownie", price: "R$ 28", image: "/menu/brownie.png", description: "Chocolate intenso, macio por dentro e crocante por fora." },
      { name: "Brigadeiro", price: "R$ 18", image: "/menu/brigadeiro.png", description: "Tradicional brasileiro, doce e cremoso." },
    ],
  },
];

// ------------------ DRINKS ------------------
const drinkSections = [
  {
    title: "Whisky",
    items: [
      { name: "Macallan 12y", price: "R$ 75", image: "/gambito-logo-t.png", description: "Elegante, maturado em barris de carvalho europeu." },
      { name: "Johnnie Green", price: "R$ 55", image: "/gambito-logo-t.png", description: "Blend suave, marcante e sofisticado." },
      { name: "Johnnie Gold", price: "R$ 65", image: "/gambito-logo-t.png", description: "Clássico, balanceado e refinado." },
      { name: "Johnnie Black", price: "R$ 50", image: "/gambito-logo-t.png", description: "Intenso, defumado e encorpado." },
      { name: "Gentleman Jack", price: "R$ 58", image: "/gambito-logo-t.png", description: "Duplamente suavizado, elegante e macio." },
      { name: "Jack Daniel's", price: "R$ 48", image: "/drinks/whisky/jackdaniels.png", description: "O clássico do Tennessee, marcante e levemente adocicado." },
      { name: "Woodford", price: "R$ 60", image: "/drinks/whisky/woodford.png", description: "Bourbon artesanal, rico e aveludado." },
      { name: "Glenfiddich 12y", price: "R$ 70", image: "/drinks/whisky/glenfiddich.png", description: "Single malt frutado e suave." },
      { name: "Bulleit Bourbon", price: "R$ 54", image: "/drinks/whisky/bulleit.png", description: "Notas picantes, final prolongado." },
      { name: "Maker's Mark", price: "R$ 56", image: "/drinks/whisky/makersmark.png", description: "Bourbon icônico com assinatura artesanal." },
      { name: "Union Blended", price: "R$ 42", image: "/drinks/whisky/unionblended.png", description: "Blend exclusivo com equilíbrio marcante." },
      { name: "Union Extra Turfado", price: "R$ 48", image: "/drinks/whisky/unionextraturfado.png", description: "Defumado e intenso, estilo turfado." },
      { name: "Union Virgin Oak", price: "R$ 45", image: "/drinks/whisky/unionvirginoak.png", description: "Maturado em carvalho virgem, rico em aroma." },
      { name: "Union Turfado Wine Cast", price: "R$ 52", image: "/drinks/whisky/unionwinecast.png", description: "Finalizado em barris de vinho, complexo e único." },
    ],
  },
  {
    title: "Cognac",
    items: [
      { name: "Hennessy XO", price: "R$ 95", image: "/drinks/cognac/hennessyxo.png", description: "Um ícone de sofisticação, rico e intenso." },
      { name: "Hennessy Very Special", price: "R$ 65", image: "/drinks/cognac/hennessyvs.png", description: "Notas frutadas e marcantes, clássico francês." },
    ],
  },
  {
    title: "Licor",
    items: [
      { name: "Jack Apple", price: "R$ 40", image: "/drinks/licor/jackapple.png", description: "Jack Daniel’s com maçã verde, fresco e frutado." },
      { name: "Jack Fire", price: "R$ 42", image: "/drinks/licor/jackfire.png", description: "Explosão de canela com intensidade." },
      { name: "Jack Honey", price: "R$ 42", image: "/drinks/licor/jackhoney.png", description: "Doce, suave e marcante." },
      { name: "Licor 48", price: "R$ 35", image: "/drinks/licor/licor48.png", description: "Tradicional, sabor doce-amargo característico." },
      { name: "Jägermeister", price: "R$ 38", image: "/drinks/licor/jagermeister.png", description: "O clássico alemão de 56 ervas." },
      { name: "Baileys", price: "R$ 36", image: "/drinks/licor/baileys.png", description: "Cremoso, com notas de chocolate e café." },
      { name: "Union Licor de Whisky", price: "R$ 34", image: "/drinks/licor/unionwhisky.png", description: "Produção exclusiva, doce e envolvente." },
    ],
  },
  {
    title: "Amaros",
    items: [
      { name: "Fernet", price: "R$ 28", image: "/drinks/amaros/fernet.png", description: "Amargo, intenso, argentino clássico." },
      { name: "Brasilberg", price: "R$ 26", image: "/drinks/amaros/brasilberg.png", description: "Herbal, brasileiro e autêntico." },
      { name: "Campari", price: "R$ 30", image: "/drinks/amaros/campari.png", description: "Italiano, base de coquetéis clássicos." },
      { name: "Cynar", price: "R$ 28", image: "/drinks/amaros/cynar.png", description: "Feito de alcachofra, sabor único e marcante." },
    ],
  },
  {
    title: "Cervejas",
    items: [
      { name: "Guarnieri IPA", price: "R$ 22", image: "/drinks/cervejas/guarnieri.png", description: "Artesanal, lupulada e intensa." },
      { name: "Heineken", price: "R$ 18", image: "/drinks/cervejas/heineken.png", description: "A lager mais famosa do mundo." },
      { name: "Corona", price: "R$ 20", image: "/drinks/cervejas/corona.png", description: "Mexicana, leve e refrescante." },
    ],
  },
  {
    title: "Chopp",
    items: [
      { name: "Chopp Brahma", price: "R$ 16", image: "/drinks/chopp/brahma.png", description: "Clássico, leve e gelado." },
    ],
  },
  {
    title: "Sem Álcool",
    items: [
      { name: "Água", price: "R$ 8", image: "/drinks/semalcool/agua.png", description: "Mineral, pura e refrescante." },
      { name: "Coca Cola", price: "R$ 12", image: "/drinks/semalcool/coca.png", description: "O refrigerante mais clássico do mundo." },
      { name: "Coca Zero", price: "R$ 12", image: "/drinks/semalcool/cocazero.png", description: "Zero açúcar, mesmo sabor." },
      { name: "Guaraná", price: "R$ 12", image: "/drinks/semalcool/guarana.png", description: "Tradicional brasileiro, doce e refrescante." },
      { name: "Água Tônica", price: "R$ 14", image: "/drinks/semalcool/tonica.png", description: "Refrescante, levemente amarga." },
      { name: "Suco de Uva Perini", price: "R$ 18", image: "/drinks/semalcool/suco.png", description: "Suco natural da Serra Gaúcha." },
      { name: "Café Expresso", price: "R$ 10", image: "/drinks/semalcool/cafe.png", description: "Intenso e aromático, final perfeito." },
    ],
  },
  {
    title: "Outros",
    items: [
      { name: "Tequila", price: "R$ 28", image: "/drinks/outros/tequila.png", description: "Mexicana, marcante e intensa." },
      { name: "Vodka da Casa", price: "R$ 24", image: "/drinks/outros/vodka.png", description: "Pura e versátil, ideal para drinks." },
      { name: "Gin da Casa", price: "R$ 26", image: "/drinks/outros/gin.png", description: "Equilibrado, refrescante e aromático." },
      { name: "Cachaça Weber Black", price: "R$ 22", image: "/drinks/outros/cachaca.png", description: "Artesanal, brasileira e robusta." },
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
    window.scrollTo(0, 0);window.scrollTo(0, 0);
  }, [location]);


  const currentSections = activeTab === "comidas" ? foodSections : drinkSections;
  const currentHeader = activeTab === "comidas"
    ? {
        title: "Um menu pensado para você e sua experiência no Gambito",
        subtitle: "Pratos exclusivos e deliciosos para você descobrir",
        image: "/pratomenu.png",
      }
    : {
        title: "Drinks autorais e clássicos para uma noite única",
        subtitle: "Coquetéis exclusivos e experiências em cada taça",
        image: "/BQ.png",
      };

  return (
    <motion.section className="w-full h-fit scroll-auto">
      {/* Header */}
      <motion.div
        className="flex flex-col w-full h-[45rem]"
        style={{
          backgroundImage:
            activeTab === "comidas" ? "linear-gradient(to bottom, #153831 0%, #153831 80%, black 100%)" : "linear-gradient(to bottom, black 0%, red 80%, black 100%)",
        }}
      >
          <Link  className="w-full h-fit p-8 px-10 flex items-center gap-4 opacity-30 hover:opacity-100 transition-opacity ease-in   " to="/">
            <motion.img
              className="w-6 h-6 object-cover"
              src="/back.png"
              alt="Voltar"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 3 }}
            />
          <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 3 }} className="w-40 object-cover" src="/gambito-logo.png" alt="Logo" />
          </Link>

        {/* Conteúdo dinâmico */}
        <motion.div className="relative flex flex-col items-center w-full h-full mt-10">
          <motion.h1 initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="px-3 max-w-2xl text-5xl font-bold text-white text-center">
            {currentHeader.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="px-3 md:max-w-2xl text-white text-center text-xl mt-2">
            {currentHeader.subtitle}
          </motion.p>
          <motion.img src={currentHeader.image} alt={activeTab} />
        </motion.div>
      </motion.div>

      {/* Botão de seleção */}
      <div className="flex justify-center z-50 mt-15 lg:mt-30">
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
            className={`flex-1 z-50 flex items-center justify-center text-sm font-semibold transition-colors ${
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
              transition={{ duration: 0.8, ease: "easeOut", delay: sIndex * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col gap-6"
            >
              <h2 className={`text-2xl font-bold text-white border-b ${activeTab === "comidas" ? "border-[#153831]/70" : "border-red-600/40"} pb-2`}>
                {section.title}
              </h2>

              <div className="flex flex-col gap-6">
                {section.items.map((item, iIndex) => (
                  <motion.div
                    key={iIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: iIndex * 0.1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <motion.img
                      src={`/gambito-logo-t.png`}
                      alt={item.name}
                      className="w-16 h-16 object-contain rounded-lg shadow-md"
                    />
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center justify-between border-b border-dotted border-gray-500 pb-1">
                        <span className="text-white text-lg font-medium">{item.name}</span>
                        <span className="text-white font-medium">{item.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">{item.description}</p>
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
