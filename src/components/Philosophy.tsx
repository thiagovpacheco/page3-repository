import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const title1Ref = useRef<HTMLHeadingElement>(null);
    const title2Ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Manual "split text" implementation since SplitText is a premium plugin
            const title1Words = title1Ref.current?.innerText.match(/(\S+|\s)/g) || [];
            if (title1Ref.current) {
                title1Ref.current.innerHTML = "";
                title1Words.forEach(word => {
                    const span = document.createElement("span");
                    span.className = "inline-block transform translate-y-full opacity-0";
                    if (word.trim() === "") {
                        span.innerHTML = "&nbsp;";
                    } else {
                        span.innerText = word;
                    }
                    title1Ref.current?.appendChild(span);
                });
            }

            const title2Words = title2Ref.current?.innerText.match(/(\S+|\s)/g) || [];
            if (title2Ref.current) {
                title2Ref.current.innerHTML = "";
                title2Words.forEach(word => {
                    const span = document.createElement("span");
                    span.className = "inline-block transform translate-y-full opacity-0";
                    if (word.trim() === "") {
                        span.innerHTML = "&nbsp;";
                    } else {
                        span.innerText = word;
                    }
                    title2Ref.current?.appendChild(span);
                });
            }

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    toggleActions: "play none none none"
                }
            });

            tl.to(title1Ref.current?.children || [], {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.04,
                ease: "power4.out"
            })
                .to(title2Ref.current?.children || [], {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.04,
                    ease: "power4.out"
                }, "-=0.8");

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-[clamp(120px,15vw,200px)] bg-[#0d0d0d] overflow-hidden flex items-center border-t border-white/5">
            {/* Background Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                <span className="font-display text-[clamp(150px,25vw,400px)] text-white opacity-[0.03] select-none uppercase leading-none whitespace-nowrap">
                    ROBOSITE
                </span>
            </div>

            <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)] flex flex-col md:flex-row gap-16 md:gap-24 items-end">
                {/* Left Column */}
                <div className="flex-1">
                    <h2
                        ref={title1Ref}
                        className="font-display text-white text-[clamp(56px,8vw,120px)] leading-[0.9] uppercase overflow-hidden"
                    >
                        Old way: Weeks of dev. Thousands of dollars. Zero guarantee.
                    </h2>
                </div>

                {/* Right Column */}
                <div className="flex-1 md:pb-4">
                    <p
                        ref={title2Ref}
                        className="font-editorial italic text-[#AAAAAA] text-[clamp(24px,3vw,36px)] leading-[1.4] overflow-hidden max-w-[480px]"
                    >
                        Our way: Describe your vision. Get a pixel-perfect site. In minutes.
                    </p>
                </div>
            </div>
        </section>
    );
}
