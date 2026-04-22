import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Globe, Zap, Sparkles } from "lucide-react";
import profileImg from "../../assets/profile.jpeg";
import avatarImg from "../../assets/avatar.jpg";

export const About = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <section id="about" className="min-h-screen relative flex flex-col justify-center py-24">
            <div className="z-10 w-full max-w-7xl mx-auto px-6 relative flex flex-col justify-center flex-grow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Profile Picture Area */}
                    <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-72 h-72 md:w-[400px] md:h-[400px] cursor-pointer group"
                            onClick={() => setIsFlipped(!isFlipped)}
                        >
                            <motion.div
                                className="w-full h-full relative preserve-3d"
                                animate={{ rotateY: isFlipped ? 180 : 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            >
                                {/* Front Face */}
                                <div className="absolute inset-0 backface-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-400 to-white rounded-3xl rotate-3 opacity-20 blur-2xl group-hover:rotate-6 group-hover:opacity-40 transition-all duration-500"></div>
                                    <div className="absolute inset-0 glass-card overflow-hidden">
                                        <img
                                            src={profileImg}
                                            alt="Profile"
                                            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    </div>
                                </div>

                                {/* Back Face */}
                                <div
                                    className="absolute inset-0 backface-hidden glass-card overflow-hidden"
                                    style={{ transform: "rotateY(180deg)" }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-100 rounded-3xl -rotate-3 opacity-20 blur-2xl group-hover:-rotate-6 group-hover:opacity-40 transition-all duration-500"></div>
                                    <div className="absolute inset-0 glass-card overflow-hidden">
                                        <img
                                            src={avatarImg}
                                            alt="Avatar"
                                            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="lg:col-span-1 order-1 lg:order-2 text-center lg:text-left relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex justify-center lg:justify-start mb-8"
                        >
                            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(255,255,255,0.1)]">
                                <Sparkles className="w-4 h-4 text-gray-400" />
                                About Me
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                Crafting Digital
                            </h2>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                                Experiences
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            I am a Full Stack Developer & AI Engineer dedicated to building highly polished, scalable applications. I blend robust engineering with elegant design to create solutions that define the future.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0"
                        >
                            {[
                                { icon: <Code className="w-5 h-5 text-gray-100" />, label: "Clean Code" },
                                { icon: <Cpu className="w-5 h-5 text-gray-300" />, label: "AI Integrated" },
                                { icon: <Globe className="w-5 h-5 text-gray-400" />, label: "Scalable" },
                                { icon: <Zap className="w-5 h-5 text-white" />, label: "Performant" }
                            ].map((item, idx) => (
                                <div key={idx} className="glass-card p-4 hover:bg-white/10 transition-all duration-300 group flex items-center gap-3">
                                    <div className="bg-white/5 p-2 rounded-lg group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div className="font-medium text-gray-200 text-sm tracking-wide">{item.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
