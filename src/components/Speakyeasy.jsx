import { motion, useScroll, useTransform, useMotionValueEvent, useAnimation } from "framer-motion"
import { useRef, useState } from "react";

const Speakeasy = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "center end"],
    })

    const DrinkContainerPos = useTransform(scrollYProgress, (op)=>{
        return op > 0 && op < 1 ? "sticky" : "relative"
    })
    const InfosDispo = useTransform(scrollYProgress, (op)=>{
        return op > 0.2 ? "hidden" : "visible"
    })
    const InfosOpac = useTransform(scrollYProgress, [0, 0.07, 0.08], [1, 1, 0])
    
    const MesaPos = useTransform(scrollYProgress, [0, 0.08], ["230%", "-10%"])
    const DrinkPos = useTransform(scrollYProgress, [0, 0.07], ["0", "23%"])

    
    
    const Images = {
        img1: './src/assets/drink1.png',
        img2: './src/assets/drink2.png',
        img3: './src/assets/drink3.png',
    }
    const [img, setImg] = useState(Images.img1)
    const handleImg = (newImg) => {
        if (newImg !== img) {
            setImg(newImg)
        }
    }
    // eslint-disable-next-line no-unused-vars
    const DrinkImage = useTransform(scrollYProgress, (op)=>{
        return op < 0.3 ? handleImg(Images.img1) : op > 0.3 ? handleImg(Images.img2) : handleImg(Images.img3)
    })

    // 🔹 controls para animar o bloco "drinks e mesa fixa"
    const drinksControls = useAnimation();
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.08) {
            drinksControls.start("visible");
        } else {
            drinksControls.start("hidden");
        }
    });

    return ( 
        <motion.div className="h-[100dvh]">
            <motion.div className="flex flex-col w-full h-[550rem] mt-[-2rem]" ref={ref}  >
                <motion.div className="z-40 relative flex flex-col w-full h-screen top-0" style={{position: DrinkContainerPos}}>
                    <motion.div className="z-50 flex flex-col items-center mt-8">
                        <motion.h1 
                                style={{opacity: InfosOpac}}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2 }} 
                                className="w-full h-fit text-white text-3xl text-center"
                        >
                            Um chamado ao secreto
                        </motion.h1>
                        <motion.p
                            style={{visibility: InfosDispo, opacity: InfosOpac}}
                            className="w-[80%] text-white text-sm tracking-wide text-center"
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: 1 }}
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
                        className="z-50 items-center text-center justify-center w-full h-fit"
                        
                    >
                        <motion.h1 className="text-white text-3xl">
                            Drinks especiais
                        </motion.h1>
                        <motion.p className="text-white">
                            clássicos e autorais 
                        </motion.p>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            className="w-[260px] text-white px-22 py-[.75rem] mt-4 bg-yellow-500/5 hover:bg-amber-500/60 border border-yellow-500 rounded-full shadow-lg transition-all ease-in"
                        >
                            Drinks
                        </motion.button>
                    </motion.div>

                    <motion.div style={{y: DrinkPos}} className="overflow-x-clip z-10 flex flex-col items-center justify-center w-full h-fit">
                        <motion.img
                            className="w-[180px] h-[230px]"
                            src={img} 
                            alt="" 
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }} 
                            transition={{ duration: 2, delay: 0.8 }}
                        />
                    </motion.div>
                    <motion.div style={{y: MesaPos}} className="z-0 flex flex-col items-center justify-center w-full h-fit ">
                        <motion.img className="w-[70%]" src="./src/assets/mesa.png" alt="" />
                    </motion.div>
                </motion.div>
            </motion.div>
            <div className="w-full h-[1000px] bg-green-900">.</div>
        </motion.div>
     );
}
 
export default Speakeasy;
