import { motion } from "framer-motion";
import { Sparkles, Code2, Layout, Server, Cpu, Terminal } from "lucide-react";

const skills = [
    {
        category: "Programming Languages",
        icon: <Code2 className="w-6 h-6" />,
        items: ["C++", "JavaScript (ES6+)", "TypeScript", "Python", "Data Structures & Algorithms (DSA)"]
    },
    {
        category: "Frontend Development",
        icon: <Layout className="w-6 h-6" />,
        items: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "AI-integrated UI"]
    },
    {
        category: "Backend Development",
        icon: <Server className="w-6 h-6" />,
        items: ["Node.js, Express.js", "REST APIs & API Design", "FastAPI", "MongoDB (Mongoose)", "Prisma ORM", "JWT & Clerk", "Scalable Architecture", "Microservices"]
    },
    {
        category: "AI & Agent Systems",
        icon: <Cpu className="w-6 h-6" />,
        items: ["Generative AI", "LLM Applications", "Agentic AI (ReAct)", "Tool Calling", "RAG", "LangChain/LangGraph/LlamaIndex", "LangSmith & SmolAgents", "Vector DBs (Qdrant)", "Prompt Engineering", "Fine-tuning Basics"]
    },
    {
        category: "Tools & Platforms",
        icon: <Terminal className="w-6 h-6" />,
        items: ["Git & GitHub", "Docker & Compose", "Render/Vercel/Netlify", "Postman", "VS Code/Cursor", "CI/CD Workflows"]
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="min-h-screen py-24 px-6 relative flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 flex flex-col items-center"
                >
                    <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium backdrop-blur-md mb-6 tracking-widest uppercase">
                        <Sparkles className="w-4 h-4" />
                        Expertise
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-center text-white tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">ARSENAL</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mt-8 opacity-20"></div>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Card Content */}
                            <div className="h-full glass-card p-10 relative overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] bg-gradient-to-b from-white/[0.03] to-transparent">
                                
                                {/* Background Glow */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>

                                <div className="relative z-20">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                                            {skill.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
                                            {skill.category}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2.5">
                                        {skill.items.map((item, i) => (
                                            <span
                                                key={item}
                                                className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-white/[0.03] text-gray-400 border border-white/5 transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/20 cursor-default"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    );
};
