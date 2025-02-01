import { Component, inject, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Article } from '../../../globa/models/article';
import { ArticleService } from '../../../core/services/article.service';
import { CommonModule } from '@angular/common';
import { AppState } from '../../../core/state/app.state';
import { select, Store } from '@ngrx/store';
import { selectAllArticles } from '../../../core/state/selectors/article.selector';

@Component({
  selector: 'app-articles',
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit {

  store = inject(Store<AppState>)
  articles$ = this.store.pipe(select(selectAllArticles));

  ngOnInit(): void {
  }


}
