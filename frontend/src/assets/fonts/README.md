# Configuración de Fuentes - Fintrix

## Fuente Principal: DIN Next

La aplicación usa **DIN Next** como fuente universal en todo el proyecto.

### Archivos de configuración:
- `src/assets/fonts/fonts.css` - Definición de la fuente local
- `src/index.css` - Configuración global de fuentes
- `tailwind.config.js` - Configuración de Tailwind CSS

### Cómo usar:

#### Con Tailwind CSS (Recomendado):
```jsx
// La fuente se aplica automáticamente con las clases de Tailwind
<div className="text-lg font-normal">Texto con DIN Next</div>
<h1 className="text-3xl font-bold">Título con DIN Next</h1>
```

#### Con CSS personalizado:
```css
.mi-clase {
  font-family: 'DIN Next', 'Trebuchet MS', system-ui, Avenir, Helvetica, Arial, sans-serif;
}
```

#### En línea con React:
```jsx
<div style={{ fontFamily: 'DIN Next, sans-serif' }}>
  Texto con DIN Next
</div>
```

### Fallbacks incluidos:
1. DIN Next (fuente local)
2. Trebuchet MS (sistema)
3. system-ui (sistema)
4. Avenir (sistema)
5. Helvetica (sistema)
6. Arial (sistema)
7. sans-serif (genérica)

### Archivos de fuente requeridos:
- `din-next-lt-pro-regular.woff2`
- `din-next-lt-pro-regular.woff`
- `din-next-lt-pro-regular.eot`

Asegúrate de colocar estos archivos en `src/assets/fonts/`
