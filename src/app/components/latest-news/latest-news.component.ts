import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss'
})
export class LatestNewsComponent implements OnInit {
  latestNews: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.loadLatestNews();
  }

  loadLatestNews(): void {
    this.newsService.getLatestNews(5).subscribe(news => {
      this.latestNews = news;
    });
  }
}
