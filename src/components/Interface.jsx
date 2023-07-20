
import { motion } from "framer-motion";

const Section = (props) => {
    const {children} = props;

    return (<motion.section className={`
    h-screen w-screen p-20 max-w-screen-2xl mx-auto
    flex flex-col justify-center 
    `}
        initial={{
            opacity: 0,
            y: 50,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.6,
            }
        }}
    
    >{children}</motion.section>)
}


export const Interface = () => {
    return (

    <div className="flex flex-col w-screen ">

    <HomeSection/>
    <ColoradoSection/>
    <BangkokSection/>
    <EchoSection/>
    <NosaSection/>
    <DFSection/>
    <TemplesSection/>
    <ResearchSection/>
    <ArchiveSection/>
    </div>
    )
}

const HomeSection = () => {
    return (
    <Section>
        <div className="flex justify-center items-center flex-col">
        <h1 className="text-xl SF-Compact-Medium drop-shadow-sm tracking-wider leading-snug ">
            HI I'M <span className="text-rose-600">MAGGIE CHAO</span>, 
            A <span className="text-rose-600"> CREATIVE DEVELOPER</span> OF IMPACTFUL SOLUTIONS.  
        </h1>
        
        {/* <button className="bg-indigo-600 text-white py-3 px-8 rounded-lg font-bold text-lg mt-16">
            Contact Me
        </button> */}
        </div>

    </Section>
    );
}

const ColoradoSection = () => {
    return (
    <Section>
        <div className="flex justify-center items-center flex-col">
        <h1 className="text-xl SF-Compact-Medium drop-shadow-sm tracking-wider leading-snug">
            I WAS BORN IN <span className="text-rose-600">COLORADO</span>, 
            WITH PARENTS FROM <span className="text-rose-600">TAIWAN</span>.  
        </h1>
        <motion.p className="text-base SF-Compact-Thin drop-shadow-sm mt-3 "
        initial={{
            opacity:0,
            y: 25,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 1,
            delay: 1.5,
        }}>
            Ever since a young age, I've been 
            passionate about human computer interaction.
        </motion.p>
        </div>
    </Section>
    );
}

const BangkokSection = () => {
    return (
    <Section>
        <div className="flex justify-center items-center flex-col">
        <h1 className="text-xl SF-Compact-Medium drop-shadow-sm tracking-wider leading-snug">
            I MOVED TO <span className="text-rose-600">BANGKOK, THAILAND </span> 
            WHEN I WAS 16.  
        </h1>
        <motion.p className="text-base SF-Compact-Thin drop-shadow-sm mt-3 "
        initial={{
            opacity:0,
            y: 25,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 1,
            delay: 1.5,
        }}>
            Since then, I've picked up skills in creative development and UX.
        </motion.p>
        </div>
    </Section>
    );
}

const EchoSection = () => {
    return (
    <Section>
        <div className="flex items-start flex-col mx-60 ">
        <h1 className="text-6xl SF-Compact-Thin drop-shadow-sm tracking-wider leading-snug ">
            01.
        </h1>
        <motion.h1 className="text-xl SF-Compact-Medium drop-shadow-sm tracking-wider mt-4 "
        initial={{
            opacity:0,
            y: 25,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 1,
            delay: 1.5,
        }}>
            WHEN I WENT TO <span className="text-rose-600">LONDON </span> 
            TO ATTEND <span className="text-rose-600">UCL</span>
            , I CREATED AN AUGMENTED REALITY MEMORY PALACE CALLED <span className="text-rose-600 underline underline-offset-4">INTRODUCING ECHO</span>.
        </motion.h1>
        </div>
    </Section>
    );
}

const NosaSection = () => {
    return (
    <Section>
        <div className="flex items-start flex-col mx-60 ">
        <h1 className="justify-start text-6xl SF-Compact-Thin drop-shadow-sm tracking-wider leading-snug ">
            02.
        </h1>
        <motion.h1 className=" justify-start text-xl SF-Compact-Medium drop-shadow-sm tracking-wider mt-4"
        initial={{
            opacity:0,
            y: 25,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 1,
            delay: 1.5,
        }}>
            IN LONDON, I CREATED EXPRESSIVE DESIGNS FOR HIGH FASHION BRAND,   
             <span className="text-rose-600 underline underline-offset-4">NOSAKHARI</span>.
        </motion.h1>
        </div>
    </Section>
    );
}

const DFSection = () => {
    return (
    <Section>
        <div className="flex items-start flex-col mx-60 ">
        <h1 className="justify-start text-6xl SF-Compact-Thin drop-shadow-sm tracking-wider leading-snug ">
            03.
        </h1>
        <motion.h1 className=" justify-start text-xl SF-Compact-Medium drop-shadow-sm tracking-wider mt-4"
        initial={{
            opacity:0,
            y: 25,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 1,
            delay: 1.5,
        }}>
            WHEN I MOVED TO <span className="text-rose-600">BOSTON</span>
            , I CREATED A TEXT TO FACADE AI CALLED <span className="text-rose-600 underline underline-offset-4">DEEPFACADE</span> 
             FOR A PROJECT AT <span className="text-rose-600">MIT</span>.
        </motion.h1>
        </div>
    </Section>
    );
}

const TemplesSection = () => {
    return (
    <Section>
        <div className="flex items-start flex-col mx-60 ">
        <h1 className="justify-start text-6xl SF-Compact-Thin drop-shadow-sm tracking-wider leading-snug ">
            04.
        </h1>
        <motion.h1 className=" justify-start text-xl SF-Compact-Medium drop-shadow-sm tracking-wider mt-4"
        initial={{
            opacity:0,
            y: 25,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 1,
            delay: 1.5,
        }}>
            AT <span className="text-rose-600">HARVARD</span> I GAMIFIED SHOPPING USING AUGMENTED REALITY IN THE PROJECT 
             <span className="text-rose-600 underline underline-offset-4">TEMPLES OF CONSUMERISM</span>.
        </motion.h1>
        </div>
    </Section>
    );
}

const ResearchSection = () => {
    return (
    <Section>
        <div className="flex items-start flex-col mx-60 ">
        <h1 className="justify-start text-6xl SF-Compact-Thin drop-shadow-sm tracking-wider leading-snug ">
            05.
        </h1>
        <motion.h1 className=" justify-start text-xl SF-Compact-Medium drop-shadow-sm tracking-wider mt-4"
        initial={{
            opacity:0,
            y: 25,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 1,
            delay: 1.5,
        }}>
            IN COLLABORATION WITH THE <span className="text-rose-600">MAPS LAB</span>, I BUILT AN TREND PREDICTING AI MODEL THROUGH 
             <span className="text-rose-600 underline underline-offset-4">MACHINE LEARNING RESEARCH</span>.
        </motion.h1>
        </div>
    </Section>
    );
}

const ArchiveSection = () => {
    return (
    <Section>
        <div className="flex justify-center items-center flex-col">
        <h1 className="text-xl SF-Compact-Medium drop-shadow-sm tracking-wider leading-snug">
            EXPLORE MORE OF MY OTHER PROJECTS ON <span className="text-rose-600">COMPUTATION</span>,  
            <span className="text-rose-600">UX/UI</span>, OR <span className="text-rose-600">FABRICATION</span> HERE.
        </h1>
        
        {/* <button className="bg-indigo-600 text-white py-3 px-8 rounded-lg font-bold text-lg mt-16">
            ARCHIVE
        </button> */}
        </div>
    </Section>
    );
}