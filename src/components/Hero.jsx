import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import CustomCursor from "./CustomCursor";

const Hero = () => {
  const typedRef = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "a MERN developer",
        "grinding Leetcode",
        "training ML models",
        "building with LLMs",
        "automating the boring stuff",
        "exploring generative AI",
        "writing code that works (sometimes)",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    };

    typed.current = new Typed(typedRef.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <CustomCursor />
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Gayathri</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span ref={typedRef}></span>
          </p>
          <div className="flex items-center gap-5 mt-4 relative z-10">
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1oYdaP69jWgwFlcdqdlypLRLEZMeoVgtc/view",
                  "_blank"
                )
              }
              className="bg-[#915EFF] hover:bg-[#7d4edb] text-white px-6 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Resume
            </button>
            <div className="flex gap-4">
              <button
                onClick={() =>
                  window.open("https://github.com/InternetMadeCoder", "_blank")
                }
                className="text-white hover:text-[#915EFF] transition-colors cursor-pointer"
              >
                <FaGithub size={24} />
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/gayathri-ravindran-258733265/",
                    "_blank"
                  )
                }
                className="text-white hover:text-[#915EFF] transition-colors cursor-pointer"
              >
                <FaLinkedin size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
