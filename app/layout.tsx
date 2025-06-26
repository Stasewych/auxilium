import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Компанія Аксіліум",
  description: "Професійне управління проблемною заборгованістю та вирішення фінансових спорів",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Компанія Аксіліум",
    description: "Професійне управління проблемною заборгованістю та вирішення фінансових спорів",
    images: ["/images/auxilium-logo.avif"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
