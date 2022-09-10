import React, { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

const styles = {
  menu: "text-center flex flex-col absolute w-full top-20 left-0 py-3 px-2 mr-2 space-y-3 font-bold z-50 border bg-[#262948] text-white",
  navLinks: "space-x-5 font-bold hidden md:flex mr-9",
  btn: "flex font-bold mr-9 md:hidden",
  menuIcon: "text-3xl relative",
}

function Navbar() {
  if (process.browser) {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  }

  const [showMenu, setShowMenu] = useState(false)

  let menu

  if (showMenu) {
    menu = (
      <div>
        <ul className={styles.menu}>
          <a href="/">
            <li>Home</li>
          </a>
          <hr />
          <a href="#events">
            <li>Attraction Of The Day</li>
          </a>
          <hr />
          <a href="/about-host">
            <li>About Host</li>
          </a>
        </ul>
      </div>
    )
  }

  return (
    <div className="sticky top-0">
      <div className="flex items-center justify-between bg-[#262948] text-white">
        <a href="/" className="flex title-font font-medium items-center">
          <img src="/assets/logo.svg" className="h-20 px-5" />
        </a>
        <div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-5">
            <a
              href="/"
              className="hidden md:flex mr-5 hover:text-[#262948] hover:bg-white p-1 rounded-md"
            >
              Home
            </a>
            <a
              href="#events"
              className="hidden md:flex mr-5 hover:text-[#262948] hover:bg-white p-1 rounded-md"
            >
              Attraction Of The Day
            </a>
            <a
              href="/about-host"
              className="hidden md:flex mr-5 hover:text-[#262948] hover:bg-white p-1 rounded-md"
            >
              About Host
            </a>
          </nav>
          <button className={styles.btn}>
            {showMenu ? (
              <CloseIcon
                className={styles.menuIcon}
                onClick={() => setShowMenu(!showMenu)}
              />
            ) : (
              <MenuIcon
                className={styles.menuIcon}
                onClick={() => setShowMenu(!showMenu)}
              />
            )}
          </button>
          {menu}
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Navbar
