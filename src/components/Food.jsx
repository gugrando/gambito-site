import { motion, useScroll, useTransform, useMotionValueEvent, useAnimation, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Images = [
    {id: 'taca', src: '/taca-new2.png'},
    {id: 'local', src: '/local.jpg'},
]


const Food = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })


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
            <div  className="w-full h-full bg-[url('/loc.jpg')] bg-cover bg-center bg-no-repeat absolute z-[-1] opacity-20"></div>
            {/* Comidas */}
            <motion.div ref={ref2} className="w-full h-fit mt-20">
                <motion.h1 transition={{ duration: 2 }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center text-3xl text-white ">
                   Uma experiência gastronomica
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: 0.7 }} 
                            className="text-center text-white"
                >
                    Menu completo e um mistério em cada mordida
                </motion.p>
                <motion.div className="w-full flex justify-center mt-4">
                    <Link to="/menu" state={{ id: 'comidas' }}>
                        <motion.button
                            transition={{ duration: 1, delay: 0.7 }}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03 }}
                            className="hover:cursor-pointer w-[260px] text-white px-22 py-[.75rem] z-50 bg-yellow-500/5 hover:bg-amber-500/60 border border-yellow-500 rounded-full shadow-lg">
                                Menu
                        </motion.button>
                    </Link>
                </motion.div>
                <motion.div className="w-full h-fit flex justify-between mt-22">
                    <motion.img style={{ x: X1 }} className="w-[45%] lg:w-[30%] h-auto object-contain" src="/burrata.png" alt="" />
                    <motion.img style={{ x: X2 }} className="w-[40%] lg:w-[25%] h-auto object-contain" src="/coxinha.png" alt="" />
                </motion.div>
                <motion.div style={{opacity: Opacity2 }} className="relative w-full h-full flex flex-col items-center justify-center">
                    <motion.img transition={{ duration: 2, delay: 1 }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="mt-[-20%] w-[100%] lg:w-[40%]" src={innerWidth < 768 ? `/Phone2.png` : `/Phone3.png`} alt=""></motion.img>
                    <motion.div className="absolute top-2/3 flex flex-col items-center">
                        <motion.h1 initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2 }}  
                                className="text-center text-3xl text-white "
                        >
                            Levamos a experiência até você
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: 0.7 }} 
                            className="text-center text-white"
                        >
                            Peça agora no Delivery!
                        </motion.p>
                        <a href="https://gambitobar.goomer.app/">
                            <motion.button
                                transition={{ duration: 1, delay: 0.7 }}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.03 }}
                                className="hover:cursor-pointer w-[260px] mt-6 text-white px-22 py-[.75rem] z-50 bg-yellow-500/5 hover:bg-amber-500/60 border border-yellow-500 rounded-full shadow-lg">
                                    Delivery
                            </motion.button>
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
 
export default Food;