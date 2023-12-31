

import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../../assets/motion";

export const Always = ({ archiveProjectId, setProjectOpened, setArchiveProjectId, windowWidth }) => {
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false);
        setArchiveProjectId(null);
    };

    if (archiveProjectId !== 3) return null;

    return (
        <>
            <div className="fixed w-screen z-0">
                <ProjectHeader
                    title="Always"
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
                                <img src="/images/Always/phero.jpg" alt="Always"></img>
                            </motion.div>
                            {renderSectionTitle('PROBLEM AREA')}
                            {renderTextContainer('normal-text', 'Palliative care improves the quality of life of patients and that of their families who are facing challenges associated with life-threatening illness, whether physical, psychological, social, or spiritual. The quality of life of caregivers improves as well. According to the World Health Organization (WHO), palliative care is often not included in national health policies and systems, and training on palliative care for health professionals is often limited or non-existent. Particular problems within this domain might be: How to enable broader access to patients and caregivers, how to better facilitate conversation and communication during this critical time for different stakeholders, and how to give various types of palliative care on demand.')}
                            {renderSectionTitle('OUR SOLUTION')}
                            {renderTextContainer('large-text', 'Our solution to address this problem is to design a communication app centering the patients, empowering them with control over their communications with family, friends, and healthcare professionals.')}
                            {renderTextContainer('normal-text', 'The problem of fostering communication between patients who suffer life-threatening illness and others is important because it could potentially improve greatly the quality of life of patients and that of their families.')}
                            {renderTextContainer('large-text', 'This project is currently in progress, check back later for more updates!')}
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
