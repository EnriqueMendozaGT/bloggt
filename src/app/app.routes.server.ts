import { RenderMode, ServerRoute } from '@angular/ssr';
import { routes } from './app.routes';

// Mapear todas las rutas estáticas para prerender
export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'noticias',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'ultimas-noticias',
    renderMode: RenderMode.Prerender,
  },
  {
    // Para rutas con parámetros usamos renderizado en el cliente
    path: 'noticias/:id',
    renderMode: RenderMode.Client,
  },
  {
    // Ruta por defecto
    path: '**',
    renderMode: RenderMode.Client,
  }
];
