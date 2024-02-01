import { Inter, Lato, Nova_Square } from 'next/font/google'
import './globals.css'
import  Link  from 'next/link'
import Navbar from '@/components/Navbar'
const inter = Nova_Square({ subsets: ['latin'], weight:['400'] })

export const metadata = {
  title: 'Portfolio Ignacio Gomez',
  description: 'Prueba de Portfolio personal creado por Ignacio Gomez',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden text-s' style={inter.style}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
