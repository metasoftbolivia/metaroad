# Prompt 02 — pegar en v0 tras terminar prompt 01

Implementa SOLO el Header + Hero cinematográfico de METAROAD, inspirado en /imágenes_web/referencias/mockup_aprobado.png. No hagas una imagen estática del mockup: crea UI real y accesible. Título principal exactamente: «Tu empresa de transporte. Una operación conectada.» y CTA principal «Solicitar demo por WhatsApp» (enlace configurable, no inventar número). CTA secundario «Ver cómo funciona» que lleva a #demo.

Escena: composición 2 columnas en escritorio, contenido a la izquierda y bus protagonista a la derecha; fondo oscuro con profundidad, ondas amarillas de /imágenes_web/fondos/ondas_amarillas.svg, anillo /imágenes_web/fondos/anillo_orbital.svg y bus conceptual /imágenes_web/buses/bus_vector_conceptual.svg como fallback temporal. NO llames 3D al SVG. Prepara componente BusStage para sustituir por modelo GLB auténtico con React Three Fiber cuando exista el archivo. Si no hay GLB, usa parallax 2.5D sutil y decláralo como fallback.

Módulos orbitales interactivos alrededor del bus: Venta de pasajes, Encomiendas, Caja y egresos, Usuarios y permisos, Personas, Unidades y flota, Reportes. Cada botón es accesible, tiene hover/focus y al seleccionarse muestra un panel informativo y cambia el módulo activo; no inventar funcionalidades no confirmadas. Animar con GSAP: entrada escalonada, desplazamiento muy sutil, transición entre módulos, sin autoplay agresivo. Botón «Pausar animaciones». En móvil convertir el orbital en carrusel/lista de botones accesibles.

NO implementar el resto de secciones todavía. Mantener alta performance y separar componentes en archivos. Entregar explicación breve de qué funciona de verdad y qué queda como placeholder.
