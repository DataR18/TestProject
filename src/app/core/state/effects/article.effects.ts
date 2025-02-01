import { inject, Injectable } from "@angular/core";
import { ArticleService } from "../../services/article.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as actions from '../actions'
import { map, mergeMap } from "rxjs";

@Injectable()
export class ArticleEffects {

    private actions$ = inject(Actions);
    private articleService = inject(ArticleService)


    findAllArticles$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(actions.loadArticles),
            mergeMap(() => this.articleService.getArticles()),
            map(articles => actions.onArticlesLoaded({articles: articles}))

        )
    })
}