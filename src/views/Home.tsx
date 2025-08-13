import EventosSection from "../components/home/EventosSection";
import HeroSlider from "../components/home/HeroSlider";
import NosotrosSection from "../components/home/NosotrosSection";


export default function Home() {
    return (
        <>
            <div>
                <HeroSlider />
            </div>
            <div>
                <EventosSection />
            </div>
            <div>
                <NosotrosSection />
            </div>
        </>
    )
}
