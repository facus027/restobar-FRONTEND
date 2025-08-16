

export default function VideoSecction() {
    return (
        <section className="bg-scroll bg-cover bg-center h-screen " >
            <div className="text-4xl font-bold font-sans mt-14 flex flex-col gap-3">
                <div className="flex ml-16">
                    <img className="h-32 w-1/2"
                        src="/Logo-para-el-cuadro-de-inicio.png" alt="LogoXoxoBig" />
                </div>
                {/* Contenedor 16:9 responsive */}
                <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
                    <video
                        poster="/video/0005.jpg"
                        controls
                        playsInline
                        preload="none"         // no descarga hasta que el usuario interactúe
                        className="h-full w-full object-cover"
                    >
                        <source src="/video/VID-20240328-WA0031.mp4" type="video/mp4" />
                        {/* si más adelante querés agregar .webm, solo sumás otra <source> arriba */}
                    </video>
                </div>
            </div>
        </section>
    )
}
