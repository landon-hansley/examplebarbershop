import Image from 'next/image'

const galleryImages = [
  { src: '/ClassicCut.jpg', alt: 'Classic haircut' },
  { src: '/BeardTrim.jpg', alt: 'Beard trim' },
  { src: '/HotTowelShave.jpg', alt: 'Hot towel shave' },
  { src: '/HairStyling.jpg', alt: 'Hair styling' },
  { src: '/Hero.jpg', alt: 'Barbershop interior' },
  { src: '/VintageBarberTools.jpg', alt: 'Vintage barber tools' },
]

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#e6e9f0]">
      <div className="relative py-16 bg-[#2a4080]">
        <Image
          src="/Hero.jpg"
          alt="Vintage barbershop atmosphere"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-10 sepia"
        />
        <div className="relative container mx-auto px-6 text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl font-light max-w-2xl mx-auto">
            Step into the world of classic grooming and timeless style
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-sm shadow-md hover:shadow-lg transition-shadow group">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105 vintage-filter"
              />
              <div className="absolute inset-0 bg-[#2a4080] bg-opacity-0 group-hover:bg-opacity-70 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#b30000] py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Craft</h2>
          <p className="text-xl mb-8 font-light max-w-2xl mx-auto">
            Our gallery showcases the artistry of our barbers. Ready to experience it yourself?
          </p>
          <button className="bg-white text-[#b30000] px-8 py-3 rounded-sm hover:bg-[#e6e9f0] transition-colors font-medium">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  )
}

