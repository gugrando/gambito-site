import { motion, useScroll, useTransform, useMotionValueEvent, useAnimation, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react";

const Speakeasy = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const DrinkContainerPos = useTransform(scrollYProgress, (op)=>{
        return op > 0 && op < 1 ? "sticky" : "relative"
    })
    
    const InfosDispo = useTransform(scrollYProgress, (op)=>{
        return op > 0.09 ? "hidden" : "visible"
    })
    const InfosColor = useTransform(scrollYProgress, (op)=>{
        return op > 0.09 ? "black" : "white"
    })
    // 🔹 controls para animar o bloco "drinks e mesa fixa"
    const drinksControls = useAnimation();
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.079) {
            drinksControls.start("visible");
        } else {
            drinksControls.start("hidden");
        }
    });
    const InfosOpac = useTransform(scrollYProgress, [0, 0.07, 0.08], [1, 1, 0])
    const MesaPos = useTransform(scrollYProgress, [0, 0.08], ["230%", "-10%"])
    const DrinkPos = useTransform(scrollYProgress, [0, 0.03, 0.08], ["-20%", "-20%", "23%"])

    const Images = [
        { id: "img1", src: "./src/assets/drink1.png", title: "Mojito", description: "Mojito da Casa!" },
        { id: "img2", src: "./src/assets/drink2.png", title: "Margarita", description: "Margarita da Casa!" },
        { id: "img3", src: "./src/assets/drink3.png", title: "Caipirinha", description: "Caipirinha da Casa!" },
        { id: "img4", src: "./src/assets/drink4.png", title: "Negroni", description: "Negroni da Casa!" },
        { id: "img5", src: "./src/assets/drink5.png", title: "Old Fashioned", description: "Old Fashioned da Casa!" },
    ]

    const [activeIndex, setActiveIndex] = useState(0)
    const numImages = 5;
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const step = 1 / numImages; // cada step = 0.2
        if (latest < step) setActiveIndex(0)
        else if (latest < step*2) setActiveIndex(1)
        else if (latest < step*3) setActiveIndex(2)
        else if (latest < step*4) setActiveIndex(3)
        else setActiveIndex(4)
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => 
        { console.log("scrollYProgress:", latest)}
    )

    return ( 
        <motion.div className="relative bg-contain bg-cover-center bg-[url('./src/assets/bg-drinks.png')]">
            {/* BG */}
            <div className="absolute inset-0 bg-black/60 backdrop-opacity-95 backdrop-blur-[1px]"></div>

            <motion.div className="flex flex-col w-full h-[550rem] mt-[-2rem]" ref={ref}  >
                <motion.div className="relative flex flex-col justify-center w-full h-screen top-0" style={{position: DrinkContainerPos}}>
                    <motion.div style={{opacity: InfosOpac}} className="z-50 flex flex-col items-center mt-6">
                        <motion.h1 
                                style={{ color: InfosColor}}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2 }} 
                                className="w-full h-fit text-white text-3xl text-center"
                        >
                            Um chamado ao secreto
                        </motion.h1>
                        <motion.p
                            style={{visibility: InfosDispo, color: InfosColor}}
                            className="w-[80%] text-white text-sm tracking-wide text-center"
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: 0.7 }}
                        >
                            O charme oculto dos bares clandestinos, o termo Speakeasy refere-se aos lendários bares da Lei Seca.
                        </motion.p>
                    </motion.div>      
            
                    {/* drinks e mesa fixa */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={drinksControls}
                            transition={{ duration: 0.4 }}
                            className="overflow-clip z-20 items-center text-center justify-center w-full h-fit"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={Images[activeIndex].id + "-info"}
                                    variants={{
                                        enter: { opacity: 0, x: 60 },
                                        center: { opacity: 1, x: 0 },
                                        exit: { opacity: 0, x: -60 },
                                    }}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    <motion.h1 className="text-white text-3xl">
                                        {Images[activeIndex].title}
                                    </motion.h1>
                                    <motion.p className="text-white">
                                        {Images[activeIndex].description}
                                    </motion.p>
                                </motion.div>
                            </AnimatePresence>
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                className="w-[260px] text-white px-22 py-[.75rem] mt-4 bg-yellow-500/5 hover:bg-amber-500/60 border border-yellow-500 rounded-full shadow-lg transition-all ease-in"
                            >
                                Drinks
                            </motion.button>
                        </motion.div>
                    
                    
                    
                    {/* Drink Images carroussel */}
                    {/* Drink Images carroussel */}
                    <motion.div
                    style={{ y: DrinkPos }}
                    className="overflow-x-clip z-10 flex flex-col items-center justify-center w-full h-fit"
                    >
                    <AnimatePresence mode="wait">
                        <motion.img
                        key={Images[activeIndex].id}
                        src={Images[activeIndex].src}
                        className="w-[180px] h-[230px]"
                        variants={{
                            enter: { x: 220 },   // entra da direita
                            center: { x: 0 },   // fica no centro
                            exit: {  x: -420 },   // sai para a esquerda
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
                    </motion.div>


                    <motion.div style={{y: MesaPos}} className="z-0 flex flex-col items-center justify-center w-full h-fit ">
                        <motion.img className="w-[70%] sm:w-[40%] lg:w-[25%] xl:w-[20%]" src="./src/assets/mesa.png" alt="" />
                    </motion.div>
                </motion.div>
            </motion.div>
            {/* <div className="w-full h-[1000px] bg-green-900">.</div> */}
        </motion.div>
     );
}
 
export default Speakeasy;