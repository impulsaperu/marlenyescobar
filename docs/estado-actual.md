# Estado Actual del Proyecto

**Última actualización:** 2026-09-17

---

## Estado general

El sitio está **live** en [marlenyescobar.com](https://marlenyescobar.com) vía GitHub Pages.  
Es un sitio estático de una sola página con todas las secciones principales activas.

---

## Secciones activas

| Sección | Estado | Notas |
|---|---|---|
| Hero | ✅ Completo | Versión premium aprobada |
| Servicios | ✅ Activo | — |
| Color & Creatividad | ✅ Activo | Imagen `hero-morado.jpg` |
| About / Sobre Marleny | ✅ Activo | Imagen `hero-rojo.jpg` |
| Testimonios | ✅ Activo | — |
| Productos Premium | ✅ Activo | — |
| Contacto | ✅ Activo | Botón WhatsApp principal |

---

## Decisiones de diseño aprobadas

### Hero móvil
- Logo oficial (imagen) sobre overlay oscuro — nunca el texto breakdown.
- Rostro libre de texto, en zona alta de la foto.
- Overlay negro progresivo desde el 22% del hero.
- Botón Agenda tu cita: pill dorado 49px.
- Botón Ver servicios: pill borde dorado 52px.
- Nav: hamburguesa dorada, sin logo de barra.
- Sin animaciones en la foto hero.

### Imágenes
- `hero-principal.jpg` — hero, Marleny cabello dorado/balayage
- `hero-rojo.jpg` — About section
- `hero-morado.jpg` — Color & Creatividad section
- Formato JPEG (WebP descartado — sips en este Mac no soporta escribir WebP)

### Animaciones
- Ken Burns removido del hero (JS no-op).
- Parallax del hero-mesh removido.
- GSAP conservado para stagger de hero-inner y reveals de secciones.

---

## Historial de commits recientes

| Commit | Descripción |
|---|---|
| `428cecb` | tweak(hero-mobile): rostro más arriba, logo más grande, botón más pequeño |
| `b35950e` | fix(hero-mobile): logo oficial restaurado, rostro sube, overlay más oscuro |
| `26cbc44` | feat(hero-mobile): rediseño premium completo |
| `a2ddb54` | Commits anteriores de mejoras de desktop y animaciones |

---

## Próximos pasos prioritarios

1. Validar hero en Safari iOS real.
2. Revisar CTA secundario — posible versión más editorial (link limpio).
3. Optimizar peso de imágenes hero.
4. Galería Antes & Después cuando haya imágenes disponibles.
