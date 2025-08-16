import React from "react";

export type StickySlide = {
    id: string;
    title?: string;
    subtitle?: string;
    body?: string;
    image: string;   // ruta en /public o CDN
    content?: React.ReactNode;
};

type Props = {
    slides: StickySlide[];
};

const StickyStack: React.FC<Props> = ({ slides }) => {
    return (
        <main className="relative">
            {slides.map((s, i) => (
                <section
                    key={s.id}
                    id={s.id}
                    // Cada slide ocupa la pantalla y se pega al top
                    className="sticky top-0 h-[100svh]" // 100svh evita saltos en mobile
                    style={{ zIndex: i + 1 }}           // el siguiente queda por encima
                >
                    {/* Fondo + overlay de legibilidad */}
                    <div
                        className="relative h-full w-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${s.image})`,
                            // micro-optimización para GPUs
                            transform: "translateZ(0)",
                            willChange: "transform",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />
                        {/* Contenido centrado */}
                        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
                            <div className="mx-auto max-w-7xl">
                                {s.content && (
                                    <div>
                                        {s.content}
                                    </div>
                                )}


                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </main>
    );
};

export default StickyStack;
