import Head from "next/head"
import React from "react"
import Events from "../components/Events"

const FunZone = () => {
  return (
    <div>
      <Head>
        <title>Fun Zone - Pravaah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-white body-font bg-[#262948] overflow-hidden">
        <div className="container px-5 pt-24 mx-auto">
          <div className="lg:w-4/5 pb-20 mx-auto justify-center flex flex-wrap">
            <div className="lg:w-1/2">
              <img
                alt=""
                className="lg:w-72 w-full mx-auto lg:h-auto h-64 object-contain rounded"
                src="/assets/3.png"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:pt-6 mt-6 lg:mt-0">
              <h1 className="text-5xl title-font font-medium mb-5">Fun Zone</h1>
              <div className="flex">
                <a
                  href="https://docs.google.com/document/d/1gGgiyXKtRCMGl8gA06riNrQjp4HSDsFuMWtWfk45S1U/edit?usp=sharing"
                  target="_blank"
                  className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  More Details
                </a>
              </div>
              <h4 className="text-xl title-font font-medium pt-5 pb-2">
                Venue - B-C Wing OTS AMTICS
              </h4>
              <div className="space-y-2">
                <div>
                  <h4 className="text-xl title-font font-medium">
                    Faculty Coordinator:
                  </h4>
                  <p className="leading-relaxed text-md lg:text-xl">
                    Ms. Ekta Atodariya
                  </p>
                </div>
                <div>
                  <h4 className="text-xl title-font font-medium">
                    Event Coordinator:
                  </h4>
                  <p className="leading-relaxed text-md lg:text-xl">
                    1. Asmi Patel
                    <br />
                    2. Priya Patel
                    <br />
                    3. Jignasha Patil
                    <br />
                    4. Khushi Rana
                    <br />
                    5. Dikshita Darji
                    <br />
                    6. Feni Kothadiya
                  </p>
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

export default FunZone
