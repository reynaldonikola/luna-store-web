# Luna Store — sitio web estático

Sitio estático de una sola página para **Luna Store** (`@lunastore_mat`), tienda en línea en Maturín, Venezuela: bisutería, accesorios, fragancias originales y servicio de importación de productos desde Estados Unidos.

## Estructura

```
.
├── index.html        # Estructura y contenido del sitio
├── styles.css        # Sistema visual premium, responsive y animaciones
├── script.js         # Interacciones, filtros, FAQ, revelados y parallax sutil
├── assets/
│   ├── logo/          # Logo original (PDF/AI) — sin modificar
│   │   └── web/       # Logo exportado a PNG + favicons, listo para web
│   ├── instagram/      # Fotos originales descargadas de Instagram (banco de origen)
│   └── web/            # 12 fotos de producto seleccionadas y renombradas para el sitio
└── README.md
```

## Cómo verlo

No requiere build ni dependencias. Basta con abrir `index.html` en un navegador, o servirlo con cualquier servidor estático:

```bash
python3 -m http.server 8000
# luego visitar http://localhost:8000
```

## Contenido y decisiones

- **Inspiración visual**: adaptación original de la dirección pública y gratuita [Fragrance Maison de MotionSites](https://www.motionsites.org/prompts/fragrance-maison), usando sus principios declarados de lujo, cristal, contraste oscuro/claro, jerarquía editorial y movimiento sobrio. No se copió contenido bloqueado ni código propietario.
- **Movimiento**: revelados progresivos al desplazarse, parallax muy sutil en el hero, transiciones del catálogo, estados luminosos en llamadas a la acción y navegación con efecto cristal. Todo se implementó con CSS y JavaScript nativo para mantener bajo el peso de la página.

- **Datos**: toda la información (experiencia de 7+ años, servicios, categorías de producto, ubicación en Maturín) proviene de `BRIEF.md`. **No se inventaron** teléfonos, WhatsApp, precios, dirección exacta ni tiempos de entrega; esos puntos se dejan explícitamente como "consultar por Instagram" o "consultar disponibilidad".
- **Contacto**: el único canal de contacto usado es Instagram (`https://www.instagram.com/lunastore_mat/`), presente en el header, hero, CTA final, FAQ y footer.
- **Logo**: se usó el logo real de Luna Store. El PDF/AI originales se conservan sin cambios en `assets/logo/`; en `assets/logo/web/` hay versiones PNG (incluye variante de alta resolución y favicons en varios tamaños) listas para usar en la web.
- **Paleta**: derivada del logo — azul noche (`#1f4a5e` / `#143241`), blush/rosado (`#e3b39a`), dorado (`#a9822c`) y crema de fondo (`#faf6f2`).
- **Imágenes de producto**: se seleccionaron 12 fotos de `assets/instagram/` que muestran productos (bisutería, accesorios, fragancias), descartando fotos de perfil/avatares o contenido no representativo. Se copiaron con nombres descriptivos a `assets/web/` para usarlas en el sitio.
- **Catálogo filtrable**: los productos se agrupan en tres categorías (Bisutería, Accesorios, Fragancias) con botones de filtro accesibles (`aria-pressed`) manejados por `script.js`, sin recargar la página.
- **Todos los productos** muestran la etiqueta "Consultar disponibilidad" en vez de precios o stock, tal como pide el brief.

## Accesibilidad

- HTML semántico (`header`, `main`, `nav`, `section`, `footer`, `article`).
- Enlace "Saltar al contenido principal" para usuarios de teclado/lector de pantalla.
- Contraste de color revisado sobre la paleta del logo.
- Todas las imágenes tienen texto alternativo descriptivo; los iconos decorativos usan `aria-hidden="true"`.
- Estados de foco visibles (`:focus-visible`) y controles interactivos con atributos ARIA (`aria-expanded`, `aria-pressed`, `aria-controls`).
- Respeta `prefers-reduced-motion` para desactivar animaciones/scroll suave cuando el usuario lo prefiere.
- Botones de filtro y acordeón FAQ operables con teclado.

## Responsive

Diseño mobile-first con puntos de quiebre en `styles.css` (`960px`, `880px`, `760px`, `600px`): navegación colapsa a menú hamburguesa, la cuadrícula de productos y beneficios se reacomoda en columnas, y el bloque de experiencia/CTA se apila verticalmente en pantallas pequeñas.

## Enlaces verificados

- Todos los enlaces a Instagram apuntan a `https://www.instagram.com/lunastore_mat/` (URL provista en el brief) y abren en pestaña nueva con `rel="noopener noreferrer"`.
- Enlaces internos (`#bisuteria`, `#catalogo`, `#importacion`, `#proceso`, `#experiencia`, `#faq`) verificados contra los `id` correspondientes en `index.html`.
- Rutas de imágenes y del logo verificadas contra los archivos presentes en `assets/web/` y `assets/logo/web/`.

## Pendiente para el cliente

- Confirmar/editar textos legales o de políticas si se agregan en el futuro.
- Sustituir "Consultar disponibilidad" por precios/stock reales cuando estén definidos.
- Agregar teléfono, WhatsApp o dirección exacta si en algún momento se decide publicarlos.
