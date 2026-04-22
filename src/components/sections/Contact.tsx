import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Send, Loader2, CheckCircle, Sparkles } from "lucide-react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');

        if (!formRef.current) return;

        // Keys provided by the user
        const SERVICE_ID = "service_bf1nf4a";
        const TEMPLATE_ID = "template_f9k8rni";
        const PUBLIC_KEY = "se8_bdeP7kOmPYPsu";

        try {
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                PUBLIC_KEY
            );
            setStatus('success');
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus('error');
        } finally {
            setLoading(false);
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="min-h-screen py-24 px-6 relative flex items-center justify-center">

            <div className="max-w-6xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium backdrop-blur-md mb-6">
                        <Sparkles className="w-4 h-4 text-gray-400" />
                        Get in Touch
                    </span>

                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-400">Connect</span>
                    </h2>

                    <p className="text-gray-400 mb-10 text-lg leading-relaxed font-light max-w-md">
                        Have a groundbreaking idea or need high-level engineering? I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <SocialButton href="https://github.com/Anirud07" icon={<Github className="w-5 h-5" />} label="GitHub" />
                        <SocialButton href="https://www.linkedin.com/in/aniruddha-ghosh-34b1a4244/" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="relative glass-card p-8 md:p-10 transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] group/form"
                    >
                        {/* Status Overlay */}
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="absolute inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-20 rounded-3xl"
                            >
                                <div className="text-center p-6">
                                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                                        <CheckCircle className="w-10 h-10 text-emerald-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Message Sent</h3>
                                    <p className="text-gray-400 font-light">I will get back to you shortly.</p>
                                </div>
                            </motion.div>
                        )}

                        <div className="space-y-6">
                            <InputGroup
                                label="Your Name"
                                name="user_name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="John Doe"
                                focused={focusedField === 'name'}
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                            />

                            <InputGroup
                                label="Email Address"
                                name="user_email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="john@example.com"
                                focused={focusedField === 'email'}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                            />

                            <div className="space-y-2">
                                <label className={`text-sm font-medium transition-colors ${focusedField === 'message' ? 'text-white' : 'text-gray-400'}`}>
                                    Your Message
                                </label>
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        className={`w-full bg-white/5 border rounded-2xl px-5 py-4 text-white focus:outline-none focus:bg-white/10 transition-all resize-none shadow-inner ${focusedField === 'message' ? 'border-white/30' : 'border-white/10'}`}
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading || status === 'success'}
                                className="w-full relative group overflow-hidden bg-white text-black hover:bg-gray-100 font-semibold py-4 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
                            >
                                <div className="relative z-10 flex items-center justify-center gap-2">
                                    {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Send className="w-5 h-5" />}
                                    {loading ? 'Sending...' : 'Send Message'}
                                </div>
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

const SocialButton = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-full hover:border-white/30 hover:bg-white/10 hover:text-white text-gray-300 transition-all group hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
    >
        <span className="group-hover:scale-110 transition-transform">{icon}</span>
        <span className="font-medium text-sm">{label}</span>
    </a>
)

const InputGroup = ({ label, name, value, onChange, placeholder, type = "text", focused, onFocus, onBlur }: {
    label: string,
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
    type?: string,
    focused: boolean,
    onFocus: () => void,
    onBlur: () => void
}) => (
    <div className="space-y-2">
        <label className={`text-sm font-medium transition-colors ${focused ? 'text-white' : 'text-gray-400'}`}>
            {label}
        </label>
        <div className="relative">
            <input
                type={type}
                name={name}
                required
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                className={`w-full bg-white/5 border rounded-2xl px-5 py-4 text-white focus:outline-none focus:bg-white/10 transition-all shadow-inner ${focused ? 'border-white/30' : 'border-white/10'}`}
                placeholder={placeholder}
            />
        </div>
    </div>
);
