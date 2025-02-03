import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import FramerMagnetic from "./FramerMagnetic";
import { TbBrandTypescript } from "react-icons/tb";
import { GrDocker } from "react-icons/gr";
import { SiFramer } from "react-icons/si";


import { div } from "framer-motion/client";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
    transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
    },
    },
});

const Technologies = () => {
  return (

    <div className="border-b border-neutral-800 pb-24">

        <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y:-100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div className="">
                <FramerMagnetic>
                    <TbBrandNextjs className="text-7xl" />
                </FramerMagnetic>
            </motion.div>

            <motion.div>
                <FramerMagnetic>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </FramerMagnetic>
            </motion.div>

            <motion.div>
                <FramerMagnetic>
                    <SiMongodb className="text-7xl text-green-500" />
                </FramerMagnetic>
            </motion.div>

            <motion.div>
                <FramerMagnetic>
                    <DiRedis className="text-7xl text-red-700" />
                 </FramerMagnetic>
             </motion.div>

             <motion.div>
                 <FramerMagnetic>
                     <FaNodeJs className="text-7xl text-green-500" />
                 </FramerMagnetic>
             </motion.div>

             <motion.div>
                 <FramerMagnetic>
                     <BiLogoPostgresql className="text-7xl text-sky-700" />
                 </FramerMagnetic> 
             </motion.div>

             <motion.div>
                 <FramerMagnetic>
                     <TbBrandTypescript className="text-7xl text-white" />
                 </FramerMagnetic> 
             </motion.div>

             <motion.div>
                 <FramerMagnetic>
                     <GrDocker className="text-7xl text-sky-400" />
                 </FramerMagnetic> 
             </motion.div>

             <motion.div>
                 <FramerMagnetic>
                     <SiFramer className="text-7xl text-white" />
                 </FramerMagnetic> 
             </motion.div>



             


             
        </div>
    </div>

  );
}

export default Technologies;