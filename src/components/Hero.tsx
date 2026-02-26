import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import heroVideo from "../assets/hero-bg.mp4";

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const video1Ref = useRef<HTMLVideoElement>(null);
    const video2Ref = useRef<HTMLVideoElement>(null);
    const [activeVideo, setActiveVideo] = useState<1 | 2>(1);

    useEffect(() => {
        const v1 = video1Ref.current;
        const v2 = video2Ref.current;
        if (!v1 || !v2) return;

        let isTransitioning = false;
        const crossfadeDuration = 1.0; // 1 second crossfade

        const handleTimeUpdate = (e: Event) => {
            const video = e.target as HTMLVideoElement;

            // Avoid triggering prematurely if duration is not fully loaded
            if (video.duration && (video.duration - video.currentTime <= crossfadeDuration)) {
                if (video === v1 && !isTransitioning) {
                    isTransitioning = true;
                    // Prepare and play the second video
                    v2.currentTime = 0;
                    v2.play().catch(() => { });
                    setActiveVideo(2);
                    setTimeout(() => { isTransitioning = false; }, crossfadeDuration * 1000);
                } else if (video === v2 && !isTransitioning) {
                    isTransitioning = true;
                    // Prepare and play the first video
                    v1.currentTime = 0;
                    v1.play().catch(() => { });
                    setActiveVideo(1);
                    setTimeout(() => { isTransitioning = false; }, crossfadeDuration * 1000);
                }
            }

            // Also loop manually if it somehow hits the very end (fallback)
            if (video.currentTime >= video.duration - 0.1) {
                video.currentTime = 0;
                video.play().catch(() => { });
            }
        };

        v1.addEventListener('timeupdate', handleTimeUpdate);
        v2.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            v1.removeEventListener('timeupdate', handleTimeUpdate);
            v2.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-elem", {
                y: 40,
                opacity: 0,
                duration: 0.9,
                stagger: 0.12,
                ease: "power3.out",
                delay: 0.2
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative h-[100dvh] w-full p-3 md:p-5 bg-[#F0F0EB] overflow-hidden">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden flex items-center justify-center">
                {/* Background Video */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-black">
                    <video
                        ref={video1Ref}
                        autoPlay
                        muted
                        playsInline
                        src={heroVideo}
                        className={`absolute inset-0 w-full h-full object-cover scale-110 transition-opacity duration-1000 ease-in-out ${activeVideo === 1 ? 'opacity-90 z-10' : 'opacity-0 z-0'}`}
                    />
                    <video
                        ref={video2Ref}
                        muted
                        playsInline
                        src={heroVideo}
                        className={`absolute inset-0 w-full h-full object-cover scale-110 transition-opacity duration-1000 ease-in-out ${activeVideo === 2 ? 'opacity-90 z-10' : 'opacity-0 z-0'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/40 via-transparent to-[#080808] z-20 pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
                    <h1 className="flex flex-col items-center">
                        <span className="hero-elem font-editorial font-light text-[clamp(28px,4vw,52px)] text-white tracking-[0.05em] leading-none mb-4">
                            Premium Websites
                        </span>
                        <span className="hero-elem font-display text-[clamp(72px,14vw,200px)] text-white leading-[0.9] tracking-normal uppercase">
                            CRAFTED FAST
                        </span>
                    </h1>

                    <p className="hero-elem mt-6 max-w-[520px] font-editorial text-[18px] text-[#AAAAAA] leading-[1.6]">
                        We build high-end, conversion-focused websites using AI precision. No compromise on quality — ever.
                    </p>

                    <div className="hero-elem mt-12 flex justify-center">
                        <button className="group flex items-center gap-3 rounded-full border border-white/20 bg-transparent text-white px-10 py-5 font-mono font-bold text-[13px] tracking-[0.1em] hover:bg-white hover:text-black transition-all duration-300">
                            CREATE MY SITE
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>

                {/* Bottom Overlays */}
                <div className="hero-elem absolute bottom-[40px] left-[60px] hidden md:block z-10">
                    <p className="font-editorial font-light text-[14px] text-[#AAAAAA] leading-relaxed">
                        Tell the AI what you want.<br />
                        Watch it happen.
                    </p>
                </div>

                <div className="hero-elem absolute bottom-[40px] right-[32px] hidden md:block z-10 origin-bottom right-rotate">
                    <p className="font-mono text-[11px] font-bold text-[#AAAAAA] tracking-[0.12em] uppercase transform rotate-90 origin-right whitespace-nowrap">
                        SCROLL DOWN
                    </p>
                </div>
            </div>
        </section>
    );
}
