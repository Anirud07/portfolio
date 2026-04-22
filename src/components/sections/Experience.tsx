import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import { Tilt } from "../ui/Tilt";

const experiences = [
    {
        company: "EY GDS",
        role: "MERN Stack Developer",
        period: "Feb 2025 - Mar 2025",
        location: "Virtual",
        description: "Completed an intensive internship building scalable web applications. Architected a full-stack dashboard using React and Node.js, optimized MongoDB queries for 40% faster data retrieval, and implemented secure JWT authentication.",
        tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"]
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="min-h-screen py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 flex flex-col items-center"
                >
                    <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium backdrop-blur-md mb-6">
                        <Sparkles className="w-4 h-4 text-gray-400" />
                        Background
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-center text-white tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Professional Journey
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent md:-translate-x-1/2 hidden md:block" />

                    <div className="space-y-12 md:space-y-24">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Spacer for Timeline Alignment */}
                                <div className="w-full md:w-[calc(50%-40px)]" />

                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center z-10 md:-translate-x-1/2 shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-md">
                                    <div className="w-3 h-3 bg-white rounded-full animate-ping opacity-50 absolute" />
                                    <div className="w-3 h-3 bg-white rounded-full relative z-10" />
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-[calc(50%-40px)] pl-12 md:pl-0">
                                    <Tilt className="relative group">
                                        <div className="glass-card p-10 hover:border-white/20 transition-all relative">

                                            <div className="relative z-10">
                                                <div className="flex flex-wrap items-center mb-6 gap-3">
                                                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium flex items-center gap-2">
                                                        <Calendar className="w-4 h-4 text-white" />
                                                        {exp.period}
                                                    </span>
                                                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium flex items-center gap-2">
                                                        <MapPin className="w-4 h-4 text-gray-300" />
                                                        {exp.location}
                                                    </span>
                                                </div>

                                                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <h4 className="text-xl font-medium text-gray-400 mb-6">
                                                    {exp.company}
                                                </h4>

                                                <p className="text-gray-400 leading-relaxed mb-8 font-light">
                                                    {exp.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2">
                                                    {exp.tech.map(t => (
                                                        <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10 transition-colors group-hover:border-white/20">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Tilt>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
