import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'Blog cá nhân của tôi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}>
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
        <footer className="border-t border-gray-100 mt-20">
          <div className="max-w-5xl mx-auto px-6 py-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} My Blog — Made with ❤️
          </div>
        </footer>
      </body>
    </html>
  )
}
