import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../motion";

export const TangibleIdeas = (props) => {
    const { currentSection, setProjectOpened, setArchiveProjectId, openProject, setOpenProject } = props;
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false)
        setArchiveProjectId(null);
        setOpenProject(null);
    };

    if (openProject === 'tangibleIdeas') {
        return (
            <>
                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="Making Ideas Tangible"
                        date="2023"
                        location="Cambridge, MA"
                        course="MIT Media Lab Tangible Interfaces Group Project"
                        role="Role: Software Developer"
                        description="Tangible Ideas: Creating AI-Enhanced Mind Maps with Robotic Swarms as Conversational Agents. "
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-small mt-20"
                                    {...motionProps}>
                                    <img src="/images/TangibleIdeas/tangiblehero.jpg"></img>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >PROJECT OVERVIEW
                                    </motion.p>
                                </div>
                                <motion.div className="text-container large-text" {...motionProps}>
                                    <p>
                                        Project Vision:
                                    </p>
                                    <p>
                                        1. Reimagining AI's role in creative brainstorming
                                    </p>
                                    <p>
                                        2. Robotic Droplets: from tools to creative partners
                                    </p>
                                    <p>
                                        3. Aiming for a symbiotic and enactive human-AI creative process
                                    </p>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Assuming a mind map is a network of nodes, these nodes can reformulate their construction process as a sequential interaction workflow wherein a human user and an intelligent AI agent take turns adding one node to the network at a time. The goal of this project is, with the embedding of natural language processing AI models, to create a brainstorming tool that generates a mind map in real time based on a conversation. These nodes are interactive and can generate similar ideas when pressed, and can become tangible with the help of mini robotic ‘droplet’ swarms.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video autoPlay loop id="myVideo" src="/images/TangibleIdeas/tangiblevideo.mov" type="video/mov">
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text">Demo Video: With group members Alex, Jin Gao, and Keyi.</p>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >MACHINE LEARNING MODEL
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/TangibleIdeas/dataflow.jpg"></img>
                                    <p className="caption-text">Data Flow Diagram</p>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Our first step to generating the mind map is to convert speech to text, then to generate keywords, extract the importance score (rank keywords based on recency and similarity), and get the embedding vector representation of the keyword for visualization. We then generated idea clustering using nearest neighbors over a distance matrix.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/TangibleIdeas/tsne.jpg"></img>
                                    <p className="caption-text">Embedding dimensionality reduction using t-SNE.</p>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >WEB APP VISUALIZATION
                                    </motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >The second step was to visualize the mind map using a force graph generated in React. The site connected to the ML model via web server and synced the node placement to the word vector embedding. The website added some further features such as selecting multiple nodes and creating a new node by asking the ML model to generate a new idea that is in-between the selected ones. Additionally, moving a node will fix it in place, which creates an enactive process between the AI-generated mind map and the user whereby the map is interactive and responsive the user while simultaneously adding its own information based on the logic of the ML model.
                                    </motion.p>
                                </div>
                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >This creates a partnership between the user and the mind map itself, where it supersedes a simple recording device by being able to impose its own logic and bias on the nodes while simultaneously responding to user inputs in real time. </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video autoPlay muted loop id="myVideo" src="/images/TangibleIdeas/mapdemo.mp4" type="video/mp4">
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text">Web App Demo</p>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >PHYSICAL PROTOTYPES
                                    </motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >We made the ideas more tangible with the implementation of the mini robotic ‘droplet’ swarms that are physical instantiations of the nodes, equipped with various functionality. For example, users can whisper into a droplet if the do not want to disrupt the larger conversation, and then send the droplet onto the table to auto-organise itself as a node. Users can also click on a droplet to see more AI recommendations of a node.
                                    </motion.p>
                                </div>
                                <motion.div className="image-small"
                                    {...motionProps}>
                                    <img src="/images/TangibleIdeas/droplet.jpg"></img>
                                    <p className="caption-text">Render of Robotic Droplet</p>
                                </motion.div>
                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >We also implemented gestural recognition to sync with the projected mind map, using Microsoft’s AHAT articulated hand tracking.
                                    </motion.p>
                                </div>
                                <motion.div className="image-small"
                                    {...motionProps}>
                                    <img src="/images/TangibleIdeas/gesture.jpg"></img>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/TangibleIdeas/projection.jpg"></img>
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