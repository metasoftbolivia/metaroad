# Prompt 01 — pegar en v0

Crea la base técnica de una landing comercial para METAROAD, software para empresas de transporte con venta de pasajes, encomiendas, caja, usuarios/permisos, personas, unidades y reportes. IMPORTANTE: esta tarea es SOLO configuración, arquitectura y scaffold; NO implementes todavía toda la landing.

Stack: Next.js App Router, TypeScript strict, Tailwind CSS, shadcn/ui, lucide-react, GSAP con ScrollTrigger, @react-three/fiber, @react-three/drei, three, @types/three. Usa pnpm. Evita instalar Framer Motion y otras librerías redundantes sin necesidad.

Crea estructura: src/app, src/components/layout, src/components/hero, src/components/modules, src/components/demos, src/components/contact, src/lib, src/data. Crea componentes placeholder accesibles para Header, Hero, Modules, TicketDemo, ParcelDemo, CashFlow, UsersAndPermissions, People, Fleet, Reports, Contact y Footer. Crea src/data/site-content.ts para texto validado. Mantén una única página / y navegación por anclas.

Diseño: identidad amarillo #FBC900, casi negro #101216, blanco #FFFFFF; estética cinematográfica profesional con contraste alto. La carpeta de recursos llegará desde GitHub a public/imágenes_web/. Usa como guía /imágenes_web/referencias/mockup_aprobado.png, NO como imagen de fondo ni como UI plana.

Restricciones: no inventes direcciones, teléfonos, estadísticas, logos oficiales, fotografías de oficinas, precios, testimonios, rutas ni características no verificadas. No sustituyas el formulario de contacto, mapa y botón de WhatsApp: deja placeholders funcionales preparados para conectar los datos reales. No simules que existe un backend o envío real. Implementa responsive, semántica HTML, navegación con teclado, prefers-reduced-motion y carga diferida para gráficos pesados.

Entrega el código base, dependencias instaladas, árbol de carpetas y pasos para ejecutar. No avances a Hero 3D todavía.
