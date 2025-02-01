import { createAction, props } from "@ngrx/store"
import { Article } from "../../../globa/models/article"

export const loadArticles = createAction(
    '[Load Resolver Articles] load articles info'
)

export const onArticlesLoaded = createAction(
    '[Load Contact Articles effect] Articles loaded',
    props<{ articles: Article[] }>()
)

