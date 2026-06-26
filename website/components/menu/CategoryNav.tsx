"use client";

import type { Category } from "@/types/menu";

const NAV_LABELS: Record<string, string> = {
  salgados: "Salgados",
  lanches: "Lanches",
  bebidas: "Bebidas",
  doces: "Doces",
  bolos: "Bolos",
  atracoes: "Jogos",
};

function getSectionId(categoryId: string) {
  return `category-section-${categoryId}`;
}

interface CategoryNavProps {
  categories: Category[];
  onSelect: (categoryId: string) => void;
}

export function CategoryNav({ categories, onSelect }: CategoryNavProps) {
  return (
    <nav className="category-nav" aria-label="Categorias do cardápio">
      <p className="category-nav-hint">
        Toque na categoria ou role a tela.
      </p>
      <div
        className={`category-nav-track${categories.length >= 6 ? " category-nav-track--compact" : ""}`}
        style={{
          gridTemplateColumns: `repeat(${categories.length}, minmax(0, 1fr))`,
        }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            aria-controls={getSectionId(category.id)}
            onClick={() => onSelect(category.id)}
            className="category-nav-tab"
          >
            <span className="category-nav-icon" aria-hidden>
              {category.icone}
            </span>
            <span className="category-nav-label">
              {NAV_LABELS[category.id] ?? category.nome}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
