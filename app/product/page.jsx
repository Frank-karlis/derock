"use client"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Product() {
    return (
        <main className="mt-1 px-2 md:px-12 lg:px-10 py-12 bg-gradient-to-b from-[#17153b] via-[#433d8b] to-[#17153b]">
            <section className="min:h-screen p-[10px] w-[100%]">
                <div>
                    <h2 className="text-3xl text-center font-bold text-white md:text-5xl lg:text-5xl"> DE-ROCK MOTORS</h2>
                    <p className=" mt-2 text-2xl text-center font-medium text-white md:text-4xl lg:text-4xl"> HERE ARE SPARE PARTS AND THEIR PRICES</p>
                </div>
                <div className="">
                    <h3 className="mt-2 text-2xs text-center font-medium text-white md:text-4xl lg:text-4xl"><span className="text-red-900">NOTE:</span><u>PLEASE NOTE THAT THE PRICES ARE NOT FIXED <span>(THEY ARE NEGOTIABLE)</span> AND ARE SOLD IN NAIRA(NGN)</u></h3>
                </div>
            </section>
            <section className="mt-7">
            <div className="border bg-gray-700 w-[full] font-bold p-3 mt-9 flex justify-evenly gap-3 ">
                    <h6 className="text-white font-bold text-3xl "> BRAKE PADS </h6>  
                   <button> <FaArrowRight onClick={() =>{
                                    const tem= document.getElementById("nam");
                                    tem.classList.toggle("hidden")
                                }} className="text-white font-bold text-3xl " /></button>
                </div>
                <div>
                <div className="grid grid-cols-2 m-2 gap-3 justify-evenly lg:grid-cols-4">
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/v8 pad.jpeg"}
                            alt="car image" 
                            className="rounded-lg" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl"> Name:<span className="text-black text-xs lg:text-xl">Highlander V8 Brake Pad</span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N55,000</span> </h3>
                        <p className="font-medium text-red-800 font-medium">Type: <span className="text-black font-bold"> BRISCO</span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/H15.jpeg"}
                            alt="car image"
                            className="rounded-lg" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl"> Name:<span className="text-black text-xs lg:text-xl">Hillux 2015 Brake Pad </span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N54,000</span> </h3>
                        <p className="font-medium text-red-800 font-medium">Type: <span className="text-black font-bold">BRISCO</span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/fel.jpeg"}
                            alt="car image"
                            className="rounded-lg" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl "> Name:<span className="text-black text-xs lg:text-xl">Ford Explorer Front Brake Pad </span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N35,000</span> </h3>
                        <p className="font-medium text-red-800 font-medium">Type: <span className="text-black font black"> </span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/bfel.jpeg"}
                            alt="car image"
                            className="rounded-lg" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl"> Name:<span className="text-black text-xs lg:text-xl">Ford Explorer Back Brake Pad </span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N25,000</span> </h3>
                        <p className="font-medium text-red-800 font-medium">Type: <span className="text-black font black"> </span></p>
                    </div>
                    </div>
                    <div className="hidden grid grid-cols-2 m-2 gap-3 justify-evenly lg:grid-cols-4" id="nam">
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/bfel.jpeg"}
                            alt="car image"
                            className="rounded-lg" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl"> Name:<span className="text-black text-xs lg:text-xl">Ford Explorer Back Brake Pad </span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N25,000</span> </h3>
                        <p className="font-medium text-red-800 font-medium">Type: <span className="text-black font black"> </span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={0}
                            src={"/L570.jpeg"}
                            alt="car image"
                            className="rounded-lg h-[50%] w-[65%]" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl "> Name:<span className="text-black text-xs lg:text-xl"> Lexus 570 Brake pad</span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N60,000</span> </h3>
                        <p className="text-red-800 font-medium">Type: <span className="text-black font-bold"> BRISCO</span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={0}
                            src={"/excal front .jpg"}
                            alt="car image"
                            className="rounded-lg" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl "> Name:<span className="text-black text-xs lg:text-xl"> Ford Excalade Front Brake Pad</span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N30,000</span> </h3>
                        <p className="text-red-800 font-medium">Type: <span className="text-black font-bold"> </span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={0}
                            src={"/excal back.jpg"}
                            alt="car image"
                            className="rounded-lg" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl "> Name:<span className="text-black text-xs lg:text-xl"> Ford Excalade Back Brake Pad</span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N28,000</span> </h3>
                        <p className="text-red-800 font-medium">Type: <span className="text-black font-bold"> </span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={0}
                            src={"/range 214.jpg"}
                            alt="car image"
                            className="rounded-lg h-[50%] w-[65%]" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl "> Name:<span className="text-black text-xs lg:text-xl"> Range Rover Sport 2014 Brake Pad</span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N40,000</span> </h3>
                        <p className="text-red-800 font-medium">Type: <span className="text-black font-bold"> </span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={0}
                            src={"/Camry 210 1.jpg"}
                            alt="car image"
                            className="rounded-lg h-[40%] w-[70%]" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl "> Name:<span className="text-black text-xs lg:text-xl">Toyota Camry 2010 Front Brake Pad</span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N20,000</span> </h3>
                        <p className="text-red-800 font-medium">Type: <span className="text-black font-bold"> </span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={0}
                            src={"/Camry 210 back.jpg"}
                            alt="car image"
                            className="rounded-lg h-[50%] w-[65%]" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl "> Name:<span className="text-black text-xs lg:text-xl">Toyota Camry 2010 Back Brake Pad</span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N15,000</span> </h3>
                        <p className="text-red-800 font-medium">Type: <span className="text-black font-bold"> </span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={0}
                            src={"/prado 2010.jpg"}
                            alt="car image"
                            className="rounded-lg h-[50%] w-[65%]" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl "> Name:<span className="text-black text-xs lg:text-xl">Prado 2010 Front and back brake pad </span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N15,000 and N10,000</span> </h3>
                        <p className="text-red-800 font-medium">Type: <span className="text-black font-bold"> </span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={0}
                            src={"/Corolla 212.jpg"}
                            alt="car image"
                            className="rounded-lg" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl "> Name:<span className="text-black text-xs lg:text-xl">Toyota Corolla 2012 </span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N</span> </h3>
                        <p className="text-red-800 font-medium">Type: <span className="text-black font-bold"> </span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={0}
                            src={"/ld cru 221.jpg"}
                            alt="car image"
                            className="rounded-lg" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl "> Name:<span className="text-black text-xs lg:text-xl">Land Cruiser V8 2021 Brake Pad </span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N28,000</span> </h3>
                        <p className="text-red-800 font-medium">Type: <span className="text-black font-bold"> </span></p>
                    </div>                 
                    </div>
                </div>

            </section>
            {/* // ================================= wATER PUMP========================== */}
            <section className="mt-7">
                <pump>
                    <h6 className="border w-[100%] bg-gray-700 p-4 text-center font-bold text-3xl "> WATER PUMP</h6>
                </pump>
                <div className="grid grid-cols-2 m-2 gap-3 justify-evenly lg:grid-cols-4">
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/1mz.jpg"}
                            alt="car image"
                            className="rounded-lg h-[50%] w-[65%]" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl"> Name:<span className="text-black text-xs lg:text-xl">1MZ /3MZ</span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N18,000</span> </h3>
                        <p className="font-medium text-red-800 font-medium">Type: <span className="text-black font-bold"> </span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/2Az.jpg"}
                            alt="car image"
                            className="rounded-lg h-[50%] w-[65%]" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl"> Name:<span className="text-black text-xs lg:text-xl">2AZ</span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N15,000</span> </h3>
                        <p className="font-medium text-red-800 font-medium">Type: <span className="text-black font-bold"> </span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/1gr.jpg"}
                            alt="car image"
                            className="rounded-lg h-[70%] w-[70%]" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl"> Name:<span className="text-black text-xs lg:text-xl">1GR</span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N25,000</span> </h3>
                        <p className="font-medium text-red-800 font-medium">Type: <span className="text-black font-bold"> </span></p>
                    </div>
                </div>

            </section>

            {/* // ================================= FUEL FILTER========================== */}
            <section className="mt-7">
                <pump>
                    <h6 className="border w-[100%] bg-gray-700 p-4 text-center font-bold text-3xl "> FUEL FILTER</h6>
                </pump>
                <div className="grid grid-cols-2 m-2 gap-3 justify-evenly lg:grid-cols-4">
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/C2FP.jpg"}
                            alt="car image"
                            className="rounded-lg h-[50%] w-[65%]" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl"> Name:<span className="text-black text-xs lg:text-xl">COROLLA 2010 FUEL FILTER</span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N10,000</span> </h3>
                        <p className="font-medium text-red-800 font-medium">Type: <span className="text-black font-bold">FMS </span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/lcfp.jpg"}
                            alt="car image"
                            className="rounded-lg h-[50%] w-[65%]" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl"> Name:<span className="text-black text-xs lg:text-xl">LAND CRUISER V8 FUEL FILTER</span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N10,000</span> </h3>
                        <p className="font-medium text-red-800 font-medium">Type: <span className="text-black font-bold">FMS </span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/2TR.jpg"}
                            alt="car image"
                            className="rounded-lg h-[50%] w-[65%]" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl"> Name:<span className="text-black text-xs lg:text-xl">HILLIUX 2TR FUEL FILTER </span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N8,000</span> </h3>
                        <p className="font-medium text-red-800 font-medium">Type: <span className="text-black font-bold"> </span></p>
                    </div>
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/vfp.jpg"}
                            alt="car image"
                            className="rounded-lg h-[50%] w-[65%]" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl"> Name:<span className="text-black text-xs lg:text-xl">VENZA FUEL FILTER </span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N8,000</span> </h3>
                        <p className="font-medium text-red-800 font-medium">Type: <span className="text-black font-bold"> </span></p>
                    </div>
                </div>

            </section>

            {/* // ================================= FUEL PUMP========================== */}
            <section className="mt-7">
                <pump>
                    <h6 className="border w-[100%] bg-gray-700 p-4 text-center font-bold text-3xl "> FUEL PUMP</h6>
                </pump>
                <div className="grid grid-cols-2 m-2 gap-3 justify-evenly lg:grid-cols-4">
                    <div className="bg-gray-400 p-2 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/Elect FP.jpg"}
                            alt="car image"
                            className="rounded-lg h-[50%] w-[65%]" />
                        <h2 className="text-xs text-red-800 font-bold lg:text-xl"> Name:<span className="text-black text-xs lg:text-xl">ELECTRIC FUEL PUMP</span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N25,000</span> </h3>
                        <p className="font-medium text-red-800 font-medium">Type: <span className="text-black font-bold"> </span></p>
                    </div>
                </div>

            </section>
        </main >
    )
}

{/* <div className="bg-gray-400 p-5 ">
                        //     <Image
                        //         width={200}
                        //         height={200}
                        //         src={"/crank shaft.jpg"}
                        //         alt="car image"
                        //         className="rounded-lg" />
                        //     <h2 className="text-2xl text-red-800 font-bold "> Name:<span className="text-black ">Sienna Gear Box </span> </h2>
                        //     <h3 className="font-bold text-red-800"> Price:<span className="text-black">N</span> </h3>
                        //     <p className="font-medium text-red-800 font-medium">Type: <span className="text-black"> </span></p>
                        // </div> */}

// #cbacd6