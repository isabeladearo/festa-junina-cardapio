"use client";

import { useCallback, useEffect } from "react";
import type { Category } from "@/types/menu";
import { CategoryNav } from "./CategoryNav";
import { CategorySection } from "./CategorySection";

interface MenuCatalogProps {
  categories: Category[];
}

function getSectionId(categoryId: string) {
  return `category-section-${categoryId}`;
}

function getNavOffset() {
  const stickyNav = document.querySelector(".category-nav-sticky");
  const navHeight =
    stickyNav instanceof HTMLElement ? stickyNav.offsetHeight : 0;
  return navHeight + 16;
}

function syncCategoryNavScrollMargin() {
  const offset = getNavOffset();
  document.documentElement.style.setProperty(
    "--category-nav-offset",
    `${offset}px`,
  );
}

export function MenuCatalog({ categories }: MenuCatalogProps) {
  const scrollToCategory = useCallback((categoryId: string) => {
    const section = document.getElementById(getSectionId(categoryId));
    if (!section) return;

    syncCategoryNavScrollMargin();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const targetTop = Math.max(
      0,
      section.getBoundingClientRect().top + window.scrollY - getNavOffset(),
    );

    window.scrollTo({
      top: targetTop,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, []);

  useEffect(() => {
    syncCategoryNavScrollMargin();

    const onResize = () => syncCategoryNavScrollMargin();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="flex w-full flex-col gap-5 sm:gap-6">
      <div className="category-nav-sticky">
        <CategoryNav categories={categories} onSelect={scrollToCategory} />
      </div>

      {categories.map((category) => (
        <div
          key={category.id}
          id={getSectionId(category.id)}
          className="category-section-anchor"
        >
          <CategorySection category={category} />
        </div>
      ))}
    </div>
  );
}
