"use client"
import { IoLogoWhatsapp } from "react-icons/io5";
import { SiGmail } from "react-icons/si"
import { CgMail } from "react-icons/cg"
import Link from "next/link";

export default function Contact() {
    return (
        <main className=" px-2 md:px-12 lg:px-16 py-12 ">
            <section className="p-6 border border-lg h-[40vh] grid grid-cols-2 gap-3 bg-[green] min:h-screen p-[10px] w-[100%] ">
                <blockquote >
                    <IoLogoWhatsapp className="w-[100%] item-center text-white text-9xl " />
                </blockquote>
                <div className="grid grid-cols-1 items-center">
                    <p className="text-2xs text-[gold] font-bold text-center m-2 p-1 lg:text-4xl">Contact De-Rock Motors On Whatsaap</p>
                    <h1 className="text-black text-xs text-center font-bold lg:text-2xl"> +234xxxxxxxxx</h1>
                    <Link className=" text-black text-xs bg-[gold] text-center font-bold border rounded-full w-[15vh] ms-[20%] p-2 lg:w-[17vh] lg:ms-[40%]" href="/">Contact us</Link>
                </div>
            </section>
            <section className=" mt-3 p-6 border border-lg h-[40vh] grid grid-cols-2 gap-3 bg-[#2e236c] min:h-screen p-[10px] w-[100%] ">
                <blockquote>
                    <SiGmail className="w-[100%] item-center text-teal-600 text-9xl " />
                </blockquote>
                <div className="grid grid-cols-1 items-center">
                    <p className="text-xs text-[gold] font-bold text-center m-2 p-1 lg:text-4xl">You can send An E-mail to our Email Address </p>
                    <h1 className="text-black text-xs text-center font-bold hidden lg:text-2xl " id="email"> de-rockmotors001 @ gmail.com</h1>
                    <siv className="flex flex-cols justify-center gap-2 mt-5" >
                        <h1 className="text-xs text-white font-bold mt-7 lg:text-3xs">CLICK HERE </h1>
                        <Link className="" href="/Question"><CgMail className=" text-[#cdacd6] text-7xl text-center font-bold p-2 hover:text-black duration-300"
                            onClick={() => {
                                const text = document.getElementById(("ul"))
                                text.setAttribute("className", "hidden")
                            }} /></Link>
                    </siv>
                </div>
            </section>


        </main>
    )
}


// home contactus locateus product sparepart faq
// bg-gradient-to-b from-[#433d8b] via-[#17153b] to-[#2e236c] min:h-screen p-[10px] w-[100%]