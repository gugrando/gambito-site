import { motion } from "framer-motion"
const Footer = () => {
    return (
  <motion.section className="relative h-fit flex flex-col items-center bg-black">
    {/* Conteúdo do footer */}
    <motion.footer className="flex flex-col items-center relative z-50 w-full h-full lg:mb-1 ">
        <motion.h1 initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2 }}  
                                className="text-3xl text-white mt-20"
                                >
                                    Portas abertas
                                </motion.h1>
        <motion.p 
        initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: 0.7 }} className="text-white mb-4 z-50">Entre e descubra</motion.p>
        <motion.div className="z-50 flex flex-col items-center gap-3">
                    <a href="https://www.getinapp.com.br/farroupilha/gambito-bar">
                        <motion.button
                            transition={{ duration: 1, delay: 0.7 }}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03 }}
                            className="hover:cursor-pointer w-[260px] text-white px-22 py-[.75rem] z-50 bg-yellow-500/5 hover:bg-amber-500/60 border border-yellow-500 rounded-full shadow-lg">
                                Reserva
                        </motion.button>
                    </a>
                    <a href="https://gambitobar.goomer.app/">
                        <motion.button
                            transition={{ duration: 1, delay: 0.7 }}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03 }}
                            className="hover:cursor-pointer w-[260px] text-white px-22 py-[.75rem] z-50 bg-yellow-500/5 hover:bg-amber-500/60 border border-yellow-500 rounded-full shadow-lg">
                                Delivery
                        </motion.button>
                    </a>
        </motion.div>
        {/* Aqui muda o tamanho aritificalmente mas muda... */}
        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="mt-[-9rem] w-full md:w-1/2 lg:w-[30%]" src="/entrada.webp"/>
        
        <div className="absolute bottom-[25%] w-full h-fit flex flex-col items-center justify-center">
            <motion.a initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 1 }} href="#top">
                <motion.img className="animate-bounce w-[42px] rotate-180" src="/flecha.webp" alt="Top icon" />
            </motion.a>
        </div>
        <motion.div className="text-start w-full h-fit flex flex-col-reverse lg:flex-row lg:justify-center lg:p-8 lg:gap-40 mt-4 items-center">
            {/* Logo Desktop */}
            <motion.img className="hidden lg:inline w-[200px] max-w-md" src="/gambito-logo-t.webp" alt="Gambito Logo" />
            {/* Copyright */}
            <motion.div className="flex flex-col items-center w-fit py-6 lg:py-0">
                    <motion.span className="lg:hidden w-[90%] h-px bg-neutral-800 mb-4"></motion.span>
                    <motion.a target="_blank" href="https://maps.app.goo.gl/VABN2sh3hxQ5rknF8">
                        <p className="text-white text-center px-2 text-[14.5px] underline">Rua Stefano Crippa, 196, Bela Vista, Farroupilha-RS</p>
                    </motion.a>
                    <motion.p className="text-neutral-400 text-center text-sm mt-2">
                        © Todos direitos reservados | Gambito Bar 2025.
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0.4 }} 
                        whileHover={{ opacity: 1 }} 
                        className="text-neutral-400 text-center text-sm"
                    >
                    Desenvolvido por:{" "}
                    <motion.a target="_blank" href="https://www.instagram.com/nivix.co/">
                    <motion.span className="text-yellow-400">Nivix</motion.span>
                    </motion.a>
                </motion.p>
            </motion.div>
            {/* Social */}
                <motion.div className="lg:w-fit w-full h-fit flex justify-center gap-4">
                    <motion.a initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }} target="_blank" href="https://www.instagram.com/gambitobar/">
                        <motion.img className="w-8" src="/instagram.webp" />
                    </motion.a>
                    <motion.a initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} target="_blank" href="https://www.facebook.com/gambitobar/">
                        <motion.img className="w-8" src="/facebook.webp" />
                    </motion.a>
                    <motion.a initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} target="_blank" href="https://api.whatsapp.com/send?phone=5554996153535">
                        <motion.img className="w-8" src="/zap.webp" />
                    </motion.a>
                    <motion.a initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} target="_blank" href="https://open.spotify.com/playlist/3WPNErCj8ei7t4qQvX5QTz?si=Y77rLzUOQRG5MA6TZKF2yQ&pi=u-7UJm2wMbTVSb&nd=1&dlsi=98c21ccefdcb477a">
                        <motion.img className="w-8" src="/logotipo-spotify.webp" />
                    </motion.a>
                </motion.div>
        </motion.div>
    </motion.footer>
  </motion.section>
);

}   
 
export default Footer;