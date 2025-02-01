import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as contactInfoActions from '../actions'
import { ContactInfoService } from "../../services/contact-info.service";
import { mergeMap, map } from "rxjs";

@Injectable()
export class ConatctInfoEffects {

    private actions$ = inject(Actions);
    private contactInfoService = inject(ContactInfoService)

    findConatcInfo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(contactInfoActions.loadContactInfo),
                     mergeMap(() => this.contactInfoService.getConatctInfo()),
                    map(info => contactInfoActions.onContactInfoLoaded({concatInfo: info}))
            
        )
    });
}