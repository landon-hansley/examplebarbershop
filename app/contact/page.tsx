'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to a server
  }

  return (
    <div className="min-h-screen bg-[#e6e9f0]">
      <div className="relative py-16 bg-[#2a4080]">
        <Image
          src="/Hero.jpg"
          alt="Vintage barbershop interior"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-10 sepia"
        />
        <div className="relative container mx-auto px-6 text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            Get in touch for appointments, inquiries, or to learn more about our services
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#2a4080] mb-6">Get in Touch</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-6 h-6 text-[#b30000] mr-2" />
                <span className="text-[#2c3e6e]">123 Barber Street, Cityville, ST 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 text-[#b30000] mr-2" />
                <span className="text-[#2c3e6e]">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-6 h-6 text-[#b30000] mr-2" />
                <span className="text-[#2c3e6e]">info@examplebarbershop.com</span>
              </li>
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-[#2a4080] mb-4">Opening Hours</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-[#b30000] mr-2" />
                  <span className="text-[#2c3e6e]">Monday - Friday: 9am - 7pm</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-[#b30000] mr-2" />
                  <span className="text-[#2c3e6e]">Saturday: 10am - 6pm</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-[#b30000] mr-2" />
                  <span className="text-[#2c3e6e]">Sunday: Closed</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#2a4080] mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2c3e6e] mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-[#2c3e6e] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2a4080]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2c3e6e] mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-[#2c3e6e] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2a4080]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2c3e6e] mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-[#2c3e6e] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#2a4080]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#b30000] text-white px-6 py-2 rounded-sm hover:bg-[#a52a2a] transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#2a4080] py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Shop</h2>
          <p className="text-xl mb-8 font-light max-w-2xl mx-auto">
            Experience the ambiance of our vintage-inspired barbershop. Walk-ins are welcome, but appointments are recommended.
          </p>
          <div className="h-96 bg-[#e6e9f0] rounded-sm">
            {/* Replace this div with an actual map component */}
            <div className="h-full flex items-center justify-center">
              <span className="text-[#2a4080] font-medium">Map placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

