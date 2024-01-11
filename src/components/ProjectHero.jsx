import React, { useState, useRef, useEffect } from 'react';
import { useScroll } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { motion } from "framer-motion";


export const ProjectHeader = (props) => {
    const { title, date, location, course, role, description, windowWidth } = props;

    const myElementRef = useRef(null);
    const [positionTop, setPositionTop] = useState(0);
    const [positionLeft, setPositionLeft] = useState(0);



    useEffect(() => {
        const handleScroll = () => {
            const el = myElementRef.current;
            setPositionTop(el.scrollTop);
            setPositionLeft(el.scrollLeft);
        };


        const element = myElementRef.current;

        element.addEventListener("scroll", handleScroll);

        return () => {
            element.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={myElementRef}>
            <div className="text-left hero " />
            <div className=""  >
                <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080" preserveAspectRatio="none">

                    {/* <path id="frame" data-name="Path 4" d="M2095.25,5031.939h-5.924v-1080h1920v1080H2095.25s.032-21.4,0-15.056-.079,8.162,6.266,8,1896.14.911,1898.4.716,3.321-2.407,3.432-4.469c-.545-21.929.017-1051.212.118-1057.564-.758-4.276-2.51-4.162-6.642-4.284s-1890.221-.632-1895.778-.613-5.864,2.155-5.72,6.222S2095.25,5031.939,2095.25,5031.939Z" transform="translate(-2088.826 -3951.439)" fill="#fff ">
                <animate id="animation-to-round" begin="indefinite" attributeName="d" dur="500ms" to="M2238.97,5031.939H2089.326v-1080h1920v1080H2238.97s-1.992-213.059,0-195.339,16.027,110.038,106.792,112.041,1408.858,0,1408.858,0,103.26-12.236,105.475-108.7.044-671.37,0-694.5-32.442-105.875-105.475-107.286-1382.209.114-1408.858,0-106.743,31.531-106.792,107.286S2238.97,5031.939,2238.97,5031.939Z" transform="translate(-2089.326 -3951.939)" fill="#fff"/>
            </path> */}

                    {/* <path
            id="frame"
            data-name="Path 4"
            d={animatePath ? "M2238.97,5031.939H2089.326v-1080h1920v1080H2238.97s-1.992-213.059,0-195.339,16.027,110.038,106.792,112.041,1408.858,0,1408.858,0,103.26-12.236,105.475-108.7.044-671.37,0-694.5-32.442-105.875-105.475-107.286-1382.209.114-1408.858,0-106.743,31.531-106.792,107.286S2238.97,5031.939,2238.97,5031.939Z" : "M2095.25,5031.939h-5.924v-1080h1920v1080H2095.25s.032-21.4,0-15.056-.079,8.162,6.266,8,1896.14.911,1898.4.716,3.321-2.407,3.432-4.469c-.545-21.929,.017-1051.212,.118-1057.564-.758-4.276-2.51-4.162-6.642-4.284s-1890.221-.632-1895.778-.613-5.864,2.155-5.72,6.222S2095.25,5031.939,2095.25,5031.939Z"}
            transform="translate(-2088.826 -3951.439)"
            fill="#fff"
            /> */}

                    {/* <path 
            className="separator__path path-anim" 
            d="M2095.25,5031.939h-5.924v-1080h1920v1080H2095.25s.032-21.4,0-15.056-.079,8.162,6.266,8,1896.14.911,1898.4.716,3.321-2.407,3.432-4.469c-.545-21.929.017-1051.212.118-1057.564-.758-4.276-2.51-4.162-6.642-4.284s-1890.221-.632-1895.778-.613-5.864,2.155-5.72,6.222S2095.25,5031.939,2095.25,5031.939Z" 
            transform="translate(-2088.826 -3951.439)" fill="#fff" 
            data-path-to="M2238.97,5031.939H2089.326v-1080h1920v1080H2238.97s-1.992-213.059,0-195.339,16.027,110.038,106.792,112.041,1408.858,0,1408.858,0,103.26-12.236,105.475-108.7.044-671.37,0-694.5-32.442-105.875-105.475-107.286-1382.209.114-1408.858,0-106.743,31.531-106.792,107.286S2238.97,5031.939,2238.97,5031.939Z" 
            />
             */}
                </svg>
            </div>




            <div className={`absolute ${windowWidth < 765 ? "left-[10%] mr-6" : "left-[28%]"} top-56  `}>
                <motion.div className={` ${windowWidth < 765 ? "text-3xl" : "text-7xl mb-8"}  SF-Compact-Bold `}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0 }}>
                    {title}
                </motion.div>
                <motion.div className=" text-sm SF-Compact-Thin my-px mb-8 "
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0 }}>
                    <div>
                        {date}
                    </div>
                    <div>
                        {location}
                    </div>
                    <div>
                        {course}
                    </div>
                    <div>
                        {role}
                    </div>
                </motion.div>
                <motion.div className="text-base SF-Compact-Light max-w-2xl "
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0 }}>
                    {description}
                </motion.div>
                <br></br><br></br>
                <div className="svgHero max-w-2xl ">
                    <svg width="24" height="54" viewBox="0 0 24 54" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                        <rect x="1" y="1" width="22" height="34" rx="11" stroke="black" strokeWidth="2" />
                        <line x1="12.3" y1="10.3" x2="12.3" y2="17.7" stroke="black" strokeWidth="2.6" strokeLinecap="round" />
                        <path d="M8 42L12.6467 46.3333L17.1481 42" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        <path d="M8 48.2592L12.6467 52.5926L17.1481 48.2592" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>

            </div>



        </div>
    );
};