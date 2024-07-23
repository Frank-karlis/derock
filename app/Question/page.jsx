

export default function Question(){
    return(
        <main>
            <section className="min:h-screen p-[10px] w-[100%]">
                <div className="items-center">
                    <h2 className="text-3xl text-center font-bold text-white md:text-5xl lg:text-5xl">GET HELP</h2>
                    <p className="text-2xl text-center font-medium text-white md:text-4xl lg:text-4xl">Get Answers to Your Questions</p>
                    <form className="flex justify-center mt-[12px]">
                        <input type="text" placeholder="What can i help you with" className="border rounded-full p-2 px-4 border-[#cbacd6] w-[300px] text-black " name="niv" />
                        <input type="submit" className="border border-white p-2 px-2 rounded-md text-white text-medium ml-[8px] bg-[#cbacd6] text-black font-bold" />
                    </form>
                </div>
            </section>
        </main>
    )
}