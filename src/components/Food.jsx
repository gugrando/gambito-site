import { motion, useScroll, useTransform, useMotionValueEvent, useAnimation, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react";

const Images = [
    {id: 'taca', src: './src/assets/taca-new2.png'},
    {id: 'local', src: './src/assets/local.jpg'},
]


const Food = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })


    const scaleX = useTransform(scrollYProgress, [0, 0.25, 0.8], [1, 1, 0])
    const Opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0])
    const Opacity2 = useTransform(scrollYProgress, [0, 0.67, 0.92], [1, 1, 0])
    useMotionValueEvent(scrollYProgress, "change", (latest) => 
            { console.log("scrollYProgress:", latest)}
        )

    const ref2 = useRef(null);
    const { scrollYProgress : scrollYProgress2 } = useScroll({
        target: ref2,
        offset: ["start end", "end start"],
    })

    const X1 = useTransform(scrollYProgress2, [0, .28], ['-100%', '0%'])
    const X2 = useTransform(scrollYProgress2, [0, 0.28], ['100%', '0%'])
    
    return (
        <motion.section style={{opacity: Opacity2}} ref={ref} className="w-full h-fit overflow-x-clip  bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative z-50">
            <div  className="w-full h-full bg-[url('./src/assets/loc.jpg')] bg-cover bg-center bg-no-repeat absolute z-[-1] opacity-30"></div>
            {/* <motion.div style={{scale: scaleX, opacity: Opacity }} className="text-center w-full h-full flex flex-col items-center justify-center mt-16">
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1 }} 
                    className="text-3xl text-white">Entre drinks autorais e clássicos</motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4 }}  
                    className="text-white">Viva a experiência dos Speakeasies</motion.p>
            </motion.div>
            <motion.div style={{opacity: Opacity }} className="relative w-full h-full flex flex-col items-center justify-center mt-20">
                <motion.img 
                    src={Images[0].src}
                    initial={{ opacity: 0.1, x: -30 }} 
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: .2 }} 
                    className="ml-12 w-[110%] z-40"
                    alt="" 
                    style={{scale: scaleX, opacity: Opacity}}
                />
                <motion.img 
                    src={Images[1].src}
                    initial={{ opacity: 0.1, x: 30 }} 
                    whileInView={{ opacity: 0.1, x: 0 }}
                    transition={{ duration: 1.2, delay: .4 }} 
                    className="absolute inset-0 w-[140%] h-auto object-contain"
                    alt="" 
                    style={{scale: scaleX}}
                />
                <motion.img initial={{ opacity: 0, y: -90 }} whileInView={{ opacity: 1, y: 0 }} className="animate-bounce z-50 absolute top-[90%] w-[48px]" src="./src/assets/flecha.png" alt="" />
            </motion.div> */}

            {/* Comidas */}
            <motion.div ref={ref2} className="w-full h-fit mt-25">
                <motion.h1 transition={{ duration: 1 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center text-3xl text-white ">
                   Uma experiência gastronomica
                </motion.h1>
                <motion.p transition={{ duration: 1, delay: 0.2 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center text-white">
                    Menu completo e um mistério em cada mordida
                </motion.p>
                <motion.div className="w-full flex justify-center mt-4">
                    <motion.button
                        transition={{ duration: 1, delay: 0.4 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.03 }}
                        className="w-[260px] text-white px-22 py-[.75rem] z-50 bg-yellow-500/5 hover:bg-amber-500/60 border border-yellow-500 rounded-full shadow-lg">
                            Menu
                    </motion.button>
                </motion.div>
                <motion.div className="w-full h-fit flex justify-between mt-12">
                    <motion.img style={{ x: X1 }} className="w-[45%] lg:w-[30%] h-auto object-contain" src="./src/assets/burrata.png" alt="" />
                    <motion.img style={{ x: X2 }} className="w-[40%] lg:w-[25%] h-auto object-contain" src="./src/assets/coxinha.png" alt="" />
                </motion.div>
                <motion.div style={{opacity: Opacity2 }} className="relative w-full h-full flex flex-col items-center justify-center">
                    <motion.img transition={{ duration: 1, delay: .5 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="mt-[-20%] w-[100%] lg:w-[40%]" src={innerWidth < 768 ? `./src/assets/Phone2.png` : `./src/assets/Phone3.png`} alt=""></motion.img>
                    <motion.div className="absolute top-2/3 flex flex-col items-center">
                        <motion.h1 transition={{ duration: 1 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center text-3xl text-white ">
                            Levamos a experiência até você
                        </motion.h1>
                        <motion.p transition={{ duration: 1, delay: 0.2 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center text-white">
                            Peça agora no Delivery!
                        </motion.p>
                        <motion.button
                            transition={{ duration: 1, delay: 0.4 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03 }}
                            className="w-[260px] mt-6 text-white px-22 py-[.75rem] z-50 bg-yellow-500/5 hover:bg-amber-500/60 border border-yellow-500 rounded-full shadow-lg">
                                Delivery
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
 
export default Food;