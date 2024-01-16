import { ProjectHeader } from "../ProjectHero";
import { motion } from "framer-motion";
import { useMotion } from "../../assets/motion";

export const Nosakhari = (props) => {
    const { archiveProjectId, setProjectOpened, setArchiveProjectId, windowWidth } = props;
    const motionProps = useMotion();

    const handleClick = () => {
        setProjectOpened(false)
        setArchiveProjectId(null);
    };

    if (archiveProjectId === 2) {
        return (
            <>
                <div className="fixed w-screen z-0">
                    <ProjectHeader
                        title="Nosakhari"
                        date="2021-2022"
                        location="London, UK"
                        course="User Experience Internship"
                        role="Role: UX Designer and Researcher"
                        description="During my UX internship at Nosakhari LTD in London, I was tasked with improving the user experience of the Nosakhari brand website through expressive design. "
                        windowWidth={windowWidth}
                    />
                </div>

                <div className="absolute h-screen w-screen z-10" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <div className="mainContainer">
                                <motion.div className="image-full mt-20"
                                    {...motionProps}>
                                    <img src="/images/Nosakhari/stack.jpg"></img>
                                </motion.div>
                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Nosakhari LTD is a fashion forward design firm based in London, UK, that specializes in celebrating artisan voices and stories through handicraft, while also selling luxury handmade leather products.
                                    </motion.p><br></br>
                                    <motion.p
                                        {...motionProps}
                                    >One of the biggest challenges as a design firm is creating a seamless platform to capture and showcase the craft of artisans while also sustaining an income through selling products. User research and user experience design is needed to create an expressive website that both converts users to buy products and captures the essence of an artist while maintaining the larger brand identity. We want our customers to feel comfortable while browsing products and inspired to become artisans themselves and while celebrating the work of other creatives.
                                    </motion.p>
                                </div>
                                <div className="text-container large-text">
                                    <motion.p
                                        {...motionProps}
                                    >We want the Nosakhari website to feel fashion forward, modern, and neatly expressive of the brand and showcased artisans. At the same time, the seamless user experience will help customers easily understand and explore the brand identity while also browsing for purchasable products.</motion.p>
                                </div>
                                <a className="SF-Compact-Light text-sm cursor-pointer text-rose-600 hover:text-rose-300 transition-colors" target="_blank" href="https://nosakhari.com/">
                                    VISIT LIVE SITE
                                </a>
                                <motion.div className="image-medium"
                                    {...motionProps}>
                                    <img src="/images/Nosakhari/collage.jpg" />
                                </motion.div>


                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Working with Nosa (CEO and founder of Nosakhari) and Chloe (Product Manager) helped me understand that there are different ways of design practice outside the academic standard. Nosa commonly works intuitively and expressively instead of following academic design cycles and practices. By working with this team, I’ve had the liberty to design in a real world context while also learning the different ways of working. At the same time, by working in a team I had to learn to speak up and share my ideas even in an intimidating situation as just an intern. I believe that everyone has valuable knowledge and ideas to contribute, but many times great ideas slip through the cracks since people are afraid to speak up or don’t get noticed. And so even as an intern, I made sure to still speak up and not be afraid to challenge my team to push us to better success. And because of this, many of my ideas were seriously considered and implemented into the final design, and we were able to successfully achieve our goals.
                                    </motion.p>
                                </div>
                                <motion.div className="image-small"
                                    {...motionProps}>
                                    <img src="/images/Nosakhari/sketch.jpg" />
                                </motion.div>
                                <motion.div className="text-container normal-text"  {...motionProps}>
                                    <p
                                    >These were the steps to my approach in this project:
                                    </p>
                                    <nl>
                                        <li>Existing Site Audit: Locating pain points of the existing site.</li>
                                        <li>User Research: Conducted user research based on the persona of a young adult who loves design, artistry, and fashion. Also evaluated and reviewed references for websites with qualities.</li>
                                        <li>Brainstorm/Ideation: Created wireframes and low-fidelity prototypes for possible solutions.</li>
                                        <li>User Testing: Conducted user testing with high-fidelity prototypes and iterated solutions.</li>
                                    </nl>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <video autoPlay muted loop id="myVideo" src="/images/Nosakhari/shop.mp4" type="video/mp4">
                                        Your browser does not support this video.
                                    </video>
                                </motion.div>
                                <motion.div className="text-container normal-text"  {...motionProps}>
                                    <p
                                    >The Changes I Made:
                                    </p>
                                    <nl>
                                        <li>Redesign and restructure of the homepage to include customizable panels that showcase the key aspects of the brand Created a brands tab to connect sub brands all businesses together</li>
                                        <li>Created a brands tab to connect sub brands all businesses together</li>
                                        <li>Design and creation of a subdomain for the shopping experience to combine the familiarity of online shopping with the client’s aesthetic specifications</li>
                                        <li>Design and creation of a ‘Hero’ page to showcase buyable products with collaborations from other brands</li>
                                        <li>Responsive web and mobile versions for all designs</li>
                                    </nl>
                                </motion.div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/Nosakhari/responsive.jpg" />
                                </motion.div>
                                <motion.div className="columns" {...motionProps} >
                                    <img src="/images/Nosakhari/Shoppage.jpg" className="col w-24" />
                                    <img src="/images/Nosakhari/ProductPage.jpg" className="col w-24" />
                                    <img src="/images/Nosakhari/hero.jpg" className="col w-24" />
                                </motion.div>

                                <div className="text-container normal-text">
                                    <motion.p
                                        {...motionProps}
                                    >Working with real clients taught me how to design with limits and for sustainability. Many times throughout the design process, I would design pages how I personally would like it to look or function, and would then have to learn how to adjust my designs for my client and for the target audience. At the same time, I learned the real world business side where some options would be too expensive, take too much time, or not align with the brand identity. Designs for a brand must also stand the test of time and thus be a sustainable option for the company. Other than the practical experience of working on projects outside of academia, the experience of working in a team boosted my confidence in speaking up despite intimidation, and showed me that anyone can be a leader. In fact, I believe the best leaders are those who don’t think they are the greatest in the room, but have the humility to respect and admire their teammates, listen to them with empathy, provide their own feedback, and ultimately guide the team towards a better solution.
                                    </motion.p>
                                </div>
                                <motion.div className="image-full"
                                    {...motionProps}>
                                    <img src="/images/Nosakhari/manypages.jpg" />
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