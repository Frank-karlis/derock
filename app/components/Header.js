import {FaCar} from "react-icons/fa";
import Link from "next/link";

export default function Header(){
    return(
        <nav className="flex justify-between items-center  bg-[#cbacd6] py-3 px-3 md:px-12 lg:px-16">
            <div className="flex gap-5">
                <FaCar className="text-[#17153b] text-5xl"/>
                <p className="text-[#17153b] text-2xl"> DE-ROCK MOTORS</p>
            </div> 
            <div className=" lg:flex gap-5 justity-center max-sm:hidden ">
                <Link className="py-3 text-[#433d8b] text-3xs text-bold" href="/app">Home</Link>
                <Link className="md:py-3 text-[#433d8b] text-3xs text-bold" href="https://maps.app.goo.gl/X5UkYMTsRUuRAsF49?g_st=iw">Locate us</Link>
                <Link className="py-3 text-[#433d8b] text-3xs text-bold" href="/contact">Contact us</Link>
                <Link className="py-3 text-[#433d8b] text-3xs text-bold" href="?">Home</Link>
            </div>
        </nav>
    )
}