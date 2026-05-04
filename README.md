# 🎸 Sound City Instrumentos | E-Commerce Fullstack

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
</div>

<br />

> **Desafío Profesional Fullstack:** Con esta aplicación doy el primer paso en el mundo del desarrollo fullstack, creando un sitio web para un E-Commerce de instrumentos musicales. Este desarrollo forma parte de mi certificación en Programación Web Fullstack de Digital House y representa el comienzo de un recorrido que quiero seguir ampliando.

Para esto, crearemos una aplicación monolítica con **HTML, CSS, Node.js, Express y MySQL**, complementada con un **dashboard en React** que consume una **API REST** propia.

🔗 **[Tablero de Trabajo en GitHub - Proyecto E-Commerce Sound City Instrumentos](https://github.com/users/javiboin/projects/6)**

---

## 🎯 Objetivos del Proyecto

- 🛒 **Implementar un carrito de compras dinámico.**
- 🛍️ **Gestionar productos y usuarios** con autenticación segura.
- 🌈 **Ofrecer una interfaz clara y adaptable** para músicos y aficionados.
- 💻 **Integrar buenas prácticas** de desarrollo fullstack y diseño responsivo.

---

## 🎸 Temática del Proyecto

Como bien sabemos, el poder de internet es inmenso: nos brinda posibilidades infinitas de conectarnos con personas de todo el mundo. En este caso, queremos compartir música con el mundo, ofreciendo instrumentos a todos los entusiastas que deseen mostrar sus habilidades y expresar su talento.

### ¿Cómo ajustaremos nuestra oferta a este público?
- 🔍 **Búsquedas ágiles:** Un buscador protagonista y fácil de usar.
- 🗂️ **Categorías claras:** Visualización estructurada de los productos.
- 📸 **Imágenes destacadas:** Fundamentales para que los interesados puedan hacerse una idea real del instrumento antes de adquirirlo.
- 📖 **Información simplificada:** Las características técnicas se presentan de manera sencilla para no confundir al usuario.
- 🎯 **Filtros avanzados:** Para los usuarios más expertos, será posible filtrar por marcas.

---

## 💻 Tecnologías Utilizadas

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

### Backend & API
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

### Base de Datos
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

### Metodologías
![Agile](https://img.shields.io/badge/Agile-Scrum-blue?style=for-the-badge)

---

## 🛠️ Guía de Instalación del Proyecto

### Opción 1: Docker Compose (Recomendado) 🐳
```bash
# 1. Clonar repositorio
git clone https://github.com/javiboin/DPFS_javier_oyarzo.git
cd DPFS_javier_oyarzo

# 2. Configurar variables de entorno
cp .env.demo .env

# 3. Iniciar servicios
docker-compose up
```

📌 **La aplicación estará disponible en:**
- **Backend:** `http://localhost:3000`
- **Base de datos:** `localhost:3306`

<br/>

### Opción 2: Instalación Manual ⚙️

#### 1. Clonar repositorio
```bash
git clone https://github.com/javiboin/DPFS_javier_oyarzo.git
```

#### 2. Configurar Base de Datos (MySQL Workbench)
1. Ejecutar el archivo `docs/databases/structure.sql` para crear la base de datos, sus tablas y sus relaciones.
2. Ejecutar el archivo `docs/databases/data.sql` para agregar los datos de ejemplo iniciales.

#### 3. Configurar Variables de Entorno
Modificar el archivo `.env.example` y renombrarlo a `.env` para agregar las credenciales de la base de datos:

```env
DB_USER=root
DB_PASSWORD=root    
DB_NAME=soundcity_db
DB_HOST=localhost
```

#### 4. Instalar Dependencias y Correr el Proyecto

Una vez configurada la base de datos, ejecutar en terminal:

```bash
# Instalar dependencias del backend
cd backend/
npm install

# Instalar dependencias del frontend (React Dashboard)
cd ../frontend/
npm install

# Correr el proyecto (inicia servidor Express y React en paralelo)
cd ../backend/
npm run dev:fullstack
```

📌 **Puertos utilizados:**
- **Servidor Express:** Puerto `3000`
- **Proyecto React:** Puerto `5173`

> ⚠️ **Importante - Probar Login:** Para logear usuarios, la contraseña asignada por defecto para todos los usuarios en el backend es: `Admin123!`

---

## 🚀 Descripción Personal

Soy **Javier Oyarzo**, desarrollador web fullstack en etapa de certificación. Este proyecto forma parte de mi formación profesional y consiste en un e‑commerce dedicado a la venta de instrumentos musicales, diseñado para combinar solidez técnica con una experiencia de usuario intuitiva.

A través de esta iniciativa busco unir tecnología y creatividad, creando una plataforma que no solo facilite la compra de instrumentos, sino que también inspire y comparta la pasión por la música.

---

## 📚 Referentes del Mercado

Estos son algunos referentes del mercado que me ayudaron a definir ideas sobre cómo construir el sitio y qué funcionalidades esenciales debía incluir:

- 🎸 [BairesRocks](https://www.baires.rocks/)
- 🎹 [Kairon Music](https://www.kaironmusic.com.ar/)
- 🥁 [La Tienda](https://latienda.com.ar/)
- 🎧 [PC Midi Center](https://www.pcmidi.com.ar/)
- 🔈 [120db](https://120db.com.ar/)
- 🎼 [Daiam Música](https://daiammusica.com.ar/)
- 🎷 [Swan Music](https://www.swanmusic.com.ar/)

> Se eligieron estas páginas porque reúnen varias de las características que quiero implementar en mi proyecto: buena organización de secciones, claridad en la información y propuestas visuales atractivas. Algunas destacan por la calidad de sus imágenes y el nivel de detalle en las fichas de producto, mientras que otras sobresalen por la agilidad en las búsquedas y filtros.

---
<div align="center">
  <i>Desarrollado con pasión por la música y la tecnología 🎵💻</i>
</div>
