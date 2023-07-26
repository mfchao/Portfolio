import { useRef, useMemo } from 'react'
import { motion } from "framer-motion";

const Section = (props) => {
    const {children} = props;

    return (<motion.section className={`
    h-screen w-screen p-20 max-w-screen-2xl mx-auto
    flex flex-col justify-center 
    `}
    >{children}</motion.section>)
}

const AboutSection = ({ title, description }) => {
    const memoizedTitle = useMemo(() => title, [title]);
    const memoizedDescription = useMemo(() => description, [description]);
    
    return (
      <Section>
        <div className="flex justify-center items-center flex-col">
          <motion.h1
            className="text-xl SF-Compact-Medium drop-shadow-sm tracking-wider leading-snug"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {memoizedTitle}
          </motion.h1>
          <motion.p
            className="text-base SF-Compact-Thin drop-shadow-sm mt-3"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {memoizedDescription}
          </motion.p>
        </div>
      </Section>
    );
};

const ProjectSection = ({ number, description }) => {
    const memoizedNumber = useMemo(() => number, [number]);
    const memoizedPDescription = useMemo(() => description, [description]);
    
    return (
      <Section>
        <div className="flex items-start flex-col mx-60 ">
          <motion.h1
            className="justify-start text-6xl SF-Compact-Thin drop-shadow-sm tracking-wider leading-snug"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {memoizedNumber}
          </motion.h1>
          <motion.p
            className="justify-start text-xl SF-Compact-Medium drop-shadow-sm tracking-wider mt-4"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {memoizedPDescription}
          </motion.p>
        </div>
      </Section>
    );
};



export const Interface = ({ mouseOverEvent, mouseOutEvent }) => {

    const aboutSections = useMemo(() => [
        {
          title: (
            <span>
              HI I'M <span className="text-rose-600">MAGGIE CHAO</span>, A{" "}
              <span onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} className="text-rose-600"> CREATIVE DEVELOPER</span> OF IMPACTFUL
              SOLUTIONS.
            </span>
          ),
          description:
            "",
        },
        {
          title: (
            <span>
              I WAS BORN IN <span className="text-rose-600">COLORADO</span>, 
              WITH PARENTS FROM <span className="text-rose-600">TAIWAN</span>.
            </span>
          ),
          description: "Ever since a young age, I've been passionate about human computer interaction.",
        },
        {
          title: (
            <span>
              I MOVED TO <span className="text-rose-600">BANGKOK, THAILAND </span> 
              WHEN I WAS 16. 
            </span>
          ),
          description: "Since then, I've picked up skills in creative development and UX.",
        },
      ], []);

      const projectSections = useMemo(() => [
        {
          number: "01.",
          description:
          (
            <span>
              WHEN I WENT TO <span className="text-rose-600">LONDON </span> 
            TO ATTEND <span className="text-rose-600">UCL</span>
            , I CREATED AN AUGMENTED REALITY MEMORY PALACE CALLED 
            <span onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} className="text-rose-600 underline underline-offset-4">INTRODUCING ECHO</span>.
            </span>
          ),
        },
        {
          number: "02.",
          description: (
            <span>
              IN LONDON, I CREATED EXPRESSIVE DESIGNS FOR HIGH FASHION BRAND,   
             <span className="text-rose-600 underline underline-offset-4">NOSAKHARI</span>.
            </span>
          ),
        },
        {
          number: "03.",
          description: (
            <span>
              WHEN I MOVED TO <span className="text-rose-600">BOSTON</span>
            , I CREATED A TEXT TO FACADE AI CALLED <span className="text-rose-600 underline underline-offset-4">DEEPFACADE</span> 
             FOR A PROJECT AT <span className="text-rose-600">MIT</span>.
            </span>
          ),
        },
        {
            number: "04.",
            description: (
              <span>
                AT <span className="text-rose-600">HARVARD</span> I GAMIFIED SHOPPING USING AUGMENTED REALITY IN THE PROJECT 
             <span className="text-rose-600 underline underline-offset-4">TEMPLES OF CONSUMERISM</span>.
              </span>
            ),
          },
          {
            number: "05.",
            description: (
              <span>
                IN COLLABORATION WITH THE <span className="text-rose-600">MAPS LAB</span>, I BUILT AN TREND PREDICTING AI MODEL THROUGH 
             <span className="text-rose-600 underline underline-offset-4">MACHINE LEARNING RESEARCH</span>.
              </span>
            ),
          }
      ], [mouseOverEvent, mouseOutEvent]);


    return (
    <div className="flex flex-col w-screen">
        {aboutSections.map((section, index) => (
            <AboutSection key={index} title={section.title} description={section.description} />
        ))}
        {projectSections.map((section, index) => (
            <ProjectSection key={index} number={section.number} description={section.description} />
        ))}

        <AboutSection title={<span> 
            EXPLORE MORE OF MY OTHER PROJECTS ON <span className="text-rose-600">COMPUTATION</span>,  
            <span className="text-rose-600">UX/UI</span>, OR <span className="text-rose-600">FABRICATION</span> HERE.
        </span>} description={""}/>

    </div>
    )
}


