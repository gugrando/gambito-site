import React from "react";
import { motion } from "framer-motion";

const LinkTree: React.FC = () => {
  const goTo = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <motion.div className="h-fit bg-gradient-to-t from-[#102A13] from-10% to-[#fcfffd] to-50% flex flex-col items-center justify-center text-white overflow-clip">
  
      {/* Banner */}
      <motion.div className="bg-[#041823] h-[23rem] min-w-full flex flex-col items-center justify-center rounded-b-4xl">
        <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
          src="/bg.png"
          alt="Logo"
          className="w-[50%] md:w-[18%] rounded-full md:mt-[20px]"
        />
        <motion.h1 initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .3, delay: .2 }} className="text-5xl md:text-5xl font-bold mt-6">Gambito Bar</motion.h1>
        <motion.p initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .3, delay: .4 }} className="text-xl md:text-xl text-center">
          Um convite ao secreto
        </motion.p>
      </motion.div>


      {/* Links */}
      <motion.div initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }} className="flex flex-col gap-9 w-full max-w-lg py-9 items-center">
        {/* Site */}
        <motion.div
          onClick={() => goTo("https://gambito-site.vercel.app/")}
          className="relative flex items-center cursor-pointer 
          w-[90%] h-[140px] md:w-[500px] md:h-[160px] 
          px-4 bg-gradient-to-r from-[#3bc23b] from-20% to-[#102A13] to-70% text-white font-semibold rounded-2xl shadow-[0_6px_15px_rgba(0,0,0,0.5)] transition"
        >
          {/* Imagem absoluta, continua fora do fluxo */}
          <motion.img
            src="/rede.png"
            alt="Delivery"
            className="absolute w-[64px] top-[-15%]"
          />

          {/* Container das duas metades */}
          <motion.div className="flex w-full h-full">
            {/* Lado direito original agora é o esquerdo */}
            <motion.div className="w-4/5 flex flex-col items-center justify-center text-center">
              <motion.dd className="text-[30px] md:text-[50px]">Site</motion.dd>
              <motion.p className="text-xs md:text-[15px] text-gray-300">Site do Gambito Bar</motion.p>
            </motion.div>

            {/* Lado esquerdo original agora é o direito */}
            <motion.div className="w-1/5 flex items-center justify-center">
              <motion.div className="absolute -top-7 right-2 md:-top-7">
                <motion.img
                  src="/5.png"
                  alt="Delivery"
                  className="w-[60px] h-[110px] drop-shadow-lg"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Reservas */}
      <motion.div
        onClick={() => goTo("https://widget.getinapp.com.br/M6Xerlk0")}
        className="relative flex items-center cursor-pointer 
        w-[90%] h-[140px] md:w-[500px] md:h-[160px] 
        px-4 bg-gradient-to-r from-[#102A13] to-[#369741]
        text-white font-semibold rounded-2xl shadow-[0_6px_15px_rgba(0,0,0,0.5)] transition"
      >
        {/* Imagem absoluta */}
        <motion.img
          src="/calendario.png"
          alt="Delivery"
          className="w-15 md:w-10 md:h-10 drop-shadow-lg absolute -top-5 right-3 brightness-85"
        />

        {/* Container das duas metades */}
        <motion.div className="flex w-full h-full">
          {/* Lado esquerdo */}
          <motion.div className="w-1/5 flex items-center justify-center">
            <motion.div className="absolute -top-10 left-5 md:-top-9">
              <motion.img
                src="/1.png"
                alt="Delivery"
                className="w-[60%] drop-shadow-lg"
              />
            </motion.div>
          </motion.div>

          {/* Lado direito */}
          <motion.div className="w-4/5 flex flex-col items-center justify-center text-center">
            <motion.dd className="text-[30px] md:text-[50px]">Reservas</motion.dd>
            <motion.p className="text-xs md:text-[15px] text-gray-300">Faça sua reserva e evite filas</motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
      
        
        {/* Delivery */}
        <motion.div
          onClick={() => goTo("https://gambitobar.goomer.app/")}
          className="relative flex items-center cursor-pointer 
          w-[90%] h-[140px] md:w-[500px] md:h-[160px] 
          px-4 bg-gradient-to-r from-[#3bc23b] from-20% to-[#102A13] to-70% text-white font-semibold rounded-2xl shadow-[0_6px_15px_rgba(0,0,0,0.5)] transition"
        >
          {/* Imagem absoluta, continua fora do fluxo */}
          <motion.img
            src="/delivery.png"
            alt="Delivery"
            className="w-20 drop-shadow-lg absolute -top-9 left-2
            md:-top-9 md:left-5 brightness-88"
          />

          {/* Container das duas metades */}
          <motion.div className="flex w-full h-full">
            {/* Lado direito original agora é o esquerdo */}
            <motion.div className="w-4/5 flex flex-col items-center justify-center text-center">
              <motion.dd className="text-[30px] md:text-[50px]">Delivery</motion.dd>
              <motion.p className="text-xs md:text-[15px] text-gray-300">Peça já pelo app</motion.p>
            </motion.div>

            {/* Lado esquerdo original agora é o direito */}
            <motion.div className="w-1/5 flex items-center justify-center">
              <motion.div className="absolute -top-8 -right-5 md:-top-7">
                <motion.img
                  src="/2.png"
                  alt="Delivery"
                  className="w-[60%] drop-shadow-lg"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Whatsapp */}
        <motion.div
          onClick={() => goTo("https://api.whatsapp.com/send?phone=5554996153535")}
          className="relative flex items-center cursor-pointer 
          w-[90%] h-[140px] md:w-[500px] md:h-[160px] 
          px-4 bg-gradient-to-r from-[#102A13] to-[#347c3d] text-white font-semibold rounded-2xl shadow-[0_6px_15px_rgba(0,0,0,0.5)] transition"
        >
          {/* Imagem absoluta, continua fora do fluxo */}
          
          {/* <motion.img
            src="/whatsbig.png"
            alt="Delivery"
            className="w-14 h-14 md:w-17 md:h-17 drop-shadow-lg absolute -top-5 right-2"
          /> */}
          <motion.img
            src="/whatsli.png"
            alt="Delivery"
            className="w-15 h-15 drop-shadow-lg absolute right-[-2%] top-[-10%]"
          />
          

          {/* Container das duas metades */}
          <motion.div className="flex w-full h-full">
            {/* Lado esquerdo */}
            <motion.div className="w-1/5 flex items-center justify-center">
              {/* Aqui você pode colocar conteúdo do lado esquerdo */}
              <motion.div className="absolute -top-10 left-4 md:-top-9">
                <motion.img
                  src="/3.png"
                  alt="Delivery"
                  className="w-[60%] drop-shadow-lg"
                />
              </motion.div>
              
            </motion.div>

            {/* Lado direito */}
            <motion.div className="w-4/5 flex flex-col items-center justify-center text-center">
              <motion.dd className="text-[30px] md:text-[50px]">WhatsApp</motion.dd>
              <motion.p className="text-xs md:text-[15px] text-gray-300">Tire suas dúvidas</motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
        

        {/* Playlist */}
        <motion.div
          onClick={() => goTo("https://open.spotify.com/playlist/3WPNErCj8ei7t4qQvX5QTz?go=1&sp_cid=bd551ef2a3d6be2536f0ecfc7c77d2b4&nd=1&dlsi=3ab7b5972d5c4310")}
          className="relative flex items-center cursor-pointer 
          w-[90%] h-[140px] md:w-[500px] md:h-[160px] 
          px-4 bg-gradient-to-r from-[#102A13] to-[#000000] text-white font-semibold rounded-2xl shadow-[0_6px_15px_rgba(0,0,0,0.5)] transition"
        >
          {/* Imagem absoluta, continua fora do fluxo */}
          <motion.img
            src="/spotify.png"
            alt="Spotify"
            className="w-12 h-12 md:w-10 md:h-10 drop-shadow-lg absolute -bottom-5 left-2"
          />

          {/* Container das duas metades */}
          <motion.div className="flex w-full h-full">
            {/* Lado direito original agora é o esquerdo */}
            <motion.div className="w-4/5 flex flex-col items-center justify-center text-center">
              <motion.dd className="text-[30px] md:text-[50px]">Playlist</motion.dd>
              <motion.p className="text-xs md:text-[15px] text-gray-300">Escute nossa playlist</motion.p>
            </motion.div>

            {/* Lado esquerdo original agora é o direito */}
            <motion.div className="w-1/5 flex items-center justify-center">
              <motion.div className="absolute -top-15 -right-5 md:-top-9">
                <motion.img
                  src="/4.png"
                  alt="Delivery"
                  className="w-[60%] drop-shadow-lg"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        
      </motion.div>
    </motion.div>
  );
};

export default LinkTree;
