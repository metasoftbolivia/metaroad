import { Hero } from "@/components/hero/hero"
import { Header } from "@/components/layout/header"

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
      </main>
    </>
  )
}
