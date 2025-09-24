"use client";

import React, { useEffect, useRef, useState } from "react";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface SectionTabsProps {
  tabs: TabItem[];
  initialTab?: string;
}

export default function SectionTabs({ tabs, initialTab }: SectionTabsProps) {
  const defaultTab = initialTab ?? tabs[0]?.id ?? "";
  const [active, setActive] = useState<string>(defaultTab);

  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Update the maxHeight and opacity for smooth transitions
  useEffect(() => {
    tabs.forEach((tab) => {
      const el = panelRefs.current[tab.id];
      if (el) {
        el.style.maxHeight = active === tab.id
          ? `${el.scrollHeight}px`
          : "0px";
        el.style.opacity = active === tab.id ? "1" : "0";
      }
    });
  }, [active, tabs]);

  // Handle window resize to update panel heights
  useEffect(() => {
    const onResize = () => {
      tabs.forEach((tab) => {
        const el = panelRefs.current[tab.id];
        if (el && active === tab.id) {
          el.style.maxHeight = `${el.scrollHeight}px`;
        }
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active, tabs]);

  return (
    <div className="mt-6">
      <div role="tablist" className="grid grid-cols-5 gap-2 mb-4" aria-label="Sections">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
            className={`w-full px-3 py-1 rounded-md text-sm font-medium border-2 transition-colors
              ${active === tab.id
                ? "border-[hsl(var(--link))] bg-[hsl(var(--tab-active-bg))] text-[hsl(var(--foreground))]"
                : "border-[hsl(var(--border))] bg-transparent text-[hsl(var(--foreground))] hover:bg-[hsl(var(--hover-bg))] hover:border-[hsl(var(--border-hover))]"}
              focus:outline-none focus:ring-0
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            aria-hidden={active !== tab.id}
            ref={(el) => { panelRefs.current[tab.id] = el; }}
            style={{
              overflow: "hidden",
              transition: "max-height 320ms ease, opacity 220ms ease",
              maxHeight: active === tab.id ? undefined : "0px",
              opacity: active === tab.id ? 1 : 0,
            }}
          >
            <div className="pt-2">{tab.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
