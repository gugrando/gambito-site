import { motion, useScroll, useTransform, useMotionValueEvent, useAnimation, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react";
import { Link } from "react-router-dom"

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
    const Opacity = useTransform(scrollYProgress, [0, 0.89, 0.987], [1, 1, 0])

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
        { id: "img4", src: "/Negroni.webp", title: "Negroni", description: "O lendário clássico, especialidade da casa" },
        { id: "img1", src: "/rabo-de-galo.webp", title: "Rabo de Galo", description: "Clássico Brasileiro, uma viagem sensorial" },
        { id: "img2", src: "/esfumato.webp", title: "Sfumato", description: "Releitura floral de martini" },
        { id: "img3", src: "/drink1.webp", title: "Penicillin Clarified", description: "Uma versão clarificada desse neoclássico" },
        { id: "img5", src: "/Drink5-Cut.webp", title: "Golden Bloom", description: "Coquetel autoral no perfil spritz" },
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

    // useMotionValueEvent(scrollYProgress, "change", (latest) => 
    //     { console.log("scrollYProgress:", latest)}
    // )

    return ( 
        <motion.div style={{opacity: Opacity}} className="relative bg-contain bg-cover-center bg-[url('/FundoGambito.webp')]">
            {/* BG */}
            <div className="absolute inset-0 bg-black/60 backdrop-opacity-95 backdrop-blur-[1px]"></div>

            <motion.div className="flex flex-col w-full h-[550rem] mt-[-2rem] lg:mt-8 2xl:mt-[-2rem]" ref={ref}  >
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
                            Entre drinks clássicos e autorais, viva a experiência dos lendários Speakeasies
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
                            className="overflow-x-clip items-center text-center justify-center w-full h-fit"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={Images[activeIndex].id + "-info"}
                                    variants={{
                                        enter: { opacity: 0, x: 0 },
                                        center: { opacity: 1, x: 0 },
                                        exit: { opacity: 0, x: 0 },
                                    }}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <motion.h1 className="text-white text-3xl">
                                        {Images[activeIndex].title}
                                    </motion.h1>
                                    <motion.p className="text-white">
                                        {Images[activeIndex].description}
                                    </motion.p>
                                </motion.div>
                            </AnimatePresence>
                            <Link to="/menu" state={{type: "drinks"}}>
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    className="w-[260px] text-white px-22 py-[.75rem] mt-4 z-50 bg-yellow-500/5 hover:bg-amber-500/60 border border-yellow-500 rounded-full shadow-lg transition-all ease-in"
                                >
                                    Drinks
                                </motion.button>
                            </Link>
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
                        className="w-[150px] h-[200px]"
                        variants={{
                            enter: { x: 220 },   // entra da direita
                            center: { x: 0 },   // fica no centro
                            exit: {  x: -420 },   // sai para a esquerda
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.26, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
                    </motion.div>
                    <motion.div style={{y: MesaPos}} className="z-0 flex flex-col items-center justify-center w-full h-fit ">
                        <motion.img className="w-[70%] sm:w-[40%] lg:w-[25%] xl:w-[20%]" src="/mesa.webp" alt="" />
                    </motion.div>
                </motion.div>
                
            </motion.div>
            {/* <div className="w-full h-[1000px] bg-green-900">.</div> */}
        </motion.div>
     );
}
 
export default Speakeasy;