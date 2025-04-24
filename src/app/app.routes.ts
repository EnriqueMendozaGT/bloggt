import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'noticias', component: NewsListComponent },
  { path: 'noticias/:id', component: NewsDetailComponent },
  { path: 'ultimas-noticias', component: LatestNewsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
