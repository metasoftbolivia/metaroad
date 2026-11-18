import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "METAROAD | Tu empresa de transporte, conectada",
  description:
    "Explora los módulos de METAROAD y conoce cómo conectar la operación de tu empresa de transporte.",
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
