import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../motion";

export const Ascer = (props) => {
    const { archiveProjectId, setProjectOpened, setArchiveProjectId } = props;
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false)
        setArchiveProjectId(null);
    };


    if (archiveProjectId === 0) {
        return (
            <>

                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="ASCER Machine Learning Research"
                        date="2023-2024"
                        location="Cambridge, MA"
                        course="Harvard MAP+S Lab Research"
                        role="Role: Machine Learning Research Assistant - Technical Lead"
                        description="Developing a machine learning model to predict ‘trendiness’ in tile designs."
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-medium mt-20"
                                    {...motionProps}>
                                    <img src="/images/Ascer/tiles.jpg"></img>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >PROJECT OVERVIEW
                                    </motion.p>
                                </div>
                                <motion.div className="text-container large-text" {...motionProps}>
                                    <p>
                                        Research Question:
                                    </p>
                                    <p>
                                        How can we develop a machine learning model to predict the ‘trendiness’ score of a tile design?
                                    </p>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >This is a research project by the Harvard Graduate School of Design, in collaboration with ASCER, co-led by José Luis García del Castillo and Martin Bechthold. As one of the two research assistants in this team, I am the technical lead in charge of developing a machine learning model that can predict the ‘trendiness’ of a tile within a given time frame, location, and audience.
                                    </motion.p><br></br>
                                    <motion.p
                                        {...motionProps}
                                    >Our methodology loosely entails developing a convolutional neural network (CNN) to recognize features within an image dataset that is tagged by expert stakeholders. In the process, I am developing a sleek web app that allows experts to easily tag images with how ‘trendy’ they are. We will then use this data to train various models for various expert domains, for example, interior designers, fashion designers, consumers, etc. Our final output aims to be a tool that tile designers can use to help predict the trendiness of their design by inputting an image and getting percentages of how trendy the design will be across various domains (ex. 80% trendy amongst consumers in Boston and 50% trendy amongst interior designers in LA).
                                    </motion.p>
                                </div>

                                <motion.div className="text-container large-text" {...motionProps}>
                                    <p>
                                        This project is currently in progress, check back later for more updates!
                                    </p>
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
        )
    } else {
        return null;
    }
};