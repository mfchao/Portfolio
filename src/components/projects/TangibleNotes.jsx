

import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../../assets/motion";

export const TangibleNotes = ({ archiveProjectId, setProjectOpened, setArchiveProjectId, windowWidth }) => {
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false);
        setArchiveProjectId(null);
    };

    if (archiveProjectId !== 13) return null;

    return (
        <>
            <div className="fixed w-screen z-0">
                <ProjectHeader
                    title="Tangible Notes"
                    date="2023-2024"
                    location="Cambridge, MA"
                    course="MIT 6.1040 Software Design Group Project"
                    role="Role: Full Stack Developer"
                    description="An app to aid mental health through the facilitation of communication between palliative care patients and their family members or related people in their network."
                    windowWidth={windowWidth}
                />
            </div>

            <div className="absolute h-screen w-screen z-10" >
                <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                    <div className="bg-white w-screen mt-20">
                        <div className="mainContainer">
                            <motion.div className="image-medium mt-20" {...motionProps}>
                                <img src="/images/Always/timeCap.png" alt="Always"></img>
                            </motion.div>
                            {renderSectionTitle('PROBLEM AREA')}
                            {renderTextContainer('normal-text', 'Palliative care improves the quality of life of patients and that of their families who are facing challenges associated with life-threatening illness, whether physical, psychological, social, or spiritual. The quality of life of caregivers improves as well. According to the World Health Organization (WHO), palliative care is often not included in national health policies and systems, and training on palliative care for health professionals is often limited or non-existent. Particular problems within this domain might be: How to enable broader access to patients and caregivers, how to better facilitate conversation and communication during this critical time for different stakeholders, and how to give various types of palliative care on demand.')}
                            {renderSectionTitle('OUR SOLUTION')}
                            {renderTextContainer('large-text', 'Our solution to address this problem is to design a communication app centering the patients, empowering them with control over their communications with family, friends, and healthcare professionals.')}
                            {renderTextContainer('normal-text', 'The problem of fostering communication between patients who suffer life-threatening illness and others is important because it could potentially improve greatly the quality of life of patients and that of their families. We propose an app designed to sustain and nurture communication between palliative care patients and their families throughout the illness journey and beyond. Upon initial use, the app will start with an introductory survey to tailor the app according to their preferences and needs. Then progress on to an educational resource segment, informing patients and families about the palliative process, what to expect, and how to prepare for the stages of death. Throughout the palliative care process, the app will help support communication between the patient and their family members through various features, such as secure messaging and the exchange of digital tokens. After the patient passes, the app offers a unique a ‘time capsule’, allowing patients to share pre-composed messages and memories, aiding families in the grieving process.')}
                            {renderSectionTitle('PROJECT DEVELOPMENT')}
                            {renderTextContainer('large-text', 'After conducting user interviews, brainstorming concept ideas, and doing background research, we consolidated our ideas into the following dependency diagram. ')}

                            <motion.div className="image-large" {...motionProps}>
                                <img src="/images/Always/ddiagram.png" alt="Always"></img>
                            </motion.div>
                            {renderSectionTitle('WIREFRAMES')}
                            <motion.div className="image-medium" {...motionProps}>
                                <img src="/images/Always/Wireframe.png" alt="Always"></img>
                            </motion.div>
                            {renderSectionTitle('ALPHA LAUNCH')}
                            {renderTextContainer('normal-text', 'Based on our initial design and wireframes, we developed the full stack app using Vue.js and MongoDB database with our custom API backend implementation of the concepts. After some initial user testing, we identified some changes and re-iterated with hi-fidelity prototypes.')}
                            <motion.div className="image-small" {...motionProps}>
                                <img src="/images/Always/edits.png" alt="Always"></img>
                                <img src="/images/Always/hifi.png" alt="Always"></img>
                            </motion.div>
                            {renderSectionTitle('BETA LAUNCH')}
                            {renderTextContainer('normal-text', 'For our final launch, we revised various issues identified in the user testing, and conducted various reports on both patient and family versions of the app. ')}
                            <motion.div className="image-full"
                                {...motionProps}>
                                <video controls id="myVideo" src="/images/Always/ALWAYS.mp4" type="video/mp4">
                                    Your browser does not support this video.
                                </video>
                                <p className="caption-text">Demo Video: Created with Yinghou Wang.</p>
                            </motion.div>

                            {renderTextContainer('normal-text', 'We believe this is important and impactful because addressing the taboo of death is crucial as it contributes to mental health struggles and communication breakdowns in palliative contexts. Our app offers a dual benefit: a "listening ear" and a therapeutic space for patients, as well as a supportive tool for families to cope with the impending loss and transition. ')}


                            <a target="_blank" href="https://61040-fa23.github.io/portfolio-mfchao/assignments/assignment10.html">View full project write up here.</a>
                            <motion.div className="image-larges" {...motionProps}>
                                <img src="/images/Always/PalHero.jpg" alt="Always"></img>
                            </motion.div>

                            <button onClick={handleClick} className="SF-Compact-Light text-sm cursor-pointer text-rose-600 hover:text-rose-300 transition-colors">
                                CONTINUE TO NEXT PROJECT
                            </button>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
        </>
    );
};

const renderSectionTitle = (title) => (
    <div className="section-title">
        <motion.p {...useMotion()}>{title}</motion.p>
    </div>
);

const renderTextContainer = (className, text) => (
    <div className={`text-container ${className}`}>
        <motion.p {...useMotion()}>{text}</motion.p>
    </div>
);
