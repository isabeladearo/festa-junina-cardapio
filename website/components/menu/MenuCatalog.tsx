import type { Category } from "@/types/menu";
import { CategorySection } from "./CategorySection";

interface MenuCatalogProps {
  categories: Category[];
}

export function MenuCatalog({ categories }: MenuCatalogProps) {
  return (
    <div className="flex w-full flex-col gap-5 sm:gap-6">
      {categories.map((category) => (
        <CategorySection key={category.id} category={category} />
      ))}
    </div>
  );
}
