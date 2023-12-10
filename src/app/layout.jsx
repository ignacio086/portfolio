import { Inter, Lato, Nova_Square } from 'next/font/google'
import './globals.css'
import  Link  from 'next/link'
const inter = Nova_Square({ subsets: ['latin'], weight:['400'] })

export const metadata = {
  title: 'Portfolio Ignacio Gomez',
  description: 'Prueba de Portfolio personal creado por Ignacio Gomez',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden text-s' style={inter.style}>
        <navbar className='h-12 bg-gray-0 w-screen fixed flex flex-row items-center justify-center gap-10'>
          <Link className='hover:text-base text-sm duration-100' href='#inicio'>Inicio</Link>
          <Link className='hover:text-base text-sm duration-100' href='#sobremi'>Sobre mi</Link>
          <Link className='hover:text-base text-sm duration-100' href='#experiencia'>Experiencia</Link>
          <Link className='hover:text-base text-sm duration-100' href='#api'>APIs</Link>
        </navbar>
        {children}
      </body>
    </html>
  )
}
