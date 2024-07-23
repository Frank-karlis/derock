
export default function Product() {
    return (
        <main className="mt-1 px-2 md:px-12 lg:px-16 py-12 bg-gradient-to-b from-[#17153b] via-[#433d8b] to-[#17153b]">
            <section className="min:h-screen p-[10px] w-[100%]">
                <div>
                    <h2 className="text-3xl text-center font-bold text-white md:text-5xl lg:text-5xl"> DE-ROCK MOTORS</h2>
                    <p className=" mt-2 text-2xl text-center font-medium text-white md:text-4xl lg:text-4xl"> HERE ARE SPARE PARTS AND THEIR PRICES</p>
                </div>
                <div className="">
                    <h3 className="mt-2 text-2xs text-center font-medium text-white md:text-4xl lg:text-4xl"><span className="text-red-900">NOTE:</span><u>PLEASE NOTE THAT THE PRICES ARE NOT FIXED AND THEY ARE NOGOTIABLE</u></h3>
                </div>
            </section>
        </main>
    )
}