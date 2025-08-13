import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
    bg: string;
    title: string;
    description: string;
    cta: string;
};

const slides: Slide[] = [
    {
        bg: "url('/sliders/slider-eventos-1.png')",
        title: "Bienvenida al Universo XOXO",
        description: "Descubrí eventos únicos, vibrantes y llenos de amor propio.",
        cta: "Explorar eventos"
    },
    {
        bg: "url('/sliders/slider-menu-2.png')",
        title: "Nuevo Menú",
        description: "Conectá con tu estilo con colores que expresan tu esencia.",
        cta: "Ver ahora"
    },
    {
        bg: "url('/sliders/slider-nosotros-3.png')",
        title: "Amor Propio Primero",
        description: "Cuidate. Querete. Regalate algo especial hoy.",
        cta: "Descubrí más"
    }
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const currentSlide = slides[current];

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    className="absolute inset-0 w-full h-full bg-center bg-cover transition-all duration-300"
                    style={{ backgroundImage: currentSlide.bg }}
                    initial={{ opacity: 3 }}
                    animate={{ opacity: 3 }}
                    exit={{ opacity: 3 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col justify-center items-center text-center h-full bg-black/40 text-white px-4">
                        <motion.h1
                            className="text-3xl md:text-5xl font-bold mb-4"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            {currentSlide.title}
                        </motion.h1>
                        <motion.p
                            className="text-base md:text-lg max-w-2xl mb-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {currentSlide.description}
                        </motion.p>
                        <motion.button
                            className="btn-primary"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {currentSlide.cta}
                        </motion.button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
