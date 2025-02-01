import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../globa/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private http = inject(HttpClient);

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('/data/articulos.json')
  }
}
