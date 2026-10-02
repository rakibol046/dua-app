import CategoryAccordion from "./accordion";

export default async function Categories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}api/categories-with-subcategories`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const categories = await res.json();

  return (
    <div className="flex flex-col h-full">
      <h3 className="px-5 pt-5 pb-3 text-sm font-semibold uppercase tracking-wider text-muted">
        Categories
      </h3>
      <CategoryAccordion categories={categories} />
    </div>
  );
}
