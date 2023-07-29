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
              0
            </span>
          ),
          description:
            " ",
        },
        {
          title: (
            <span>
              1
            </span>
          ),
          description: " ",
        },
        {
          title: (
            <span>
              2 
            </span>
          ),
          description: " ",
        },
      ], []);

      const projectSections = useMemo(() => [
        {
          number: " ",
          description:
          (
            <span>
              3
            </span>
          ),
        },
        {
          number: " ",
          description: (
            <span>
             4
            </span>
          ),
        },
        {
          number: " ",
          description: (
            <span>
              5
            </span>
          ),
        },
        {
            number: " ",
            description: (
              <span>
               6
              </span>
            ),
          },
          {
            number: " ",
            description: (
              <span>
               7
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
           8
        </span>} description={" "}/>

    </div>
    )
}


