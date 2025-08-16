import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

export default function HeaderHome() {
    return (
        <header className="md:h-16 h-10 opacity-95 fixed w-full z-30 mt-2">
            <div className="w-11/12 flex md:justify-between justify-center items-center mx-auto md:flex-row flex-col">
                <div className="flex md:mt-3 mt-0"
                    onClick={() => scroll.scrollToTop({ duration: 500, smooth: "easeInOutQuad" })}
                >
                    <img className="md:h-16 h-10 w-auto items-center" src="/cropped-Logo-simple.png" alt="logoXoxo" />
                </div>
                <div>
                    <nav>
                        <ul className="menu-item flex gap-9">
                            <li className="menu-link">
                                <LinkScroll to="eventos" smooth={true} duration={600} offset={0} className="">Eventos</LinkScroll>
                            </li>
                            <li className="menu-link">
                                <LinkScroll to="nosotros" smooth={true} duration={600} offset={0} className="">Nosotros</LinkScroll>
                            </li>
                            <li className="menu-link">
                                <LinkScroll to="footer" smooth={true} duration={600} offset={0} className="">Contacto</LinkScroll>
                            </li>
                            <li className="menu-link">
                                <a href={"/carta"}>Menú</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
