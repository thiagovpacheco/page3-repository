import React from 'react';
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
    {
        text: "Forge completely shifted our launch timeline. A high-end SaaS site that used to take weeks was ready in exactly three minutes.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Briana Patton",
        role: "Startup Founder",
    },
    {
        text: "The quality of the AI generation is unbelievable. It's not a template; it feels like we hired an elite agency.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Bilal Ahmed",
        role: "Creative Director",
    },
    {
        text: "I typed 'luxury e-commerce for watches', and Forge built a site that converts 3x better than our old custom build.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Saman Malik",
        role: "E-Commerce VP",
    },
    {
        text: "Zero drag-and-drop friction. Just natural language and instant results. It's magic.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Omar Raza",
        role: "Product Lead",
    },
    {
        text: "We ditched our bloated CMS. With Forge, going from idea to production-ready takes single click.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Zainab Hussain",
        role: "CTO",
    },
    {
        text: "The typography, the glassmorphism, the dark mode... it nails the premium aesthetic perfectly right out of the box.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Aliza Khan",
        role: "UI Designer",
    },
    {
        text: "Our marketing team can now spin up highly converting landing pages instantly. Forge is our secret weapon.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Farhan Siddiqui",
        role: "Marketing Director",
    },
    {
        text: "I was skeptical about AI-generated sites, but Forge outputs pixel-perfect React code. It's flawless.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Sana Sheikh",
        role: "Senior Engineer",
    },
    {
        text: "The 1-click global edge deployment saved us from hiring a DevOps engineer early on. Pure value.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Hassan Ali",
        role: "Operations Manager",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.ul
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6 list-none m-0 p-0"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <motion.li
                                    key={`${index}-${i}`}
                                    aria-hidden={index === 1 ? "true" : "false"}
                                    tabIndex={index === 1 ? -1 : 0}
                                    whileHover={{
                                        scale: 1.03,
                                        y: -8,
                                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                                        transition: { type: "spring", stiffness: 400, damping: 17 }
                                    }}
                                    className="p-10 rounded-3xl border border-black/5 shadow-lg shadow-black/5 max-w-xs w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none"
                                >
                                    <blockquote className="m-0 p-0">
                                        <p className="font-editorial text-[#555555] text-lg leading-relaxed m-0">
                                            {text}
                                        </p>
                                        <footer className="flex items-center gap-4 mt-8">
                                            <img
                                                src={image}
                                                alt={`Avatar of ${name}`}
                                                className="h-12 w-12 rounded-full object-cover ring-2 ring-transparent group-hover:ring-black/10 transition-all duration-300 ease-in-out"
                                            />
                                            <div className="flex flex-col">
                                                <cite className="font-display font-medium text-xl not-italic tracking-tight leading-5 text-[#080808]">
                                                    {name}
                                                </cite>
                                                <span className="font-mono text-[10px] tracking-wider text-[#888888] uppercase mt-1">
                                                    {role}
                                                </span>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </motion.li>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.ul>
        </div>
    );
};

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            aria-labelledby="testimonials-heading"
            className="bg-[#F0F0EB] py-16 md:py-32 relative overflow-hidden border-t border-black/5"
        >
            <motion.div
                initial={{ opacity: 0, y: 50, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                    opacity: { duration: 0.8 }
                }}
                className="mx-auto max-w-3xl lg:max-w-5xl px-6 relative z-10"
            >
                {/* Section Header */}
                <div className="flex flex-col items-start mb-16">
                    <span className="font-mono text-[#555555] text-[12px] tracking-[0.12em] uppercase mb-6">
                        // 03 — TESTIMONIALS
                    </span>
                    <h2 id="testimonials-heading" className="font-display text-[clamp(48px,7vw,96px)] text-[#080808] leading-[0.9] uppercase tracking-normal">
                        What builders say.
                    </h2>
                    <p className="font-editorial text-[#333333] text-[clamp(18px,2.5vw,28px)] max-w-2xl mt-4">
                        Discover how thousands of founders and agencies craft elite websites instantly.
                    </p>
                </div>

                <div
                    className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
                    role="region"
                    aria-label="Scrolling Testimonials"
                >
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </motion.div>
        </section>
    );
}
