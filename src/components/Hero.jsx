import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const texts = ["Full Stack Web Development", "Web Development", "Data Analysis","Artifical Intelligence"];
  const [displayText, setDisplayText] = useState(""); // State to track the displayed text
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Function to update the displayed text with typewriting animation
    const animateText = () => {
      let i = 0;
      const animationInterval = setInterval(() => {
        setDisplayText(texts[textIndex].slice(0, i));
        i++;

        if (i > texts[textIndex].length) {
          clearInterval(animationInterval);

          // Set a timeout to clear the text and advance to the next text
          setTimeout(() => {
            setDisplayText("");
            setTextIndex((textIndex + 1) % texts.length); // Loop through the texts
          }, 1500); // Adjust the duration to wait before clearing the text
        }
      }, 800); // Adjust the speed of animation to 3 seconds (3000 milliseconds)
    };

    animateText();
    }, [textIndex]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[110px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="text">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">AnilKumar..</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {displayText}<br className="sm:block hidden" />
            {/*{textIndex === 1 ? "Web Development" : ""}*/}
            {/*{textIndex === 2 ? "Data Analysis" : ""}*/}
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center box">
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
              >
            </motion.div>
          </div>
        </a>
      </div>
    </section>
    );
};

export default Hero;
