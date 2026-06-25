import { Geist_Mono, Outfit } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "GMC Elektronik | Teknologi Lokal, Standar Global",
  description:
    "Produsen speaker bluetooth premium, kipas angin, kompor, dan electric grill berkualitas tinggi dengan standar global.",
  keywords: [
    "GMC",
    "GMC Elektronik",
    "Speaker GMC",
    "Kipas GMC",
    "Kompor GMC",
    "Grill GMC",
    "Audio Indonesia",
    "Audio Lokal",
  ],
  authors: [{ name: "GMC Elektronik" }],
  openGraph: {
    title: "GMC Elektronik | Teknologi Lokal, Standar Global",
    description:
      "Produsen speaker bluetooth premium, kipas angin, kompor, dan electric grill berkualitas tinggi dengan standar global.",
    url: "https://gmc-elektronik.vercel.app",
    siteName: "GMC Elektronik",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GMC Elektronik - Teknologi Lokal, Standar Global",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMC Elektronik | Teknologi Lokal, Standar Global",
    description:
      "Produsen speaker bluetooth premium, kipas angin, kompor, dan electric grill berkualitas tinggi dengan standar global.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        outfit.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
