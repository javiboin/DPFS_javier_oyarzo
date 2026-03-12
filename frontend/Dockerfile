# 1. Usamos una imagen ligera de Node.js
FROM node:iron-slim
# 2. Creamos el directorio de trabajo dentro del contenedor
WORKDIR /app
# 3. Copiamos los archivos de dependencias primero para aprovechar el caché de capas
COPY package*.json ./
# 4. Instalamos las dependencias
RUN npm install
# 5. Copiamos el resto del código de la aplicación
COPY . .
# 6. Exponemos el puerto en el que corre Vite
EXPOSE 5173
# 7. Definir el Host de Vite para acceder desde fuera del contenedor
ENV VITE_HOST=0.0.0.0
ENV VITE_SERVER_HOST=0.0.0.0
# 8. Definimos el comando para arrancar la app
CMD ["npm", "run", "dev"]