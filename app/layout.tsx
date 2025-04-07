import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TopButton from '@/components/ui/TopButton'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Adir Gamil | Full Stack Developer',
  description:
    "Hi, I'm Adir — a full stack developer specializing in React, TypeScript, and modern web experiences. Explore my projects, skills, and ways to contact me.",
  keywords: [
    'Adir Gamil',
    'Adir',
    'Full Stack Developer',
    'Frontend Developer',
    'React Developer',
    'Next.js',
    'Portfolio',
    'TypeScript',
    'TailwindCSS',
    'JavaScript',
    'Web Developer',
    'MERN Stack',
    'Israel Developer',
  ],
  authors: [{ name: 'Adir Gamil', url: 'https://adirg.dev/' }],
  creator: 'Adir Gamil',
  openGraph: {
    title: 'Adir Gamil | Full Stack Developer',
    description:
      "Explore the personal portfolio of Adir Gamil — full stack developer with a passion for modern web apps. Featuring selected projects, skills, and contact.",
    url: 'https://adirg.dev/',
    siteName: 'Adir Gamil Portfolio',
    images: [
      {
        url: 'https://res.cloudinary.com/dhweqnxgd/image/upload/v1744019815/portfolioss_juh8bn.png',
        width: 1200,
        height: 630,
        alt: 'Adir Gamil Portfolio',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adir Gamil | Full Stack Developer',
    description:
      "I'm Adir Gamil, a full stack developer building responsive and interactive web experiences using React, Next.js, and TypeScript.",
    creator: '@adirgamil',
    images: [
      'https://res.cloudinary.com/dhweqnxgd/image/upload/v1744019815/portfolioss_juh8bn.png',
    ],
  },
}


const scriptId = process.env.NEXT_PUBLIC_ENABLE_SCRIPT_ID
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
            <head>
            <Script
      src={`https://cdn.enable.co.il/licenses/enable-${scriptId}/init.js`}
      strategy="afterInteractive"
    />
      </head>

      <Navbar />
      <Toaster position="top-center" />
      <body
        className={`${poppins.variable} ${inter.variable} bg-background text-foreground transition-colors antialiased`}
      >
        {children}
        <TopButton />
        <Footer />
      </body>
    </html>
  )
}
