"use client";

import FadeIn from "@/components/motion/FadeIn";
import { resolveIcon } from "@/lib/static-assets/icon-map";
import { cn } from "@/lib/utils";
import type { SkillCategory, SkillCategoryLabel, Tabs } from "@/types/content";
import { motion } from "framer-motion";
import { useState } from "react";

type SkillsProps = {
  tabs: Tabs[];
  skills: SkillCategoryLabel[];
};

export default function Skills({ tabs, skills }: SkillsProps) {
  const [active, setActive] = useState<SkillCategory>("frontend");
  const filtered = skills.filter((s) => s.type === active);

  return (
    <section id="skills" className="min-h-[724px] bg-dark section-pad">
      <div className="mx-auto max-w-content px-5">
        <FadeIn className="mb-10 text-center">
          <h2 className="font-condensed text-6xl text-main sm:text-8xl md:text-[120px] lg:text-[150px]">
            SKILLS
          </h2>
        </FadeIn>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.type)}
              className={cn(
                "rounded-full px-6 py-2 font-condensed text-lg transition-all",
                active === tab.type
                  ? "bg-main text-dark shadow-lg"
                  : "border border-light/30 text-light hover:border-main hover:text-main",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.ul
          key={active}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {filtered.map((skill) => {
            const Icon = resolveIcon(skill.iconKey);
            return (
              <motion.li
                key={skill.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="list-none"
              >
                <div className="flex flex-col items-center justify-center gap-2 rounded-lg border-4 border-dark bg-main p-4 text-dark transition-shadow hover:shadow-xl md:min-h-[120px] md:min-w-[120px]">
                  <Icon className="text-4xl md:text-5xl lg:text-[70px]" />
                  <span className="text-center font-condensed text-xs sm:text-sm">
                    {skill.label}
                  </span>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
