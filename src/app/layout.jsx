import { Inter} from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Ignacio Gomez',
  description: 'Prueba de Portfolio personal creado por Ignacio Gomez',
}


export default function RootLayout({ children}) {
  return (
    <html lang='es'>
      <body className='overflow-x-hidden bg-sky-500' style={inter.style}>
        {children}
      </body>
    </html>
  )
}
