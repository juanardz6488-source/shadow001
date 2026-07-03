# SHADOW//001 — Concept Drop Experience

Web experience "premium" tipo Awwwards para un concepto de lanzamiento
**SHADOW//001**. Proyecto de concepto / fan-made, no oficial de Adidas
(el logo real y las fotos de producto reales de Adidas están sustituidos
por una versión estilizada y por imágenes de stock, para que puedas
sustituirlas por tus propios assets con licencia).

## Cómo verlo (esto NO es un link, es un proyecto Next.js)

Este proyecto usa Next.js + React Three Fiber + GSAP + Lenis, así que
necesita ejecutarse con Node.js en tu ordenador (no cabe en un único
HTML, por eso no puedo darte una URL directa). Pasos:

1. Instala [Node.js](https://nodejs.org) 18 o superior si no lo tienes.
2. Descomprime el .zip que te he pasado.
3. Abre una terminal dentro de la carpeta `shadow-001` y ejecuta:

   ```bash
   npm install
   npm run dev
   ```

4. Abre **http://localhost:3000** en el navegador. Ese es "el link".

Cuando quieras publicarlo de verdad y que tenga una URL pública:

```bash
npm run build
```

y despliega la carpeta resultante en Vercel (lo más sencillo, un clic
desde su web conectando el repo), Netlify, o cualquier hosting con
soporte Node/Next.js.

## Estructura

```
app/
  layout.tsx        → fuentes, cursor, smooth scroll global
  page.tsx           → ensambla todas las secciones
  globals.css         → tokens, grano de película, reset del cursor
components/
  Preloader.tsx        → pantalla negra → logo → "SHADOW//001"
  AmbientBackground.tsx→ partículas, humo, luz dinámica (canvas 2D)
  CustomCursor.tsx      → cursor a medida con estados hover/drag/text
  SmoothScroll.tsx      → Lenis + GSAP ScrollTrigger
  Hero.tsx / SneakerScene.tsx → zapatilla 3D (React Three Fiber)
  DropSection.tsx / ProductCard.tsx / ProductModal.tsx → las 4 prendas
  Crafted.tsx           → palabra CRAFTED a pantalla completa con scroll
  Gallery.tsx           → galería horizontal controlada por scroll vertical
  Footer.tsx            → newsletter + redes + frase final
lib/data.ts             → contenido de los 4 productos
```

## Qué tendrías que sustituir para producción real

- **Logo**: el SVG del preloader/footer es una interpretación estilizada
  de tres franjas, no el logotipo oficial de Adidas (con licencia real
  sustitúyelo por el asset oficial de marca).
- **Fotos de producto**: ahora mismo usan imágenes de stock de Unsplash
  como placeholder. Sustitúyelas por fotografía real del producto.
- **Modelo 3D**: `SneakerScene.tsx` construye una zapatilla estilizada
  con geometría procedural de Three.js. Si tienes un modelo `.glb` real
  de la zapatilla, sustitúyelo con `useGLTF` de `@react-three/drei`
  (dejo comentado dónde iría el hook).
- **Tipografía**: uso Inter + JetBrains Mono (gratuitas, vía Google
  Fonts) para que el proyecto funcione sin licencias adicionales. Si
  tienes acceso a una fuente de marca (p. ej. una condensada tipo
  Neue Machina), cámbiala en `app/layout.tsx`.

## Notas técnicas

- El scroll suave usa `@studio-freight/lenis`, sincronizado con
  `gsap.ticker` para que `ScrollTrigger` y Lenis compartan el mismo
  reloj (evita el desfase típico entre ambos).
- La sección `Crafted` y la `Gallery` usan **pin + scrub** de GSAP
  ScrollTrigger, por lo que necesitan que el contenedor tenga altura
  suficiente; si cambias el contenido revisa `invalidateOnRefresh`.
- El cursor personalizado oculta el cursor nativo (`cursor: none`)
  globalmente — en `globals.css` — así que en móvil el hook lo
  desactiva vía `hidden md:block`.
- Todo el copy está en inglés (tono de campaña internacional) salvo
  esta documentación.
