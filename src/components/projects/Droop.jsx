import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../motion";

export const Droop = (props) => {
    const { archiveProjectId, setProjectOpened, setArchiveProjectId } = props;
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false)
        setArchiveProjectId(null);
    };


    if (archiveProjectId === 7) {
        return (
            <>

                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="3D Droop"
                        date="2022"
                        location="Cambridge, MA"
                        course="Harvard GSD 6338 Introduction to Computational Design"
                        role="Role: Computational Designer"
                        description="Experimenting with alternative ways of 3D printing by altering and creating custom G-code algorithms."
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-medium mt-20"
                                    {...motionProps}>
                                    <img src="/images/Droop/droop2.jpg"></img>
                                </motion.div>
                                <motion.div className="text-container large-text" {...motionProps}>
                                    <p>
                                        How can we create an irregular catenary surface?
                                    </p>
                                </motion.div>

                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >This project aims to create a shell that acts upon the gravity with the method of 3D printing. By printing a straight lines horizontally on a template with a hole in the middle, the lines droop and become catenary curves. Multiple lines then create a catenary surface.
                                    </motion.p><br></br>
                                    <motion.p
                                        {...motionProps}
                                    >By create a template from plexiglass with irregular shapes that allows the filament to droop, we can create an irregular catenary surface. Editing the G-code allows the speed and direction of the 3D printer to be customized, which creates the final result as a 3D printed catenary shell that follows gravity.
                                    </motion.p><br></br>
                                    <motion.p
                                        {...motionProps}
                                    >Parameters such as fan speed, feed rate, and extrusion rate needed to be carefully controlled in accordance the the material qualities of the plastic to ensure a successful droop. Above shows the simple algorithm that creates a parametric zigzag path that was later translated into G-Code.
                                    </motion.p>
                                </div>

                                <motion.div className="image-full columns"
                                    {...motionProps}>
                                    <video autoPlay muted loop id="myVideo" src="/images/Droop/droopvideo2.mov" type="video/mov" className=" w-52 col">
                                        Your browser does not support this video.
                                    </video>
                                    <video autoPlay muted loop id="myVideo" src="/images/Droop/droopvideo1.mov" type="video/mov" className="w-52 col">
                                        Your browser does not support this video.
                                    </video>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/Droop/droop1.jpg"></img>
                                </motion.div>

                                <motion.div className="text-container normal-text" {...motionProps}>
                                    <p>
                                        Exploring and testing in this new method of 3D printing break our conceptions of how to use tools as designers and gives us more agency in the different types of things we can create. Instead of following typical 3D slicers and pre-determining the outcome of the model we want, we can use natural forces like gravity to explore and discover new forms by 'hacking' the 3D printer.
                                    </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/Droop/droopcollage.jpg"></img>
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