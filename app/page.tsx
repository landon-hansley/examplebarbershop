import Image from 'next/image'
import Link from 'next/link'
import { Scissors, Clock, MapPin } from 'lucide-react'
import Hero from '../public/Hero.jpg'

export default function Home() {
  return (
    <div className="relative">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={Hero}
          alt="Vintage barber shop interior"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 sepia"
        />
        <div className="absolute inset-0 bg-[#2a4080] bg-opacity-70 z-10"></div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Example Barber Shop
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md font-light">
            Where classic style meets modern expertise
          </p>
          <Link href="/services" className="inline-block bg-[#b30000] text-white px-8 py-3 rounded-sm hover:bg-[#a52a2a] transition-colors border-2 border-[#b22222] hover:border-[#a52a2a] font-medium">
            Book Your Experience
          </Link>
        </div>
      </section>

      <section className="py-16 bg-[#e6e9f0]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2a4080]">Craftsmanship in Every Cut</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Scissors, title: 'Expert Cuts', description: 'Precision haircuts tailored to your style and face shape' },
              { icon: Clock, title: 'Timeless Techniques', description: 'Traditional barbering methods with a modern twist' },
              { icon: MapPin, title: 'Classic Ambiance', description: 'Step into a world of vintage charm and relaxation' }
            ].map((service, index) => (
              <div key={index} className="bg-[#e6e9f0] p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#b30000]">
                <service.icon className="w-12 h-12 text-[#2c3e6e] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-center text-[#2a4080]">{service.title}</h3>
                <p className="text-[#2c3e6e] text-center font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#2a4080] text-white relative overflow-hidden">
        <Image
          src="/VintageBarberTools.jpg"
          alt="Vintage barber tools"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-10 sepia"
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">The Example Barber Shop Experience</h2>
            <p className="text-xl mb-8 font-light">
              Step into our shop and travel back in time. Enjoy a complimentary drink while our master barbers work their magic.
            </p>
            <Link href="/gallery" className="inline-block bg-white text-[#2a4080] px-8 py-3 rounded-sm hover:bg-[#e6e9f0] transition-colors font-medium">
              View Our Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#e6e9f0]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2a4080]">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'John D.', quote: 'Best haircut I\'ve ever had. The attention to detail is unmatched.' },
              { name: 'Mike S.', quote: 'Love the ambiance. It\'s like stepping into a different era.' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-md border-l-4 border-[#b30000]">
                <p className="text-[#2c3e6e] mb-4 italic font-light">"{testimonial.quote}"</p>
                <p className="text-[#2a4080] font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#b30000] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Classic Cut?</h2>
          <p className="text-xl mb-8 font-light">Experience the Example Barber Shop difference. Book your appointment today.</p>
          <Link href="/contact" className="inline-block bg-white text-[#b30000] px-8 py-3 rounded-sm hover:bg-[#e6e9f0] transition-colors border-2 border-white hover:border-[#e6e9f0] font-medium">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

