import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ContactInfoState, contactInfoSelectors } from "../reducers";

export const selectContactInfoState = createFeatureSelector<ContactInfoState>("contactInfo");

export const selectContactAllInfo = createSelector(
    selectContactInfoState,
   contactInfoSelectors.selectAll
)

export const selectInformation = createSelector(
    selectContactAllInfo,
    info => info[0]
)

export const areConatctInfoLoaded = createSelector(
    selectContactInfoState,
    state => state.contactInfoLoaded
)

