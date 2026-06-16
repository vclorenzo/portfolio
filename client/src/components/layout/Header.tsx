"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import type { HeaderProps } from "@/types/strapi";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { StrapiImage } from "../strapi/custom/StrapiImage";

const headerSections = ["intro", "about", "skills", "projects", "contact"];
const getSectionId = (href: string) => href.replace(/^[#/]+/, "");
const getNavHref = (href: string) => {
  if (href.startsWith("#")) return `/${href}`;
  if (href.startsWith("/")) return href;
  return `/${href}`;
};

export default function Header({
  id,
  logo,
  navigation,
  callToAction,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(headerSections);

  const close = () => setOpen(false);

  return (
    <header className="fixed w-full top-0 z-[100] flex h-100px items-center justify-between bg-header px-8 md:px-[70px]">
      <Link
        href="/#intro"
        className="flex shrink-0 text-primary"
        aria-label="Home"
      >
        {/* <Logo width={60} height={60} /> */}
        <StrapiImage
          src={logo.image?.url ?? ""}
          alt={logo.image?.alternativeText ?? ""}
          width={60}
          height={60}
          className="w-16 h-16"
        />
      </Link>

      <nav className="hidden sm:block" aria-label="Main">
        <ul className="flex gap-8">
          {navigation?.map((nav) => (
            <li key={nav.id} className="list-none">
              <Link
                href={getNavHref(nav.href)}
                className={cn(
                  "font-condensed text-lg transition-colors hover:text-main",
                  active === getSectionId(nav.href) && "text-main",
                )}
              >
                {nav.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="text-3xl text-main sm:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-dark/90 backdrop-blur-sm sm:hidden"
            onClick={close}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 flex h-full w-[min(320px,85vw)] flex-col gap-8 bg-header px-10 py-24"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Mobile"
            >
              <ul className="flex flex-col gap-6">
                {navigation?.map((nav) => (
                  <li key={nav.id} className="list-none">
                    <a
                      href={getNavHref(nav.href)}
                      onClick={close}
                      className="font-condensed text-2xl uppercase tracking-wide text-light hover:text-main"
                    >
                      {nav.text}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
