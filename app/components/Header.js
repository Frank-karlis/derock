"use client"
import { useState } from "react";
import { FaCar } from "react-icons/fa";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

export default function Header() {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <nav className="flex justify-between items-center  bg-[#cbacd6] py-3 px-3 md:px-12 lg:px-16">
                <div className="flex gap-5">
                    <Image width={50} height={50} src={"/logo.jpg"} alt="car image" />
                    <p className="text-[#17153b] text-2xl font-bold"> DE-ROCK MOTORS</p>
                </div>
                <div className=" lg:flex gap-5 justity-center max-sm:hidden ">
                    <Link className="py-3 text-[#433d8b] text-3xs text-bold font-bold hover:text-white duration-500" href="/">Home</Link>
                    <Link className="md:py-3 text-[#433d8b] text-3xs text-bold font-bold hover:text-white duration-500" href="https://maps.app.goo.gl/X5UkYMTsRUuRAsF49?g_st=iw">Locate us</Link>
                    <Link className="py-3 text-[#433d8b] text-3xs text-bold font-bold hover:text-white duration-500" href="/product">Product</Link>
                    <Link className="py-3 text-[#433d8b] text-3xs text-bold font-bold hover:text-white duration-500" href="/contact">Contact us</Link>
                </div>
                <div className="lg:hidden">
                    {!menu
                        ?
                        <IoMenu onClick={() => setMenu(true)} className="text-[#17153b] text-4xl" />
                        :
                        <IoMdClose onClick={() => setMenu(false)} className="text-[#17153b] text-4xl" />}
                </div>
            </nav>
            {menu
                ?
                <ul className="bg-blue-800 flex flex-col gap-5 p-4 head  z-10" style={{ color: "whitesmoke" }}>
                    <li><Link href="/" className="text-white font-bold hover:text-[#433d8d] duration-500">Home</Link></li>
                    <li><Link href="https://maps.app.goo.gl/X5UkYMTsRUuRAsF49?g_st=iw" className="font-bold hover:text-[#433d8d] duration-300 ">Locate us</Link></li>
                    <li><Link href="/product" className="font-bold hover:text-[#433d8d] duration-300">Product</Link></li>
                    <li><Link href="/contact" className="font-bold hover:text-[#433d8d] duration-300">Contact us</Link></li>
                </ul>
                : null}
        </>
    )
}


{/* <FaCar className="text-[#17153b] text-5xl" /> */}