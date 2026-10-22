# Servicios Microsoft 365

Página estática con accesos directos a los formularios de Microsoft Forms:

- **MFA Temporal**
- **Restablecimiento MFA**
- **Restablecimiento de Contraseña 365**

Hecha con HTML, CSS y JavaScript puro (sin dependencias ni build). Responsive, en estilo oscuro con acento verde.

## Estructura

```
index.html    → estructura de la página
styles.css    → estilos
app.js        → lista de formularios (EDITAR AQUÍ)
favicon.svg   → ícono de la pestaña
```

## Agregar o cambiar un formulario

Edita el arreglo `FORMULARIOS` al inicio de `app.js`:

```js
{
  etiqueta: "CUENTA",
  titulo: "Nuevo formulario",
  descripcion: "Para qué sirve.",
  url: "https://forms.cloud.microsoft/...",
  icono: "shield",   // clock | shield | key
}
```

## Despliegue en Vercel

1. Sube estos archivos a un repositorio de GitHub.
2. En Vercel: **Add New → Project** → importa el repositorio.
3. Framework Preset: **Other**. Sin comando de build ni carpeta de salida.
4. Deploy.

## Probar localmente

Abre `index.html` en el navegador, o:

```bash
npx serve .
```
