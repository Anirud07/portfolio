import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Sparkles } from "lucide-react";
import { Tilt } from "../ui/Tilt";

interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    link: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "RAG NEXUS",
        description: "Enterprise-grade document intelligence platform leveraging Retrieval Augmented Generation for real-time PDF querying. Built with Python, OpenAI.",
        tech: ["OpenAI", "Python", "React", "Qdrant", "Docker"],
        link: "https://rag-pdf-2-chi.vercel.app/",
    },
    {
        id: 2,
        title: "InterAi",
        description: "Built a full-stack AI-powered interview platform using React.js (Vite), Node.js, Express.js, and MongoDB Atlas with a responsive, mobile-first UI. Implemented LLM-driven adaptive interview workflows using LangChain and Google Gemini AI for dynamic question generation and real-time evaluation",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "GenAI", "Tailwind"],
        link: "https://inter-frontend-bayo.vercel.app/",
    },
    {
        id: 3,
        title: "Chatify",
        description: "A real-time messaging application built with React, Node.js, and Socket.io, featuring end-to-end encryption, push notifications, and a seamless, responsive user interface.",
        tech: ["React", "Node.js", "Socket.io", "Tailwind", "MongoDB"],
        link: "https://chatify-frontend-ruby.vercel.app/",
    }
];

export const Projects = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section id="projects" className="min-h-screen py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center md:text-left flex flex-col items-center md:items-start"
                >
                    <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium backdrop-blur-md mb-6">
                        <Sparkles className="w-4 h-4 text-gray-400" />
                        Selected Works
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Featured Projects
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Tilt key={project.id} className="relative group perspective-1000">
                            <motion.div
                                layoutId={`card-${project.id}`}
                                onClick={() => setSelectedId(project.id)}
                                className="h-full glass-card p-8 cursor-pointer hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:border-white/20"
                            >
                                <div className="flex flex-col h-full relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:scale-110 transition-all">
                                            <span className="text-xl font-light">{project.id}</span>
                                        </div>
                                    </div>

                                    <motion.h3 className="text-3xl font-bold mb-4 text-white group-hover:text-gray-200 transition-colors">
                                        {project.title}
                                    </motion.h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-light">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/10 group-hover:border-white/20 transition-colors">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                            />

                            <motion.div
                                layoutId={`card-${selectedId}`}
                                className="w-full max-w-3xl glass-card rounded-3xl p-8 md:p-12 relative z-10 shadow-2xl border border-white/20"
                            >
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/20 text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {projects.find(p => p.id === selectedId) && (
                                    <div className="relative mt-2">
                                        <motion.h3 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                                            {projects.find(p => p.id === selectedId)?.title}
                                        </motion.h3>

                                        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed font-light">
                                            {projects.find(p => p.id === selectedId)?.description}
                                        </p>

                                        <div className="mb-12">
                                            <div className="flex flex-wrap gap-3">
                                                {projects.find(p => p.id === selectedId)?.tech.map(t => (
                                                    <span key={t} className="text-sm font-medium px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 shadow-sm">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <a
                                                href={projects.find(p => p.id === selectedId)?.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full py-4 rounded-full bg-white text-black hover:bg-gray-200 font-semibold text-lg text-center transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                            >
                                                <ExternalLink className="w-5 h-5" /> View Live
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
