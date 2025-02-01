import { ActionReducerMap } from "@ngrx/store";
import { ContactInfoState } from "./reducers/contactinfo.reducer";
import { ArticleState } from "./reducers/article.reducer";
import * as AppReducer from '../state/reducers'

export interface AppState {
    contactInfo: ContactInfoState,
    articles: ArticleState
}

export const appReducers: ActionReducerMap<AppState> = {
    contactInfo: AppReducer.contactInfoReducer,
    articles: AppReducer.articleReducer
}
