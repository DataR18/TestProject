import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";

import * as Actions from "../actions";
import { finalize, first, tap } from "rxjs";


export const articlesResolver: ResolveFn<any> = (route, state) => {


    let loadding = false
    const store = inject(Store<AppState>)

    return store.pipe(
        tap(() => {
            if(!loadding) {
                loadding = true
                store.dispatch(Actions.loadArticles())
            }
        }),
        first(),
        finalize(() => loadding = false)
    )
}