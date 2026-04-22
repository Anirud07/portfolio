import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="text-white font-sans selection:bg-white/30 w-full overflow-x-hidden">
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
                    <a href="#" className="flex items-center gap-2 group">
                        <span className="text-2xl font-bold tracking-tight text-white group-hover:text-gray-300 transition-colors">
                            Aniruddha
                        </span>
                        <span className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>
                    </a>

                    {/* Desktop Menu - Centered */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-full shadow-lg">
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#skills">Skills</NavLink>
                        <NavLink href="#projects">Work</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </div>

                    {/* Social Icons - Right Side */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all hover:-translate-y-1"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all hover:-translate-y-1"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-black/95 backdrop-blur-2xl absolute top-full left-0 w-full border-b border-white/10 py-6 px-6 flex flex-col gap-4">
                        <MobileNavLink onClick={() => setIsMobileMenuOpen(false)} href="#about">About</MobileNavLink>
                        <MobileNavLink onClick={() => setIsMobileMenuOpen(false)} href="#skills">Skills</MobileNavLink>
                        <MobileNavLink onClick={() => setIsMobileMenuOpen(false)} href="#projects">Work</MobileNavLink>
                        <MobileNavLink onClick={() => setIsMobileMenuOpen(false)} href="#contact">Contact</MobileNavLink>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main>
                {children}
            </main>
        </div>
    );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a
        href={href}
        className="relative px-6 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-colors group"
    >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
);

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode; onClick: () => void }> = ({ href, children, onClick }) => (
    <a
        href={href}
        onClick={onClick}
        className="block px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all text-center"
    >
        {children}
    </a>
);

export default Layout;
