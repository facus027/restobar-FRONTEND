// /src/features/eventos/EventosSection.tsx
// React + Tailwind. 3 columnas, botón WhatsApp al hover con z-index correcto.

export default function EventosSection() {
    // 👉 Ajusta estos valores
    const WHATSAPP_PHONE = "5219991234567"; // sin + ni espacios
    const WHATSAPP_MSG =
        "Hola! Quiero reservar para {title} en XOXO. ¿Hay disponibilidad?";

    const mkWaLink = (title: string) =>
        `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
            WHATSAPP_MSG.replace("{title}", title)
        )}`;

    const eventos = [
        { id: 1, title: "partuza Fest", image: "/event/Xoxo-May-3-Sab.png" },
        { id: 2, title: "divine Fest", image: "/event/Xoxo-May-5-Cartelera.png" },
        { id: 3, title: "Divine Fest", image: "/event/Xoxo-May-5-Divine.png" },
    ];

    return (
        <section className="relative -mt-5 text-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6">
                <h2 className="font-poppins text-5xl font-bold uppercase">Eventos</h2>

                {/* Grid estable: siempre 3 columnas en >= lg */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {eventos.map((e) => (
                        <article
                            key={e.id}
                            className="group relative overflow-hidden rounded-xl bg-neutral-900 shadow-xl transition-transform duration-300 hover:scale-[1.02] hover:z-20 focus-within:z-20"
                        >
                            {/* Imagen con aspecto fijo para que todas midan igual */}
                            <img
                                src={e.image}
                                alt={`banner_${e.title}`}
                                loading="lazy"
                                className="h-full w-full object-cover aspect-[3/4]" // 3:4 (cambia si tu póster es otro ratio)
                            />

                            {/* Oscurecer al hover para contrastar el botón */}
                            <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />

                            {/* Título (opcional) */}
                            <div className="pointer-events-none absolute left-3 top-3 z-10 rounded-md bg-black/50 px-2 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
                                {e.title}
                            </div>

                            {/* Botón WhatsApp (aparece al hover) */}
                            <a
                                href={mkWaLink(e.title)}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Reservar por WhatsApp para ${e.title}`}
                                className="absolute bottom-4 left-1/2 z-20 w-[85%] -translate-x-1/2 translate-y-4 rounded-xl border border-white/30 bg-[#25D366] px-5 py-3 text-center text-sm font-semibold text-white opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:text-base"
                            >
                                <span className="inline-flex items-center justify-center gap-2">
                                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                                        <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.37 0 12a11.84 11.84 0 0 0 1.63 6.01L0 24l6.17-1.62A11.87 11.87 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52Z" />
                                        <path d="M12 21.42a9.4 9.4 0 0 1-4.79-1.29l-.34-.2-3.66.96.98-3.57-.21-.36A9.4 9.4 0 1 1 21.4 12 9.4 9.4 0 0 1 12 21.42Zm5.37-7.21c-.29-.15-1.73-.86-1.99-.95s-.46-.15-.65.15c-.19.29-.75.95-.92 1.14-.17.19-.34.21-.63.06-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.16-.23-.56-.47-.49-.65-.5h-.56c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.17 3 .15.19 2 3.05 4.85 4.28.68.29 1.21.46 1.62.58.68.22 1.3.19 1.79.11.55-.08 1.73-.71 1.98-1.39.24-.68.24-1.26.17-1.39-.07-.13-.26-.21-.55-.36Z" />
                                    </svg>
                                    Reservar por WhatsApp
                                </span>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
