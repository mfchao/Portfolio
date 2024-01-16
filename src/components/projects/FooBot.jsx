import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../../assets/motion";

export const FooBot = (props) => {
    const { archiveProjectId, setProjectOpened, setArchiveProjectId, windowWidth } = props;
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false)
        setArchiveProjectId(null);
    };


    if (archiveProjectId === 6) {
        return (
            <>

                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="Silent Game BuildBot"
                        date="2023"
                        location="Cambridge, MA"
                        course="Harvard GSD 6365 Enactive Design Group Project"
                        role="Role: Web Developer"
                        description="Creating a digital game to explore the silent creation of things as a means to understanding design as a practice"
                        windowWidth={windowWidth}
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-full mt-20"
                                    {...motionProps}>
                                    <img src="/images/Foobot/foobot.jpg"></img>
                                </motion.div>

                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Creating a digital game to explore the silent creation of things as a means to understanding design as a practice
                                        The Silent Game BuildBot builds on Habraken and Gross’ Concept Design Games. Developed to question and make explicit thought processes and concepts, design games are simple interactive activities to help us understand how we design.
                                    </motion.p>
                                </div>
                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >Silent Game BuildBot shares the original Silent Game’s focus on “communication of design intent, specifically, how design intent is communicated through the simple and silent creation of designs”.
                                    </motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >‘The game is played by two players. One party arranges a few objects on a board( in the example these objects are nails and washers ) and the other party must continue the arrangement by adding and must try to be true to the patterns implied by what the first player did. The players are not allowed to talk. The game makes players aware of the way we pick up thematic aspects in the forms we see. It teaches the player to be open to what is done by others. It triggers a discussion afterwards about the images and visions we implicitly share when designing.’ - The Silent Game by John Habraken
                                    </motion.p><br></br>
                                    <motion.p
                                        {...motionProps}
                                    >Shifting to the digital realm, our BuildBot is an instrument for examining contemporary design practices that happen in immaterial worlds, across great distances and in a collaborative manner.
                                    </motion.p>
                                </div>

                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video controls id="myVideo" src="/images/Foobot/silentgamebot.mp4" type="video/mp4" >
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text">
                                        Web Demo Video                                    </p>
                                </motion.div>

                                <motion.div className="text-container normal-text" {...motionProps}>
                                    <p>
                                        The Silent Game BuildBot is a digital platform where two payers connect to collaborate on a shared design, built with React Three Fiber and Socket.io. It offers no possibility for communication of intent other than the act itself of placing blocks on a 3D canvas. Players 1 and 2 alternate in making three moves where the first party is the one to set the design intent through block placement and color choice and the second has to infer how to add additional blocks based on the other’s actions. This project explores collaborative design practices in the digital realm, and challenges the way we communicate through design intent.
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