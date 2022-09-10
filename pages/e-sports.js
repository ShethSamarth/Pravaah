import Head from "next/head"
import React from "react"
import Events from "../components/Events"

const ESports = () => {
  return (
    <div>
      <Head>
        <title>E-Sports - Pravaah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-white body-font bg-[#262948] overflow-hidden">
        <div className="container px-5 pt-24 mx-auto">
          <div className="lg:w-4/5 mx-auto justify-center flex flex-wrap">
            <div className="lg:w-1/2">
              <img
                alt=""
                className="lg:w-72 w-full mx-auto lg:h-auto h-64 object-contain rounded"
                src="/assets/4.png"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-5xl title-font font-medium mb-3">Overview</h1>
              <p className="leading-relaxed text-md lg:text-xl">
                Gaming is not a crime and we know it! Gaming is a skill, a
                sport, a thrilling emotion! Don’t hold back because this is the
                chance you get to showcase the skillful gamer inside you!
              </p>
              <h4 className="text-xl title-font font-medium py-2">
                Venue - GULAB BA COMPUTER LAB- AMTICS
              </h4>
              <h4 className="text-xl title-font font-medium">
                Faculty Coordinator:
              </h4>
              <p className="leading-relaxed text-md lg:text-xl">
                Mr. Vishvajit Bakrola
              </p>
              <div className="flex">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSca9js4llUEhTnXaaM5ivs4NaHfJsKlOyij8bWVkiq03eRarQ/viewform?usp=sf_link"
                  target="_blank"
                  className="flex lg:my-10 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Register Here
                </a>
              </div>
            </div>
            <div className="my-5">
              <div className="my-5">
                <h2 className="text-2xl title-font font-medium">
                  BGMI Showdown:
                </h2>
                <p className="leading-relaxed text-md lg:text-xl">
                  Indians! Gather in the battlegrounds and face your opponents.
                  Participate in the BattleGrounds Mobile India Showdown, be the
                  last man standing, and get the most awaited Surprise gift as
                  the WINNER!
                </p>
                <h4 className="text-xl title-font font-medium">
                  Event Coordinator:
                </h4>
                <p className="leading-relaxed text-md lg:text-xl">
                  1. Yuvraj Gupta - 8758777648
                </p>
                <div className="flex">
                  <a
                    href="https://docs.google.com/document/d/1mYraEtNSXZ82Xg_BUVd3HXcJCr436mSYWlUdCMxdG5I/edit?usp=sharing"
                    target="_blank"
                    className="flex lg:my-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    See Rules Here
                  </a>
                </div>
              </div>
              <div className="my-5">
                <h2 className="text-2xl title-font font-medium">
                  Valorant Immortal Clutch:
                </h2>
                <p className="leading-relaxed text-md lg:text-xl">
                  Bring in your squad and Aim to destroy your opponent. Show
                  your teamwork and go against other squads, climbing up the
                  ladder towards the IMMORTAL finals! Winning squad gets the
                  Prize!
                </p>
                <h4 className="text-xl title-font font-medium">
                  Event Coordinator:
                </h4>
                <p className="leading-relaxed text-md lg:text-xl">
                  1. Samarth Sheth - 9537685650
                </p>
                <div className="flex">
                  <a
                    href="https://docs.google.com/document/d/1Z5JtSZfyXGDUtoUhVlh01PZYBfTNGzPBqPwLR0IIsik/edit?usp=sharing"
                    target="_blank"
                    className="flex lg:my-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    See Rules Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Events />
    </div>
  )
}

export default ESports
