import { Outlet } from "react-router-dom";
import HeaderHome from "../components/home/HeaderHome";
import FooterHome from "../components/FooterHome";



export default function HomeLayout() {
    return (
        <>
            <div className=' min-w-full flex flex-col lg:flex-row '>
                <HeaderHome />
            </div>

            <div className="w-full mx-auto">
                <Outlet />
            </div>

            <div>
                <FooterHome
                    address="CALLE 56 X 55 CENTRO HISTÓRICO, MÉRIDA."
                    // Embed de ejemplo (sustituye por el tuyo de Google Maps)
                    mapEmbedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7807!2d-89.627!3d20.967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AXOXO!2sXOXO%20Club!5e0!3m2!1ses-419!2smx!4v0000000000"
                    social={[
                        { label: "facebook", href: "https://www.facebook.com/people/Xoxo-Club-M%C3%A9rida/61553569130892/" },
                        { label: "instagram", href: "https://www.instagram.com/xoxoclubmid/" },
                        { label: "whatsapp", href: "https://api.whatsapp.com/send/?phone=529996600800&text&type=phone_number&app_absent=0" },
                    ]}
                    logoXSrc="/cropped-Recurso-3.png"
                    developerName="VirelMKT"
                    developerHref="https://linktr.ee/viralmk?fbclid=PAZXh0bgNhZW0CMTEAAaaDt0GRMewRaznFlWYwXoXmAf8DphiWiZ3Cdi0Kn-YCgwNpNZ7Lz0743UM_aem_Vzxh6uCC7RpCbm0sA08zgA"
                    developerLogoSrc="/Marca viral-03.png"
                    brand="XOXO"
                    whatsappPhone="529996600800"
                    whatsappMessage="Hola! Quiero reservar en XOXO."
                />
            </div>
        </>
    )
}
