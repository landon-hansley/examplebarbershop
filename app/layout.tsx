import './globals.css'
import { Lora, Roboto_Slab } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const lora = Lora({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
})

const robotoSlab = Roboto_Slab({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-slab',
})

export const metadata = {
  title: 'Example Barber Shop',
  description: 'Classic grooming with a modern twist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${robotoSlab.variable}`}>
      <body className="flex flex-col min-h-screen bg-[#e6e9f0] relative">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

