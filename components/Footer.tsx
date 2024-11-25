import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#2a4080] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-lora mb-4">Example Barber Shop</h3>
            <p className="font-roboto-slab text-sm">Where classic style meets modern expertise</p>
          </div>
          <div>
            <h4 className="text-lg font-bold font-lora mb-4">Quick Links</h4>
            <ul className="space-y-2 font-roboto-slab">
              <li><Link href="/" className="hover:text-[#b30000] transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#b30000] transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-[#b30000] transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-[#b30000] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold font-lora mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#b30000] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#b30000] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-[#b30000] transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center font-roboto-slab text-sm">
          <p>&copy; {new Date().getFullYear()} Example Barber Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

