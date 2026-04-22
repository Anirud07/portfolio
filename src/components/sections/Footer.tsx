import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-400 bg-transparent border-t border-white/5 relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="font-light tracking-wide">&copy; {new Date().getFullYear()} Aniruddha Ghosh. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="https://github.com/Anirud07" className="hover:text-white hover:scale-110 transition-all"><Github className="w-5 h-5" /></a>
                    <a href="https://www.linkedin.com/in/aniruddha-ghosh-34b1a4244/" className="hover:text-white hover:scale-110 transition-all"><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="hover:text-white hover:scale-110 transition-all"><Twitter className="w-5 h-5" /></a>
                </div>
            </div>
        </footer>
    );
};
