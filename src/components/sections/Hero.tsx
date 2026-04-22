import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";

const titles = ["Full Stack MERN Developer", "AI Engineer", "System Designer"];

export const Hero = () => {
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">

            {/* Premium Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="z-20 text-center px-4 max-w-5xl mx-auto relative pt-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {/* Modern Availability Badge */}
                    <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-12 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.1)] transition-all hover:bg-white/10 hover:border-white/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-gray-300 text-sm font-medium tracking-wide">Available for Work</span>
                    </div>

                    {/* Elegant Typography */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="mb-8"
                    >
                        <h1 className="text-6xl md:text-[7rem] font-extrabold tracking-tight text-white mb-2 md:mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Aniruddha
                        </h1>
                        <h1 className="text-6xl md:text-[7rem] font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] animate-pulse-slow">
                            Ghosh
                        </h1>
                    </motion.div>

                    {/* Dynamic Role Text */}
                    <div className="h-12 mb-14 flex justify-center items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={titleIndex}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4 }}
                                className="flex items-center gap-3 text-xl md:text-3xl text-gray-300 font-light tracking-wide"
                            >
                                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                                <span>{titles[titleIndex]}</span>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Premium Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto"
                    >
                        <a href="#projects"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 group shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]"
                        >
                            View Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a href="/resume.pdf" download="Aniruddha_Ghosh_Resume.pdf"
                                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all backdrop-blur-md flex items-center justify-center gap-2 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                            >
                                <Download className="w-4 h-4" /> Resume
                            </a>
                            <a href="#contact"
                                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all backdrop-blur-md flex items-center justify-center gap-2 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                            >
                                <Mail className="w-4 h-4" /> Contact
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
