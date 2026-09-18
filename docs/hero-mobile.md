# Hero Móvil — Especificación Aprobada

> Esta especificación está aprobada y no debe modificarse sin autorización explícita.

---

## Estructura visual

```
┌─────────────────────────┐
│  ☰ (hamburguesa dorada) │  ← Nav: solo ícono, sin logo visible
│                         │
│   [FOTO MARLENY]        │  ← Rostro libre, área transparente
│   cara en zona alta     │
│   sin texto encima      │
│                         │
│  ░░░░░ OVERLAY ░░░░░░░  │  ← Se oscurece desde ~22%
│                         │
│   [LOGO OFICIAL]        │  ← me + marleny escobar + hair studio
│   ──────────────        │
│  ESPECIALISTA EN        │  ← Eyebrow, blanco, uppercase
│  TRANSFORMACIÓN CAPILAR │
│                         │
│  Tu cabello.            │  ← H1 blanco ~2.75rem
│  Tu mejor versión.      │  ← H1 em, dorado cursiva ~2.2rem
│                         │
│  ╔═══════════════════╗  │  ← CTA gold, 90%, 49px, pill
│  ║  AGENDA TU CITA   ║  │
│  ╚═══════════════════╝  │
│                         │
│    VER SERVICIOS ↓      │  ← Ghost, borde dorado, 90%, 52px
└─────────────────────────┘
```

---

## Especificaciones CSS

### Imagen hero
- `object-position: center 0%` — rostro en zona alta
- `transform: scale(0.88)` — zoom-out con marco oscuro de fondo
- `transform-origin: center 5%`

### Overlay
```
0%   → transparent
22%  → transparent
36%  → rgba(0,0,0,0.30)
52%  → rgba(0,0,0,0.65)
70%  → rgba(0,0,0,0.90)
100% → rgba(0,0,0,0.96)
```

### Logo
- Archivo: `logo-transparent.webp`
- Tamaño móvil: `min(300px, 82vw)`
- `margin-top: 24px`

### Eyebrow
- `font-size: 0.75rem` · `letter-spacing: 0.22em` · `color: var(--cream)`
- `margin-top: 28px`

### Título
- H1: `2.75rem` · `color: var(--cream)` · `margin-top: 36px`
- em: `2.2rem` · italic · `color: var(--gold)` · `display: block` · `margin-top: 10px`

### Botón principal (Agenda tu cita)
- `width: 90%` · `height: 49px` · `border-radius: 50px`
- `background: var(--gold)` · `color: var(--bg)`
- `font-size: 0.75rem` · `letter-spacing: 0.09em`
- `margin-top: 40px`

### Botón secundario (Ver servicios)
- `width: 90%` · `height: 52px` · `border-radius: 50px`
- `border: 1.5px solid var(--gold)` · `color: var(--gold)`
- `font-size: 0.8rem`
- `margin-top: 18px`

### Nav
- `.nav-logo { display: none }` — sin logo en barra
- `.nav-toggle span { background: var(--gold) }` — hamburguesa dorada

### Elementos ocultos en móvil
- `.hero-services { display: none }` — lista de servicios
- `.hero-scroll-hint { display: none }` — indicador de scroll
- `.hero-logo-mobile { display: none }` — logo textual (se usa imagen oficial)

---

## Reglas de negocio

1. El rostro de Marleny **nunca** debe tener texto encima.
2. El logo oficial (imagen) siempre visible en el hero móvil.
3. El CTA principal siempre apunta a WhatsApp: `https://wa.me/51921152870`.
4. Sin animaciones en la imagen del hero (estática).
