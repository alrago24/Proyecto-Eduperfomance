# 🎓 Proyecto Eduperformance

**Proyecto Eduperformance** es una aplicación web enfocada en la gestión y visualización de recursos, noticias y perfiles para una plataforma educativa.  
Está desarrollada con **HTML, CSS y JavaScript**, ofreciendo una experiencia de usuario con páginas informativas, login, perfil, noticias, entre otros.

---

## 📋 Estructura del repositorio

```text
/
├── css/                   ← Hojas de estilo (diseño, colores, tipografía, responsive)
├── img/                   ← Imágenes utilizadas en las distintas secciones del sitio
├── helpers/               ← Scripts JavaScript para la lógica y validaciones
│   ├── accesos.js         ← Manejo de accesos y validación de credenciales
│   ├── all.js             ← Archivo general para inicializaciones comunes
│   ├── expresiones.js     ← Expresiones regulares usadas en validaciones
│   ├── navBarGeneral.js   ← Lógica de la barra de navegación dinámica
│   ├── usuarios.js        ← Gestión de usuarios (registro, recuperación de datos)
│   └── verificarRegistro.js ← Validación de datos en formularios de registro
├── forms.html             ← Página de formularios de registro o contacto
├── galeria.html           ← Página de galería de imágenes o recursos
├── inicio.html            ← Página de inicio / bienvenida
├── login.html             ← Página de login de usuarios
├── navBarNew.html         ← Barra de navegación reutilizable
├── noticias.html          ← Página de noticias públicas
├── noticias_sesion.html   ← Noticias privadas visibles solo si el usuario inició sesión
├── perfil.html            ← Página de perfil de usuario
├── preguntas_frecuentes.html ← Página FAQ con respuestas a dudas comunes
├── recursos.html          ← Página de recursos académicos / multimedia
└── README.md              ← Este archivo de documentación

🛠 Tecnologías usadas
HTML5 – Estructura del contenido y páginas de la aplicación

CSS3 – Estilos visuales, diseño responsive, tipografía y paleta de colores

JavaScript (JS) – Interactividad y validaciones del frontend

🧠 Funcionalidad de los archivos JavaScript (helpers/)
Archivo JS	Funcionalidad / Propósito
accesos.js	Maneja la validación de accesos de los usuarios. Controla credenciales al iniciar sesión y permisos de navegación.
all.js	Archivo contenedor general donde se centralizan llamadas o inicializaciones comunes a varias páginas.
expresiones.js	Define expresiones regulares para validaciones (correos, contraseñas, teléfonos, etc.). Sirve como base para verificar formatos en formularios.
navBarGeneral.js	Controla la barra de navegación dinámica: resalta la página activa, gestiona menús desplegables.
usuarios.js	Lógica de usuarios: registro, almacenamiento temporal de datos y recuperación de información.
verificarRegistro.js	Valida los datos al registrar un usuario nuevo (nombre, correo, contraseña), apoyándose en expresiones.js para comprobar formatos.

🚀 Instalación y puesta en marcha
Clona el repositorio


git clone https://github.com/alrago24/Proyecto-Eduperfomance.git
Cámbiate a la rama revision


git checkout revision
Ingresa a la carpeta del proyecto


cd Proyecto-Eduperfomance
Abre el proyecto en tu navegador

Haz doble clic en el archivo inicio.html

O usa una extensión como Live Server en VS Code para levantar un servidor local

📦 Uso / funcionalidades principales
✅ Inicio de sesión de usuarios – validación de credenciales en login.html con soporte de accesos.js.

✅ Noticias públicas y privadas – acceso libre en noticias.html, y acceso restringido en noticias_sesion.html.

✅ Perfil de usuario – gestión de datos personales mediante perfil.html y la lógica en usuarios.js.

✅ Galería de recursos – acceso a material educativo y multimedia en galeria.html.

✅ FAQ (Preguntas frecuentes) – sección interactiva para resolver dudas comunes.

✅ Formularios de contacto o registro – validados con verificarRegistro.js y expresiones.js.


🤝 Contribuciones
Si deseas contribuir:

Haz un fork del repositorio

Crea una rama (git checkout -b feature/nueva-funcionalidad)

Realiza tus cambios y haz commit (git commit -m "Agrega nueva funcionalidad")

Haz push a tu rama (git push origin feature/nueva-funcionalidad)

Abre un Pull Request


👤 Autores
Alison Díaz 
Sergio Atehortua