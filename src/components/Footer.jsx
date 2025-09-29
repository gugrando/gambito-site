import { motion } from "framer-motion"
const Footer = () => {
    return (
  <motion.section className="relative h-fit flex flex-col items-center bg-black">
    {/* Conteúdo do footer */}
    <motion.footer className="flex flex-col items-center relative z-50 w-full h-full lg:mb-1 ">
        <motion.h1 className="text-3xl text-white mt-20">Portas abertas</motion.h1>
        <motion.p className="text-white mb-4">Entre e descubra</motion.p>
        <motion.div className="z-50">
             <motion.button
                        transition={{ duration: 1, delay: 0.4 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.03 }}
                        className="w-[260px] text-white px-22 py-[.75rem] z-50 bg-yellow-500/5 hover:bg-amber-500/60 border border-yellow-500 rounded-full shadow-lg">
                            Reserva
                    </motion.button>
        </motion.div>
        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="mt-[-4rem] w-full md:w-1/2 lg:w-[30%]" src="./src/assets/entrada.png"/>
        <div className="absolute bottom-1/4 w-full h-fit flex items-center justify-center">
            <motion.a href="#top">
                <motion.img className="animate-bounce w-[42px] rotate-180" src="./src/assets/flecha.png" alt="Top icon" />
            </motion.a>
        </div>
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
                    <motion.a target="_blank" href="https://www.facebook.com/gambitobar/">
                        <motion.img className="w-8" src="./src/assets/zap.png" />
                    </motion.a>
                    <motion.a target="_blank" href="https://open.spotify.com/playlist/3WPNErCj8ei7t4qQvX5QTz?si=Y77rLzUOQRG5MA6TZKF2yQ&pi=u-7UJm2wMbTVSb&nd=1&dlsi=98c21ccefdcb477a">
                        <motion.img className="w-8" src="./src/assets/logotipo-spotify.png" />
                    </motion.a>
                </motion.div>
        </motion.div>
    </motion.footer>
  </motion.section>
);

}   
 
export default Footer;