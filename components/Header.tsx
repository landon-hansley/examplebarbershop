'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Clock, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${isSticky ? 'sticky top-0 bg-white shadow-md' : 'bg-transparent'} transition-all duration-300 z-50`}>
      <div className="h-2 barber-pole-bg"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold font-lora text-[#2a4080] w-[296.75px]">
            Example Barber
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Gallery', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-[#2c3e6e] hover:text-[#b30000] transition-colors duration-200 font-roboto-slab relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#b30000] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-[#2c3e6e]">
              <Clock className="w-5 h-5" />
              <span className="font-roboto-slab text-sm">Mon-Sat: 9AM-7PM</span>
            </div>
            <Button variant="outline" className="bg-[#2a4080] text-white hover:bg-[#b30000] transition-colors duration-200">
              <Phone className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </div>

          <button
            className="md:hidden text-[#2a4080] hover:text-[#b30000] transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {['Home', 'Services', 'Gallery', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="block text-[#2c3e6e] hover:text-[#b30000] transition-colors duration-200 font-roboto-slab"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="flex items-center space-x-2 text-[#2c3e6e]">
                <Clock className="w-5 h-5" />
                <span className="font-roboto-slab text-sm">Mon-Sat: 9AM-7PM</span>
              </div>
              <Button variant="outline" className="w-full bg-[#2a4080] text-white hover:bg-[#b30000] transition-colors duration-200">
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

