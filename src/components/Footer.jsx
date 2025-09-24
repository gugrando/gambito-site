import { motion } from "framer-motion"
const Footer = () => {
    return (
  <motion.section className="relative h-fit flex flex-col justify-end items-center bg-black overflow-hidden ">
        {/* Imagem de fundo + */}
        {/* <img 
        className="absolute inset-0 mx-auto w-[100%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[20%] h-auto object-contain opacity-40 sm:opacity-40 pointer-events-none select-none" 
        src="./src/assets/entrada.webp" 
        alt="" 
        />
        <motion.div className="flex flex-col items-center relative z-40">
            <motion.img className="lg:hidden opacity-40 w-[200px] max-w-md" src="./src/assets/gambito-logo-t.png" alt="Gambito Logo" />
            
            <motion.h1 className="text-2xl font-bold text-white z-40 mt-10 lg:text-4xl">
                Venha para essa experiência
            </motion.h1>
            <motion.button whileHover={{ scale: 1.03 }} className="w-[260px] text-white px-22 py-[.75rem] mt-4 bg-yellow-500/5 hover:bg-amber-500/60 border border-yellow-500 rounded-full shadow-lg transition-all ease-in">
                Localização
            </motion.button>
            
            <motion.button whileHover={{ scale: 1.03 }} className="w-[260px] text-white px-22 py-[.75rem] mt-4 bg-yellow-500/5 hover:bg-amber-500/60 border border-yellow-500 rounded-full shadow-lg transition-all ease-in">
                Reserva
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} className="w-[260px] text-white px-22 py-[.75rem] mt-4 bg-yellow-500/5 hover:bg-amber-500/60 border border-yellow-500 rounded-full shadow-lg transition-all ease-in">
                Voltar
            </motion.button>
            <motion.img className="z-40 lg:hidden w-[200px] max-w-md mt-10 opacity-60" src="./src/assets/gambito-logo-t.png" alt="Gambito Logo" />
        </motion.div>

        <motion.div className="h-[20%] w-full"></motion.div> */}

    
    {/* Conteúdo do footer */}
    <motion.footer className="flex flex-col justify-end items-center relative z-50 w-full h-full lg:mb-1 ">
        <motion.div className="text-start w-full h-fit flex flex-col-reverse lg:flex-row lg:justify-center lg:p-8 lg:gap-40 mt-4 items-center">
            {/* Logo Desktop */}
            <motion.img className="hidden lg:inline w-[200px] max-w-md" src="./src/assets/gambito-logo-t.png" alt="Gambito Logo" />
            
            {/* Copyright */}
            <motion.div className="flex flex-col items-center w-fit py-6 lg:py-0">
                    <motion.span className="lg:hidden w-[90%] h-px bg-neutral-800 mb-4"></motion.span>
                    
                    <motion.p className="text-neutral-400 text-center lg:mt-4">
                        © Todos direitos reservados | Gambito Bar 2025.
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0.4 }} 
                        whileHover={{ opacity: 1 }} 
                        className="text-neutral-400 text-center"
                    >
                    Desenvolvido por:{" "}
                    <motion.a target="_blank" href="https://www.instagram.com/nivix.co/">
                    <motion.span className="text-yellow-400">Nivix</motion.span>
                    </motion.a>
                </motion.p>
            </motion.div>
            {/* Social */}
                <motion.div className="lg:w-fit w-full h-fit flex justify-center gap-4">
                    <motion.a target="_blank" href="https://www.instagram.com/gambitobar/">
                        <motion.img className="w-8" src="./src/assets/instagram.png" />
                    </motion.a>
                    <motion.a target="_blank" href="https://www.facebook.com/gambitobar/">
                        <motion.img className="w-8" src="./src/assets/facebook.png" />
                    </motion.a>
                    <motion.a target="_blank" href="https://open.spotify.com/playlist/3WPNErCj8ei7t4qQvX5QTz?si=Y77rLzUOQRG5MA6TZKF2yQ&pi=u-7UJm2wMbTVSb&nd=1&dlsi=98c21ccefdcb477a">
                        <motion.img className="w-8" src="./src/assets/logotipo-spotify.png" />
                    </motion.a>
                </motion.div>
        </motion.div>
    </motion.footer>
    {/* <motion.a href="#top" className="mt-4 text-xs mb-2 flex items-center gap-2">
        <motion.img className="w-6 rotate-180 animate-pulse opacity-40" src="./src/assets/flecha.png" />
    </motion.a> */}
  </motion.section>
);

}   
 
export default Footer;