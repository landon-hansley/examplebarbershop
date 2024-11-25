import { Scissors, BeakerIcon as Beard, Droplet, Package, BabyIcon as Child, UserCheck } from 'lucide-react'
import Image from 'next/image'

const services = [
  { name: 'Classic Haircut', price: '$25', description: 'Precision cut tailored to your style', icon: Scissors },
  { name: 'Beard Trim', price: '$15', description: 'Shape and style your beard to perfection', icon: Beard },
  { name: 'Hot Towel Shave', price: '$30', description: 'Luxurious traditional straight razor shave', icon: Droplet },
  { name: 'Hair & Beard Combo', price: '$35', description: 'Complete grooming package', icon: Package },
  { name: 'Kids Haircut', price: '$20', description: 'Gentle cuts for our younger clients', icon: Child },
  { name: 'Senior Haircut', price: '$20', description: 'Respectful service for our distinguished clients', icon: UserCheck },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-[#e6e9f0]">
      <div className="relative py-16 bg-[#2a4080]">
        <Image
          src="/VintageBarberTools.jpg"
          alt="Vintage barbershop tools"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-10 sepia"
        />
        <div className="relative container mx-auto px-6 text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            Experience the art of classic grooming with our range of premium services
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#b30000]">
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-[#2a4080] mr-3" />
                <h2 className="text-2xl font-bold text-[#2a4080]">{service.name}</h2>
              </div>
              <p className="text-[#2c3e6e] mb-4 font-light">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-[#b30000]">{service.price}</span>
                <button className="bg-[#2a4080] text-white px-4 py-2 rounded-sm hover:bg-[#3a5085] transition-colors font-medium">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#b30000] py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Fresh Look?</h2>
          <p className="text-xl mb-8 font-light max-w-2xl mx-auto">
            Our experienced barbers are here to provide you with the best grooming experience. Book your appointment today and step into the world of classic style.
          </p>
          <button className="bg-white text-[#b30000] px-8 py-3 rounded-sm hover:bg-[#e6e9f0] transition-colors font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

