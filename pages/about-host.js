import Head from "next/head"
import React from "react"

const About = () => {
  return (
    <div className="text-white bg-[#262948]">
      <Head>
        <title>About Host - Pravaah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex max-w-[1080px] items-center justify-center py-5 mx-auto">
        <a target="_blank" href="http://utu.ac.in/AMTICS/index.html">
          <img
            className="w-40 xl:w-56"
            src="/assets/amtics_logo.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="max-w-[1080px] mx-auto">
        <h1 className="text-3xl text-pink-500 py-5 px-3 lg:px-0">
          About AMTICS
        </h1>
        <hr className="px-3 lg:px-0" />
        <p className="py-5 px-3 lg:px-0">
          Asha M. Tarsadia Institute of Computer Science and Technology (AMTICs)
          is a constituent institute of Uka Tarsadia University, Maliba-Campus.
          AMTICs is established with a mission to persistently impart
          skill-based industry oriented technical education in the areas of
          Computer Science and Technology. The institute is committed to provide
          an open platform for diverse voices where the teaching-learning
          process is parallel to real-world applications. The student gets
          nurtured under well-experienced academicians, researchers, and
          industry experts who are dynamically involved and committed to tackle
          cutting-edge societal and technological problems around the globe.
        </p>
      </div>
      <div className="max-w-[1080px] mx-auto">
        <h1 className="text-3xl text-pink-500 py-5 px-3 lg:px-0">Vision</h1>
        <hr className="px-3 lg:px-0" />
        <p className="py-5 px-3 lg:px-0">
          Become cradle for innovation through nurturing excellence and
          imparting knowledge to handle and respond societal challenges.
        </p>
      </div>
      <div className="max-w-[1080px] mx-auto">
        <h1 className="text-3xl text-pink-500 py-5 px-3 lg:px-0">Mission</h1>
        <hr className="px-3 lg:px-0" />
        <p className="pt-5 px-3 lg:px-0">
          To become centre of excellence in the field of Computer Science and
          Technology by,
        </p>
        <ul className="list-disc pl-5 pb-5">
          <li>
            Fostering humanitarian values, Critical thinking, Creativity for
            problem solving in faculties and students.
          </li>
          <li>
            Establish innovation ecosystem through skill based technical
            education.
          </li>
          <li>
            Develop socially responsible highly skilled task force and future
            leaders to meet national challenges.
          </li>
        </ul>
      </div>
      <div className="max-w-[1080px] mx-auto">
        <h1 className="text-3xl text-pink-500 py-5 px-3 lg:px-0">
          Key Highlights of the Institute
        </h1>
        <hr className="px-3 lg:px-0" />
        <ul className="list-disc pl-5 py-5">
          <li>
            Students have the opportunity to undergo full-time industrial
            training for 6 months in well-known IT industries and government
            research institutions.
          </li>
          <li>
            The industry partnerships and collaborations open the opportunities
            for wide range of skill development.
          </li>
          <li>Students will get placement assurance in reputed industries.</li>
          <li>
            Students with good academic records have opportunity for
            participating in the student exchange program and get international
            exposure in countries like US, UK, Canada, and Germany.
          </li>
          <li>
            State-of-the-art modern IT infrastructure to keep pace with cutting
            edge technologies.
          </li>
          <li>
            Outcome based education with flexibility of Choice Based Credit
            System.
          </li>
          <li>
            Students have the opportunity to pursue specialization in emerging
            areas of computer science and technology.
          </li>
        </ul>
      </div>
      <div className="max-w-[1080px] mx-auto">
        <h1 className="text-3xl text-pink-500 py-5 px-3 lg:px-0">
          Our Minor/Honours Specializations
        </h1>
        <hr className="px-3 lg:px-0" />

        <ol className="list-decimal pl-5 py-5">
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Internet of Things (IoT)</li>
          <li>Cyber Security</li>
          <li>Full Stack Development</li>
          <li>Blockchain Technology</li>
          <li>Data Science</li>
          <li>Quantum Computing</li>
        </ol>
      </div>
      <div id="events" className="max-w-[1080px] mx-auto">
        <h1 className="text-3xl text-pink-500 py-5 px-3 lg:px-0">
          Previous Events
        </h1>
        <hr className="px-3 lg:px-0" />
        <ol className="list-decimal pl-5 py-5">
          <li>Utkarsh 2022</li>
        </ol>
      </div>
    </div>
  )
}

export default About
