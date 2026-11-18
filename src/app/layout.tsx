import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "METAROAD | Tu empresa de transporte, conectada",
  description:
    "Venta de pasajes, encomiendas, caja, usuarios, unidades y reportes en un solo sistema con METAROAD.",
}

export const viewport: Viewport = {
  themeColor: "#06101b",
  colorScheme: "dark",
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className="dark">
      <body>{children}</body>
    </html>
  )
}
