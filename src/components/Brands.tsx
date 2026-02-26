import { cn } from "@/lib/utils";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

const logos = [
    {
        src: "https://svgl.app/library/nvidia-wordmark-light.svg",
        alt: "Nvidia Logo",
    },
    {
        src: "https://svgl.app/library/supabase_wordmark_light.svg",
        alt: "Supabase Logo",
    },
    {
        src: "https://svgl.app/library/openai_wordmark_light.svg",
        alt: "OpenAI Logo",
    },
    {
        src: "https://svgl.app/library/turso-wordmark-light.svg",
        alt: "Turso Logo",
    },
    {
        src: "https://svgl.app/library/vercel_wordmark.svg",
        alt: "Vercel Logo",
    },
    {
        src: "https://svgl.app/library/github_wordmark_light.svg",
        alt: "GitHub Logo",
    },
    {
        src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
        alt: "Claude AI Logo",
    },
    {
        src: "https://svgl.app/library/clerk-wordmark-light.svg",
        alt: "Clerk Logo",
    },
];

export default function Brands() {
    return (
        <section className="relative w-full py-[clamp(60px,8vw,100px)] bg-[#080808] overflow-hidden flex items-center border-t border-b border-white/5">
            <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)] flex flex-col items-center">

                <h2 className="mb-10 text-center font-display text-white text-[clamp(32px,5vw,56px)] leading-none uppercase tracking-wide">
                    <span className="text-[#666666]">Trusted by experts.</span>
                    <br />
                    <span>Used by the leaders.</span>
                </h2>

                <div className="w-full max-w-4xl mx-auto">
                    <div className="mx-auto my-5 h-px max-w-sm bg-white/20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

                    <LogoCloud logos={logos} />

                    <div className="mt-5 h-px bg-white/20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
                </div>
            </div>
        </section>
    );
}
