# METAROAD — pack inicial de assets

Carpeta para subir a GitHub: `imágenes_web/`. El mockup original y el mockup elegido están en `referencias/` SOLO como referencia de diseño; no usarlos como fondo de la página ni recortarlos para fingir componentes reales.

Incluye SVG reutilizables: iconos de módulos, logo **recreado (no oficial)**, ondas, anillo orbital, paquete, bus vectorial **conceptual** y maqueta de asientos. No incluye modelo GLB 3D real, fotografías oficiales de buses, mapa real ni logo vectorial oficial: requieren assets aprobados del cliente. La interacción 3D se implementa por código y/o un modelo GLB autorizado.

**No inventar** oficina, fotos de empresa, estadísticas, destinos, rutas, precios, teléfonos o datos de contacto. Tomar datos exclusivamente de la landing original y confirmar los que no sean legibles. El mapa real se integra con proveedor de mapas cuando se confirme dirección/coordenadas.

## Uso
- Copiar `imágenes_web/` a `public/imágenes_web/` en Next.js, o si GitHub lo conserva en la raíz del repo, moverlo a `public/` para servir los assets.
- Para URLs, usar `/im%C3%A1genes_web/...` o `encodeURI('/imágenes_web/...')`. Alternativa recomendable: usar nombre ASCII `imagenes_web` para evitar problemas de URLs.
- No usar el SVG de bus como si fuera un bus 3D real.
