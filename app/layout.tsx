import Navbar from '@/app/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import ClientOnly from '@/app/ClientOnly'
import RegisterModal from '@/app/components/modals/RegisterModal'
import ToasterProvider from '@/app/providers/ToasterProvider'
import LoginModal from '@/app/components/modals/LoginModal'

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
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar />

        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
