import Head from "next/head"
import React from "react"
import Events from "../components/Events"

const OutdoorEvents = () => {
  return (
    <div>
      <Head>
        <title>Outdoor Events - Pravaah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-white body-font bg-[#262948] overflow-hidden">
        <div className="container px-5 pt-24 mx-auto">
          <div className="lg:w-4/5 mx-auto justify-center flex flex-wrap">
            <div className="lg:w-1/2">
              <img
                alt=""
                className="lg:w-72 w-full mx-auto lg:h-auto h-64 object-contain rounded"
                src="/assets/2.png"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-5xl title-font font-medium mb-3">Overview</h1>
              <p className="leading-relaxed text-md lg:text-xl">
                A chance to display your technical skills outside the virtual
                constraints. Build your project, meet the requirements, and go
                head to head with other skilled builders in the Outdoor
                competitions!
              </p>
              <h4 className="text-xl title-font font-medium py-2">
                Venue - B-C Wing OTS AMTICS
              </h4>
              <h4 className="text-xl title-font font-medium">
                Faculty Coordinator:
              </h4>
              <p className="leading-relaxed text-md lg:text-xl">
                1. Mr. Kavindra Patel
                <br />
                2. Ms. Vibhuti Patel
              </p>
              <div className="flex">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdGguu-ai5mN-vu3Kt87v3AiLZC5QC1VzVf_wwsRYxd1vb9cQ/viewform?usp=sf_link"
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
                  Water Walker:
                </h2>
                <p className="leading-relaxed text-md lg:text-xl">
                  No professional equipment, limited resources, limited time,
                  and one single goal: WIN,
                  <br />
                  Build a boat from scratch and Race against the other boaters!
                  Propel your boat through the water, taking you closer to the
                  Prize!
                </p>
                <h4 className="text-xl title-font font-medium">
                  Event Coordinator:
                </h4>
                <p className="leading-relaxed text-md lg:text-xl">
                  1. Aditya Rajpurohit - 9428456057
                  <br />
                  2. Ridham Patel - 9664752411
                </p>
                <div className="flex">
                  <a
                    href="https://docs.google.com/document/d/17Y7w0rg1UettUk9ttxHQW7p1kInvAj8SRAbzisUto_k/edit?usp=sharing"
                    target="_blank"
                    className="flex lg:my-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    See Rules Here
                  </a>
                </div>
              </div>
              <div className="my-5">
                <h2 className="text-2xl title-font font-medium">Rocketery:</h2>
                <p className="leading-relaxed text-md lg:text-xl">
                  Always look up, aim high, at least that is what our teachers
                  taught us… So now is the chance to apply it and build a Rocket
                  that goes as high as the eye can see! Make a rocket, give it a
                  huge flight and take home a great prize!
                </p>
                <h4 className="text-xl title-font font-medium">
                  Event Coordinator:
                </h4>
                <p className="leading-relaxed text-md lg:text-xl">
                  1. Mayank Sharma - 9904051493
                  <br />
                  2. Dhyan Moradiya - 7405353884
                </p>
                <div className="flex">
                  <a
                    href="https://docs.google.com/document/d/1mlOh9JDLOCpnix1rHTcgsrutOHdLEIHQM8khNXoj3sc/edit?usp=sharing"
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

export default OutdoorEvents
