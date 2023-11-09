import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../motion";

export const EMotion = (props) => {
    const { archiveProjectId, setProjectOpened, setArchiveProjectId } = props;
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false)
        setArchiveProjectId(null);
    };


    if (archiveProjectId === 8) {
        return (
            <>

                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="E-Motion"
                        date="2023"
                        location="Cambridge, MA"
                        course="Harvard GSD Responsive Environments Group Project"
                        role="Role: Physical Computing Designer/Engineer"
                        description="Mood-Tracking Headband: Brain Interfacing with Sharing Soccer Player's Feelings with Fans via Stadium Lights                        "
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-small mt-20"
                                    {...motionProps}>
                                    <img src="/images/EMotion/logo.jpg"></img>
                                </motion.div>

                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >This project focuses on exploring how mental state impacts performance, specifically in soccer, through brain interfacing technology.
                                    </motion.p>
                                </div>

                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Sports these days are often very focused on the quantitative aspects of a game - the score, how many points ahead or behind they are, player statistics, etc. Our project aims to do the opposite - tracking and representing the qualitative aspects of a game, and reveal the importance of the mental state of a player. How does stress, sleep quality, mood, and focus influence a player’s performance?
                                    </motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >We partnered with Arctop for this project, who kindly supplied us with EEG brain sensor headbands that recorded ‘in the zone’, focus, and enjoyment values for the player wearing it. We paired this with heart rate and geolocation sensors connected to Arduino.
                                    </motion.p>
                                </div>
                                <motion.div className="image-small"
                                    {...motionProps}>
                                    <img src="/images/EMotion/arctop.jpg"></img>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Once the data is recorded by the headband, the information is plotted out in heat maps, which is correlated to panels of coloured lights on the stadium celling. In this vision, parts of the stadium will be illuminated with players’ mental state based on their location in real time.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/EMotion/flow.jpg"></img>
                                    <img src="/images/EMotion/map.jpg"></img>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video muted autoPlay loop id="myVideo" src="/images/EMotion/heatmaps.mov" type="video/mov">
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text">Heatmaps of player location and mental state based on EEG brain sensors.</p>
                                </motion.div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/EMotion/overlay.jpg"></img>
                                    <p className="caption-text">Composite visuaization of a player's game through emotions.</p>
                                </motion.div>
                                <motion.div className="text-container normal-text"   {...motionProps}>
                                    <p
                                    >The visualisation of the players’ enjoyment, focus, and zone facilitates the fan-to-player relationship and builds empathy in team sports as the audience can more closely see and feel what the players are feeling.
                                    </p><br></br>
                                    <p
                                    >By tracking and representing these qualities, we can also help players understand how their daily habits and mental state can affect their performance during games. This tracking and reflection is facilitated by our app, that can be tailored to players, coaches, and doctors.
                                    </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/EMotion/app1.jpg"></img><br></br>
                                    <img src="/images/EMotion/app2.jpg"></img>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >This project pioneers a new dimension in sports performance analysis by focusing on the qualitative aspects of the game, specifically the mental state of soccer players. By leveraging brain interfacing and sensor technology, the project provides real-time, visual representations of players' mental states, thereby enhancing fan engagement and empathy towards players. This novel approach not only offers spectators a more immersive experience but also provides valuable insights to players, coaches, and doctors. Thus, this project stands at the intersection of sports, technology, and mental health, offering a fresh perspective on performance analysis in sports.
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