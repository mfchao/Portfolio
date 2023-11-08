import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../motion";

export const Temples = (props) => {
    const { currentSection, setProjectOpened, setArchiveProjectId, openProject, setOpenProject } = props;
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false)
        setArchiveProjectId(null);
        setOpenProject(null);
    };

    if (openProject === 'temples') {
        return (
            <>
                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="Temples of Consumerism"
                        date="2022"
                        location="Cambridge, MA"
                        course="Harvard GSD Mediums Proseminar Group Project"
                        role="Role: Augmented Reality Prototyper + Full Stack App Developer"
                        description="An augmented reality app that gamifies shopping rewards through satirical references to Buddhist merit making and consumerism in Bangkok, Thailand.  "
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-full mt-20"
                                    {...motionProps}>
                                    <img src="/images/Temples/frames.jpg"></img>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >In extension to @snobs._ ‘s thesis on the political structure of Bangkok’s shopping malls, I created an augmented reality app that brings the idea of Buddhist merit making into the realm of shopping through a satirical criticism of consumerism in Thailand.
                                    </motion.p>
                                </div>
                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >Merit making is a process by which the more money individuals give temples, the higher their spiritual level. This app combines merit making with the idea of conventional shopping rewards where the points, or score, of an individual increases based on how much money and time they spend in the store.</motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >This app gamifies the shopping experience by superimposing a layer of augmented reality buttons over price tags to allow customers to add points through a variety of rules, while also displaying a leaderboard of everyone’s points and spiritual levels. The play between reality and abstraction stands at the forefront of this project, where a new way of shopping and gaining rewards points is explored.
                                    </motion.p>
                                </div>
                                <motion.div className="image-small"
                                    {...motionProps}>
                                    <video autoPlay muted loop id="myVideo" src="/images/Temples/welcometutorial.mp4" type="video/mp4">
                                        Your browser does not support this video.
                                    </video>
                                </motion.div>
                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >This app was created to gamify the shopping experience at a pop up store that opened in downtown Boston in December.</motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >As a critique of the consumerist policies in Bangkok, the app encourages the spending of money through a reward system implemented in augmented reality. When consumers enter the store, they are invited to download the app and gain points that can be cashed in for prizes, as well as see their 'merit score' displayed in comparison to other consumers in the store.
                                    </motion.p><br></br>
                                    <motion.p
                                        {...motionProps}
                                    >On startup, the app goes through a quick demonstration and explanation of why the app was created and how to play (get points). Players are asked to create a login, that was created using Firebase Authentication.
                                    </motion.p>
                                </div>
                                <motion.div className="columns" {...motionProps}>
                                    <video autoPlay muted loop id="myVideo" src="/images/Temples/addpoints.mp4" type="video/mp4" className=" w-52 col">
                                        Your browser does not support this video.
                                    </video>
                                    <video autoPlay muted loop id="myVideo" src="/images/Temples/player.mp4" type="video/mp4" className=" w-0 col">
                                        Your browser does not support this video.
                                    </video>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >The main way to gain points is to interact with products in the store, which customers can only do once every 10 minutes. One example of an interaction is shown above where buttons to gain points are anchored to item tags using the image tracking functionality in AR Foundation in Unity. Additionally, customers can see other customers' score in AR through personalized stickers, mimicking the sense of competition and social comparison seen in Thai Buddhist merit making.
                                    </motion.p>
                                </div>
                                <motion.div className="columns" {...motionProps}>
                                    <video autoPlay muted loop id="myVideo" src="/images/Temples/leaderboard.mp4" type="video/mp4" className=" w-80 col">
                                        Your browser does not support this video.
                                    </video>
                                    <img src="/images/Temples/mymerit.jpg" className=" w-0 col "></img>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >A leaderboard page is displayed to show the ranking of all players and their corresponding spiritual levels. Similarly, the 'My Score' page shows a breakdown of the player's score and tips on how to increase the score.
                                    </motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Throughout this project, I developed many additional skills using AR Foundation in Unity, including raytracing and image tracking. However, in this project I am most proud to say that this was the first time I fully developed a full stack app; from thinking through the experience design in AR, to how to make the functionality work using Firebase Realtime Database paired with User Authentication, and developing the back end of the app in XCode. Given this excellent experience, I learned an immense amount about how to redesign conventional apps (like shopping rewards apps) to be more interactive in using augmented reality, and I gained the skills to bring these ideas to life as the developer in addition to the designer.
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