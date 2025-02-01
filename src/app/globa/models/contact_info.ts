import { PhoneNumber } from "./phone_number";

export interface ConatctInfo {
    id: number
    address: string
    mail: string
    website: string
    socialMedia: string[]
    phones: PhoneNumber[]
    correspondenceAddress: string
}