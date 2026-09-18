# CLAUDE.md — Marleny Escobar Hair Studio

## Reglas permanentes

- **No modificar el logo oficial** (monograma ME + MARLENY ESCOBAR + HAIR STUDIO) sin autorización explícita.
- **Mobile-first siempre.** Toda decisión de diseño se valida primero en 375×812.
- **No agregar animaciones al hero** — imagen estática, sin Ken Burns, sin parallax en la foto principal.
- **El overlay del hero nunca debe tapar el rostro** — la cara de Marleny debe estar libre de texto y con overlay transparente en la zona superior.
- **CTA principal siempre es WhatsApp** — `https://wa.me/51921152870`.
- No crear archivos de documentación fuera de `docs/`.
- Mantener el CSS en `styles.css` con versión en el `<link>` al hacer cambios significativos.

## Identidad de marca

| Token | Valor |
|---|---|
| Negro Premium | `#000000` |
| Dorado Cobre | `#C79A52` (CSS var: `--gold: #C9A050`) |
| Champagne | `#E8D5B5` |
| Marfil | `#F8F5F1` |
| Fondo oscuro | `#060606` (CSS var: `--bg`) |

**Tipografía:** Cormorant Garamond (serif, títulos/marca) · Inter (sans-serif, nav/cuerpo)

## Stack técnico

- HTML/CSS/JS estático — sin framework, sin build system.
- GitHub Pages en `marlenyescobar.com`.
- Imágenes en `assets/img/` como `.jpg` (sips no soporta WebP en este Mac).
- GSAP + ScrollTrigger para reveals de secciones (no para el hero).

## Archivos clave

| Archivo | Rol |
|---|---|
| `index.html` | Página única |
| `styles.css` | Todos los estilos |
| `main.js` | JS vanilla (nav, reveals, countup, tilt) |
| `assets/img/hero-principal.jpg` | Foto principal hero |
| `assets/img/hero-rojo.jpg` | Foto About section |
| `assets/img/hero-morado.jpg` | Foto Color & Creatividad section |
| `assets/img/logo-transparent.webp` | Logo oficial |

## Referencia de docs

- `docs/brand-guide.md` — identidad visual completa
- `docs/hero-mobile.md` — especificación del hero móvil aprobada
- `docs/estado-actual.md` — estado del proyecto y decisiones
- `docs/tareas-actuales.md` — checklist de desarrollo
