import { createFeatureSelector, createSelector } from "@ngrx/store";
import { articleSelector, ArticleState } from "../reducers";

export const selectArticleState = createFeatureSelector<ArticleState>("articles");

export const selectAllArticles = createSelector(
    selectArticleState,
   articleSelector.selectAll
)

export const areArticlesLoaded = createSelector(
    selectArticleState,
    state => state.articleLoaded
)

