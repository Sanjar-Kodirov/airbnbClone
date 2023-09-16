import Navbar from '@/app/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import ClientOnly from '@/app/ClientOnly'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bnb',
  description: 'Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={font.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
