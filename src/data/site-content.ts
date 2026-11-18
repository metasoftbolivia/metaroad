import { z } from "zod"

const anchorSchema = z.string().regex(/^#[a-z0-9-]+$/)
const sectionSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  description: z.string().min(1),
})

export const siteContentSchema = z.object({
  brand: z.string().min(1),
  navigation: z.array(
    z.object({ label: z.string().min(1), href: anchorSchema }),
  ),
  hero: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    primaryCta: z.string().min(1),
    secondaryCta: z.string().min(1),
  }),
  modules: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    items: z.array(
      z.object({
        label: z.string().min(1),
        href: anchorSchema,
      }),
    ),
  }),
  sections: z.object({
    ticketDemo: sectionSchema,
    parcelDemo: sectionSchema,
    cashFlow: sectionSchema,
    usersAndPermissions: sectionSchema,
    people: sectionSchema,
    fleet: sectionSchema,
    reports: sectionSchema,
  }),
  contact: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    formActionUrl: z.string().url().nullable(),
    mapEmbedUrl: z.string().url().nullable(),
    whatsappUrl: z.string().url().nullable(),
  }),
})

const content = {
  brand: "METAROAD",
  navigation: [
    { label: "Módulos", href: "#modulos" },
    { label: "Pasajes", href: "#demo-pasajes" },
    { label: "Encomiendas", href: "#demo-encomiendas" },
    { label: "Contacto", href: "#contacto" },
  ],
  hero: {
    eyebrow: "Base técnica de la landing",
    title: "METAROAD",
    description:
      "Estructura inicial para la landing comercial del software de operación para empresas de transporte. El contenido final se incorporará después de validar los datos reales.",
    primaryCta: "Explorar módulos",
    secondaryCta: "Ir a contacto",
  },
  modules: {
    title: "Módulos previstos",
    description:
      "Secciones organizadas según los módulos indicados para METAROAD. Sus demostraciones y contenido se completarán en fases posteriores.",
    items: [
      { label: "Venta de pasajes", href: "#demo-pasajes" },
      { label: "Encomiendas", href: "#demo-encomiendas" },
      { label: "Caja y egresos", href: "#caja-egresos" },
      { label: "Usuarios y permisos", href: "#usuarios-permisos" },
      { label: "Personas", href: "#personas" },
      { label: "Unidades y flota", href: "#unidades-flota" },
      { label: "Reportes", href: "#reportes" },
    ],
  },
  sections: {
    ticketDemo: {
      id: "demo-pasajes",
      title: "Demo de pasajes",
      description:
        "Placeholder accesible para una demostración futura. No hay venta ni selección de asientos activa en este scaffold.",
    },
    parcelDemo: {
      id: "demo-encomiendas",
      title: "Demo de encomiendas",
      description:
        "Placeholder accesible para una demostración futura. No se registran ni rastrean encomiendas desde esta página.",
    },
    cashFlow: {
      id: "caja-egresos",
      title: "Caja y egresos",
      description:
        "Espacio preparado para presentar esta sección después de validar su contenido.",
    },
    usersAndPermissions: {
      id: "usuarios-permisos",
      title: "Usuarios y permisos",
      description:
        "Espacio preparado para presentar esta sección después de validar su contenido.",
    },
    people: {
      id: "personas",
      title: "Personas",
      description:
        "Espacio preparado para presentar esta sección después de validar su contenido.",
    },
    fleet: {
      id: "unidades-flota",
      title: "Unidades y flota",
      description:
        "Espacio preparado para presentar esta sección después de validar su contenido.",
    },
    reports: {
      id: "reportes",
      title: "Reportes",
      description:
        "Espacio preparado para presentar esta sección después de validar su contenido.",
    },
  },
  contact: {
    title: "Contacto",
    description:
      "Formulario, mapa y WhatsApp preparados para conectarse cuando se confirmen los datos reales. Este scaffold no envía información.",
    formActionUrl: null,
    mapEmbedUrl: null,
    whatsappUrl: null,
  },
} satisfies z.input<typeof siteContentSchema>

export const siteContent = siteContentSchema.parse(content)
export type SiteContent = z.infer<typeof siteContentSchema>
