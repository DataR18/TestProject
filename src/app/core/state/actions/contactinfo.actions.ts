import { createAction, props } from "@ngrx/store";
import { ConatctInfo } from "../../../globa/models/contact_info";

export const loadContactInfo = createAction(
    '[Load Resolver Info] load contact info'
)

export const onContactInfoLoaded = createAction(
    '[Load Contact Info effect] contact info loaded',
    props<{ concatInfo: ConatctInfo }>()
)


