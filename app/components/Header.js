"use client"
import { useState } from "react";
import { IoCarSportSharp } from "react-icons/io5";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

export default function Header() {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <nav className="flex justify-between items-center  bg-[#cbacd6] py-3 px-3 md:px-12 lg:px-10">
                <div className="flex gap-5">
                <Image
                            width={300}
                            height={200}
                            src={"/logos.jpg"}
                            alt="car image"
                            className="rounded-lg h-[10%] w-[15%] " />
                    <p className="text-[#17153b] text-2xl font-bold mt-2"> DE-ROCK MOTORS</p>
                </div>
                <div className="text-[#17153b] lg:flex gap-7 justity-center max-sm:hidden md:hidden">
                    <Link className="py-3 text-3xs text-bold font-bold hover:text-white duration-500" href="/">Home</Link>
                    <Link className="py-3 text-3xs text-bold font-bold hover:text-white duration-500" href="/product">Product</Link>
                    <Link className="py-3 text-3xs text-bold font-bold hover:text-white duration-500" href="/contact">Contact us</Link>
                    <Link className="py-3 text-3xs text-bold font-bold hover:text-white duration-500" href="https://maps.app.goo.gl/DLHDTUd7kH1mD2w97?g_st=ac">Locate us</Link>
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
                <ul className="bg-[#433d8d]  flex flex-col gap-5 p-4 head z-10" style={{ color: "whitesmoke" }}>
                    <li><Link href="/" className="e font-bold text-[#cbacd6] hover:text-white duration-500">Home</Link></li>
                    <li><Link href="/product" className="font-bold text-[#cbacd6] hover:text-white duration-500">Product</Link></li>
                    <li><Link href="/contact" className="font-bold text-[#cbacd6] hover:text-white duration-500">Contact us</Link></li>
                    <li><Link href="https://maps.app.goo.gl/DLHDTUd7kH1mD2w97?g_st=ac" className="font-bold text-[#cbacd6] hover:text-white duration-500 ">Locate us</Link></li>
                </ul>
                : null}
        </>
    )
}



{/* <Image width={50} height={50} src={"/logo.jpg"} alt="car image" /> */ }