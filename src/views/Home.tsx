import EventosSection from "../components/home/EventosSection";
import HeroSlider from "../components/home/HeroSlider";
import NosotrosSection from "../components/home/NosotrosSection";
import ReservaSeccion from "../components/home/ReservaSeccion";
import VideoSecction from "../components/home/VideoSecction";
import type { StickySlide } from "../features/sticky/StickyStack";
import StickyStack from "../features/sticky/StickyStack";



export default function Home() {

    const slides: StickySlide[] = [
        {
            id: "video",
            title: "XOXO Experience(VIDEO)",
            subtitle: "Vive la noche a otro nivel",
            image: "/bg/seccion-video.png",
            content: <VideoSecction />
        },
        {
            id: "eventos",
            title: "Eventos",
            subtitle: "Shows, DJs y performances",
            image: "/bg/seccion1-eventos.png",
            content: <EventosSection />
        },
        {
            id: "nosotros",
            title: "Sobre Nosotros",
            subtitle: "Cócteles signature & cocina",
            image: "/bg/seccion5-contacto.png",
            content: <NosotrosSection />
        },
        {
            id: "reservas",
            title: "Reservas",
            subtitle: "Tu mesa te espera",
            image: "/bg/seccion4-trabaja-en-xoxo.png",
            content: <ReservaSeccion />
        },

    ];

    return (
        <>
            <div>
                <HeroSlider />
            </div>
            <div className="bg-neutral-950">
                <StickyStack slides={slides} />
            </div>

        </>
    )
}
