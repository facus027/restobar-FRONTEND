import { useMemo, useState } from "react";

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
            <div className="mx-auto max-w-5xl">
                {data.categories.map((cat, idx) => {
                    const isOpen = !!open[idx];

                    // subcategorías visibles (orden original)
                    const subcats = cat.subcategories?.filter((s) => s.items?.length) ?? [];
                    const allLabel = "Todas";
                    const currentFilter = filters[idx] ?? allLabel;

                    // items a mostrar con filtro aplicado
                    const items = useMemo(() => {
                        if (currentFilter === allLabel) {
                            return subcats.flatMap((s) => s.items.map((it) => ({ ...it, _sub: s.name })));
                        }
                        const sc = subcats.find((s) => s.name === currentFilter);
                        return (sc?.items ?? []).map((it) => ({ ...it, _sub: sc?.name }));
                    }, [subcats, currentFilter]);

                    return (
                        <div key={idx} className="w-full">
                            {/* CABECERA DE CATEGORÍA */}
                            <button
                                onClick={() => toggle(idx)}
                                aria-expanded={isOpen}
                                aria-controls={`panel-${idx}`}
                                className="flex w-full items-center gap-3 border-b border-white/30 bg-white/10 px-4 py-4 text-left uppercase tracking-wide backdrop-blur-sm transition hover:bg-white/15"
                                style={{ borderTop: idx === 0 ? "1px solid rgba(255,255,255,0.3)" : undefined }}
                            >
                                <PlusIcon open={isOpen} />
                                <span className="font-poppins text-lg font-semibold">{cat.name}</span>
                            </button>

                            {/* PANEL */}
                            {isOpen && (
                                <div
                                    id={`panel-${idx}`}
                                    className="border-b border-white/30 bg-white/5 px-4 py-5"
                                >
                                    {/* FILTRO DE SUBCATEGORÍAS */}
                                    {subcats.length > 0 && (
                                        <div className="sticky top-0 z-10 -mx-4 mb-5 bg-black/40 px-4 py-1 backdrop-blur">
                                            <div className="flex flex-wrap gap-2">
                                                {[allLabel, ...subcats.map((s) => s.name)].map((label) => {
                                                    const active = label === currentFilter;
                                                    return (
                                                        <button
                                                            key={label}
                                                            onClick={() =>
                                                                setFilters((f) => ({ ...f, [idx]: label }))
                                                            }
                                                            className={`rounded-full border px-3 py-1.5 text-sm transition ${active
                                                                ? "bg-white text-black"
                                                                : "bg-transparent hover:bg-white/10"
                                                                }`}
                                                            style={
                                                                active
                                                                    ? undefined
                                                                    : { borderColor: "rgba(255,255,255,.25)" }
                                                            }
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
                                                className="flex items-start justify-between gap-4 border-b border-white/10 pb-3"
                                            >
                                                <div className="min-w-0">
                                                    <h3 className="truncate text-base font-semibold">
                                                        {it.name}
                                                    </h3>
                                                    {it.description && (
                                                        <p className="mt-1 text-sm text-white/80">
                                                            {it.description}
                                                        </p>
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
                                                        className="shrink-0 whitespace-nowrap text-right text-base font-bold"
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
        </section>
    );
}
