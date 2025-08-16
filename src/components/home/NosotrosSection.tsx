
export default function NosotrosSection() {
    return (
        <section className="my-16 md:my-28">
            {/* 50/50 y alto de pantalla */}
            <div className="grid h-[calc(100svh-5rem)] grid-cols-1 md:grid-cols-2">
                {/* MITAD IMAGEN: llena toda su columna */}
                <div className="relative">
                    <img
                        src="/DSC00366-scaled.jpg"
                        alt="Foto_barra"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>

                {/* MITAD TEXTO: centrado perfecto */}
                <div className="flex items-center justify-center bg-black/70 p-6">
                    <div className="max-w-prose text-white">
                        <h2 className="text-center font-poppins text-4xl font-bold uppercase leading-none">
                            UN POCO DE NOSOTROS
                        </h2>

                        <div className="mt-6 flex flex-col gap-3 text-base font-sans font-bold text-justify">
                            <p>
                                ¡Bienvenidos a XOXO Club, donde la diversión y el amor se fusionan para crear momentos mágicos!
                            </p>
                            <p>
                                En XOXO Club, abrazamos la diversidad en todas sus formas y creemos que cada persona es hermosa tal como es.
                                Somos un punto de encuentro para la comunidad LGBT+ y un lugar donde la autenticidad y la felicidad son nuestras
                                principales prioridades.
                            </p>
                            <p>
                                Nuestro equipo está lleno de entusiastas del amor y la buena energía. Desde nuestros talentosos mixólogos que
                                crean cocteles con un toque de magia hasta nuestro equipo de servicio que te recibe con una sonrisa, trabajamos
                                todos juntos para que tu experiencia en XOXO Club sea inolvidable.
                            </p>
                            <p>
                                Ya sea que estés buscando una noche de baile y diversión desenfrenada, un rincón acogedor para pasar con amigos o
                                simplemente un lugar donde ser tú mismo, ¡Has llegado al sitio correcto!
                            </p>
                            <p>
                                Así que únete a nosotros, forma parte de nuestra familia XOXO y prepárate para vivir momentos llenos de amor, risas y
                                una pizca de encanto.
                            </p>
                            <p>¡Nos vemos pronto en XOXO Club!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
