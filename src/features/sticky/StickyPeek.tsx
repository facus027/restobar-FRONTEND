import React from "react";

export type StickyPeekSlide = {
    id: string;
    title?: string;
    subtitle?: string;
    body?: string;
    image: string; // ruta en /public o CDN
};

type Props = {
    slides: StickyPeekSlide[];
    /**
     * Cuánto de la imagen anterior querés “asomar” cuando empieza cada slide nuevo.
     * Usa unidades de viewport (ej: "20vh"). Default: "20vh".
     */
    peek?: string;
    /**
     * Altura de “recorrido” de cada slide (el contenedor que envuelve al sticky).
     * A mayor valor, más tiempo permanece “pinneado” el slide. Default: "180svh".
     */
    sectionSpan?: string;
};

const StickyPeek: React.FC<Props> = ({
    slides,
    peek = "20vh",
    sectionSpan = "180svh", // usa svh para móviles con barra dinámica
}) => {
    return (
        <main className="relative bg-neutral-950 text-white">
            {slides.map((s, i) => (
                <section
                    key={s.id}
                    // Cada sección es ALTA para crear recorrido; dentro hay un hijo sticky que se “pega” al top
                    className="relative"
                    style={{ height: sectionSpan }}
                >
                    {/* Panel sticky: ocupa (100svh - peek) y baja 'peek' desde arriba,
              dejando visible una franja de la imagen anterior en el inicio del slide. */}
                    <div
                        className="sticky top-0 w-full"
                        style={
                            {
                                // Usamos CSS variables para poder referenciar en clases arbitrarias
                                // con Tailwind JIT: h-[calc(100svh-var(--peek))] y mt-[var(--peek)]
                                // Nota: svh evita saltos en iOS con barra de URL.

                                "--peek": peek,
                                height: "calc(100svh - var(--peek))",
                                marginTop: "var(--peek)",
                                zIndex: i + 1, // cada slide encima del anterior
                            } as React.CSSProperties
                        }
                    >
                        {/* Fondo */}
                        <div
                            className="relative h-full w-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${s.image})`,
                                transform: "translateZ(0)",
                                willChange: "transform",
                            }}
                        >
                            {/* Overlay para legibilidad */}
                            <div className="absolute inset-0 bg-black/30" />

                            {/* Contenido: se mueve junto con la imagen porque está dentro del panel sticky */}
                            <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
                                <div className="mx-auto max-w-3xl">
                                    {s.title && (
                                        <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                                            {s.title}
                                        </h2>
                                    )}
                                    {s.subtitle && (
                                        <p className="mt-4 text-lg md:text-2xl opacity-90">{s.subtitle}</p>
                                    )}
                                    {s.body && (
                                        <p className="mt-6 text-base md:text-lg opacity-90">{s.body}</p>
                                    )}
                                </div>
                            </div>

                            {/* Borde superior suave para que el “corte” con la imagen anterior se vea más natural */}
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/40 to-transparent" />
                        </div>
                    </div>
                </section>
            ))}
        </main>
    );
};

export default StickyPeek;
