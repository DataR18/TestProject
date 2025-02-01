import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { AppState } from "../app.state";
import * as Actions from "../actions";

import { filter, finalize, first, tap } from "rxjs";
import { areConatctInfoLoaded } from "../selectors/conatctinfo.selector";

export const conatctInfoResolver: ResolveFn<any> = (route, state) => {

    let loadding = false
    const store = inject(Store<AppState>)

    return store.pipe(
        select(areConatctInfoLoaded),
        tap(contactInfoLoaded => {
            if(!loadding && !contactInfoLoaded) {
                loadding = true
                store.dispatch(Actions.loadContactInfo())
            }
        }),
        filter(contactInfoLoaded => contactInfoLoaded),
        first(),
        finalize(() => loadding = false)
        
    )
}