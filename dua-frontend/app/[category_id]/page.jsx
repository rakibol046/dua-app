import Categories from "@/components/categories";
import DuaCard from "@/components/dua-card";
import SettingsPanel from "@/components/settings";
import getAllCategories from "@/lib/category/getAllCategories";
import getDuaByCategory from "@/lib/category/getDuaByCategory";

const sidePanel =
  "sticky top-3 h-[calc(100vh-1.5rem)] flex-none rounded-2xl bg-panel border border-line shadow-lg glass-card overflow-hidden";

export default async function CategoryPage({ params }) {
  const { category_id } = await params;
  const subcategories = await getDuaByCategory(category_id);

  return (
    <div className="flex items-start gap-6 pb-10">
      <aside className={`${sidePanel} hidden lg:block w-[340px] xl:w-[380px]`}>
        <Categories />
      </aside>

      <main className="flex-1 min-w-0 flex flex-col gap-4">
        {subcategories.map((subcat) => (
          <section
            key={subcat.subcat_id}
            id={subcat.subcat_id}
            className="scroll-mt-4 flex flex-col gap-4"
          >
            <h2 className="rounded-2xl bg-panel border border-line glass-card px-6 py-4 text-sm md:text-base font-semibold">
              <span className="text-brand-600 dark:text-brand-400">Section: </span>
              {subcat.subcat_name_en}
            </h2>
            {subcat.duas?.map((dua) => (
              <DuaCard key={dua.id} dua={dua} />
            ))}
          </section>
        ))}
      </main>

      <aside className={`${sidePanel} hidden 2xl:block w-[320px] overflow-y-auto`}>
        <SettingsPanel />
      </aside>
    </div>
  );
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((cat) => ({ category_id: String(cat.cat_id) }));
}
