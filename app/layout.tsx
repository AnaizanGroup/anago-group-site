import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { AppProvider } from '@/context/AppContext'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Anago Group – Pan-African Industrial Holding | Mining, Infrastructure, Agriculture',
  description: 'Anago Group is a pan-African industrial holding company driving sustainable development through mining, industrial transformation, infrastructure, agriculture, and equipment supply across Africa.',
  keywords: 'African industrial development, mining and metals Africa, industrial transformation, sustainable infrastructure Africa, industrial equipment supply Africa, pan-African holding company',
  openGraph: {
    title: 'Anago Group – Industrializing Africa Through Integrated Value Chains',
    description: 'Pan-African holding company driving sustainable industrial development through local transformation of natural resources, strategic infrastructure, and integrated industrial solutions.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A1628',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <AppProvider>
          <Navbar />
          {children}
          <Footer />
        </AppProvider>
        <Analytics />
      </body>
    </html>
  )
}
