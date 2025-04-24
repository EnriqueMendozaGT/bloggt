import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LatestNewsComponent } from '../latest-news/latest-news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    LatestNewsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  featuredNews: News[] = [];
  latestNews: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadFeaturedNews();
    this.loadLatestNews();
  }

  loadFeaturedNews(): void {
    this.newsService.getFeaturedNews().subscribe(news => {
      this.featuredNews = news;
    });
  }

  loadLatestNews(): void {
    this.newsService.getLatestNews(3).subscribe(news => {
      this.latestNews = news;
    });
  }
}
