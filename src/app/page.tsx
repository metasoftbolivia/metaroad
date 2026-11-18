import { Contact } from "@/components/contact/contact"
import { ParcelDemo } from "@/components/demos/parcel-demo"
import { TicketDemo } from "@/components/demos/ticket-demo"
import { Hero } from "@/components/hero/hero"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { CashFlow } from "@/components/modules/cash-flow"
import { Fleet } from "@/components/modules/fleet"
import { Modules } from "@/components/modules/modules"
import { People } from "@/components/modules/people"
import { Reports } from "@/components/modules/reports"
import { UsersAndPermissions } from "@/components/modules/users-and-permissions"

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Modules />
        <TicketDemo />
        <ParcelDemo />
        <CashFlow />
        <UsersAndPermissions />
        <People />
        <Fleet />
        <Reports />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
