import ClientOnly from '@/app/ClientOnly'
import getCurrentUser from '@/app/actions/getCurrentUser'
import LoginModal from '@/app/components/modals/LoginModal'
import RegisterModal from '@/app/components/modals/RegisterModal'
import RentModal from '@/app/components/modals/RentModal'
import Navbar from '@/app/components/navbar/Navbar'
import ToasterProvider from '@/app/providers/ToasterProvider'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bnb',
  description: 'Clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  console.log('currentUser', currentUser)



  return (
    <html lang="en">

      <body className={font.className}>

        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <Navbar currentUser={currentUser} />

        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
