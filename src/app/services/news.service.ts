import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private mockNews: News[] = [
    {
      id: 1,
      title: 'Angular 17 lanza nueva actualización',
      summary: 'Nueva versión con importantes mejoras de rendimiento',
      content: 'Angular 17 ha sido lanzado con importantes mejoras en el rendimiento y nuevas características que facilitan el desarrollo.',
      author: 'María González',
      publishDate: new Date('2023-11-15'),
      imageUrl: 'assets/images/angular17.jpg',
      category: 'Tecnología',
      tags: ['Angular', 'Desarrollo Web', 'Framework'],
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: 'Avances en Inteligencia Artificial transforman la industria',
      summary: 'Nuevos modelos de IA están cambiando múltiples sectores',
      content: 'Los últimos avances en inteligencia artificial están transformando rápidamente diversos sectores industriales, desde la medicina hasta la manufactura.',
      author: 'Carlos Ramírez',
      publishDate: new Date('2023-11-10'),
      imageUrl: 'assets/images/ai-news.jpg',
      category: 'Tecnología',
      tags: ['IA', 'Tecnología', 'Innovación'],
      views: 890,
      featured: true
    },
    {
      id: 3,
      title: 'Tendencias de desarrollo web para 2024',
      summary: 'Las tecnologías que dominarán el próximo año',
      content: 'Expertos predicen que estas serán las tendencias tecnológicas más importantes en desarrollo web para el próximo año.',
      author: 'Laura Sánchez',
      publishDate: new Date('2023-11-05'),
      imageUrl: 'assets/images/web-trends.jpg',
      category: 'Desarrollo',
      tags: ['Web', 'Tendencias', 'Desarrollo'],
      views: 750,
      featured: false
    }
  ];

  constructor(private http: HttpClient) { }

  // En un escenario real, estos métodos se conectarían a una API
  getAllNews(): Observable<News[]> {
    return of(this.mockNews);
  }

  getNewsById(id: number): Observable<News | undefined> {
    const news = this.mockNews.find(item => item.id === id);
    return of(news);
  }

  getLatestNews(count: number = 5): Observable<News[]> {
    return of(this.mockNews
      .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime())
      .slice(0, count));
  }

  getFeaturedNews(): Observable<News[]> {
    return of(this.mockNews.filter(news => news.featured));
  }

  getNewsByCategory(category: string): Observable<News[]> {
    return of(this.mockNews.filter(news => news.category === category));
  }
}
