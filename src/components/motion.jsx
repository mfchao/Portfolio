import { motion } from "framer-motion";

export const useMotion = () => {
    const motionProps = {
        initial: { opacity: 0, y: 25 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1, delay: 0.1 },
    };

    return motionProps;
};