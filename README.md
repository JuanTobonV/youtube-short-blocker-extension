# Block YouTube Shorts (Extensión para Chrome)

## Descripción

Esta extensión para Google Chrome está diseñada para ayudarte a mantener la concentración eliminando las distracciones de los YouTube Shorts. Oculta los elementos relacionados con los Shorts en la interfaz de YouTube y te redirige a la página principal si intentas acceder directamente a un Short.

Incluye un interruptor fácil de usar en la ventana emergente (popup) para activar o desactivar el bloqueo según tus necesidades.

## Características

* **Eliminación Visual:** Oculta los videos Shorts, estanterías de Shorts y enlaces a Shorts en la interfaz de YouTube.
* **Redirección Automática:** Si navegas a una URL de YouTube Shorts (`/shorts/`), te redirige automáticamente a la página principal de YouTube (`https://www.youtube.com`).
* **Control de Activación:** Permite activar y desactivar fácilmente la funcionalidad de bloqueo a través de un botón en la ventana emergente de la extensión.
* **Persistencia del Estado:** Guarda tu preferencia (activado/desactivado) para que se mantenga entre sesiones de navegación.

## Instalación

### Opción 1: Desde la Chrome Web Store (Próximamente)

Una vez que la extensión sea publicada, podrás instalarla directamente desde la Chrome Web Store. (Puedes añadir el enlace aquí cuando esté disponible).

### Opción 2: Instalación Manual (Desarrollo)

1.  Descarga o clona este repositorio en tu máquina local.
2.  Abre Google Chrome.
3.  Ve a `chrome://extensions`.
4.  Asegúrate de que el "Modo de desarrollador" esté activado (interruptor en la esquina superior derecha).
5.  Haz clic en el botón "Cargar descomprimida".
6.  Navega hasta la carpeta donde descargaste/clonaste el proyecto y selecciónala.
7.  ¡La extensión debería aparecer ahora en tu lista de extensiones y estar activa!

## Uso

1.  Una vez instalada, la extensión comenzará a funcionar automáticamente en YouTube.
2.  Para activar o desactivar el bloqueo:
    * Haz clic en el icono de la extensión (el icono que definiste en `img/icon.png`) en la barra de herramientas de Chrome.
    * Aparecerá una pequeña ventana emergente.
    * Haz clic en el botón "Desactivar Bloqueo" o "Activar Bloqueo" según el estado actual. El estado se guardará y la página de YouTube se recargará si estás en ella.

## Archivos del Proyecto

* `manifest.json`: Archivo de configuración de la extensión.
* `popup.html`: Estructura HTML de la ventana emergente.
* `js/popup.js`: Lógica para el interruptor en la ventana emergente.
* `js/background.js`: Service worker que maneja la redirección de URLs.
* `js/content.js`: Script que se inyecta en YouTube para ocultar los Shorts.
* `styles/popup.css`: Archivo CSS para dar estilo a la ventana emergente.
* `img/icon.png`: Icono de la extensión.

## Contribuciones

Si deseas contribuir, por favor abre un "issue" o envía un "pull request". (Opcional: puedes añadir más detalles sobre cómo te gustaría que la gente contribuya).
