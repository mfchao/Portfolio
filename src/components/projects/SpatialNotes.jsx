

import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../../assets/motion";

export const SpatialNotes = ({ archiveProjectId, setProjectOpened, setArchiveProjectId, windowWidth }) => {
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
                    title="Spatial Notes"
                    date="Fall 2023"
                    location="Cambridge, MA"
                    course="MIT Media Lab Tangible Interfaces Group Project"
                    role="Role: Mixed Reality Engineer"
                    description="Creating tangible interfaces from everyday objects: Making tangible interfaces more prevalent, accessible, and customizable through embedding information and memories into everyday objects simply through touch."
                    windowWidth={windowWidth}
                />
            </div>

            <div className="absolute h-screen w-screen z-10" >
                <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                    <div className="bg-white w-screen mt-20">
                        <div className="mainContainer">
                            <motion.div className="image-medium mt-20" {...motionProps}>
                                <img src="/images/SpatialNotes/hero.jpg" alt="Spatial Notes"></img>
                            </motion.div>
                            {renderSectionTitle('QUESTION')}
                            {renderTextContainer('large-text', 'How can everyday objects be tangible interfaces?')}
                            {renderTextContainer('normal-text', 'Our project aims to make tangible interfaces more prevalent, accessible, and customizable.')}

                            {renderSectionTitle('GOAL')}
                            {renderTextContainer('large-text', 'Our goal is to find ways to embed information and memories into everyday objects simply through touch.')}
                            {renderTextContainer('normal-text', 'We have three constraints in our project: 1. No additional sensors, actuators, microcontrollers, or materials. 2. Generalizable framework that can be applied to any object.  And 3. Include natural interactions such as speech, sound, sight, and touch.  We aim to address the gap between the current trends of robotic interfaces and programmable materials by critical thinking about what is already readily available to users.  We introduce a framework to make ordinary objects into a tangible interface without using additional microcontrollers or invasive modifications. The project diverts away from thinking about the constant need to add electronic components or new materials to have a tangible interface.')}

                            {renderSectionTitle('USAGE')}
                            <motion.div className="image-medium" {...motionProps}>
                                <img src="/images/SpatialNotes/usage.jpg" alt="Spatial Notes"></img>
                            </motion.div>
                            {renderTextContainer('normal-text', 'In traditional approaches of tangible interfaces, there usually are sensors inside an ojbect, and an dedicated interface between the object and human. Our project breaks the boundary through reral time augumented reality that adds information to the everyday object without the need to add sensor or dedicated interfaces. Information can flow across space and time.')}

                            {renderSectionTitle('IMPLEMENTATION')}
                            {renderTextContainer('large-text', 'Gesture Control with HoloLens')}
                            <motion.div className="columns"
                                {...motionProps}>
                                <div className="col ">
                                    <video autoPlay muted loop id="myVideo" src="/images/SpatialNotes/record.mov" type="video/mov" >
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text mt-3">Record Note</p>

                                </div>
                                <div className="col ">
                                    <video autoPlay muted loop id="myVideo" src="/images/SpatialNotes/press.mov" type="video/mov" >
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text mt-3">View Note</p>
                                </div>
                                <div className="col ">
                                    <video autoPlay muted loop id="myVideo" src="/images/SpatialNotes/delete.mov" type="video/mov" >
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text mt-3">Delete Note</p>
                                </div>
                            </motion.div>

                            {renderTextContainer('large-text', 'Demo Scenario: ')}
                            <motion.div className="image-full"
                                {...motionProps}>
                                <div >
                                    <video autoPlay muted loop id="myVideo" src="/images/SpatialNotes/recordDemo.mov" type="video/mov" >
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text mt-3">Record Spatial Notes: Leaving Coffee Instructions for a Friend</p>
                                </div>
                                <div className="mt-12">
                                    <video autoPlay muted loop id="myVideo" src="/images/SpatialNotes/viewDemo.mov" type="video/mov" >
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text mt-3">View Spatial Notes: Viewing Coffee Instructions at a Later Time  </p>
                                </div>
                            </motion.div>
                            {renderTextContainer('normal-text', 'Using Spatial Notes allows users to place digital annotations on everyday objects through object recognition, speech to text, gesture control, and mixed reality technology. Using this, users can leave sequential spatial instructions, locate hard to find or hidden objects, and facilitate communication across time and space. The lack of sensors challenges the trend of Internet of Things to push towards ubiquitous computing and embedded radial atoms, where mixed reality and seamless technology is the future goal. ')}



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
