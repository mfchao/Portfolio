
import { motion } from "framer-motion";


const Section = (props) => {
    const {children} = props;

    return (<motion.section className={`
    h-screen w-screen p-20 max-w-screen-2xl mx-auto
    flex flex-col justify-start items-center 
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
    <div className="flex flex-col items-center w-screen ">
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
        <h1 className="text-3xl font-extrabold leading-snug">
            Hi, I'm <br/>
            <span className="bg-white px-1 italic">Maggie Chao</span>
        </h1>
        <motion.p className="text-lg text-gray-600 mt-4"
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
            }}
        >
            I am a designer that 
            <br/>
            creates impactful solutions.
        </motion.p>
        {/* <button className="bg-indigo-600 text-white py-3 px-8 rounded-lg font-bold text-lg mt-16">
            Contact Me
        </button> */}

    </Section>
    );
}

const ColoradoSection = () => {
    return (
    <Section>
        <h2 className="text-3xl font-extrabold leading-snug">
            I was born in Colorado <br/>
            with parents from Taiwan.
        </h2>
        <motion.p className="text-lg text-gray-600 mt-4"
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
            Even since a young age, I've been 
            <br/>
            passionate about human computer interaction.
        </motion.p>
    </Section>
    );
}

const BangkokSection = () => {
    return (
    <Section>
        <h2 className="text-3xl font-extrabold leading-snug">
            I moved to Thailand <br/>
            when I was 16.
        </h2>
        <motion.p className="text-lg text-gray-600 mt-4"
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
            Since then, I've picked up skills in  
            <br/>
            creative development and UX.
        </motion.p>
    </Section>
    );
}

const EchoSection = () => {
    return (
    <Section>
        <h2 className="text-3xl font-extrabold leading-snug">
            Introducing Echo <br/>
        </h2>
        <motion.p className="text-lg text-gray-600 mt-4"
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
            I moved to London to attend Univeristy College London, 
            <br/>
            where I created AR memory palace.
        </motion.p>
    </Section>
    );
}

const NosaSection = () => {
    return (
    <Section>
        <h2 className="text-3xl font-extrabold leading-snug">
            Nosakhari <br/>
        </h2>
        <motion.p className="text-lg text-gray-600 mt-4" 
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
            Creating elegant UX solutions 
            <br/>
            for a high fashion brand in London.
        </motion.p>
    </Section>
    );
}

const DFSection = () => {
    return (
    <Section>
        <h2 className="text-3xl font-extrabold leading-snug">
            DeepFacade <br/>
        </h2>
        <motion.p className="text-lg text-gray-600 mt-4"
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
            I moved to Boston to attend Harvard GSD, 
            <br/>
            where I created a text-to-facade AI. 
        </motion.p>
    </Section>
    );
}

const TemplesSection = () => {
    return (
    <Section>
        <h2 className="text-3xl font-extrabold leading-snug">
            Temples of <br/>
            Consumerism
        </h2>
        <motion.p className="text-lg text-gray-600 mt-4"
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
            An innovative UX solution gamifying  
            <br/>
            shopping using AR.
        </motion.p>
    </Section>
    );
}

const ResearchSection = () => {
    return (
    <Section>
        <h2 className="text-3xl font-extrabold leading-snug">
            Machine Learning <br/>
            Research
        </h2>
        <motion.p className="text-lg text-gray-600 mt-4"
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
            An ongoing research into predicting
            <br/>
            tile trends in the Miiddle Eastern markets.
        </motion.p>
    </Section>
    );
}

const ArchiveSection = () => {
    return (
    <Section>
        <h2 className="text-3xl font-extrabold leading-snug">
            Explore more <br/>
        </h2>
        <motion.p className="text-lg text-gray-600 mt-4"
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
            Explore the rest of my projcts 
            <br/>
            about computation, UX/UI, or fabrication. 
        </motion.p>
    </Section>
    );
}