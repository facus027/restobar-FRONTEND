// /src/features/footer/XoxoFooter.tsx
// Footer basado en el sitio XOXO. Tailwind puro.
// Accesible (roles/labels), responsive y con props para personalizar.

import React from "react";

type Social = { label: "facebook" | "instagram" | "whatsapp" | string; href: string };

type Props = {
    year?: number;
    brand?: string;                 // Texto de marca para el copyright
    address: string;                // Dirección debajo del mapa
    mapEmbedSrc: string;            // SRC de <iframe> de Google Maps (embed)
    social: Social[];               // Links de redes
    logoXSrc?: string;              // Logo "X" (izquierda). Opcional
    developerName?: string;         // Texto "Desarrollado por"
    developerHref?: string;         // Link del desarrollador
    developerLogoSrc?: string;      // Logo del desarrollador (derecha). Opcional
    whatsappPhone?: string;         // Para botón flotante. Ej: "5219991234567"
    whatsappMessage?: string;       // Mensaje prellenado
};

const FooterHome: React.FC<Props> = ({
    year = new Date().getFullYear(),
    brand = "XOXO",
    address,
    mapEmbedSrc,
    social,
    logoXSrc,
    developerName = "Redimit",
    developerHref = "#",
    developerLogoSrc,
    whatsappPhone,
    whatsappMessage = "Hola! Quiero más info 😊",
}) => {
    // Color púrpura aproximado del sitio
    const purple = "bg-[#3a006d]"; // ajusta al tono exacto si tienes la marca

    const waHref =
        whatsappPhone
            ? `https://wa.me/${whatsappPhone}${whatsappMessage ? `?text=${encodeURIComponent(whatsappMessage)}` : ""
            }`
            : undefined;

    return (
        <footer id="footer" aria-label="Pie de página" className="relative">
            {/* Bloque principal negro */}
            <div className="bg-black text-white">
                <div className="mx-auto grid max-w-7xl items-center grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:gap-12 lg:px-8">
                    {/* Columna: Contacto */}
                    <div className=" flex flex-col ml-20">
                        <h2 className="text-2xl justify-center font-poppins font-extrabold tracking-wide md:text-5xl items-center ">
                            PONERSE EN CONTACTO
                        </h2>

                        {/* Redes sociales */}
                        <ul className="mt-6 flex items-center gap-4">
                            {social.map((s) => (
                                <li key={s.label}>
                                    <a
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Ir a ${s.label}`}
                                        className="group inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#8A00FF] transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/50"
                                        title={s.label}
                                    >
                                        {/* Iconos SVG minimalistas en blanco */}
                                        {s.label === "facebook" && (
                                            <svg viewBox="0 0 24 24" className="h-8 w-h-8 fill-white" aria-hidden="true">
                                                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.25 0-1.64.78-1.64 1.58v1.9h2.79l-.45 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
                                            </svg>
                                        )}
                                        {s.label === "instagram" && (
                                            <svg viewBox="0 0 24 24" className="h-8 w-h-8 fill-white" aria-hidden="true">
                                                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2zM17.75 5.8a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05z" />
                                            </svg>
                                        )}
                                        {s.label === "whatsapp" && (
                                            <svg viewBox="0 0 24 24" className="h-8 w-h-8 fill-white" aria-hidden="true">
                                                <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.37 0 12a11.84 11.84 0 0 0 1.63 6.01L0 24l6.17-1.62A11.87 11.87 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52ZM12 21.42a9.4 9.4 0 0 1-4.79-1.29l-.34-.2-3.66.96.98-3.57-.21-.36A9.4 9.4 0 1 1 21.4 12 9.4 9.4 0 0 1 12 21.42Zm5.37-7.21c-.29-.15-1.73-.86-1.99-.95s-.46-.15-.65.15c-.19.29-.75.95-.92 1.14-.17.19-.34.21-.63.06-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.16-.23-.56-.47-.49-.65-.5h-.56c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.17 3 .15.19 2 3.05 4.85 4.28.68.29 1.21.46 1.62.58.68.22 1.3.19 1.79.11.55-.08 1.73-.71 1.98-1.39.24-.68.24-1.26.17-1.39-.07-.13-.26-.21-.55-.36Z" />
                                            </svg>
                                        )}
                                        {/* Fallback: un puntito si viene una label desconocida */}
                                        {!["facebook", "instagram", "whatsapp"].includes(s.label) && (
                                            <span className="h-2 w-2 rounded-full bg-white" />
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Logo X opcional */}
                        {logoXSrc && (
                            <div className="mt-8 ml-4">
                                <img
                                    src={logoXSrc}
                                    alt="Logotipo XOXO"
                                    className="h-52 w-auto select-none"
                                    loading="lazy"
                                />
                            </div>
                        )}
                    </div>

                    {/* Columna: Ubicación */}
                    <div>
                        <h2 className="text-2xl font-extrabold font-poppins tracking-wide md:text-3xl">UBICACIÓN</h2>

                        <div className="mt-6 overflow-hidden rounded-lg border border-white/15 shadow-sm">
                            <iframe
                                title="Mapa de ubicación"
                                src={mapEmbedSrc}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                className="h-[260px] w-full md:h-[320px]"
                            />
                        </div>

                        {/* Dirección */}
                        <p className="mt-6 text-sm font-semibold font-poppins uppercase tracking-wide">
                            {address}
                        </p>
                    </div>
                </div>
            </div>

            {/* Franja púrpura inferior */}
            <div className={`${purple} text-white`}>
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row lg:px-8">
                    <p className="text-sm font-semibold font-sans tracking-wide">
                        COPYRIGHT © {year} {brand}
                    </p>

                    <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold font-sans tracking-wide">DESARROLLADO POR:</span>
                        {developerLogoSrc ? (
                            <a href={developerHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                                <img
                                    src={developerLogoSrc}
                                    alt={`Logo ${developerName}`}
                                    className="h-8 w-auto"
                                    loading="lazy"
                                />
                            </a>
                        ) : (
                            <a
                                href={developerHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm underline underline-offset-4 hover:opacity-90"
                            >
                                {developerName}
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Botón flotante de WhatsApp (opcional) */}
            {waHref && (
                <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chatear por WhatsApp"
                    className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
                        <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.37 0 12a11.84 11.84 0 0 0 1.63 6.01L0 24l6.17-1.62A11.87 11.87 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52Z" />
                        <path d="M12 21.42a9.4 9.4 0 0 1-4.79-1.29l-.34-.2-3.66.96.98-3.57-.21-.36A9.4 9.4 0 1 1 21.4 12 9.4 9.4 0 0 1 12 21.42Zm5.37-7.21c-.29-.15-1.73-.86-1.99-.95s-.46-.15-.65.15c-.19.29-.75.95-.92 1.14-.17.19-.34.21-.63.06-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.16-.23-.56-.47-.49-.65-.5h-.56c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.17 3 .15.19 2 3.05 4.85 4.28.68.29 1.21.46 1.62.58.68.22 1.3.19 1.79.11.55-.08 1.73-.71 1.98-1.39.24-.68.24-1.26.17-1.39-.07-.13-.26-.21-.55-.36Z" />
                    </svg>
                </a>
            )}
        </footer>
    );
};

export default FooterHome;
