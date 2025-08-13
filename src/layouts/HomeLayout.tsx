import { Outlet } from "react-router-dom";
import HeaderHome from "../components/home/HeaderHome";
import FooterHome from "../components/home/FooterHome";


export default function HomeLayout() {
    return (
        <>
            <div className=' min-w-full flex flex-col lg:flex-row '>
                <HeaderHome />
            </div>

            <div className="w-full mx-auto">
                <Outlet />
            </div>

            <div className=''>
                <FooterHome />
            </div>
        </>
    )
}
