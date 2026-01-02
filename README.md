# Desafío Profesional Fullstack: Sitio de E-Commerce 🛍️🛒
Con esta aplicación doy el primer paso en el mundo del desarrollo fullstack, creando un sitio web para un E-Commerce. Este desarrollo forma parte de mi certificación en Programación Web Fullstack de Digital House y representa el comienzo de un recorrido que quiero seguir ampliando.

Para esto, crearemos una aplicación monolítica con HTML, CSS, NodeJs, Express, MySQL, y con React haremos un dashboard para consumir una API que también crearemos.

## Enlace al Tablero de trabajo en GitHub:
 [Proyecto E-Commerce - Sound City Instrumentos](https://github.com/users/javiboin/projects/6)


## Objetivos del Proyecto:

- 🛒 Implementar un carrito de compras dinámico.

- 🛍️ Gestionar productos y usuarios con autenticación segura.

- 🌈 Ofrecer una interfaz clara y adaptable para músicos y aficionados.

- 💻 Integrar buenas prácticas de desarrollo fullstack y diseño responsivo.


## Temática del proyecto 🎸
Como bien sabemos, el poder de internet es inmenso: nos brinda posibilidades infinitas de conectarnos con personas de todo el mundo. En este caso, queremos compartir música con el mundo, ofreciendo instrumentos a todos los entusiastas que deseen mostrar sus habilidades y expresar su talento.

### ¿Cómo ajustaremos nuestra oferta a este público?
- El sitio debe ser ágil en las búsquedas, con un buscador protagonista y fácil de usar. 
- También debe permitir visualizar claramente las categorías de los productos. 
- Las imágenes son fundamentales para que los interesados puedan hacerse una idea de los instrumentos antes de adquirirlos. 
- Como las características técnicas suelen resultar confusas, se buscará presentarlas de manera sencilla. 
- Y para los usuarios más expertos, que saben exactamente lo que buscan, será posible filtrar por marcas.


## Tecnologías utilizadas 💻
- Frontend: HTML, CSS, JavaScript, Bootstrap, y React

- Backend: Node.js, Express, EJS, API REST, Sequelize, BcryptJS, Multer

- Base de datos: MySQL, MySQL Workbench

- Metodologías: Agile / Scrum

## Guía de instalación del proyecto

### Clonar repositorio
```bash
git clone https://github.com/javiboin/DPFS_javier_oyarzo.git
```

### Instalar Base de datos en Gestor de bases de datos (MySQL Workbench)
Ejecutar archivo `docs/databases/data.sql` para crear la base de datos, sus tablas y sus relaciones.

## Agregar datos de ejemplo
Ejecutar archivo `docs/databases/structure.sql`.

## Modificar variables de entorno en Gestor de bases de datos (MySQL Workbench)
Modificar el archivo .env.example y renombrarlo a .env para agregar las credenciales de la base de datos, como el nombre de usuario y contraseña necesarios para la conexión.

```
DB_USER=root
DB_PASSWORD=root    
DB_NAME=soundcity_db
DB_HOST=localhost
```

Una vez configurado el gestor de bases de datos, ejecutar los siguientes comandos en orden:

1. Instalar dependencias:

- En el directorio backend:
```bash
cd backend/
npm install
```

- En el directorio frontend:
```bash
cd ../frontend/
npm install
```

2. Correr el proyecto:
```bash
cd ../backend/
npm run dev:fullstack
```

Con esto ejecutaremos el servidor backend y el frontend con el dashboard de React.

```bash
Puerto: 3000 para el servidor express
Puerto: 5173 para el proyecto React
```

Importante:
Probar login: para logear usuarios, se escogió como contraseña "Admin123!" para todos los usuarios en el backend.

## Descrpción Personal 🚀
Soy Javier Oyarzo, desarrollador web fullstack en etapa de certificación. Este proyecto forma parte de mi formación profesional y consiste en un e‑commerce dedicado a la venta de instrumentos musicales, diseñado para combinar solidez técnica con una experiencia de usuario intuitiva.

A través de esta iniciativa busco unir tecnología y creatividad, creando una plataforma que no solo facilite la compra de instrumentos, sino que también inspire y comparta la pasión por la música.


## Referentes del Mercado
Estos son algunos referentes del mercado que me ayudaron a definir ideas sobre cómo construir el sitio y qué funcionalidades esenciales debía incluir.

- [BairesRocks](https://www.baires.rocks/)
- [Kairon Music](https://www.kaironmusic.com.ar/)
- [La Tienda](https://latienda.com.ar/)
- [PC Midi Center](https://www.pcmidi.com.ar/)
- [120db](https://120db.com.ar/)
- [Daiam Música](https://daiammusica.com.ar/)
- [Swan Music](https://www.swanmusic.com.ar/)

Se eligieron estas páginas porque reúnen varias de las características que quiero implementar en mi proyecto: buena organización de secciones, claridad en la información y propuestas visuales atractivas. Algunas destacan por la calidad de sus imágenes y el nivel de detalle en las fichas de producto, mientras que otras sobresalen por la agilidad en las búsquedas y filtros.


