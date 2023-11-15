import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../../assets/motion";

export const DeepFacade = (props) => {
    const { setProjectOpened, setArchiveProjectId, openProject, setOpenProject, windowWidth } = props;
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false)
        setArchiveProjectId(null);
        setOpenProject(null);
    };

    if (openProject === 'deepfacade') {
        return (
            <>
                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="DeepFacade"
                        date="2023"
                        location="Cambridge, MA"
                        course="MIT 4.453 Creative Machine Learning Group Project"
                        role="Role: ML Engineer + Web Developer"
                        description="A text-to-3D facade AI tool that deploys a novel relief depth map technology developed using CycleGANs. "
                        windowWidth={windowWidth}
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-full mt-20"
                                    {...motionProps}>
                                    <img src="/images/DeepFacade/3dfacades.jpg"></img>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >INTRODUCTION
                                    </motion.p>
                                </div>
                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >The facade of a building refers to its exterior or the front elevation. It is the most visible and expressive part of a structure, often serving as a representation of the architectural style and character of the building.
                                    </motion.p>
                                </div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/DeepFacade/buildings.jpg"></img>
                                    <p className="caption-text">Architectural Facade Examples.</p>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Our investigation was initiated with an interest in the development of three-dimensional representations of architectural facades. This endeavor aimed to utilize the generation of two-dimensional "relief depth map" images, produced through the inspiration of artificial intelligence-generated images. Leveraging the power of CycleGANs, a pioneering tool for style transfer, we cultivated a novel approach to produce "relief depth maps." These depth maps were  simplified and reimagined a constructible architectural façade based on an abstract inspirational photograph.
                                    </motion.p><br></br>
                                    <motion.p
                                        {...motionProps}
                                    >Style transfer is increasingly considered a pivotal technique in the realm of architectural design. In this context, a noteworthy method has been proposed by an architectural studio at the University of Pennsylvania.  This technique harnesses the potential of an image-based style transfer model to conceptualize and define novel architectural facade styles.
                                    </motion.p>
                                </div>
                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >By adopting this method, a symbiosis between existing architectural structures and innovative design concepts can be facilitated, leading to the creation of unique and visually striking architectural facades.
                                    </motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Following the generation of this new style-transferred image, students in the studio have been actively engaged in evolving their own techniques to translate this two-dimensional information into a three-dimensional representation.
                                    </motion.p><br></br>
                                </div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/DeepFacade/studentexample.jpg"></img>
                                    <p className="caption-text">Studio example facade design (right) based on an AI inpiration image (left) by Bingyu Guo and Maria Sofia</p>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >When comparing the resulting three-dimensional construction model with the original two-dimensional style-transferred image, the two are not perfectly aligned. However, the image is more of an implication rather than a literal translation of the three-dimensional construction. The depth of interpretation exceeds superficial representation and introduces a nuanced understanding of spatial quality. Additionally, the process of creating the depth relief model manually takes hours upon hours of tedious work, all of which leads us to the identified problem:
                                    </motion.p>
                                </div>
                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >Problem: How can we build an AI to automate the image to 3D facade generation process through interpreting the inspirational image and generating a reimagined relief depth map?
                                    </motion.p>
                                </div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >METHODOLOGY: Approach 1
                                    </motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >To generate 3D models from inspiration images, we discovered that utilizing a normal map and depth map as intermediate steps in the translation process proved effective. Our initial approach involved employing the Pix2pix method to convert input images into normal map images. The model is trained on pairs of images, such as building facade labels to corresponding building facades, and then attempts to generate the respective output image given any input image.
                                    </motion.p>
                                </div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/DeepFacade/flow1.jpg" />
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >The dataset comprised two sets of paired images, extracted from previous research on relief models, and preprocessed to a resolution of 256 x 256 pixels.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/DeepFacade/data1.jpg" />
                                    <p className="caption-text">Data A: Greyscale images (left) and Data B: Normal maps (right)</p>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >After training the model for 200 epochs, we observed two main drawbacks. First, the cropped images did not perfectly align the details between the image and the normal map. Second, normal maps require precise color transitions to generate smooth surfaces, which proved challenging for the model to learn within its specific architecture.
                                    </motion.p>
                                </div>
                                <motion.div className="image-small"
                                    {...motionProps}>
                                    <img src="/images/DeepFacade/pixcompare.jpg" />
                                    <p className="caption-text">Comparison of failed vs desired results.</p>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >METHODOLOGY: Approach 2
                                    </motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >As a result, we adopted a different model, CycleGAN, as our final approach, which directly translates AI inspiration images into relief depth maps (elevational grayscale images of the 3D models). CycleGAN is designed to handle unpaired image datasets, allowing it to learn the translation between two domains (A and B) without requiring corresponding images in both source and target domains. The model consists of two parallel GANs, with each GAN responsible for learning the mapping between one domain and the other. These two GANs are then combined to establish a cycle-consistent mapping between the two domains.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/DeepFacade/flow2.jpg" />
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >To enhance our dataset, we supplemented it with MidJourney, generating variations of existing inspiration images and relief depth maps. Both A and B datasets consisted of 500 images, preprocessed to a resolution of 512 x 384 pixels, and were trained for 200 epochs.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/DeepFacade/data2.jpg" />
                                    <p className="caption-text">Data A: Full Inspiration Images (left) and Data B: Relief model Images (right)</p>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >RESULTS
                                    </motion.p>
                                </div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >The training process yielded successful results, as evidenced by a significant decrease in training loss within the initial 25 epochs, followed by a gradual reduction throughout the remainder of the training. Upon comparing the relief depth maps generated by the model with the input inspiration images, we observed that the relief depth images effectively captured the primary configuration depicted in the inspiration images, while reducing excessive details as anticipated.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/DeepFacade/graphs.jpg" />
                                    <p className="caption-text">The training loss noticeably drops during the first 25 epochs, then continues to decline slowly for the rest of the training period. </p>
                                </motion.div>
                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >Our model’s success shines when compared to existing depth map generators, namely Imageamigo and PyTorch MiDaS
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/DeepFacade/comparison.jpg" />
                                    <p className="caption-text">Our model in comparison to exisiting tools on the market.</p>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >It is clear from the comparison of our model against Imageamigo and MiDaS that our model performs more successfully because it can generate discrete geometry features that can be used as a functional depth map in architectural facade generation.
                                    </motion.p>
                                    <br></br>
                                    <motion.p
                                        {...motionProps}
                                    >It is shown in the image below that our model can successfully perform image reconstruction and re-imagination of the inspirational photo through the simplification and reconfiguration of the geometry in the depth model. This aligns with the initial aims of not wanting a direct 1:1 translation of the inspirational photo into a three-dimensional version, but to build an interpretive model that exhibits some creativity and agency in the way it interprets and reconstructs the inspirational photo.
                                    </motion.p>
                                </div>
                                <motion.div className="image-small"
                                    {...motionProps}>
                                    <img src="/images/DeepFacade/detail.jpg" />
                                    <p className="caption-text">Detail Surface Reconfiguration</p>
                                </motion.div>
                                <div className="section-title">
                                    <motion.p
                                        {...motionProps}
                                    >APPLICATION
                                    </motion.p>
                                </div>
                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >The proposed web application aims to complete the workflow of the generation of three-dimensional architectural relief models by leveraging artificial intelligence techniques
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video autoPlay muted loop id="myVideo" src="/images/DeepFacade/demo.mp4" type="video/mp4">
                                        Your browser does not support this video.
                                    </video>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Through a user-friendly interface, the application allows users to input prompts or phrases, which serve as inspiration for the AI-driven generation of inspiration photos. Our underlying model then utilizes CycleGANs to generate 2D relief depth maps based on the input prompt. Subsequently, the application seamlessly integrates the generated relief depth maps into a comprehensive workflow, where the final step involves transforming the 2D representations into tangible and visually captivating 3D relief models. By providing users with an intuitive platform for translating their creative visions into practical architectural representations, this web application showcases the potential of AI-driven technologies in architectural design and opens new avenues for innovative and efficient visualization in the field. In the future, next steps could be adding a functionality to view these facades in AR or VR in the application.
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