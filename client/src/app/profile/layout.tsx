"use client";

import { useEffect } from "react";

export default function ProfileLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    const header = document.querySelector("body > header");
    if (!header || !header.parentElement) {
      return;
    }

    const parent = header.parentElement;
    const nextSibling = header.nextSibling;

    parent.removeChild(header);

    return () => {
      if (nextSibling) {
        parent.insertBefore(header, nextSibling);
      } else {
        parent.appendChild(header);
      }
    };
  }, []);

  return <>{children}</>;
}
