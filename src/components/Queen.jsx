import { motion, useScroll, useTransform, useMotionValueEvent, useAnimation, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react";
const Queen = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const Opacity = useTransform(scrollYProgress, [0, 0.1, 0.5, 0.7, 1], [0, 0, 1, 1, 0])


    return (
        <motion.div style={{opacity: Opacity}} ref={ref} className="flex flex-col items-center justify-centerw-full h-[50rem]">
            <motion.img  src="/BlackQueen.jpg" className="w-[1000%] object-cover"/>
        </motion.div>
    );
}
 
export default Queen;