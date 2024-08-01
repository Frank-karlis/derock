"use client"
// import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";


export default function Question() {
    // const [menu, setMenu] = useState(false);

    return (
        <main className=" px-2 md:px-12 lg:px-16 py-12 bg-[#433dbb] min:h-screen p-[10px] w-[100%]">
            <section className="min:h-screen p-[10px] w-[100%] ">
                <div className="items-center">
                    <h2 className="text-3xl text-center font-bold text-[#17153b] md:text-5xl lg:text-5xl">GET HELP</h2>
                    <p className="text-2xl text-center font-medium text-[#17153b] md:text-4xl lg:text-4xl">Get Answers to Your Questions</p>
                    <form className="flex justify-center mt-[12px]" id="form">
                        <input type="text" placeholder="What can i help you with" className="border rounded-full p-2 px-4 border-[#cbacd6] w-[300px] text-black " name="niv"  duration-300/>
                        <input type="submit"
                            onClick={(action) => {
                                action.preventDefault();
                                let form = document.getElementById("form")
                                let user = form.niv.value
                                const ask = ["LOCATION", "DISPATCH", "DELIVERY", "AUTHENTICITY", "PRICE", "PRICES"]
                                const [hi, hello, greet, end, vest, jaw ] = ask
                                if (user.includes(hi)) {
                                    alert("DE-ROCK MOTORS IS LOCATED AT APO MECHANIC VILLAGE, JAPANESE LINE ABUJA")
                                }
                                else if (user.includes(greet || hello)) {
                                    alert("DE-ROCK MOTORS DO NOT DELIVER GOODS TO CUSTOMERS. BUSINESS IS PHYSICAL")
                                }
                                else if (user.includes(vest || jaw)) {
                                    alert("THE PRICES OF GOODS ARE NOT FIXED, IT IS ALSO NEGOTIABLE")
                                }
                                else if (user.includes(end)) {
                                    alert("DE-ROCK MOTORS SELL VERY AUTHENTIC GOODS TO CUSTOMERS")
                                }
                                else {
                                    alert("sorry, the information is not currently available")
                                }
                            }}
                            className="border border-white p-2 px-2 rounded-md text-white text-medium ml-[8px] bg-[#17153b] text-black font-bold" />
                    </form>
                </div>
                <div className="border bg-[#cbacd6] rounded-full  font-bold p-3 mt-9 flex justify-center">
                    <p className="font-bold">FREQUENTLY ASKED QUESTIONS</p>
                </div>
                <blockquote className="hidden md:grid grid-cols-1 gap-3 p-2 mt-2 lg:grid grid-cols-2 text-white">
                    <div>
                        <h1 className="text-2xl font-medium ">DISPATCH AND DELIVERY</h1>
                        <p className=""> →DE-ROCK MOTORS DO NOT DELIVER GOODS TO CUSTOMERS. BUSINESS IS PHYSICAL</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-medium ">PRICES</h1>
                        <p class=""> →THE PRICES OF GOODS ARE NOT FIXED, IT IS ALSO NEGOTIABLE</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-medium ">AUTHENTICITY</h1>
                        <p class="">  →DE-ROCK MOTORS SELL VERY AUTHENTIC GOODS TO CUSTOMERS</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-medium ">LOCATION</h1>
                        <p class="">  →DE-ROCK MOTORS IS LOCATED AT APO MECHANIC VILLAGE, JAPANESE LINE ABUJA</p>
                    </div>
                </blockquote>

                <div className="grid grid-cols-1 lg:hidden">
                    <blockquote className="">
                        <div className="border bg-white w-[full] font-bold p-3 mt-9 flex justify-center gap-3 ">
                            <h1 className="text-2xs font-medium text-[#17153b]">DISPATCH AND DELIVERY</h1>
                                <FaArrowRight onClick={() =>{
                                    const timer= document.getElementById("deliver");
                                    timer.classList.toggle("hidden")
                                }} className="text-black " />
                        </div>
                            <p className=" border bg-white w-[full] font-bold p-3 flex justify-center text-[#17153b] mb-2 hidden" id="deliver"> →DE-ROCK MOTORS DO NOT DELIVER GOODS TO CUSTOMERS. BUSINESS IS PHYSICAL</p>
                    </blockquote>
                </div>
                <div className="grid grid-cols-1 lg:hidden">
                    <blockquote className="">
                        <div className="border bg-white w-[full] font-bold p-3 flex justify-center gap-3 ">
                            <h1 className="text-2xs font-medium text-[#17153b]">PRICES</h1>
                            
                                <FaArrowRight onClick={() =>{
                                    const lin=document.getElementById("hanel")
                                    lin.classList.toggle("hidden")
                                }} className="text-black " />
                                
                        </div>
                            <p className=" border bg-white w-[full] font-bold p-3 flex justify-center text-[#17153b] mb-2 hidden " id="hanel"> →THE PRICES OF GOODS ARE NOT FIXED, IT IS ALSO NEGOTIABLE</p>
                    </blockquote>
                </div>
                <div className="grid grid-cols-1 lg:hidden">
                    <blockquote className="">
                        <div className="border bg-white w-[full] font-bold p-3 flex justify-center gap-3 ">
                            <h1 className="text-2xs font-medium text-[#17153b]">AUTHENTICITY</h1>
                                <FaArrowRight onClick={() =>{
                                const yun=document.getElementById("ter")
                                yun.classList.toggle("hidden")
                                } }className="text-black " />
                        </div>
                            <p className=" border bg-white w-[full] font-bold p-3 flex justify-center text-[#17153b] mb-2 hidden " id="ter"> →DE-ROCK MOTORS SELL VERY AUTHENTIC GOODS TO CUSTOMERS</p>
                    </blockquote>
                </div>
                <div className="grid grid-cols-1 lg:hidden">
                    <blockquote className="">
                        <div className="border bg-white w-[full] font-bold p-3 flex justify-center gap-3 ">
                            <h1 className="text-2xs font-medium text-[#17153b]">LOCATION</h1>
                                <FaArrowRight onClick={() => {
                                const fond=document.getElementById("mol")
                                fond.classList.toggle("hidden")
                                }} className="text-black " />
                        </div>
                            <p className=" border bg-white w-[full] font-bold p-3 flex justify-center text-[#17153b] mb-2 hidden " id="mol"> →DE-ROCK MOTORS IS LOCATED AT APO MECHANIC VILLAGE, JAPANESE LINE ABUJA</p> 
                    </blockquote>
                </div>

            </section>
        </main>

    )
}

