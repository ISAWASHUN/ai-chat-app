import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen bg-[#7494C0]">
          <Navigation />

          <main className="flex-1 container max-w-screen-md mx-auto px-2 py-5 relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
