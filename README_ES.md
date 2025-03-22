# 50&50gl

Web Development - Front End - 50&50gl

# Funcionalidad:

Demo de web para la compañía 50&50gl. Una carta de presentación por si quieren mejorar su web a nivel de diseño y funcionalidades internas.

# Características:

- Home Page y rutas a diferentes páginas.

# Requisitos:

- Stack tecnológico: HTML, CSS con Tailwind, JS, PNPM / NPM.
- Frameworks: React.

# Estructura del Proyecto:

- **assets**: Carpeta que incluye los archivos de fuentes y iconos.
- **components**: Carpeta en la que están los diferentes componentes.
- **data**: Carpeta donde están los archivos JSON que contienen información útil de la web.
- **public**: Carpeta en la que guardo las imágenes y estáticos de la web.
- **pages**: Carpeta en la que se encuentran las diferentes páginas tanto presentes como futuras.

# Instalación:

1. Descarga o clona el repositorio.
2. Asegurarte de que no te falta nada instalado en tu sistema como por ejemplo pnpm aunque es opcional. Puedes usar npm si quieres.
3. Para ejecutar el proyecto:

```bash
# Comando para ejecutar la visualización de la carpeta content. Una vez ejecutado ir al localhost y escribir el nombre de uno de los archivos.
#Ejemplo: http://localhost:1313/en/preferences-contact/

hugo server
```

4. Para hacer el build de entrega usar el comando creado:

```bash
# Con este comando se ejecuta la limpieza de la carpeta public y aparece la carpeta deploy. En ella aparece el HTML con su CSS y JS compilado para cada una de las instancias.
pnpm run build

#Alternativa si no quieres usar pnpm:
npm run build
```

Gracias por su atención.<br>
JR
