import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { Helmet } from "react-helmet";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Homepage - Iqbal Sahrizal</title>
        <link id="favicon" rel="icon" href="/favicon.ico" type="image/x-icon" data-react-helmet="true" />
      </Helmet>
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1 variants={fadeIn("down", 0.2)} initial="hidden" animate="show" exit="hidden" className="h1">
            Hi! I'm <br />
            <span className="text-accent">Iqbal Sahrizal.</span>
          </motion.h1>
          <motion.p variants={fadeIn("down", 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            I'm a software developer & graphic designer
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div variants={fadeIn("down", 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:block">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <motion.div
          variants={fadeIn("up", 0.3)}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit="hidden"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
        />
        <ParticlesContainer />
        <motion.div variants={fadeIn("up", 0.5)} transition={{ duration: 1, ease: "easeInOut" }} initial="hidden" animate="show" exit="hidden" className="h-full w-full max-w-[600px] max-h-[760px] mr-32 absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
