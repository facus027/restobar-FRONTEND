
export default function HeaderHome() {
    return (
        <header className="h-16 opacity-95 fixed w-full z-30">
            <div className="w-11/12 flex justify-between mx-auto">
                <div className="flex mt-3">
                    <img className="h-16 w-auto items-center" src="/cropped-Logo-simple.png" alt="logoXoxo" />
                </div>
                <div>
                    <nav>
                        <ul className="menu-item flex gap-9">
                            <li className="menu-link">
                                Eventos
                            </li>
                            <li className="menu-link">
                                Menú
                            </li>
                            <li className="menu-link">
                                Nosotros
                            </li>
                            <li className="menu-link">
                                Contacto
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
