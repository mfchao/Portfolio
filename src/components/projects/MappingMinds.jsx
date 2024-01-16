

import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../../assets/motion";

export const MappingMinds = ({ setProjectOpened, setArchiveProjectId, openProject, setOpenProject, windowWidth }) => {
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false);
        setArchiveProjectId(null);
        setOpenProject(null);
    };

    if (openProject === 'mappingminds') {

        return (
            <>
                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="Mapping Minds"
                        date="Fall 2023"
                        location="Cambridge, MA"
                        course="Harvard GSD Enactive Design Group Project"
                        role="Role: Creative Developer"
                        description="An AI-enabled tool that represents spoken conversation non-linearly, creating links between participants’ ideas + shared goals through a shared web interface."
                        windowWidth={windowWidth}
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-medium mt-20" {...motionProps}>
                                    <img src="/images/MappingMinds/image1.jpg" alt="MappingMinds"></img>
                                </motion.div>
                                {renderSectionTitle('WHAT WE ASKED')}
                                {renderTextContainer('large-text', 'How can we facilitate group decision-making through a smart embodied interface?')}
                                {renderSectionTitle('WHAT WE BUILT')}
                                {renderTextContainer('large-text', 'Mapping Minds: An AI-enabled tool that represents spoken conversation non-linearly, creating links between participants’ ideas + shared goals.')}
                                {renderTextContainer('normal-text', 'Group decision-making processes are inherently dynamic, driven by diverse perspectives, competing interests, and the ever-present potential for tensions to arise. Traditional methods of documentation, such as meeting minutes and written summaries, often struggle to capture the richness and spontaneity of spoken ideas exchanged during in-person interactions. Additionally, the challenge of navigating tensions within a group is exacerbated by the lack of a consistent framework that can guide iterative and ultimately final decisions. In this work, we focus on group decision-making as an opportunity area, asking how group decision-making can have more diversity of ideas, personal satisfaction, and equally shared contribution.')}


                                {renderSectionTitle('PROBLEM AREA')}
                                {renderTextContainer('large-text', 'Group decisions are tough.')}
                                {renderTextContainer('normal-text', 'Group conversations and discussions can be overwhelming with competing interests and different perspectives, often causing tensions to arise and unproductive conversations.')}
                                {renderTextContainer('large-text', 'Documentation is unreliable & misses conversation dynamics.')}
                                <motion.div className="image-small" {...motionProps}>
                                    <img src="/images/MappingMinds/meetnotes.jpg" alt="MappingMinds"></img>
                                </motion.div>
                                {renderTextContainer('normal-text', 'Meeting notes these days are often manual and overly detailed transcriptions of the meeting details, without any sense of attribution or analysis. The linear recording of what was said lacks richness, spontaneity, organization, and often lacks any comprehensive analysis or actionable conclusions.')}

                                {renderSectionTitle('OUR SOLUTION')}
                                {renderTextContainer('large-text', 'A tool that acts as a cognitive scaffold, allowing participants to witness the emergence of ideas, identify connections between them, and critically engage with group conversation in the context of overarching group goals.')}
                                {renderTextContainer('normal-text', 'Based on human computer interaction and psychology research, it has been shown that shared information is more frequently discussed, social dynamics can hinder critical thinking, and group interfaces enable inclusive participation. We based our tool’s key design principles on this research and developed a system that re-imagines the ideation space as a dynamic and interactive interface that supports a holistic understanding of group contributions. ')}
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video controls id="myVideo" src="/images/MappingMinds/MappingMinds.mp4" type="video/mp4">
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text">Demo Video: Mapping Minds Functionalities.</p>
                                </motion.div>


                                {renderSectionTitle('HOW WE MADE IT')}
                                <motion.div className="image-medium" {...motionProps}>
                                    <img src="/images/MappingMinds/diagram.png" alt="MappingMinds"></img>
                                    <p className="caption-text">Technical Diagram</p>
                                </motion.div>
                                <motion.div className="image-medium" {...motionProps}>
                                    <img src="/images/MappingMinds/explain.jpg" alt="MappingMinds"></img>
                                    <p className="caption-text">Main Functionality</p>
                                </motion.div>
                                {renderTextContainer('normal-text', 'This tool takes on the onus of the mundane task of documentation and reduce participant labor. By doing so, it reduces participant labor and provides a structured framework for navigating tensions collaboratively. The map is updated with human input, while humans reorganize ideas based on map output, creating an enactive bidirectional communication loop between humans and the machine. ')}
                                {renderTextContainer('large-text', 'By Mapping Minds, we allow machines to help us better understand ourselves & each other.')}


                                <motion.div className="image-larges" {...motionProps}>
                                    <img src="/images/MappingMinds/end.jpg" alt="MappingMinds"></img>
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
