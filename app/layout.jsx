import { Inter } from 'next/font/google'
import '@/styles/globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Diyans',
  description: 'saeful diyan pratama portfolio web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
