import { createReducer, on } from "@ngrx/store";
import { ConatctInfo } from "../../../globa/models/contact_info";
import { createEntityAdapter, EntityState } from '@ngrx/entity'
import { onContactInfoLoaded } from "../actions";

export interface ContactInfoState extends EntityState<ConatctInfo> {
    contactInfoLoaded: boolean,
}

export const contactInfoAdapter = createEntityAdapter<ConatctInfo>({
    selectId: (contactInfo: ConatctInfo) => contactInfo.id
});

export const initialContactInfoState = contactInfoAdapter.getInitialState({
    contactInfoLoaded: false
})

export const contactInfoReducer = createReducer(
    initialContactInfoState,
    on(onContactInfoLoaded, (state, {concatInfo}) => contactInfoAdapter.addOne(
        concatInfo, {...state, contactInfoLoaded: true})),
)


export const contactInfoSelectors = contactInfoAdapter.getSelectors();
