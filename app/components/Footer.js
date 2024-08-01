import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

export default function Footer() {
    return (
        <footer className=" mt-1 p-2 h-[20vh] px-3 md:px-12 lg:px-16  bg-[#cbacd6] grid grid-rows-2 gap-4 ">
            <div className="flex justify-evenly p-3 gap-3 text-[#17153b]">
            <Link className="text-3xs text-bold font-bold hover:text-white duration-500" href="/Question">FAQ</Link>
            <Link className="text-3xs text-bold font-bold hover:text-white duration-500" href="/parts">Spare Parts</Link>
            <IoLogoWhatsapp className="hover:text-white duration-500 font-bold text-green-800 text-4xl " />
            <SiGmail className="hover:text-white duration-500 font-bold text-indigo-800 text-4xl " />
            </div>
            <div className="flex justify-center">
            <p className=" text-[#17153b] font-bold text-xs lg:text-2xl"> &copy; {new Date().getFullYear()} ALL RIGHT RESERVED .DE-ROCK MOTORS</p>
            </div>
        </footer>
    )
}