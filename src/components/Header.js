import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [animateHeader, setAnimateHeader] = useState(false)

  useEffect(() => {
    setAnimateHeader(true)
  }, [])

  return (
    <header
      className={`flex justify-between items-center px-5 py-3 bg-primary shadow-xl transition-all duration-700 perspective-1000 transform-gpu ${
        animateHeader ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 -translate-y-5 rotate-x-12'
      }`}
    >
      {/* Logo with animated gradient */}
      <a
        className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 animate-text-glow tracking-wide"
        href="#"
      >
        Dhamayanthi M
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-white font-medium">
          {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
            <li
              key={item}
              className="hover:text-yellow-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
            >
              <a href={`/${item === 'Home' ? '' : '#' + item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      {toggleMenu && (
        <nav className="absolute top-full left-0 w-full bg-gray-800/90 backdrop-blur-md overflow-hidden transition-all duration-700 ease-in-out transform-gpu translate-z-0 md:hidden z-40">
          <ul
            onClick={() => setToggleMenu(false)}
            className="flex flex-col items-center py-4 space-y-4 text-white animate-fade-in"
          >
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <li
                key={item}
                className="hover:text-yellow-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
              >
                <a href={`/${item === 'Home' ? '' : '#' + item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden z-50 transition-transform duration-300 hover:scale-110"
      >
        <Bars3Icon className="text-white h-6 w-6" />
      </button>
    </header>
  )
}