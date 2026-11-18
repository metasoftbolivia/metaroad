# METAROAD — pack inicial de assets

Carpeta para subir a GitHub: `imágenes_web/`. El mockup original y el mockup elegido están en `referencias/` SOLO como referencia de diseño; no usarlos como fondo de la página ni recortarlos para fingir componentes reales.

Incluye SVG reutilizables: iconos de módulos, logo **recreado (no oficial)**, ondas, anillo orbital, paquete, bus vectorial **conceptual** y maqueta de asientos. No incluye modelo GLB 3D real, fotografías oficiales de buses, mapa real ni logo vectorial oficial: requieren assets aprobados del cliente. La interacción 3D se implementa por código y/o un modelo GLB autorizado.

**No inventar** oficina, fotos de empresa, estadísticas, destinos, rutas, precios, teléfonos o datos de contacto. Tomar datos exclusivamente de la landing original y confirmar los que no sean legibles. El mapa real se integra con proveedor de mapas cuando se confirme dirección/coordenadas.

## Uso
- Los recursos originales se conservan en `imágenes_web/` y se copian a `public/imágenes_web/` para servirlos desde Next.js.
- Para URLs, usar `/im%C3%A1genes_web/...` o `encodeURI('/imágenes_web/...')`. Alternativa recomendable: usar nombre ASCII `imagenes_web` para evitar problemas de URLs.
- No usar el SVG de bus como si fuera un bus 3D real.

## Aplicación

Requisitos: Node.js y pnpm.

```bash
pnpm install
pnpm dev
```

Abre `http://localhost:3000`. La ruta `/` contiene el scaffold de una sola página; los módulos, las demos y el contacto son placeholders. El formulario no envía datos, y el mapa y WhatsApp permanecen sin configurar hasta disponer de datos verificados.

Validaciones disponibles:

```bash
pnpm typecheck
pnpm build
```

GSAP y React Three Fiber están instalados para fases posteriores. No se carga ninguna escena 3D ni gráfico pesado en esta fase; cuando se agreguen, deben importarse de forma diferida y respetar `prefers-reduced-motion`.
