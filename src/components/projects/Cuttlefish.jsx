import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../../assets/motion";

export const Cuttlefish = (props) => {
    const { archiveProjectId, setProjectOpened, setArchiveProjectId } = props;
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false)
        setArchiveProjectId(null);
    };


    if (archiveProjectId === 6) {
        return (
            <>

                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="Cuttlefish"
                        date="2022"
                        location="Cambridge, MA"
                        course="Harvard GSD 6338 Introduction to Computational Design Group Project"
                        role="Role: Computational Designer"
                        description="My new Rhino Grasshopper plug-in, Cuttlefish."
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-medium mt-20"
                                    {...motionProps}>
                                    <img src="/images/Cuttlefish/cuttlefish.jpg"></img>
                                </motion.div>

                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Cuttlefish was inspired by how ceramics shrink as they dry. The Cuttlefish shrinking component takes in any closed mesh object and shrinks it based on a a variety of parametric scalars, such as temperature, particle density, humidity, and porosity. The component then deforms the mesh by creating unique vectors for each mesh vertex based on the geometry of the mesh, as well as the environmental scalars, and finally reconstructs the mesh based on each translated vertex.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/Cuttlefish/sequence.jpg"></img>
                                </motion.div>

                                <motion.div className="text-container large-text" {...motionProps}>
                                    <p>
                                        The plugin was coded in C# with my derived logic of the code shown below, mainly using methods of mesh deformation and vector algebra:
                                    </p>
                                </motion.div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/Cuttlefish/notes1.jpg"></img>
                                    <img src="/images/Cuttlefish/notes2.jpg"></img>
                                    <p className="caption-text">My Pseudocode notes</p>
                                </motion.div>
                                <motion.div className="text-container normal-text" {...motionProps}>
                                    <p>
                                        This pseudocode was translated into the C# code that forms the plugin component:
                                    </p>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/Cuttlefish/code.jpg"></img>
                                </motion.div>
                                <motion.div className="text-container normal-text" {...motionProps}>
                                    <p>
                                        Which was later turned into a fully functioning Grasshopper Plug-in named Cuttlefish (after the fish's natural shrinking and color changing capabilities). This component can take and mesh input and output iterations of the shrinking mesh, which can serve as a form finding and visualization tool for designers.
                                    </p>
                                </motion.div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/Cuttlefish/plugin.jpg"></img>
                                </motion.div>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <video autoPlay muted loop id="myVideo" src="/images/Cuttlefish/demo1.mov" type="video/mov">
                                        Your browser does not support this video.
                                    </video>
                                    <video autoPlay muted loop id="myVideo" src="/images/Cuttlefish/demo3.mov" type="video/mov">
                                        Your browser does not support this video.
                                    </video>
                                    <video autoPlay muted loop id="myVideo" src="/images/Cuttlefish/demo4.mov" type="video/mov">
                                        Your browser does not support this video.
                                    </video>
                                    <video autoPlay muted loop id="myVideo" src="/images/Cuttlefish/demo5.mov" type="video/mov">
                                        Your browser does not support this video.
                                    </video>
                                </motion.div>
                                <motion.div className="text-container normal-text" {...motionProps}>
                                    <p>
                                        As a demo in the final review showcase for this class, we 3D scanned a complex ceramic form, ran it through Cuttlefish, and projected the result superimposed on the original porcelain form.
                                    </p>
                                </motion.div>
                                <motion.div className="image-medium columns"
                                    {...motionProps}>
                                    <img src="/images/Cuttlefish/addpoints_7.gif" className="col"></img>
                                    <img src="/images/Cuttlefish/addpoints_8.gif" className="col"></img>
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