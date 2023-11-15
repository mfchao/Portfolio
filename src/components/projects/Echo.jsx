import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../../assets/motion";
import { useEffect } from "react";

export const Echo = (props) => {
    const { setProjectOpened, setArchiveProjectId, openProject, setOpenProject, windowWidth } = props;
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false)
        setArchiveProjectId(null);
        setOpenProject(null)
    };



    if (openProject === "echo") {
        return (
            <>
                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="Introducing Echo"
                        date="2022"
                        location="Bartlett UCL"
                        course="UCL Design and Creative Practice Individual Project"
                        role="Role: Augmented Reality Prototyper"
                        description="Creating Echo, the augmented reality app designed as your personal memory palace.
                    This project focuses on the fluidity and instability of our visual perception and memory in relation to the physical presence, and how spatial relationships can be disrupted and are open to interpretation. Inspired by the notion of human memory being imperfect and dynamic, I built an interactive augmented reality app, Echo, that explores the relationship between object, memory, and space through emotion.
                     "
                        windowWidth={windowWidth}
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="w-80 mt-6"
                                    {...motionProps}>
                                    <img src="/images/Echo/Applogo.png"></img>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >The context of this app is centered around 2020. With protests, lockdown, Covid-19, political movements, and rights activists, this app serves as a new social media platform that encompasses these many usages. Whether it’s a photo of an angry protest or a sunny beach somewhere, Echo allows people to start conversations, build on, and re-live a multitude of memories across the world.
                                    </motion.p>
                                </div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/Echo/namecard.jpg" />
                                </motion.div>
                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >Echo aims to be a tool for people to build, share, cherish, and relive their memories through augmented reality.</motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/Echo/drawings.jpg" />
                                    <p className="caption-text">My Initial Brainstorming Sketches: What would a memory palace look like in the physical form?</p>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >The act of reminiscing is not simply information retrieval. Since remembered information is flawed and filtered by emotion, remembering a memory becomes the conscious act of recreating the past. I created layered photo montages of separate memories that showed the distortion and complexities of each memory, with colors showing the tone and mood of the memory. The creation of each memory montage is not necessarily factually correct in history, but is a mere representation of a personal story. Human memories change over time, and so I depicted this idea by pulling the photo montages apart into individual layers, each representing a different moment in time of reminiscing.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/Echo/heroimage-1.jpeg" />
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Augmented reality is used so that the user has control of the camera and movement at all times when moving through a photograph montage that is pulled apart into three dimensional space.
                                    </motion.p>
                                    <br></br>
                                    <motion.p className="large-text" {...motionProps}>
                                        The user is not therefore only seeing the memory, reliving it in an almost tangible experience.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video autoPlay muted loop id="myVideo" src="/images/Echo/cover.mp4" type="video/mp4">
                                        Your browser does not support this video.
                                    </video>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >The colors of the logo and the app overall were chosen to be modern yet bright, to capture a few different moods as the memories would. The yellow is bright and is the color of nostalgia, which is suitable for this app. Whiteness is a central theme in the app, as the color white creates a blank canvas for imagination to fill in the blanks.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video autoPlay muted loop id="myVideo" src="/images/Echo/discover.mp4" type="video/mp4">
                                        Your browser does not support this video.
                                    </video>
                                </motion.div>
                                <motion.p className="large-text" {...motionProps}>
                                    Echo has three main pages: Discover, Community, and My Memory Palace.
                                </motion.p>
                                <motion.div className="columns"
                                    {...motionProps}>
                                    <video autoPlay muted loop id="myVideo" src="/images/Echo/editlayers.mp4" type="video/mp4" className="col w-14">
                                        Your browser does not support this video.
                                    </video>
                                    <video autoPlay muted loop id="myVideo" src="/images/Echo/community.mp4" type="video/mp4" className="col w-14">
                                        Your browser does not support this video.
                                    </video>
                                    <video autoPlay muted loop id="myVideo" src="/images/Echo/uploadobjects.mp4" type="video/mp4" className="col w-14">
                                        Your browser does not support this video.
                                    </video>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >
                                        The Discover page allows users to explore, filter, and upload memory layers all across the world. The map is linked to Google Maps for familiarity and usability, with memory layers shown as yellow placement icons marked with Echo’s logo.
                                        The community page mirrors the Instagram interface, but also has buttons to view the post in augmented reality in the user’s own space. This allows users across the world to fully experience any memory in any space, blurring the boundaries of spatial relationships, visual perception, and physical presence. Due to the nature of the content being shared, the memory layers exhibit a subtlety and complexity in the visuals that combats the tendency for instant gratification that is common in social media today.
                                        The My Memory Palace page acts as a private library of fully customizable personal objects that are linked to memory layers. This page acts as a personal three dimensional photo album of memories that are available to re-experience at any time. When uploading memories, the user has the option to edit the photo using a similar interface to other editing apps for familiarity. Since human memory is often imperfect and selective, the app gives users the freedom of editing and choosing how they want to remember the moment. Colors play a large part in the representation of emotion, and thus color filters can be used to portray a certain mood of the memory.
                                    </motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >
                                        In order to create the augmented reality app, I needed to teach myself how to code using SwiftUI and RealityKit. At times I considered pursuing a different route to this project that was more in my comfort zone, skillset wise. However, I was driven by the project vision and thus I decided to teach myself the skills needed to successfully carry out the project that I wanted to create. In retrospect, adding RealityKit and SwiftUI to my existing programming skills has not only increased my confidence in software development, but also opened the doors to exciting possible future projects.
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