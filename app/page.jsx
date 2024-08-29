import Image from "next/image"

export default function Home() {
  return (
    <main className="mt-1 px-2 py-4 md:px-12 lg:px-10 py-12 bg-[#17153b] text-white">
      <section className="min:h-screen p-[10px] w-[100%] ">
        <div className="item-center m-3 ">
          <div>
            <h2 className="text-3xl text-center font-bold text-white md:text-5xl lg:text-5xl"> DE-ROCK MOTORS</h2>
            <p className="text-2xl text-center font-medium text-white md:text-4xl lg:text-4xl"> Deals in Different car spare parts such as: Toyota, Nissan, Mistibushi, Ford, KiA, Hijet, Honda, Hyanda etc.</p>
          </div>
        </div>
        <div className="justify-evenly grid grid-cols-2 my-2 gap-3 lg:flex my-6">
          <Image
            width={400}
            height={400}
            src={"/Toyota.jpeg"}
            alt="car image"
            className="rounded-lg" />
          <Image
            width={400}
            height={400}
            src={"/ford.jpeg"}
            alt="car image"
            className="rounded-lg" />
          <Image
            width={400}
            height={400}
            src={"/hyanda.jpeg"}
            alt="car image"
            className="rounded-lg" />
          <Image
            width={400}
            height={400}
            src={"/ford 2.jpeg"}
            alt="car image"
            className="rounded-lg" />
        </div>
        <blockquote className="mt-5 p-2 m-1">
          <h2 className="text-2xs font-bold text-center md:text-3xl lg:text-4xl"><u>DE-ROCK MOTORS OFFERS THE FOLLOWING:</u> </h2>
          <ol className=" text-1xl md:text-2xl lg:text-2xl">
            <li> 1. DE-ROCK MOTORS deals in spare parts of cars(Toyota, Nissan, Mistibushi,Ford,KiA,Hijet etc.).</li>
            <li> 2. DE-ROCK MOTORS ensure good business environment</li>
            <li> 3. DE-ROCK MOTORS make sure the consumer always get the best of services </li>
          </ol>
        </blockquote>
        <div className="mt-6">
          <h3 className="text-2xs font-bold text-center md:text-3xl lg:text-4xl"><u>HERE ARE SOME SPARE PARTS FOR SALE</u></h3>
          <blockquote className=" justify-between mt-2 grid grid-cols-2 gap-3 lg:flex gap-5 mt-6">
            <Image
              width={300}
              height={300}
              src={"/brake pad display.jpg"}
              alt="car image"
              className="rounded-lg" />
            <Image
              width={300}
              height={350}
              src={"/car engine.jpg"}
              alt="car image"
              className="rounded-lg" />
            <Image
              width={200}
              height={20}
              src={"/fuel filter.jpg"}
              alt="car image"
              className="rounded-lg" />
            <Image
              width={200}
              height={200}
              src={"/crank shaft.jpg"}
              alt="car image"
              className="rounded-lg" />
          </blockquote>
        </div>
      </section>
    </main>
  )
}