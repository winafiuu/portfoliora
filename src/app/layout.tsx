import type { Metadata } from 'next'
import { Inter, Calistoga } from 'next/font/google'
import './globals.css'
import { twMerge } from 'tailwind-merge'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const calistoga = Calistoga({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-calistoga',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          'font-primary text-white antialiased bg-gray-500'
        )}
      >
        {children}
      </body>
    </html>
  )
}
