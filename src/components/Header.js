import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [animateHeader, setAnimateHeader] = useState(false)

  useEffect(() => {
    setAnimateHeader(true)
  }, [])

  // Smooth scroll + close menu
  const handleNavClick = (id) => {
    setToggleMenu(false)

    if (id === '#home') {
      // Scroll smoothly to the top for "Home"
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const section = document.querySelector(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 py-4 bg-primary/90 backdrop-blur-md shadow-md border-b border-white/10 transition-all duration-700 ${
        animateHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
      }`}
    >
      {/* Logo */}
      <a
        className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 tracking-wide cursor-pointer"
        onClick={() => handleNavClick('#home')}
      >
        <span className="text-2xl font-extrabold tracking-wide text-white">DM</span>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-white font-medium">
          {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
            <li
              key={item}
              className="hover:text-yellow-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110"
            >
              <button
                onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                className="focus:outline-none"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden z-50 transition-transform duration-300 hover:scale-110"
      >
        {toggleMenu ? (
          <XMarkIcon className="text-white h-7 w-7" />
        ) : (
          <Bars3Icon className="text-white h-7 w-7" />
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute left-0 top-full w-full backdrop-blur-xl bg-gray-900/85 border-t border-white/10 rounded-b-2xl shadow-lg transition-all duration-500 ease-in-out md:hidden ${
          toggleMenu
            ? 'max-h-[500px] opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-2'
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center py-6 space-y-5 text-white font-semibold tracking-wide">
          {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
            <li
              key={item}
              className="w-full text-center py-3 hover:text-yellow-300 hover:bg-white/10 rounded-lg transition duration-300"
            >
              <button
                onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                className="w-full"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
