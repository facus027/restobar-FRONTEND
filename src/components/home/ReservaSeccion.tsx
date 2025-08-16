

export default function ReservaSeccion() {


    return (
        <section className="mx-auto max-w-7xl px-6 text-white scroll-mt-[var(--header-h)] min-h-[calc(100svh-var(--header-h))] py-10 md:py-16">
            <div className="gap-10 ">
                {/* Columna izquierda: card informativa */}
                <div className="rounded-xl bg-[#3a006d] p-8 shadow-xl">
                    <h2 className="text-3xl font-extrabold uppercase md:text-5xl font-poppins">Trabaja en XOXO</h2>
                    <p className="mt-4 opacity-90 text-2xl font-sans">
                        ¿Querés formar parte de nuestro equipo? Envíanos tu info y el link a tu CV.
                    </p>

                    <ul className="mt-8 space-y-5 text-xl font-sans">
                        <li className="flex items-start gap-3"><span className="mt-1 inline-block h-6 w-6 rounded-full bg-[#8A00FF]" />+52 999 660 0800</li>
                        <li className="flex items-start gap-3"><span className="mt-1 inline-block h-6 w-6 rounded-full bg-[#8A00FF]" />xoxoclubmid@gmail.com</li>
                        <li className="flex items-start gap-3"><span className="mt-1 inline-block h-6 w-6 rounded-full bg-[#8A00FF]" />Calle 56, N°474 por 55, Centro Oriente, Mérida</li>
                    </ul>
                </div>


            </div>
        </section>
    );
}
