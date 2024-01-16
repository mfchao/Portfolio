

import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../../assets/motion";

export const Ascer = ({ setProjectOpened, setArchiveProjectId, openProject, setOpenProject, windowWidth }) => {
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false);
        setArchiveProjectId(null);
        setOpenProject(null);
    };

    if (openProject === 'ascer') {

        return (
            <>
                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="ASCER ML Research"
                        date="2023-2024"
                        location="Cambridge, MA"
                        course="Harvard MAP+S Lab Research"
                        role="Role: Machine Learning Research Assistant - Technical Lead"
                        description="The Future of Product Design: Ceramic Tiles - 
                    Developing a machine learning model to predict ‘trendiness’ in tile designs."
                        windowWidth={windowWidth}
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-medium mt-20" {...motionProps}>
                                    <img src="/images/Ascer/tiles.jpg" alt="Ascer"></img>
                                </motion.div>
                                {renderSectionTitle('PROJECT OVERVIEW')}
                                {renderTextContainer('large-text', 'Problem: Tile companies face uncertainty when trying to predict the success of a particular product.')}
                                {renderTextContainer('normal-text', 'This is a research project by the Harvard Graduate School of Design, in collaboration with ASCER, co-led by José Luis García del Castillo and Martin Bechthold. As one of the two research assistants in this team, I am the technical lead in charge of developing a machine learning model that can predict the ‘trendiness’ of a tile within a given time frame, location, and audience.')}
                                {renderTextContainer('large-text', 'Opportunity: How might we use ML predictions to assess the potential success of a product and thus, de-risk design decisions?')}
                                {renderTextContainer('normal-text', 'Our methodology loosely entails developing a convolutional neural network (CNN) to recognize features within an image dataset that is tagged by expert stakeholders. In the process, I am developing a sleek web app that allows experts to easily tag images with how ‘trendy’ they are. We will then use this data to train various models for various expert domains, for example, interior designers, fashion designers, consumers, etc. Our final output aims to be a tool that tile designers can use to help predict the trendiness of their design by inputting an image and getting percentages of how trendy the design will be across various domains (ex. 80% trendy amongst consumers in Boston and 50% trendy amongst interior designers in LA).')}
                                {renderTextContainer('large-text', 'Objectives: 1. Academic Focus')}
                                {renderTextContainer('normal-text', 'Investigate whether a ML tool could produce relevant/accurate predictions for an industry such as the Spanish Tile Industry.')}
                                {renderTextContainer('large-text', 'Objectives: 2. Product Focus')}
                                {renderTextContainer('normal-text', 'Eventually predict the success potential of different tile products and optimize the creative decision-making process.')}
                                <br></br>
                                {renderSectionTitle('PHASE 1: BUILDING THE DATABASE')}

                                <motion.div className="image-full" {...motionProps}>
                                    <img src="/images/Ascer/progress.jpg" alt="Ascer"></img>
                                </motion.div>
                                {renderTextContainer('large-text', 'Annotation Questions')}
                                {renderTextContainer('normal-text', 'Different products have different success criteria. For example, an innovative and flashy’ hook product’ might have a lower net sales volume, but can attract customers to the brand. On the other hand, a basic product will usually represent the highest sales volume but might be perceived as conventional, or not ‘trendy’. Below we have organized 4 scale metrics in which we will ask expert annotators to rate the 500 image dataset on. ')}
                                <motion.div className="image-small" {...motionProps}>
                                    <img src="/images/Ascer/scales.jpg" alt="Ascer"></img>
                                </motion.div>
                                {renderTextContainer('large-text', 'Annotation Web App')}
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video muted loop autoPlay id="myVideo" src="/images/Ascer/webapp.mov" type="video/mov">
                                        Your browser does not support this video.
                                    </video>
                                </motion.div>
                                {renderTextContainer('normal-text', 'In order to gather the image annotations from the experts, I have built annotation web app with a custom API, supported by a MongoDB Database. The web app designed to be easy to use with quick response times and keyboard shortcuts, allowing experts to annotate 500 images in just half an hour, with the option to save and continue later where thy left off. The web app will allow us to easily and quickly gather rated images in which we will train our regression model with to ultimately predict the score of the four categories above, based on an inputted image. ')}


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
}

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
