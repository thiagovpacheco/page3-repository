import { FeatureShowcase, type TabMedia } from "@/components/ui/feature-showcase";
import imgLanding from "@/assets/premium_landing_page.png";
import imgDashboard from "@/assets/premium_dashboard.png";
import imgEcommerce from "@/assets/premium_ecommerce.png";

const tabs: TabMedia[] = [
    {
        value: "landing",
        label: "Landing Page",
        src: imgLanding,
        alt: "Premium AI-generated Landing Page UI",
    },
    {
        value: "dashboard",
        label: "Dashboard",
        src: imgDashboard,
        alt: "Premium AI-generated Dashboard UI",
    },
    {
        value: "ecommerce",
        label: "E-commerce",
        src: imgEcommerce,
        alt: "Premium AI-generated E-commerce UI",
    },
];

export default function Process() {
    return (
        <div id="how-it-works">
            <FeatureShowcase
                eyebrow="// 02 — HOW IT WORKS"
                title="Describe it. We build it."
                description="No drag and drop. No confusing menus. Tell our neural engine exactly what you want in plain words — and receive a premium, production-ready site."
                stats={["Natural language input", "Elite-grade output", "1-click deploy"]}
                steps={[
                    {
                        id: "step-1",
                        title: "Describe Your Vision.",
                        text: "Type what you want in plain language. Our AI reads your intent and architects a fully-structured, high-end site — zero guesswork, zero templates.",
                    },
                    {
                        id: "step-2",
                        title: "Watch It Build.",
                        text: "Our neural engine handcrafts layouts, selects premium typography, generates sharp copy, and wires up the backend — all in real time.",
                    },
                    {
                        id: "step-3",
                        title: "Go Live. Instantly.",
                        text: "One click deploys your site to our global edge network — enterprise-secured, pixel-perfect, and production-ready from day one.",
                    },
                ]}
                tabs={tabs}
                defaultTab="landing"
                panelMinHeight={520}
            />
        </div>
    );
}
