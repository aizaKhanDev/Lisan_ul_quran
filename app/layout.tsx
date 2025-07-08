import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lisan ul Quran - Online Islamic Academy | Quran & Arabic Classes UK USA",
  description:
    "Learn Quran recitation, Arabic language, and Islamic studies online with qualified teachers. Serving students in UK and USA through live Zoom classes. Free trial available.",
  keywords:
    "Quran classes online, Arabic language learning, Islamic studies, UK USA, Zoom classes, Quran memorization, Tajweed, Islamic education",
  authors: [{ name: "Lisan ul Quran Academy" }],
  openGraph: {
    title: "Lisan ul Quran - Online Islamic Academy",
    description:
      "Authentic Islamic education through modern technology. Learn Quran and Arabic with qualified teachers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lisan ul Quran - Online Islamic Academy",
    description: "Learn Quran and Arabic online with qualified teachers",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
