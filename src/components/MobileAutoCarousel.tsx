import { useEffect, useRef, useState } from "react";

export type EventoItem = { id: number | string; title: string; image: string };

export default function MobileAutoCarousel({
    items,
    phone = "5219991234567",
    messageTemplate = "Hola! Quiero reservar para {title} en XOXO. ¿Hay disponibilidad?",
    intervalMs = 3500,
    className = "",
}: {
    items: EventoItem[];
    phone?: string;
    messageTemplate?: string;
    intervalMs?: number;
    className?: string;
}) {
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const [slideW, setSlideW] = useState(0);   // ancho real del viewport del carrusel
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const mkWaLink = (title: string) =>
        `https://wa.me/${phone}?text=${encodeURIComponent(
            messageTemplate.replace("{title}", title)
        )}`;

    // medir ancho del viewport (1 slide = ancho del viewport)
    useEffect(() => {
        const el = viewportRef.current;
        if (!el) return;
        const update = () => setSlideW(el.clientWidth);
        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        const onResize = () => update();
        window.addEventListener("resize", onResize);
        window.addEventListener("orientationchange", onResize);
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", onResize);
            window.removeEventListener("orientationchange", onResize);
        };
    }, []);

    // autoplay (pausa si el usuario toca)
    useEffect(() => {
        if (paused || items.length <= 1) return;
        const id = setInterval(() => setIndex((i) => (i + 1) % items.length), intervalMs);
        return () => clearInterval(id);
    }, [paused, items.length, intervalMs]);

    return (
        <section className={`md:hidden w-full text-white overflow-hidden overflow-x-hidden ${className}`}>
            <div className="w-1/2 px-4">
                {/* Viewport: NO usa max-w-* para que el ancho sea exactamente el contenedor */}
                <div
                    ref={viewportRef}
                    className="relative w-full overflow-hidden"
                    onPointerDown={() => setPaused(true)}
                    onPointerUp={() => setPaused(false)}
                    onTouchStart={() => setPaused(true)}
                    onTouchEnd={() => setPaused(false)}
                >
                    {/* Track: se mueve por píxeles */}
                    <div
                        className="flex transition-transform duration-500 ease-out will-change-transform"
                        style={{
                            transform: slideW > 0 ? `translateX(-${index * slideW}px)` : undefined,
                        }}
                    >
                        {items.map((e) => (
                            <div
                                key={e.id}
                                className="shrink-0"
                                style={{ width: slideW || "100%" }}   // 1 slide = ancho viewport
                            >
                                <article className="relative overflow-hidden rounded-xl bg-neutral-900 shadow-xl">
                                    <div className="relative aspect-[1]">
                                        <img
                                            src={e.image}
                                            alt={e.title}
                                            loading="lazy"
                                            className="absolute inset-0 h-full w-full object-cover"
                                        />
                                        {/* título */}
                                        <div className="pointer-events-none absolute left-3 top-3 z-10 rounded-md bg-black/50 px-2 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
                                            {e.title}
                                        </div>
                                        {/* CTA en móvil */}
                                        <a
                                            href={mkWaLink(e.title)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Reservar por WhatsApp para ${e.title}`}
                                            className="absolute bottom-3 left-1/2 z-20 w-[88%] -translate-x-1/2 rounded-xl border border-white/30 bg-[#25D366] px-4 py-3 text-center text-sm font-semibold text-white shadow-md"
                                        >
                                            Reservar por WhatsApp
                                        </a>
                                        {/* overlay sutil */}
                                        <div className="pointer-events-none absolute inset-0 bg-black/10" />
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className="mt-3 flex justify-center gap-2">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            aria-label={`Ir al slide ${i + 1}`}
                            className={`h-1.5 w-1.5 rounded-full transition ${i === index ? "bg-white" : "bg-white/30"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
