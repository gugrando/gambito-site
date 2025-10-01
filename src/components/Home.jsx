import { motion } from "framer-motion"
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <motion.section
      className="flex flex-col w-full h-screen bg-cover md:bg-top bg-center bg-no-repeat bg-[url('/gambito-bg-mobile.webp')] md:bg-[url('/dsk-bg.webp')]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/60"></div>

      {/* Conteúdo */}
      <motion.div
        className="mt-32  w-full h-dvh flex flex-col items-center z-10 content-all"
      >
        <motion.img
          className="w-3/4 max-w-md"
          src="/gambito-logo.webp"
          alt="Gambito Logo"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        <motion.p
          className="text-white text-sm mt-2 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.01 }}
        >
          O 1° Speakeasy da Serra Gaúcha!
        </motion.p>

        <motion.div 
        className="flex flex-col items-center buttons-cont"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.5, delay: 0.02 }}
        >
        <a target="_blank" href="https://www.getinapp.com.br/farroupilha/gambito-bar">
            <motion.button
            whileHover={{ scale: 1.03 }}
            className="hover:cursor-pointer w-[260px] text-white px-22 py-[.75rem] mt-8 bg-yellow-500/5 hover:bg-amber-500/60 border border-yellow-500 rounded-full shadow-lg transition-all ease-in"
            >
            Reserva
            </motion.button>
        </a>
        <a target="_blank" href="https://gambitobar.goomer.app/">
            <motion.button
            whileHover={{ scale: 1.03 }}
            className="hover:cursor-pointer w-[260px] text-white px-22 py-[.75rem] mt-4 bg-yellow-500/5 hover:bg-amber-500/60 border border-yellow-500 rounded-full shadow-lg transition-all ease-in"
            
            >
            Delivery
            </motion.button>
        </a>
        <Link to="/menu">
            <motion.button
            whileHover={{ scale: 1.03 }}
            className="hover:cursor-pointer w-[260px] text-white px-22 py-[.75rem] mt-4 bg-yellow-500/5 hover:bg-amber-500/60 border border-yellow-500 rounded-full shadow-lg transition-all ease-in"
        
            >
            Menu
            </motion.button>
        </Link>
        </motion.div>

        <motion.a href="https://open.spotify.com/playlist/3WPNErCj8ei7t4qQvX5QTz?si=Y77rLzUOQRG5MA6TZKF2yQ&pi=u-7UJm2wMbTVSb&nd=1&dlsi=63a0099250ce464b" target="_blank"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2}}
        >
          <p className="flex items-center gap-2 text-neutral-400 drop-shadow-black drop-shadow-lg  text-xs mt-3 underline">
            <img className="w-5" src="/spotify.webp" alt="" />Playlist da Gambito no Spotify
          </p>
        </motion.a>

        <motion.div>
          <img
            className="mt-40 w-11 animate-bounce flecha-a"
            src="/flecha.webp"
            alt=""
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2}}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Home
