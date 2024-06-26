import React from 'react';
import { motion } from 'framer-motion';

const BackgroundCircles = () => {
    return (
        <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.15, 0.2, 0.25, 0.3, 0.3],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
            transition={{ duration: 2.5 }}
        >
            <div className="absolute z-1 border border-[#FFFFFF] rounded-full h-[200px] w-[200px] mt-[4rem] animate-ping" />
            <div className="absolute z-1 border border-[#FFFFFF] rounded-full h-[300px] w-[300px] mt-[4rem] animate-ping" />
            <div className="absolute z-1 border border-[#FFFFFF] rounded-full h-[500px] w-[500px] mt-[4rem] animate-ping" />
            <div className="absolute z-1 border border-[#FFFFFF] rounded-full opacity-20 h-[650px] w-[650px] mt-[4rem] animate-ping" />
            {/* for the above classname, the origin border color was border-[#f7ab0a] */}
            <div className="absolute z-1 border border-[#FFFFFF] rounded-full h-[800px] w-[800px] mt-[4rem] animate-ping" />
            <div className="absolute z-1 border border-[#FFFFFF] rounded-full h-[200px] w-[200px] mt-[4rem]" />
            <div className="absolute z-1 border border-[#FFFFFF] rounded-full h-[300px] w-[300px] mt-[4rem]" />
            <div className="absolute z-1 border border-[#FFFFFF] rounded-full h-[500px] w-[500px] mt-[4rem]" />
            <div className="absolute z-1 border border-[#FFFFFF] rounded-full opacity-20 h-[650px] w-[650px] mt-[4rem]" />
            {/* for the above classname, the origin border color was border-[#f7ab0a] */}
            <div className="absolute z-1 border border-[#FFFFFF] rounded-full h-[800px] w-[800px] mt-[4rem]" />
        </motion.div>
    );
};

export default BackgroundCircles;