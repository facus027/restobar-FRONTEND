import { useState } from "react";

export type MenuItem = {
    name: string;
    description?: string;
    price?: string;
    volume?: string;
    label?: string;
};

export type Subcategory = {
    name: string;         // p.ej. "Clásicos Campari"
    items: MenuItem[];
};

export type Category = {
    name: string;         // p.ej. "Cócteles"
    subcategories: Subcategory[];
};

export type MenuData = { categories: Category[] };

type Props = {
    data: MenuData;
    className?: string;
    allowMultiple?: boolean;     // si true, se pueden abrir varias categorías a la vez
    accent?: string;             // color de acento, ej. "#8A00FF"
};

const PlusIcon = ({ open }: { open: boolean }) => (
    <span
        aria-hidden="true"
        className={`inline-block h-5 w-5 translate-y-[1px] select-none transition-transform ${open ? "rotate-45" : ""
            }`}
    >
        +
    </span>
);

export default function CartaAccordion({
    data,
    className = "",
    allowMultiple = false,
    accent = "#8A00FF",
}: Props) {
    // estado del acordeón (qué categorías están abiertas)
    const [open, setOpen] = useState<Record<number, boolean>>({});

    // estado del filtro por subcategoría en cada categoría
    const [filters, setFilters] = useState<Record<number, string>>({}); // guarda el nombre de la subcat o "Todas"

    const toggle = (idx: number) => {
        setOpen((prev) => {
            if (allowMultiple) return { ...prev, [idx]: !prev[idx] };
            // solo una abierta: cerramos todas menos idx
            const next: Record<number, boolean> = {};
            next[idx] = !prev[idx];
            return next;
        });
    };

    return (
        <section className={`text-white ${className}`}>
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                {/* bordes superiores/inferiores y separadores entre categorías */}
                <div className="border-y border-white/30 divide-y divide-white/30">
                    {data.categories.map((cat, idx) => {
                        const isOpen = !!open[idx];

                        // subcategorías con items
                        const subcats = cat.subcategories?.filter((s) => s.items?.length) ?? [];
                        const allLabel = "Todas";
                        const currentFilter = filters[idx] ?? allLabel;

                        // ⚠️ sin hooks aquí; sólo lógica
                        const items =
                            currentFilter === allLabel
                                ? subcats.flatMap((s) => s.items.map((it) => ({ ...it, _sub: s.name })))
                                : (subcats.find((s) => s.name === currentFilter)?.items ?? []).map((it) => ({
                                    ...it,
                                    _sub: currentFilter,
                                }));

                        return (
                            <div key={idx} className="w-full">
                                {/* CABECERA */}
                                <button
                                    onClick={() => toggle(idx)}
                                    aria-expanded={isOpen}
                                    aria-controls={`panel-${idx}`}
                                    className="flex w-full items-center gap-3 bg-white/10 px-4 py-4 text-left uppercase tracking-wide backdrop-blur-sm transition hover:bg-white/15"
                                >
                                    <PlusIcon open={isOpen} />
                                    <span className="font-poppins text-lg font-semibold">{cat.name}</span>
                                </button>

                                {/* PANEL */}
                                {isOpen && (
                                    <div id={`panel-${idx}`} className="bg-white/5 px-4 py-5">
                                        {/* FILTRO SUBCATEGORÍAS */}
                                        {subcats.length > 0 && (
                                            <div className="sticky top-[calc(var(--header-h)+8px)] z-10 -mx-4 mb-4 bg-black/40 px-4 py-2 backdrop-blur">
                                                <div className="flex snap-x snap-mandatory items-center gap-2 overflow-x-auto no-scrollbar">
                                                    {[allLabel, ...subcats.map((s) => s.name)].map((label) => {
                                                        const active = label === currentFilter;
                                                        return (
                                                            <button
                                                                key={label}
                                                                onClick={() => setFilters((f) => ({ ...f, [idx]: label }))}
                                                                className={`shrink-0 snap-start rounded-full border px-3 py-1.5 text-sm transition ${active
                                                                    ? "bg-white text-black"
                                                                    : "bg-transparent hover:bg-white/10 border-white/25"
                                                                    }`}
                                                            >
                                                                {label}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        {/* LISTA DE ÍTEMS */}
                                        <div className="grid gap-4">
                                            {items.map((it, i) => (
                                                <div
                                                    key={`${it.name}-${i}`}
                                                    className="grid grid-cols-1 gap-2 border-b border-white/10 pb-3 md:grid-cols-[1fr_auto]"
                                                >
                                                    <div className="min-w-0">
                                                        <h3 className="break-words text-base font-semibold">{it.name}</h3>
                                                        {it.description && (
                                                            <p className="mt-1 break-words text-sm text-white/80">{it.description}</p>
                                                        )}
                                                        {(it.label || it.volume || (it as any)._sub) && (
                                                            <p className="mt-1 text-xs text-white/60">
                                                                {[
                                                                    it.label,
                                                                    it.volume,
                                                                    (it as any)._sub !== "General" ? (it as any)._sub : undefined,
                                                                ]
                                                                    .filter(Boolean)
                                                                    .join(" · ")}
                                                            </p>
                                                        )}
                                                    </div>
                                                    {it.price && (
                                                        <div
                                                            className="text-base font-bold md:text-right"
                                                            style={{ color: accent }}
                                                        >
                                                            {it.price}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                            {items.length === 0 && (
                                                <p className="text-sm text-white/70">Sin ítems en esta subcategoría.</p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

    );
}
