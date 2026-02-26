import { CTASection } from "./CTASection";

export default function Pricing() {
    return (
        <section id="plans" className="relative w-full py-16 md:py-32 bg-[#080808] border-t border-white/5">
            <div className="w-full max-w-3xl lg:max-w-5xl mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col items-start mb-16">
                    <span className="font-mono text-[#AAAAAA] text-[12px] tracking-[0.12em] uppercase mb-6 block">
                        // 04 — PLANS
                    </span>
                    <h2 className="font-display text-white text-[clamp(48px,6vw,96px)] leading-[0.9] uppercase tracking-normal">
                        Simple pricing.
                    </h2>
                    <p className="font-editorial text-[#AAAAAA] text-[clamp(16px,1.8vw,22px)] max-w-xl mt-5">
                        Choose the perfect plan for your project. No hidden fees.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

                    {/* Starter */}
                    <div className="relative bg-[#111111] border border-white/5 rounded-[1.5rem] p-[clamp(24px,3vw,48px)] flex flex-col group hover:-translate-y-2 transition-transform duration-500 ease-out">
                        <h3 className="font-editorial text-[#AAAAAA] text-[18px]">Starter</h3>
                        <div className="mt-4 mb-8">
                            <span className="font-display text-white text-[64px] leading-none">$0</span>
                            <span className="font-editorial text-[#AAAAAA] text-[14px]">/mo</span>
                        </div>
                        <ul className="flex flex-col gap-4 flex-1 mb-12">
                            <li className="font-editorial text-[#AAAAAA] text-[14px] flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> 1 Project
                            </li>
                            <li className="font-editorial text-[#AAAAAA] text-[14px] flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Standard AI Generation
                            </li>
                            <li className="font-editorial text-[#AAAAAA] text-[14px] flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Community Support
                            </li>
                        </ul>
                        <button className="relative overflow-hidden group/btn rounded-full bg-transparent border border-white/20 text-white px-6 py-4 font-mono font-bold text-[12px] tracking-[0.1em] transition-transform hover:scale-[1.03] duration-250 w-full text-center">
                            <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">GET STARTED</span>
                            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                        </button>
                    </div>

                    {/* Pro (Center Popped) */}
                    <div className="relative bg-white rounded-[1.5rem] p-[clamp(24px,3vw,48px)] flex flex-col scale-100 md:scale-105 shadow-[0_20px_60px_rgba(255,255,255,0.05)] z-10 group hover:-translate-y-2 md:hover:-translate-y-4 transition-transform duration-500 ease-out">
                        <div className="absolute top-8 right-8 bg-[#080808] text-white px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase">
                            Most Popular
                        </div>
                        <h3 className="font-editorial text-black font-bold text-[18px]">Pro</h3>
                        <div className="mt-4 mb-8">
                            <span className="font-display text-black text-[64px] leading-none">$49</span>
                            <span className="font-editorial text-[#666666] text-[14px]">/mo</span>
                        </div>
                        <ul className="flex flex-col gap-4 flex-1 mb-12">
                            <li className="font-editorial text-[#111111] text-[14px] flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-black"></span> 10 Projects
                            </li>
                            <li className="font-editorial text-[#111111] text-[14px] flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-black"></span> Deep Neural Audit
                            </li>
                            <li className="font-editorial text-[#111111] text-[14px] flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-black"></span> Custom Domains
                            </li>
                            <li className="font-editorial text-[#111111] text-[14px] flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-black"></span> Priority Support
                            </li>
                        </ul>
                        <button className="relative overflow-hidden group/btn rounded-full bg-black border border-black text-white px-6 py-4 font-mono font-bold text-[12px] tracking-[0.1em] transition-transform hover:scale-[1.03] duration-250 w-full text-center shadow-lg">
                            <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">UPGRADE TO PRO</span>
                            <div className="absolute inset-0 bg-[#F0F0EB] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                        </button>
                    </div>

                    {/* Agency */}
                    <div className="relative bg-[#111111] border border-white/5 rounded-[1.5rem] p-[clamp(24px,3vw,48px)] flex flex-col group hover:-translate-y-2 transition-transform duration-500 ease-out">
                        <h3 className="font-editorial text-[#AAAAAA] text-[18px]">Agency</h3>
                        <div className="mt-4 mb-8">
                            <span className="font-display text-white text-[64px] leading-none">$149</span>
                            <span className="font-editorial text-[#AAAAAA] text-[14px]">/mo</span>
                        </div>
                        <ul className="flex flex-col gap-4 flex-1 mb-12">
                            <li className="font-editorial text-[#AAAAAA] text-[14px] flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Unlimited Projects
                            </li>
                            <li className="font-editorial text-[#AAAAAA] text-[14px] flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> White Labeling
                            </li>
                            <li className="font-editorial text-[#AAAAAA] text-[14px] flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Dedicated Architect
                            </li>
                        </ul>
                        <button className="relative overflow-hidden group/btn rounded-full bg-transparent border border-white/20 text-white px-6 py-4 font-mono font-bold text-[12px] tracking-[0.1em] transition-transform hover:scale-[1.03] duration-250 w-full text-center">
                            <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">CONTACT SALES</span>
                            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                        </button>
                    </div>

                </div>

                {/* CTA Section integration */}
                <div className="mt-16 md:mt-24">
                    <CTASection
                        badge={{ text: "START BUILDING" }}
                        title="Ready to Scale?"
                        description="Start creating high-end, conversion-focused websites using AI precision. No compromise on quality — ever."
                        action={{ text: "GET STARTED NOW", href: "#" }}
                    />
                </div>
            </div>
        </section>
    );
}
