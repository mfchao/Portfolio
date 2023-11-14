import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../../assets/motion";

export const Prosthetics = (props) => {
    const { archiveProjectId, setProjectOpened, setArchiveProjectId } = props;
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false)
        setArchiveProjectId(null);
    };


    if (archiveProjectId === 10) {
        return (
            <>

                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="Accessible Prosthetics"
                        date="2022"
                        location="London, UK"
                        course="UCL Bartlett Design and Creative Practice Individual Project"
                        role="Role: Designer"
                        description="This project is focuses on designing for individuals of varying ability, since in Dr. Jos Boy’s words, ‘we are all disabled in some way.” Tackling design in this way starts to break down the barriers of our preconceptions of what design for disability should be and who can benefit from it, and ultimately can allow us to make possibly better solutions for more people. Thus, this project explores how to use found materials to create prosthetics for different users."
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-small mt-20"
                                    {...motionProps}>
                                    <img src="/images/Prosthetics/knee.jpg"></img>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >PHASE 1: FOUND MATERIAL EXPERIMENTS
                                    </motion.p>
                                </div>

                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >I started this project with the intent of creating accessible prosthetics out of found materials. I worked with Paralympic sprinter, Julie Rogers, on what is needed in a leg prosthetic, and below are a few examples of my early studies, iterations, and explorations of leg prosthetics made from found materials.
                                    </motion.p>
                                </div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/Prosthetics/sketch1.jpeg"></img>
                                    <p className="caption-text">
                                        My initial sketches trying to understand joints
                                    </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/Prosthetics/pipes.jpg"></img>
                                    <img src="/images/Prosthetics/pipes2.jpg"></img>
                                    <p className="caption-text">
                                        Leg Prosthetic made from welded copper pipes
                                    </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/Prosthetics/anatomy.jpg"></img>
                                    <p className="caption-text">
                                        My anatomy drawings
                                    </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/Prosthetics/feet.jpg"></img>
                                    <p className="caption-text">
                                        More found material experiments.
                                    </p>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >PHASE 2: FOUND MATERIAL LEG PROSTHETIC
                                    </motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >After experimenting with the found materials, I attempted to create a leg prosthetics out of found materials as an accessible and easy to build alternative to expensive prosthetics on the market. All design decisions were informed by closely working with Paralympic sprinter, Julie Rogers.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/Prosthetics/exploded.jpg"></img>
                                    <p className="caption-text">
                                        Leg prosthetic plan sketch.
                                    </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/Prosthetics/prototypes.jpg"></img>
                                    <img src="/images/Prosthetics/prototypes2.jpg"></img>
                                    <p className="caption-text">
                                        Leg prosthetic prototypes.
                                    </p>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >PHASE 3: THE WEARABLE CHAIR
                                    </motion.p>
                                </div>
                                <motion.div className="text-container normal-text" {...motionProps}>
                                    <p
                                    >Due to some controversy surrounding designing for disability, I pivoted my project halfway through to focus more on found materials and prosthetics for different types of users.
                                    </p><br></br>
                                    <p>
                                        As an example of utilizing the wearable chair as developed commercially by companies like Noonee and Archelis, I decided to create a ‘wearable chair’ from found materials as a type of prosthetic for the ‘abled’ body in the form of an exoskeleton, following themes of bricolage and adhocism.
                                    </p><br></br>
                                    <p>
                                        Exoskeletons made for factory workers and surgeons to take the weight off their feet currently exist but are quite expensive, which is why I created my own out of found materials in the form of a DIY exoskeleton made from old exercise equipment, backpack straps, copper pipes, and curtain hinges.
                                    </p>
                                </motion.div>
                                <motion.div className="image-small"
                                    {...motionProps}>
                                    <img src="/images/Prosthetics/technical.jpeg"></img>
                                    <p className="caption-text">
                                        My technical sketch of the wearable chair.
                                    </p>
                                </motion.div>
                                <motion.div className="image-small"
                                    {...motionProps}>
                                    <video autoPlay loop muted id="myVideo" src="/images/Prosthetics/wearablechair.mov" type="video/mov" >
                                        Your browser does not support this video.
                                    </video>
                                    <p className="caption-text">
                                        Wearable chair demo.                                  </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/Prosthetics/contexts.jpg"></img>
                                    <p className="caption-text">
                                        Wearable chair in various contexts.
                                    </p>
                                </motion.div>
                                <motion.div className="text-container normal-text" {...motionProps}>
                                    <p
                                    >The context for the wearable chair sits best within the world of factory and warehouse workers, of which Amazon warehouse workers are notorious for working 12 hour shifts every day, being on their feet for ‘over 10 hours’ and ‘falling asleep standing up’. According to several sources, every day workers “walk a total of 15 to 20 miles through a 25-acre warehouse — as long as seven New York blocks”. One particular worker said that she “needed at least four pain meds just to get through the day”, due to the physical demands and long hours.
                                    </p><br></br>
                                    <p>
                                        Oxford University estimates that this type of employment is becoming increasingly common, estimating that in the future jobs like these could account for 47 percent of the US workforce. In this context, the wearable chair could provide an oasis of relief and support for the body, while being robust in functionality demands for the type of work required.
                                    </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/Prosthetics/amazon.jpeg"></img>

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