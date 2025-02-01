import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Article } from "../../../globa/models/article";
import { createReducer, on } from "@ngrx/store";
import { onArticlesLoaded } from "../actions";

export interface ArticleState extends EntityState<Article> {
    articleLoaded: boolean,
}

export const articleAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id
});

export const initialArticleState = articleAdapter.getInitialState({
    articleLoaded: false
})

export const articleReducer = createReducer(
    initialArticleState,
    on(onArticlesLoaded, (state, {articles}) => articleAdapter.setAll(
        articles, {...state, articleLoaded: true})),
)

export const articleSelector = articleAdapter.getSelectors()