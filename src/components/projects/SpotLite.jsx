import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../../assets/motion";

export const SpotLite = (props) => {
    const { archiveProjectId, setProjectOpened, setArchiveProjectId, windowWidth } = props;
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false)
        setArchiveProjectId(null);
    };


    if (archiveProjectId === 4) {
        return (
            <>

                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="SpotLite"
                        date="2023"
                        location="Cambridge, MA"
                        course="MIT 6.1040 Software Design Individual Project"
                        role="Role: Full Stack Developer"
                        description="A social media app where the feed consists of content from a random select amount of people that refresh and swap out every week."
                        windowWidth={windowWidth}
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-full mt-20"
                                    {...motionProps}>
                                    <img src="/images/SpotLite/many.jpg"></img>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >PITCH
                                    </motion.p>
                                </div>

                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Spotlite introduces a novel social media experience, focusing on dismantling echo chambers through a rotation system called the 'Spotlite.'
                                    </motion.p>
                                </div>
                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >The Spotlite is a rotating week-long showcase of randomly selected users who can post content for the entire community to engage with. After this week all posts are deleted and a fresh set of randomly-selected users will take the spotlite, giving everyone the chance of possibly having the attention of millions of users for one week.
                                    </motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Upon signing up, users have the option to join the pool from which Spotliters are chosen or opt to be spectators. Spotliters have the freedom to share a variety of media, including text, photos, short videos, and audio clips. The content posted by Spotliters is subject to a ranking system based on upvotes and downvotes from the spectators. Furthermore, posts are categorized into five broad and encompassing sections: lifestyle, science/technology, arts, entertainment, and news. This categorization helps users seamlessly navigate and discover content aligned with their interests, while still discovering fresh content from new users every week.
                                    </motion.p><br></br>
                                    <motion.p
                                        {...motionProps}
                                    >This app aims to satisfy two types of users, the Spotliters and the spectators. The Spotliters will be drawn to the app in aims to get exposure and reach a bigger audience, while the spectators will be interested in the app to discover new and fresh content on a weekly basis.
                                    </motion.p>
                                </div>
                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >SpotLite is a social experiment that asks the question, ‘If you gave a random person the attention of millions of users, what would they say?’.
                                    </motion.p>
                                </div>


                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >DEVELOPMENT
                                    </motion.p>
                                </div>
                                <motion.div className="text-container normal-text" {...motionProps}>
                                    <p>
                                        I developed this app full stack start to finish. After conducting user interviews and developing the concept of the app, I did the backend by creating my own SpotLite API with ‘get’, ‘post’, ‘delete’, and ‘put’ methods that called to a MongoDB database. I then did the front end using my RESTful API in Vue.js, and finally deploying to Vercel.
                                    </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/SpotLite/Swireframes.jpg"></img>
                                    <p className="caption-text">
                                        Initial Wireframes
                                    </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/SpotLite/abstractmodel.jpg"></img>
                                    <p className="caption-text">
                                        Abstract Data Model: Diagram of Concept Dependencies and Synchronizations
                                    </p>
                                </motion.div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/SpotLite/font.jpg"></img>
                                    <p className="caption-text">
                                        Font Family and Style
                                    </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/SpotLite/color.jpg"></img>
                                    <p className="caption-text">
                                        Color Study: Inspiration from light refractions and prisms because 'spotlight'
                                    </p>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >FINAL APP
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video autoPlay loop muted id="myVideo" src="/images/SpotLite/webdemo.mov" type="video/mov" >
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text">
                                        Web Version Demo Video                                    </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/SpotLite/phone1.jpg"></img>
                                    <p className="caption-text">
                                        Mobile Version
                                    </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/SpotLite/desktopversion.jpg"></img>
                                </motion.div>
                                <motion.div className="text-container normal-text" {...motionProps}>
                                    <p>
                                        When the app was finished, I conducted various user tests to see if the usability matched my vision. If you are interested, please see my full write up for this project (split across 6 assignments):
                                        <a target="_blank" href="https://61040-fa23.github.io/portfolio-mfchao/assignments.html" className="cursor-pointer text-rose-600 hover:text-rose-300 transition-colors"
                                        > HERE</a> </p>
                                </motion.div>
                                <motion.div className="text-container normal-text" {...motionProps}>
                                    <p>
                                        In conclusion, Spotlite revolutionizes the social media landscape by introducing a unique rotation system that breaks down echo chambers and promotes diversity of content. By giving every user a chance to be in the 'Spotlite,' it democratizes the platform and encourages a wide variety of voices to be heard. This system not only provides an opportunity for users to gain exposure and reach a larger audience, but also ensures a constant stream of fresh, diverse content for spectators. The categorization of posts into broad sections further enhances user experience by aligning content with individual interests, while still promoting discovery of new content. Thus, Spotlite serves as a dynamic, inclusive, and engaging social media platform that caters to both content creators and consumers.
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