import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../motion";

export const FlowScape = (props) => {
    const { archiveProjectId, setProjectOpened, setArchiveProjectId } = props;
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false)
        setArchiveProjectId(null);
    };


    if (archiveProjectId === 2) {
        return (
            <>

                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="FlowScape"
                        date="2023"
                        location="Cambridge, MA"
                        course="Harvard GSD 6438 Procedural Fields: Functional Design of Discrete Hyperdimensional Spaces Group Project"
                        role="Role: Computer Graphics Engineer"
                        description="A Personal Space Project: How does crowding in urban landscapes affect the way we interact with others?"
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-full mt-20"
                                    {...motionProps}>
                                    <img src="/images/FlowScape/overview.jpg"></img>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >INTRODUCTION
                                    </motion.p>
                                </div>

                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >We often think personal space is something we own, something that belongs to us. But in reality, it is determned by the people and space that surrounding us. “A day in the life in major cities, millions of strangers can be found passing within inches of each other – in subway stations, sidewalks, on public streets. We are a network of strangers moving in such close proximity that occasionally it becomes a dehumanized experience. In these fleeting moments spent in interstitial spaces, we find ourselves detached from the present state of where we are amongst the human swarm.”
                                    </motion.p>
                                </div>
                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >Thus, our project ask the question: How does crowding in urban landscapes affect the way we interact with others? We attempt to explore this question by creating a web visualization of a character’s personal space in an architectural plan.
                                    </motion.p>
                                </div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >PART 1: CHARACTER CREATION
                                    </motion.p>
                                </div>

                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/FlowScape/personailty.jpg"></img>
                                    <p className="caption-text">Representation of Humans - Personality Test</p>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >In our web app, different users can enter the same architectural plan, similar to entering a scene a video game. Before they enter, they go through a survey that creates their character based on their responses. We based the character creation logic on popular psychological representations of humans, commonly used on personality tests.
                                    </motion.p><br></br>
                                    <motion.p
                                        {...motionProps}
                                    >The purpose of having different characters for different people is because the influence someone has on others’ sense of space may be different. A loud and extroverted individual may seemingly take up more space, whereas a shy and quiet individual may seemingly take up less space. This difference is encoded in the survey and will be represented visually in simulation in part two below.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video muted autoPlay loop id="myVideo" src="/images/FlowScape/survey.mov" type="video/mov">
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text">Character Creation via Startup Survey</p>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >PART 2: PERSONAL SPACE SIMULATION
                                    </motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Once users have set up their character, they can enter the plan. The plan is inspired by the Mies van der Rohe Barcelona Pavilion, as occupant flow is a frequently discussed topic in architecture and planning.
                                    </motion.p>
                                </div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/FlowScape/barcelona.jpg"></img>
                                    <p className="caption-text">Mies van der Rohe Barcelona Pavilion Study Drawings</p>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >In the web simulation, the plan shows color-coded flow contours that represent the amount of space between objects (blue = more space, red = tight space). The simulation also shows a boolean union of objects when they get too close together. This is symbolic of how the perception of space flows around groups of objects or people. For example, if a user if standing and leaning against a wall, one may perceive them as part of the wall - people can become part of the environment. Similarly, groups of people may perceptually become one unit, whereby the flow of the building wraps around them as a whole.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video muted autoPlay loop id="myVideo" src="/images/FlowScape/flow.mov" type="video/mov">
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text">Web Simulation demo. All visuals and graphics are created using signed distance fields and shaders.</p>
                                </motion.div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <video muted autoPlay loop id="myVideo" src="/images/FlowScape/tightspace.mov" type="video/mov">
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text">Tight space visualization with colored flow contour lines</p>
                                </motion.div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <video muted autoPlay loop id="myVideo" src="/images/FlowScape/manypeople.mov" type="video/mov">
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text">Crowded space visualization with boolean unions.</p>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >This project challenges the notion of personal space as a fixed entity, instead presenting it as a fluid, dynamic phenomenon that is constantly shaped and reshaped by our interactions with others and the environment. By creating a web visualization that allows users to experience how their personal space is influenced by their character traits and the architectural plan they are in, this project provides a playful and immersive way to understand and engage with the concept of personal space.
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