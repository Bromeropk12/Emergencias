# Sistema de Activación de Línea de Emergencia

Una aplicación web moderna que presenta el protocolo integral de atención en eventos de salud con coordinación profesional especializada.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Animaciones Fluidas**: Transiciones suaves y rápidas con Framer Motion
- **Interfaz Moderna**: Diseño limpio con gradientes y efectos visuales
- **Performance Optimizada**: Carga rápida y experiencia fluida

## 🛠️ Tecnologías

- **Next.js 14**: Framework de React para producción
- **TypeScript**: Tipado estático para mejor desarrollo
- **Tailwind CSS**: Framework de CSS utilitario
- **Framer Motion**: Librería de animaciones para React
- **Lucide React**: Iconos modernos y optimizados

## 📦 Instalación

\`\`\`bash
# Clonar el repositorio
git clone <repository-url>

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
\`\`\`

## 🚀 Deploy en Vercel

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. Haz deploy con un click

O usando Vercel CLI:

\`\`\`bash
npm i -g vercel
vercel --prod
\`\`\`

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## ⚡ Performance

- Animaciones optimizadas (60fps)
- Lazy loading de componentes
- Imágenes optimizadas
- CSS minificado
- JavaScript optimizado

## 🎨 Características de Diseño

- Gradientes modernos
- Efectos de hover suaves
- Animaciones de entrada rápidas
- Transiciones fluidas
- Efectos de partículas optimizados

## 📄 Licencia

© 2024 Sistema de Activación de Línea de Emergencia
\`\`\`

```gitignore file=".gitignore"
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
