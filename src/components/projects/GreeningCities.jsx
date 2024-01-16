import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../../assets/motion";

export const GreeningCities = (props) => {
    const { archiveProjectId, setProjectOpened, setArchiveProjectId, windowWidth } = props;
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false)
        setArchiveProjectId(null);
    };


    if (archiveProjectId === 12) {
        return (
            <>

                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="Greening Cities"
                        date="2021"
                        location="London, UK"
                        course="University College London Greening Cities Individual Research"
                        role="Individual Research Project | Winner of Architectural Research Prize 2021"
                        description="This project was an architectural ideation project and academic report that aims to utilize case studies, interviews, and literature review to analyze, evaluate, and propose green infrastructure solutions to
                        the Bangkok Art and Culture Center (BACC)."
                        windowWidth={windowWidth}
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-full mt-20"
                                    {...motionProps}>
                                    <img src="/images/GreeningCities/plan.jpg"></img>
                                </motion.div>
                                <motion.div className="text-container normal-text" {...motionProps}>
                                    <p>
                                        Located in the center of downtown Bangkok, this site can serve as a representation of and example to many other buildings in Bangkok. And through the educational aspect of the culture center, the building will help to create an understanding of the positive impacts of green infrastructure and help as a catalyst to the societal push needed for legislative policies in climate change and adaptation. After extensive research in case studies and solutions, some visualizations from this paper are shown below.
                                    </p>
                                </motion.div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/GreeningCities/aims.jpg"></img>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Among major Asian cities, Bangkok is known to have the least green space with only 3 square meters per capita, while a minimum for a healthy city is the recommended 9 square meters. With temperatures surpassing 35 degrees C, overheating is a major issue that is often combatted with incredibly high HVAC energy outputs. This heat results in ‘urban heat island’ levels, where solar heat that gets trapped in the city throughout the day is released at night. In addition, half of the year is immersed in a rainy season which famously floods streets, blocking traffic and overloading sewage systems. The heat and humidity from the city prevents the floods from evaporating quickly, causing water to collect in unwanted places. And while new buildings are being built with sustainable concerns, countless past buildings and skyscrapers need to be retrofitted for green infrastructure. In addition, new energy discoveries have led to new powered industry development, which in turn increases air pollution, waste, and public health concerns. These developments along with unsustainable tourism have also negatively affected Bangkok’s biodiversity.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/GreeningCities/drawingscities.jpg"></img>
                                </motion.div>
                                <motion.div className="text-container normal-text" {...motionProps}>
                                    <p>
                                        Based on extensive research on site audits, climate analysis, macro/micro analysis, example case studies, interviews, strategy evaluation, and cost benefit analysis, the following potential green infrastructure solutions were designed for the BACC.
                                    </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/GreeningCities/table.jpg"></img>
                                    <br></br>
                                    <img src="/images/GreeningCities/solutions.jpg"></img>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >The solutions shown below include implementing terraced intensive green roofs with biosolar panels, Retrofit living walls and bio-facades, permeable rain garden surfaces, food gardens, and natural vegetated shading.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/GreeningCities/three.jpg"></img>
                                </motion.div>
                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >This project shows that the line between city and nature can become blurred through the implementation of green infrastructure, and merging the two is ensures liveable and equitable cities in the future.
                                    </motion.p>
                                </div>

                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/GreeningCities/shading.jpeg"></img>
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