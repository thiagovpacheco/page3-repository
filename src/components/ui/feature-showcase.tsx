import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type TabMedia = {
    value: string;
    label: string;
    src: string;
    alt?: string;
};

export type ShowcaseStep = {
    id: string;
    title: string;
    text: string;
};

export type FeatureShowcaseProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    stats?: string[];
    steps?: ShowcaseStep[];
    tabs: TabMedia[];
    defaultTab?: string;
    panelMinHeight?: number;
    className?: string;
};

export function FeatureShowcase({
    eyebrow = "Discover",
    title,
    description,
    stats = [],
    steps = [],
    tabs,
    defaultTab,
    panelMinHeight = 520,
    className,
}: FeatureShowcaseProps) {
    const initial = defaultTab ?? (tabs[0]?.value ?? "tab-0");

    return (
        <section className={cn("w-full bg-[#080808] border-t border-white/5", className)}>
            <div className="mx-auto grid max-w-3xl lg:max-w-5xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:py-24 lg:gap-14">

                {/* Left column */}
                <div className="md:col-span-5 flex flex-col justify-center">
                    <span className="font-mono text-[#AAAAAA] text-[12px] tracking-[0.12em] uppercase mb-6 block">
                        {eyebrow}
                    </span>

                    <h2 className="font-display text-[clamp(48px,6vw,96px)] text-white leading-[0.9] uppercase">
                        {title}
                    </h2>

                    {description && (
                        <p className="font-editorial mt-5 text-[#AAAAAA] text-[clamp(16px,1.8vw,22px)] leading-relaxed max-w-md">
                            {description}
                        </p>
                    )}

                    {stats.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                            {stats.map((s, i) => (
                                <Badge key={i} variant="secondary" className="text-xs px-3 py-1">
                                    {s}
                                </Badge>
                            ))}
                        </div>
                    )}

                    {steps.length > 0 && (
                        <div className="mt-8 max-w-md">
                            <Accordion type="single" collapsible defaultValue={steps[0]?.id}>
                                {steps.map((step) => (
                                    <AccordionItem key={step.id} value={step.id}>
                                        <AccordionTrigger className="text-base font-semibold">
                                            {step.title}
                                        </AccordionTrigger>
                                        <AccordionContent>{step.text}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>

                            <div className="mt-8">
                                <button className="relative overflow-hidden group rounded-full bg-white text-black px-10 py-4 font-mono font-bold text-[13px] tracking-[0.1em] transition-transform hover:scale-105 duration-250">
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">CREATE MY SITE</span>
                                    <div className="absolute inset-0 bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right column */}
                <div className="md:col-span-7">
                    <Card
                        className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-0 shadow-sm"
                        style={{ height: panelMinHeight, minHeight: panelMinHeight }}
                    >
                        <Tabs defaultValue={initial} className="relative h-full w-full">
                            <div className="relative h-full w-full">
                                {tabs.map((t, idx) => (
                                    <TabsContent
                                        key={t.value}
                                        value={t.value}
                                        className={cn(
                                            "absolute inset-0 m-0 h-full w-full",
                                            "data-[state=inactive]:hidden"
                                        )}
                                    >
                                        <img
                                            src={t.src}
                                            alt={t.alt ?? t.label}
                                            className="h-full w-full object-cover"
                                            loading={idx === 0 ? "eager" : "lazy"}
                                        />
                                    </TabsContent>
                                ))}
                            </div>

                            <div className="pointer-events-auto absolute inset-x-0 bottom-4 z-10 flex w-full justify-center">
                                <TabsList className="flex gap-1 rounded-xl border border-white/10 bg-black/70 p-1 backdrop-blur">
                                    {tabs.map((t) => (
                                        <TabsTrigger key={t.value} value={t.value} className="rounded-lg px-4 py-2 text-sm">
                                            {t.label}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </div>
                        </Tabs>
                    </Card>
                </div>
            </div>
        </section>
    );
}
