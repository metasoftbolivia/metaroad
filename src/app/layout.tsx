import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "METAROAD | Base técnica",
  description:
    "Estructura inicial de la landing comercial de METAROAD para empresas de transporte.",
}

export const viewport: Viewport = {
  themeColor: "#101216",
  colorScheme: "dark",
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className="dark">
      <body>{children}</body>
    </html>
  )
}
