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
    // Find section ignoring case
    const section = document.querySelector(id.toLowerCase())
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`flex justify-between items-center px-5 py-3 bg-primary shadow-lg transition-all duration-700 transform-gpu ${
        animateHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
      }`}
    >
      {/* Logo */}
      <a
        className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 tracking-wide"
        href="#home"
      >
        <span className="text-2xl font-extrabold tracking-wide text-white">DM</span>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-white font-medium">
          {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
            <li
              key={item}
              className="hover:text-yellow-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
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
        className={`absolute top-full left-0 w-full bg-gray-800/95 backdrop-blur-md rounded-b-2xl shadow-lg transition-all duration-500 ease-in-out md:hidden overflow-hidden ${
          toggleMenu
            ? 'max-h-64 opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-2'
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-3 text-white font-medium">
          {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
            <li
              key={item}
              className="w-full text-center py-2 hover:text-yellow-300 hover:bg-gray-700/50 rounded-md transition duration-300"
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
