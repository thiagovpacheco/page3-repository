import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`pointer-events-auto flex items-center justify-between px-6 py-4 w-full max-w-5xl rounded-full transition-all duration-400 ease-out ${isScrolled
                    ? "bg-[#0a0a0a]/75 backdrop-blur-md border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                    : "bg-transparent border-transparent"
                    }`}
            >
                <div className="font-display text-3xl text-white tracking-wider uppercase mt-1">Forge<span className="text-white/40">.</span></div>

                <div className="hidden md:flex gap-8 text-[16px] font-editorial text-[#AAAAAA] tracking-[0.02em]">
                    <a href="#capabilities" onClick={(e) => { e.preventDefault(); document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors relative group">
                        Capabilities
                        <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </a>
                    <a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors relative group">
                        How It Works
                        <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </a>
                    <a href="#testimonials" onClick={(e) => { e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors relative group">
                        Testimonials
                        <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </a>
                    <a href="#plans" onClick={(e) => { e.preventDefault(); document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors relative group">
                        Plans
                        <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </a>
                </div>

                <button className="relative overflow-hidden group rounded-full bg-white text-black px-7 py-3 font-mono font-bold text-[13px] tracking-[0.12em] transition-transform hover:scale-103 duration-250">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">START NOW</span>
                    <div className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                </button>
            </motion.nav>
        </div>
    );
}
