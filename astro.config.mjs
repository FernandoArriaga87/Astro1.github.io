// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Importa la integración de Tailwind

export default defineConfig({
  integrations: [tailwind()], // Integra Tailwind CSS
  site: 'https://fernandoarriaga87.github.io/Astro1.github.io/', // Configura la URL base
  outDir: './docs', // Carpeta de salida para los archivos de producción
  base: '/Astro1.github.io/', // Ruta base (si tu repositorio no está en la raíz)
});