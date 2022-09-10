import Head from "next/head"
import React from "react"
import Events from "../components/Events"

const CodeCompi = () => {
  return (
    <div>
      <Head>
        <title>Coding Competitons - Pravaah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-white body-font bg-[#262948] overflow-hidden">
        <div className="container px-5 pt-24 mx-auto">
          <div className="lg:w-4/5 mx-auto  justify-center flex flex-wrap">
            <div className="lg:w-1/2">
              <img
                alt=""
                className="lg:w-72 w-full mx-auto lg:h-auto h-64 object-contain rounded"
                src="/assets/1.png"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-5xl title-font font-medium mb-3">Overview</h1>
              <p className="leading-relaxed text-md lg:text-xl">
                Real world challenges, Programs loaded with disgusting errors, a
                thrilling challenge where you go up against a disadvantage… If
                the above lines managed to arouse a feeling of curiosity within
                you, think no more and register NOW for the Coding Competitions
              </p>
              <h4 className="text-xl title-font font-medium py-2">
                Venue - GULAB BA COMPUTER LAB - AMTICS
              </h4>
              <h4 className="text-xl title-font font-medium">
                Faculty Coordinator:
              </h4>
              <p className="leading-relaxed text-md lg:text-xl">
                1. Ms. Ankita Desai
                <br />
                2. Ms. Snehal Kathale
                <br />
                3. Mr. Darshan Chauhan
              </p>
              <div className="flex">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc_R4ATPnDd73fHsESRr-sKxPKS494EAjuQ8Rnfa18zGNMiyw/viewform?usp=sf_link"
                  target="_blank"
                  className="flex lg:mt-10 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Register Here
                </a>
              </div>
            </div>
            <div className="my-5">
              <div className="my-5">
                <h2 className="text-2xl title-font font-medium">Blind Code:</h2>
                <p className="leading-relaxed text-md lg:text-xl">
                  A thrilling blinded adventure through the dark side of
                  competitive programming, quite literally! The Blind Code event
                  will temporarily disable you from vision. Your brain and your
                  fingers will be the only thing helping you code your way
                  towards the exciting prizes and certificates.
                </p>
                <h4 className="text-xl title-font font-medium">
                  Event Coordinator:
                </h4>
                <p className="leading-relaxed text-md lg:text-xl">
                  1. Mayur Solanki - 7359922725
                  <br />
                  2. Rishabh Dwivedi - 9558890869
                </p>
                <div className="flex">
                  <a
                    href="https://docs.google.com/document/d/1tAnqDUO-1g82hvPSJNueGTqSIxAF6GfUxNIrOi96Rc4/edit?usp=sharing"
                    target="_blank"
                    className="flex lg:my-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    See Rules Here
                  </a>
                </div>
              </div>
              <div className="my-5">
                <h2 className="text-2xl title-font font-medium">Error Hunt:</h2>
                <p className="leading-relaxed text-md lg:text-xl">
                  Are you a perfectionist? If you aren’t, you really need to
                  become one and hunt for those dreaded errors which will be
                  littered throughout the code presented to you, and it is now
                  your responsibility to eradicate those errors and execute the
                  code to win exciting prizes and certificates!
                </p>
                <h4 className="text-xl title-font font-medium">
                  Event Coordinator:
                </h4>
                <p className="leading-relaxed text-md lg:text-xl">
                  1. Rakesh Shah - 8511276458
                  <br />
                  2. Purv Joshi - 9327855143
                </p>
                <div className="flex">
                  <a
                    href="https://docs.google.com/document/d/183CAZ3g0t0GJO1ZFa_1rEf0KLW-ER4u0OQczrfojzPQ/edit?usp=sharing"
                    target="_blank"
                    className="flex lg:my-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    See Rules Here
                  </a>
                </div>
              </div>
              <div className="my-5">
                <h2 className="text-2xl title-font font-medium">
                  Problem Solving:
                </h2>
                <p className="leading-relaxed text-md lg:text-xl">
                  Start the engine inside your head and pump out solutions to
                  exciting coding problems! Compete with other participants and
                  take home an Exciting prize and certificates!
                </p>
                <h4 className="text-xl title-font font-medium">
                  Event Coordinator:
                </h4>
                <p className="leading-relaxed text-md lg:text-xl">
                  1. Dhruv Patel - 9106033690
                  <br />
                  2. Shrut Makadiya - 7622905889
                </p>
                <div className="flex">
                  <a
                    href="https://docs.google.com/document/d/1ncPImCLT3cEcti4zWtYFCauAxA8Hg__KZKFThg_rl4w/edit?usp=sharing"
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

export default CodeCompi
