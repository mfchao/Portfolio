import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../motion";

export const NeuralSynesthesia = (props) => {
    const { archiveProjectId, setProjectOpened, setArchiveProjectId } = props;
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false)
        setArchiveProjectId(null);
    };


    if (archiveProjectId === 1) {
        return (
            <>

                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="Neural Synesthesia"
                        date="2023"
                        location="Cambridge, MA"
                        course="Harvard GSD 6487 Machine Aesthetics Group Project"
                        role="Role: Machine Learning Engineer"
                        description="Exploring ambience sound to image associations and generating art with machine learning."
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-full mt-20"
                                    {...motionProps}>
                                    <img src="/images/NeuralSynesthesia/gradient.jpg"></img>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >INTRODUCTION
                                    </motion.p>
                                </div>
                                <motion.div className="text-container large-text" {...motionProps}>
                                    <p>
                                        Synesthesia - the production of a sense impression relating to one sense or part of the body by stimulation of another sense or part of the body.
                                    </p>
                                </motion.div>

                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Our project aims to discover if, similar to a human brain, a machine’s ‘brain’ or neural network can develop synesthetic associations between ambience sound and images, specifically shapes and colors.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/NeuralSynesthesia/classifierflow.jpg"></img>
                                    <p className="caption-text">Training Separate Classifiers</p>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >To do this, we trained separate classifiers for image and sound which mimics the associative properties of synesthesia, where the associations are not 1:1 pairings.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/NeuralSynesthesia/modelflow.jpg"></img>
                                    <p className="caption-text">Using the Model</p>
                                </motion.div><br></br>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >DATA
                                    </motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Our raw data consisted of recordings of peripheral videos that captured ambience lighting and sound at different times of day.
                                    </motion.p>
                                </div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/NeuralSynesthesia/rawdata.jpg"></img>
                                    <p className="caption-text">Raw Data: Peripheral videos capturing ambience sound and image.</p>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >We then split the raw data into two datasets: audio and images. We will use these two datasets to train the auto encoder separately from each other so that the associations made in the final predictions are not direct pairings of audio to image, similar to how synesthesia works in a human brain.
                                    </motion.p>
                                </div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/NeuralSynesthesia/imagedata.jpg"></img>
                                    <p className="caption-text">Image Data for the Image Classifier: Classifying the images to morning, noon, afternoon, and evening</p>
                                </motion.div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/NeuralSynesthesia/melspec.jpg"></img>
                                    <p className="caption-text">Sound Data for the Audio Classifier: Using melspectrograms for human perception and classifying the them to morning, noon, afternoon, and evening.
                                    </p>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >RESULTS
                                    </motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >We trained three CNN models, Alexnet, Resnet, and VGG to see if each model had any different associations or unique synesthesia. We then fed the same audio clips of a forest, library, and street ambience sound to each model and used differential drawing techniques to generate the visualisation based on the class identified by our trained models. As a result is the output of each machine’s personal synesthesia hallucination of the ambience sound. Make sure to play the videos with sound to grasp how the machine ‘sees’ the sound.
                                    </motion.p>
                                </div>

                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video controls id="myVideo" src="/images/NeuralSynesthesia/forest.mov" type="video/mov">
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text">Forest Ambience</p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video controls id="myVideo" src="/images/NeuralSynesthesia/library.mov" type="video/mov">
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text">Library Ambience</p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video controls id="myVideo" src="/images/NeuralSynesthesia/street.mov" type="video/mov">
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text">Street Ambience</p>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >This project is not just about technological advancement, but also about the intersection of art, perception, and AI. If machines can learn to associate sounds with specific shapes and colors, it opens up a whole new realm of artistic expression and interpretation. Imagine an AI that can create a visual representation of a symphony, or a painting that changes its colors in response to ambient sounds. This could revolutionize the way we create and experience art, blurring the lines between the senses and creating a truly immersive, synesthetic experience. This project, therefore, is not just about teaching machines to 'see' sounds, but also about exploring new forms of artistic expression and sensory experience through technical mediums.
                                    </motion.p>
                                </div>


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