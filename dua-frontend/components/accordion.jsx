"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CategoryTile, SearchIcon } from "./icons";

function AccordionItem({ item, isOpen }) {
  return (
    <div>
      <Link
        href={`/${item.cat_id}`}
        aria-expanded={isOpen}
        className={`flex items-center gap-3 p-2.5 rounded-xl border transition-colors ${
          isOpen
            ? "bg-brand-500/10 border-brand-500/30"
            : "border-transparent hover:bg-hover"
        }`}
      >
        <CategoryTile catId={item.cat_id} size="sm" />
        <div className="flex-1 min-w-0">
          <p
            className={`text-sm font-semibold truncate ${
              isOpen ? "text-brand-600 dark:text-brand-400" : ""
            }`}
          >
            {item.cat_name_en}
          </p>
          <p className="text-xs text-muted">Subcategory: {item.no_of_subcat}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-sm font-bold">{item.no_of_dua}</p>
          <p className="text-[11px] text-muted">Duas</p>
        </div>
      </Link>

      {/* grid-rows 0fr→1fr animates to the content's natural height */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          {item.subcategories?.length > 0 ? (
            <ul className="relative ml-7 my-2 pl-5 flex flex-col gap-0.5 border-l border-dashed border-brand-500/50">
              {item.subcategories.map((sub) => (
                <li key={sub.subcat_id} className="relative">
                  <span className="absolute -left-[23.5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-500 ring-4 ring-panel-strong" />
                  <Link
                    href={`/${item.cat_id}#${sub.subcat_id}`}
                    className="block py-1.5 text-sm text-muted hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    {sub.subcat_name_en}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="ml-12 my-2 italic text-sm text-muted">No subcategories</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CategoryAccordion({ categories }) {
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState("");
  const activeId = Number(pathname.split("/")[1]);

  const filtered = categories.filter((item) =>
    item.cat_name_en.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-0 flex-1">
      <div className="relative mx-4 mb-3">
        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
          <SearchIcon className="w-4 h-4" />
        </span>
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search categories"
          aria-label="Search categories"
          className="w-full pl-10 pr-4 py-2.5 text-sm bg-field border border-line rounded-xl placeholder:text-muted focus:outline-none focus:border-brand-500/80 focus:ring-2 focus:ring-brand-500/20 transition-all"
        />
      </div>

      <div className="flex-1 overflow-y-auto px-3 pb-4 flex flex-col gap-1">
        {filtered.map((item) => (
          <AccordionItem key={item.cat_id} item={item} isOpen={activeId === item.cat_id} />
        ))}
        {filtered.length === 0 && (
          <p className="px-2 py-6 text-center text-sm text-muted">No categories found</p>
        )}
      </div>
    </div>
  );
}
