import React from "react"

const Events = () => {
  return (
    <section className="text-white body-font pb-10 bg-[#262948]">
      <h2
        id="events"
        className="text-center lg:text-5xl text-3xl font-medium title-font mb-6"
      >
        Events
      </h2>
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 mx-auto md:w-1/2 xl:w-1/4 sm:mb-0">
            <div className="rounded-lg h-96 w-72 overflow-hidden">
              <a href="/coding-competition">
                <img
                  alt="content"
                  className="object-contain object-center h-full w-full"
                  src="/assets/1.png"
                />
              </a>
            </div>
          </div>
          <div className="p-4 mx-auto md:w-1/2 xl:w-1/4 sm:mb-0">
            <div className="rounded-lg h-96 w-72 overflow-hidden">
              <a href="/outdoor-events">
                <img
                  alt="content"
                  className="object-contain object-center h-full w-full"
                  src="/assets/2.png"
                />
              </a>
            </div>
          </div>
          <div className="p-4 mx-auto md:w-1/2 xl:w-1/4 sm:mb-0">
            <div className="rounded-lg h-96 w-72 overflow-hidden">
              <a href="/fun-zone">
                <img
                  alt="content"
                  className="object-contain object-center h-full w-full"
                  src="/assets/3.png"
                />
              </a>
            </div>
          </div>
          <div className="p-4 mx-auto md:w-1/2 xl:w-1/4 sm:mb-0">
            <div className="rounded-lg h-96 w-72 overflow-hidden">
              <a href="/e-sports">
                <img
                  alt="content"
                  className="object-contain object-center h-full w-full"
                  src="/assets/4.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <h2
        id="events"
        className="text-center text-3xl font-medium title-font mt-10 mb-5"
      >
        A registration desk shall be set up in the BC wing for the collection of
        payments.
      </h2>
    </section>
  )
}

export default Events
