import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../../assets/motion";

export const UCLAssistant = (props) => {
    const { archiveProjectId, setProjectOpened, setArchiveProjectId, windowWidth } = props;
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
                        title="UCL Assistant"
                        date="2022"
                        location="London, UK"
                        course="University College London"
                        role="Role: App developer"
                        description="UCL Assistant is an app that aims to organize and optimize a student's life in one app. It uses timetable and room booking features to act as 'one app to manage your life at University College London (UCL)'. This was a project done on behalf of my role as the Program Representative for my program at UCL in year 2."
                        windowWidth={windowWidth}
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-full mt-20"
                                    {...motionProps}>
                                    <img src="/images/UCLAssistant/mockups.jpg"></img>
                                </motion.div>
                                <motion.div className="text-container normal-text" {...motionProps}>
                                    <p>
                                        According to surveys send across the student body, the current app is rarely used due to its inefficiency, difficult learnability, confusing navigation, unappealing design, awkward mapping, and confusing interfaces. Many students say that the idea of the app is great, but the current execution needs major improvement.
                                    </p>
                                </motion.div>
                                <motion.div className="text-container large-text" {...motionProps}>
                                    <p>
                                        The goal of this project is to organize all aspects of a student's life into one user friendly app that will improve student wellbeing through efficiency.
                                    </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/UCLAssistant/process.jpg"></img>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >In order to understand what the user needs, I first needed to develop a persona by interviewing my peers and other students at UCL. Through this research I learned that the most important aspects of a student's life are classes, homework or studying, and social or extracurricular events. Through this research I was able to start developing the app.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/UCLAssistant/persona.jpg"></img>
                                </motion.div>
                                <motion.div className="text-container normal-text" {...motionProps}>
                                    <p>
                                        Based on the user research, it was evident that the app needed five main pages:
                                    </p>
                                    <p>
                                        1. A timetable that is synced to google calendar
                                    </p>
                                    <p>
                                        2. A planner to enter daily tasks and homework items for organization
                                    </p>
                                    <p>
                                        3. A room booking service to reserve study spaces, book rooms, and view live occupancy reports
                                    </p>
                                    <p>
                                        4. An events page to show popular social events going on for the school, community, and societies.
                                    </p>
                                    <p>
                                        5. A settings page to log into an existing UCL account and manage notifications.
                                    </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/UCLAssistant/wireframes.jpg"></img>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Using my initial prototype, I began my user testing. Through this process I learned that in the planner function, users would like to see a week's layout with tasks instead of only a monthly layout. Also, I changed the font type to be more readable in larger text areas, and simplified planner designs as showed below.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/UCLAssistant/change.jpg"></img>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >For the last iteration, I implemented the changes from the prototype testing. If I were to continue this project further, I would consider adding a messaging page for students to get in contact each other to work in group projects, get help on assignments, and chat.
                                        This app has the potential to boost student wellbeing by simplifying a student’s life through increased efficiency and productivity.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video autoPlay muted loop id="myVideo" src="/images/UCLAssistant/phone_2.mp4" type="video/mp4">
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text">App Demo</p>
                                </motion.div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/UCLAssistant/cover.jpg"></img>
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