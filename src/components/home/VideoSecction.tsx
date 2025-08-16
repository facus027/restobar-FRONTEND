

export default function VideoSecction() {
    return (
        <section className="scroll-mt-[var(--header-h)] py-10 md:py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="relative md:relative">
                    {/* Video 16:9 responsive */}
                    <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
                        {/* Nota: no uses comentarios dentro de la etiqueta <video> */}
                        <video
                            poster="/video/0005.jpg"
                            controls
                            playsInline
                            preload="none"
                            className="h-full w-full object-cover"
                        >
                            <source src="/video/VID-20240328-WA0031.mp4" type="video/mp4" />
                            {/* si más adelante querés agregar .webm, sumá otro <source> arriba */}
                        </video>
                    </div>

                    {/* Logo: arriba centrado en mobile; overlay en md+ */}
                    <div className="mt-4 flex justify-center md:absolute md:left-6 md:top-6 md:z-10 md:mt-0">
                        <img
                            src="/Logo-para-el-cuadro-de-inicio.png"
                            alt="Logo XOXO"
                            className="h-14 w-auto md:h-20"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}
