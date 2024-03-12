import { Inter} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Ignacio Gomez',
  description: 'Prueba de Portfolio personal creado por Ignacio Gomez',
}

export default function RootLayout({ children}) {
  return (
    <html lang='es'>
      <body className='overflow-x-hidden w-screen bg-sky-500' style={inter.style}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
