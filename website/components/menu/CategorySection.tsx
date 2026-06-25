import type { Category } from "@/types/menu";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";

interface CategorySectionProps {
  category: Category;
}

export function CategorySection({ category }: CategorySectionProps) {
  return (
    <section
      className="w-full"
      aria-labelledby={`category-${category.id}`}
    >
      <div className="category-plaque mb-3 sm:mb-3.5">
        <span className="text-lg sm:text-xl" aria-hidden>
          {category.icone}
        </span>
        <h2
          id={`category-${category.id}`}
          className="font-heading text-base uppercase tracking-wider sm:text-lg"
        >
          {category.nome}
        </h2>
      </div>

      <ProductGrid>
        {category.itens.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </ProductGrid>
    </section>
  );
}
