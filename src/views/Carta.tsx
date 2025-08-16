import CartaAccordion from "../components/carta/CartaAccordion";
// JSON combinado que generamos
import data from "../data/carta/xoxo_carta_normalizada.json";

export default function Carta() {
    return (
        <>
            <div className=" bg-magenta ">

                <div className="flex items-center justify-center">
                    <a href="/">
                        <img className="h-56 w-auto "
                            src="/Logo-para-el-cuadro-de-inicio.png" alt="LogoXoxoBig" />
                    </a>
                </div>

                <div className="min-h-screen bg-purple-700">
                    <div className="py-10">
                        <CartaAccordion data={data as any} accent="#8A00FF" />
                    </div>
                </div>

            </div>
        </>

    )
}
