import { cn } from "@/lib/utils";

interface CTAProps {
    badge?: {
        text: string;
    };
    title: string;
    description?: string;
    action: {
        text: string;
        href: string;
    };
    withGlow?: boolean;
    className?: string;
}

export function CTASection({
    badge,
    title,
    description,
    action,
    withGlow = true,
    className,
}: CTAProps) {
    return (
        <section className={cn("overflow-hidden relative border border-white/5 rounded-[2rem] bg-[#111111]", className)}>
            <div className="relative mx-auto flex w-full flex-col md:flex-row items-start md:items-center justify-between gap-8 px-8 py-10 md:px-12 md:py-12 z-10 text-left">

                {/* Text Column */}
                <div className="flex flex-col items-start gap-4 md:max-w-2xl">
                    {/* Badge */}
                    {badge && (
                        <span className="font-mono text-[#AAAAAA] text-[12px] tracking-[0.12em] uppercase opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards] delay-100">
                            // {badge.text}
                        </span>
                    )}

                    {/* Title */}
                    <h2 className="font-display text-white text-[clamp(40px,5vw,72px)] leading-[0.9] uppercase tracking-normal opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards] delay-200">
                        {title}
                    </h2>

                    {/* Description */}
                    {description && (
                        <p className="font-editorial text-[#AAAAAA] text-[clamp(16px,1.5vw,20px)] mt-1 opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards] delay-300">
                            {description}
                        </p>
                    )}
                </div>

                {/* Action Column */}
                <div className="opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards] delay-500 w-full md:w-auto shrink-0 mt-2 md:mt-0">
                    <a href={action.href} className="inline-block w-full md:w-auto">
                        <button className="relative overflow-hidden group/btn rounded-full bg-white text-black px-10 py-5 w-full font-mono font-bold text-[13px] tracking-[0.1em] transition-transform hover:scale-[1.03] duration-250 text-center shadow-lg">
                            <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">{action.text}</span>
                            <div className="absolute inset-0 bg-[#080808] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                        </button>
                    </a>
                </div>
            </div>

            {/* Glow Effect */}
            {withGlow && (
                <div className="fade-top-lg pointer-events-none absolute inset-0 shadow-glow opacity-0 animate-[scale-in_1s_ease-out_forwards] delay-700 z-0" />
            )}
        </section>
    );
}
