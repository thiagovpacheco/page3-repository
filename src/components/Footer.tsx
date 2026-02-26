export default function Footer() {
    return (
        <footer className="w-full bg-[#0A0A0A] rounded-t-[3rem] border-t border-white/5 pt-20 pb-8 px-[clamp(24px,5vw,80px)] mt-4">
            <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-20">

                {/* Top Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="font-display text-white text-[48px] leading-none uppercase">
                        Forge<span className="text-white/40">.</span>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="font-editorial text-[#AAAAAA] text-[13px] hover:text-white transition-colors">Twitter // X</a>
                        <a href="#" className="font-editorial text-[#AAAAAA] text-[13px] hover:text-white transition-colors">GitHub</a>
                        <a href="#" className="font-editorial text-[#AAAAAA] text-[13px] hover:text-white transition-colors">Discord</a>
                    </div>
                </div>

                {/* Middle Row (Links) */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                    {/* Col 1 */}
                    <div className="flex flex-col gap-4">
                        <span className="font-mono text-white text-[11px] uppercase tracking-widest mb-2">Product</span>
                        <a href="#" className="font-editorial text-[#AAAAAA] hover:text-white transition-colors text-[14px]">Features</a>
                        <a href="#" className="font-editorial text-[#AAAAAA] hover:text-white transition-colors text-[14px]">How It Works</a>
                        <a href="#" className="font-editorial text-[#AAAAAA] hover:text-white transition-colors text-[14px]">Pricing</a>
                    </div>
                    {/* Col 2 */}
                    <div className="flex flex-col gap-4">
                        <span className="font-mono text-white text-[11px] uppercase tracking-widest mb-2">Company</span>
                        <a href="#" className="font-editorial text-[#AAAAAA] hover:text-white transition-colors text-[14px]">About</a>
                        <a href="#" className="font-editorial text-[#AAAAAA] hover:text-white transition-colors text-[14px]">Contact</a>
                    </div>
                    {/* Col 3 */}
                    <div className="flex flex-col gap-4">
                        <span className="font-mono text-white text-[11px] uppercase tracking-widest mb-2">Legal</span>
                        <a href="#" className="font-editorial text-[#AAAAAA] hover:text-white transition-colors text-[14px]">Privacy Policy</a>
                        <a href="#" className="font-editorial text-[#AAAAAA] hover:text-white transition-colors text-[14px]">Terms of Service</a>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
                    <div className="font-editorial text-[#666666] text-[13px]">
                        &copy; {new Date().getFullYear()} Forge Inc.
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                        <span className="font-mono text-[#AAAAAA] text-[12px] tracking-[0.05em] uppercase">System Operational</span>
                    </div>

                    <div className="font-editorial text-[#666666] text-[13px] flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Status</a>
                        <a href="#" className="hover:text-white transition-colors">Security</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
