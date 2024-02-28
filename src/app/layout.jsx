import { Inter} from 'next/font/google'
import './globals.css'
import  Link  from 'next/link'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Ignacio Gomez',
  description: 'Prueba de Portfolio personal creado por Ignacio Gomez',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden' style={inter.style}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
