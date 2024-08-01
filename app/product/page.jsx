import Image from "next/image";

export default function Product() {
    return (
        <main className="mt-1 px-2 md:px-12 lg:px-10 py-12 bg-gradient-to-b from-[#17153b] via-[#433d8b] to-[#17153b]">
            <section className="min:h-screen p-[10px] w-[100%]">
                <div>
                    <h2 className="text-3xl text-center font-bold text-white md:text-5xl lg:text-5xl"> DE-ROCK MOTORS</h2>
                    <p className=" mt-2 text-2xl text-center font-medium text-white md:text-4xl lg:text-4xl"> HERE ARE SPARE PARTS AND THEIR PRICES</p>
                </div>
                <div className="">
                    <h3 className="mt-2 text-2xs text-center font-medium text-white md:text-4xl lg:text-4xl"><span className="text-red-900">NOTE:</span><u>PLEASE NOTE THAT THE PRICES ARE NOT FIXED AND THEY ARE NOGOTIABLE AND ARE SOLD IN NAIRA(NGN)</u></h3>
                </div>
            </section>
            <section className="mt-7">
                <brake>
                    <h6 className="border w-[100%] bg-gray-700 p-4 text-center font-bold text-3xl "> BRAKE PADS</h6>
                </brake>
                <div className="grid grid-cols-2 m-2 gap-3 justify-evenly lg:grid-cols-4">
                    <div className="bg-gray-400 p-5 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/brake pad display.jpg"}
                            alt="car image"
                            className="rounded-lg" />
                        <h2 className="text-xl text-red-800 font-bold "> Name:<span className="text-black text-xs lg:text-xl">Sienna Brake Pad </span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N</span> </h3>
                        <p className="font-medium text-red-800 font-medium">Type: <span className="text-black"> </span></p>
                    </div>
                    <div className="bg-gray-400 p-5 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/brake pad display.jpg"}
                            alt="car image"
                            className="rounded-lg" />
                        <h2 className="text-2xl text-red-800 font-bold "> Name:<span className="text-black text-xs lg:text-xl">Sienna Brake Pad fdasssssssfffff </span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N</span> </h3>
                        <p className="font-medium text-red-800 font-medium">Type: <span className="text-black"> </span></p>
                    </div>
                    <div className="bg-gray-400 p-5 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/brake pad display.jpg"}
                            alt="car image"
                            className="rounded-lg" />
                        <h2 className="text-2xl text-red-800 font-bold "> Name:<span className="text-black text-xs lg:text-xl">Sienna Brake Pad </span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N</span> </h3>
                        <p className="font-medium text-red-800 font-medium">Type: <span className="text-black"> </span></p>
                    </div>
                    <div className="bg-gray-400 p-5 ">
                        <Image
                            width={300}
                            height={200}
                            src={"/brake pad display.jpg"}
                            alt="car image"
                            className="rounded-lg" />
                        <h2 className="text-xl text-red-800 font-bold "> Name:<span className="text-black text-xs lg:text-xl"> Sienna Brake Pad </span> </h2>
                        <h3 className="font-bold text-red-800"> Price:<span className="text-black">N</span> </h3>
                        <p className="text-red-800 font-medium">Type: <span className="text-black"> </span></p>
                    </div>
                   
                </div>

            </section>

        </main>
    )
}

{/* <div className="bg-gray-400 p-5 ">
                            <Image
                                width={200}
                                height={200}
                                src={"/crank shaft.jpg"}
                                alt="car image"
                                className="rounded-lg" />
                            <h2 className="text-2xl text-red-800 font-bold "> Name:<span className="text-black ">Sienna Gear Box </span> </h2>
                            <h3 className="font-bold text-red-800"> Price:<span className="text-black">N</span> </h3>
                            <p className="font-medium text-red-800 font-medium">Type: <span className="text-black"> </span></p>
                        </div> */}

// #cbacd6